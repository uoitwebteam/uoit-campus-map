import { FilterBuilderCtrl as controller } from "./filter-builder.controller.js";

export const FilterBuilderComponent = {
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
	controller
};
