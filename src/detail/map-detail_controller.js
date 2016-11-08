class MapDetailCtrl {
	static get $inject() {
		return ['$sce'];
	}
	constructor($sce) {
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
	close() {
		this.mdPanelRef.close();
	}
}

export default MapDetailCtrl;