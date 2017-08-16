import { FilterBuilderCtrl as controller } from "./filter-builder.controller.js";

export const FilterBuilderDirective = () => {
	return {
		restrict: 'E',
		template: `<form novalidate
								ng-submit="$event.preventDefault()"
								layout="column"
								layout-align="start center"
								flex="grow"
								ng-transclude>
							</form>`,
		require: {
			$ngModel: 'ngModel'
		},
		transclude: true,
		bindToController: true,
		controller
	};
}
