import FilterBuilderCtrl from "./filter-builder_controller.js";

function filterBuilder() {
	return {
		restrict: 'E',
		template: `<form novalidate ng-submit="$event.preventDefault()" ng-transclude></form>`,
		require: {
			$ngModel: 'ngModel'
		},
		transclude: true,
		bindToController: true,
		controller: FilterBuilderCtrl
	};
}

export default filterBuilder;