export class AppController {
	constructor() {
  }

  $onInit() {
	}

	$onChanges({ mapData }) {
		console.log('[app.controller] $onChanges');
		if (mapData.isFirstChange()) return;
		this.updateMapData(mapData);
	}

	onControlChanged(data) {
		console.log('[app.controller] onControlChanged');
		this.updateMapData(data);
	}

	updateMapData(data) {
		this.mapData = data;
	}
	
	onGotoBldg(data) {
		alert(JSON.stringify(data));
	}
}
