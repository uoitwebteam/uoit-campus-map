class MapDetailCtrl {
	static get $inject() {
		return ['$sce', '$state'];
	}
	constructor($sce, $state) {
		this.$state = $state;
  	if (this.feature.getProperty('linked')) {
  		this.building = this.feature.getProperty('building');

  		this.name = this.building.name;
  		this.description = $sce.trustAsHtml(this.building.desc);
  	} else {
  		this.name = this.feature.getProperty('name');
  		this.description = $sce.trustAsHtml(this.feature.getProperty('desc'));
  	}
		this.detailsShowing = false;
  }
	showDetails() {
		this.detailsShowing = !this.detailsShowing;
	}
	goToBldg(callback) {
		this.mdPanelRef.close();
		const { location, building } = this;
		// callback({
		// 	location: this.location.code,
		// 	building: this.building.code
		// });
		this.$state.go('building', {
			location: this.location.code,
			building: this.building.code
		});
	}
	close() {
		this.mdPanelRef.close();
	}
}

export default MapDetailCtrl;