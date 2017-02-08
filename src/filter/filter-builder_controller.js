import isArray from "lodash.isarray";

/**
 * The FilterBuilderCtrl class provides a controller for the
 * `<filter-builder>` directive; it contains logic for extracting
 * and combining the `ng-model` of any number of arbitrary
 * transcluded inputs inside it.
 *
 * The values of its transcluded inputs are converted to a unified
 * query filter object (MongoDB/Mongoose-style in this case).
 *
 * Unlike the `<filter-controls>` component, this directive does not
 * make any server calls or deal otherwise with with the actual map
 * data – it is purely responsible for providing the filter to make
 * the server calls with.
 * 
 * @todo
 * Determine if $watch by string reference is more performant
 * than $watchCollection on parts array (fn that calls setViewValue)
 */
class FilterBuilderCtrl {
  static get $inject() {
    return ['$scope', '$parse'];
  }
  constructor($scope, $parse) {
    this.$scope = $scope;
    this.$parse = $parse;
    this.parts = {};
  }
  $onInit() {
    /**
     * @memberof FilterBuilderCtrl
     * Removes null and undefined values from a given array.
     * 
     * @example
     * // turns these...
     * ['', 0, false, null, null]
     * [null, null]
     * 
     * // ..into these:
     * ['', 0, false]
     * []
     * 
     * @param  {Array} array The array to remove nulls from
     * @return {Array}       A null-free array
     */
    const removeNulls = array => array.filter(v => v != null);
    /**
     * @memberof FilterBuilderCtrl
     * Gets the `$viewValue` of each child input from the controller's
     * `parts` collection and returns them in a newly-mapped array
     * for efficient `$watchCollection`ing.
     * 
     * @return {Array} Array of $viewValues
     */
    const getViewValue = () => Object.keys(this.parts).map(key => {
      return this.parts[key].$viewValue;
    });

    /**
     * @memberof FilterBuilderCtrl
     * Sets the `$viewValue` of this directive's ng-model based on
     * the `$watch` results of `getViewValue()`. Since the value needs
     * to be bound by reference, the original `parts` collection is used
     * instead of the `$watch`'s copy value.
     *
     * If the value is an array, it is wrapped in a MongoDB `{ $in: {...} }`
     * and assigned to a property keyed by the input's `name` attribute; if
     * it is a primitive it is assigned without wrapping.
     *
     * Before `setViewValue()` is called to fire off the parser pipeline,
     * the final value is run through `removeNulls()` to cleanse it of
     * `null` and `undefined` values.
     */
    const setViewValue = () => {
      const newViewValue = Object.keys(this.parts).map(key => {
        const { $name: name, $viewValue: viewValue } = this.parts[key];

        return (viewValue && isArray(viewValue)) ?
          viewValue.length ? 
            { [name]: { $in: viewValue } } :
            null :
          viewValue ?
            { [name]: viewValue } :
            null;
      });

      this.$ngModel.$setViewValue(removeNulls(newViewValue));
    }
    this.$scope.$watchCollection(getViewValue, setViewValue);
    // this.$scope.$watch(
    //  () => Object.keys(this.parts).map(key => {
    //    const { $viewValue } = this.parts[key];
    //    return _.isArray($viewValue) ? $viewValue.join('') : $viewValue;
    //  }).join(''),
    //  setViewValue
    // );
    
    /**
     * @memberof FilterBuilderCtrl
     * The `builderParser` is pushed onto the model's `$parsers` pipeline;
     * it is responsible for determining how many values are being set on
     * the view. If the view has...
     * - _no values_, return an empty object
     * - _one value_, return that value
     * - _more than one value_, return them wrapped in `{ $and: [...] }`
     * 
     * @param  {Array} viewValue Incoming data from setViewValue
     * @return {Object}          Final filter formatted for view
     */
    const builderParser = viewValue => {
      console.log('builder parser (view » model)', viewValue)
      if (!viewValue.length) return {};
      if (viewValue.length === 1) return viewValue[0];
      if (viewValue.length > 1) return { $and: viewValue };
    }
    this.$ngModel.$parsers.push(builderParser);
    
    /**
     * @memberof FilterBuilderCtrl
     * The `filterFormatter` is pushed onto the model's `$formatters` pipeline;
     * it is responsible for delegating incoming scope values (set by user)
     * to their respective input elements' scopes.
     *
     * The function needs to:
     * - determine which scope models are available to set
     * - disregard incoming values with no matching input element by building an
     * array of models with a matching value
     *   - `[{ modelName: '$ctrl.modelName', modelValue: '...' }, {...}]`
     * - for each available model with a matching value:
     *   - use Angular's `$parse` service to generate a getter/setter for the
     *   model's scope reference
     *   - use the provided setter to set the scope reference, therefore updating
     *   the child input elements
     * 
     * @param  {Object} modelValue Map of values by name to set on child scopes
     */
    const filterFormatter = modelValue => {
      if (modelValue) {
        const modelsToSet = Object.keys(this.parts).map(key => {
          return modelValue[this.parts[key].$name] && {
            modelName: key,
            modelValue: modelValue[this.parts[key].$name] }; 
        });
        modelsToSet.forEach(newModel => {
          const getModel = this.$parse(newModel.modelName),
                setModel = getModel.assign;
          setModel(this.$scope, newModel.modelValue)
        });
        console.log(`formatter set input to`, modelsToSet);
      }
    }
    this.$ngModel.$formatters.push(filterFormatter);
  }
}

export default FilterBuilderCtrl;