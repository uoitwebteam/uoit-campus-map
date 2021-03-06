import isArray from "lodash.isarray";

function getFilter(filterName) {
  return (this.$viewValue && isArray(this.$viewValue)) ?
    this.$viewValue.length ? 
      { [this.$name]: { $in: this.$viewValue } } :
      null :
    this.$viewValue ?
      { [this.$name]: this.$viewValue } :
      null;
}

export const FilterInputDirective = ['$parse', ($parse) => {
	return {
		restrict: 'A',
		require: {
			NgModelCtrl: 'ngModel',
			FilterBuilderCtrl: '^filterBuilder'
		},
		link(scope, el, attrs, ctrl) {
			if (!attrs.name) throw new Error('A filter control is missing its \'name\' attribute!');
			const { NgModelCtrl, FilterBuilderCtrl } = ctrl;
			NgModelCtrl.getFilter = getFilter;
			if (attrs.filterInput) {
				$parse(attrs.filterInput).assign(scope, () => NgModelCtrl.getFilter());
			}
			FilterBuilderCtrl.parts[attrs.ngModel] = NgModelCtrl;
		}
	};
}];
