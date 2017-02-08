function filterInput() {
	return {
		restrict: 'A',
		require: {
			NgModelCtrl: 'ngModel',
			FilterBuilderCtrl: '^filterBuilder'
		},
		link: function FilterInputLink(scope, el, attrs, ctrl) {
			if (!attrs.name) throw new Error('A filter control is missing its \'name\' attribute!');
			const { NgModelCtrl, FilterBuilderCtrl } = ctrl;
			FilterBuilderCtrl.parts[attrs.ngModel] = NgModelCtrl;
		}
	};
}

export default filterInput;