/**
 * The `MapControlsCtrl` provides an interface between the map component
 * and the map control filter dropdowns.
 * 
 * It is not responsible for much actual map logic, but instead for
 * accepting user input and turning it into queries whose results
 * are assigned back to the controller. The `MapCtrl` takes care of
 * turning the returned values into map-usable data, whereas this controller
 * simply makes it available.
 *
 * The controller is made up of:
 * - constructor
 * - 3 methods for loading query results (location, category, collection)
 * - 3 methods for updating dropdown contents
 * - utility methods for setting active collection and showing all collections
 */
class MapControlsCtrl {
  static get $inject(){
    return ['$mapApi', '$tourApi'];
  }

  /**
   * Initialize controller dependencies.
   * 
   * @param  {Object} $mapApi  Map $resource service
   * @param  {Object} $tourApi Tour $resource service
   * @param  {Object} $window  Angular's window wrapper
   */
  constructor($mapApi, $tourApi) {
    this._FeatureResource = $mapApi.feature;
    this._CollectionResource = $mapApi.collection;
    this._CategoryResource = $mapApi.category;
    this._LocationResource = $tourApi.location;

    /**
     * Holds the user's selected location (by ID).
     * @type {String}
     */
    this.location = '';
    /**
     * Holds the user's selected categories (by ID).
     * @type {Array}
     */
    this.category = [];
    /**
     * Holds the user's selected feature collections (by ID).
     * @type {Array}
     */
    this.collection = [];
  }

  /**
   * Initialize the controls (show all map elements)
   */
  $onInit() {
    this.loadLocations()
      .then(locations => {
        this.location = locations[1]._id;
        return this.loadCategories();
      })
      .then(categories => {
        this.category = [...categories.map(category => category._id)];
        return this.loadCollections();
      })
      .then(collections => {
        this.collection = [...collections.map(collection => collection._id)];
        return this.loadFeatures(this.filter);
      });
  }

  /**
   * Load location list from server.
   * 
   * @return {Promise} Resolves to list of locations
   */
  loadLocations() {
    return this.locations || this._LocationResource.query().$promise
      .then(locations => {
        this.locations = locations;
        return locations;
      });
  }

  /**
   * Load category list from server.
   * 
   * @return {Promise} Resolves to list of categories
   */
  loadCategories() {
    return this.categories || this._CategoryResource.query().$promise
      .then(categories => {
        this.categories = categories;
        return categories;
      });
  }

  /**
   * Load collection list from server using the `_id` of the currently
   * selected category and location (extracted directly from the
   * controller / `this`) to filter by.
   *
   * @todo Update this doc to describe array of categories
   * 
   * @return {Promise} Resolves to list of collections
   */
  loadCollections() {
    return this._CollectionResource.query({
      filter: {
        location: this.location,
        category: {
          $in: [...this.category]
        }
      }
    }).$promise
      .then(collections => {
        this.collections = collections;
        return collections;
      });
  }

  /**
   * Load feature list from server using the `_id`s of the currently
   * selected categories to filter by.
   *
   * @todo Update this doc to describe array of categories
   * 
   * @return {Promise} Resolves to list of collections
   */
  loadFeatures(filter) {
    return this._FeatureResource.query({ filter }).$promise
      .then(features => {
        this.features = features;
        return features;
      })
      .then(features => {
        return this.setMapData({
          location: this.locations.find(location => location._id === this.location),
          category: this.getItemsInListByProp(this.category, this.categories, '_id'),
          collection: {
            type: 'FeatureCollection',
            features
          }
        });
      });
  }

  /**
   * Sends current data to view for rendering in selection dropdowns.
   *
   * In order for the map to properly render the selected collection, the
   * `options.collection` param passed to this method must at least _look_
   * like a valid `FeatureCollection` (i.e. it can be a "true" collection,
   * or an object with a `type` property of `FeatureCollection` and a `features`
   * property containing an array of `Feature` objects).
   *
   * In the example, both scenarios are demonstrated – the `location` and
   * `category` properties are left out for brevity, but `location` is
   * required in order for features to properly direct to tour scenes.
   *
   * @example
   * // "true" collection
   * const collection = this._CollectionResource.get('collectionId');
   * this.setMapData({ collection });
   * 
   * // "mock" collection
   * const features = this._FeatureResource.query();
   * this.setMapData({
   *   collection: {
   *     type: 'FeatureCollection',
   *     features
   *   }
   * });
   * 
   * @param {Object}  resources
   * @param {Object}  resources.location    Currently selected location `$resource`
   * @param {Object}  resources.category    Currently selected category `$resource`
   * @param {Object}  resources.collection  Currently selected collection `$resource`
   */
  setMapData({ location, category, collection }) {
    this.$ngModel.$setViewValue({
      location,
      category,
      collection
    });
  }

  /**
   * Filter an array for matches in another array by a property;
   * return the matched items.
   * 
   * @param  {Array}  items Items to match with
   * @param  {Array}  list  List to match from
   * @param  {String} prop  Property to match against
   * @return {Array}        List of filtered items
   */
  getItemsInListByProp(items, list, prop) {
    return list && [...list].filter(item => {
      return [...items].indexOf(item[prop]) !== -1;
    });
  }

  /**
   * Find a specific array item and remove it from the array.
   * 
   * @param  {*}     item The item to remove
   * @param  {Array} list The list to remove from
   */
  removeItemFromList(item, list) {
    const index = [...list].indexOf(item);
    console.log(item, list, index);
    (index > -1) && list.splice(index, 1);
  }

  /**
   * Checks whether the number of selected items is more than zero but
   * less than the total of available items (sets checkbox inputs to "indeterminate").
   * 
   * @param  {String}  selected Name of property that holds selected items
   * @param  {String}  items    Name of property that holds all items
   * @return {Boolean}          Whether checkbox should be indeterminate
   */
  isIndeterminate(selected, items) {
    return (this[selected] && this[items]) && (this[selected].length !== 0 &&
        this[selected].length !== this[items].length);
  }

  /**
   * Utility function for determining whether all items are selected (set
   * 'select all' checkbox to checked if so).
   * 
   * @param  {String}  selected Name of property that holds selected items
   * @param  {String}  items    Name of property that holds all items
   * @return {Boolean}          Whether checkbox should be checked
   */
  isChecked(selected, items) {
    return (this[selected] && this[items]) && (this[selected].length === this[items].length);
  }

  /**
   * Utility function for or selecting or deselecting all items (set all
   * item checkboxes to checked/unchecked).
   * 
   * @param  {String}  selected Name of property that holds selected items
   * @param  {String}  items    Name of property that holds all items
   */
  toggleAll(selected, items) {
    if (this[selected].length === this[items].length) {
      console.log('deselected all');
      this[selected] = [];
    } else if (this[selected].length >= 0) {
      console.log('selected all');
      this[selected] = [...this[items].map(item => item._id || item.id)];
    }
  }
}

export default MapControlsCtrl;