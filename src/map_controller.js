class MapCtrl {
	static get $inject() {
		return [
			'$timeout', '$scope', // angular core
			'NgMap', // external deps
			'$mdToast', '$mdPanel', // md deps
			'MAP_SETTINGS', 'MAP_ICONS' // constants
		];
	}
	constructor($timeout, $scope, NgMap, $mdToast, $mdPanel, MAP_SETTINGS, MAP_ICONS) {
    
    // init constants
    this.MAP_SETTINGS = MAP_SETTINGS;
    this.MAP_ICONS = MAP_ICONS;

    // attach dependencies
    this.$timeout = $timeout;
    this.$scope = $scope;
    this.$mdToast = $mdToast;
    this.$mdPanel = $mdPanel;

    // init helper vars
    this.getMap = NgMap.getMap;
    this.toast = $mdToast.simple();
    this.toastCanceler = null;
    this.toastActive = false;
  }
  $onInit() {
  	// unwrap promise supplied by ngMap
    this.getMap().then(instance => {
    	// force map to fill entire content (glitch?)
      google.maps.event.trigger(instance, 'resize');

      // set styles of ma
      instance.data.setStyle(feature => {
        var category = feature.getProperty('category');
        switch(category) {
        	case '581a2c57d9ff16e787aa1b20': // Services
        		return { icon: this.MAP_ICONS.SERVICE }
        		break;
        	case '581a2c5ed9ff16e787aa1b21': // Emergency services
        		return { icon: this.MAP_ICONS.AED }
        		break;
        	case '581a2c77d9ff16e787aa1b22': // Restaurants and food courts
        		return { 
        			icon: this.MAP_ICONS.FOOD,
		          fillColor: '#1a875c',
		          fillOpacity: 1,
		          strokeWeight: 3,
		          strokeColor: 'white',
		          strokeOpacity: 0.3
		        }
        		break;
        	case '581a2c8ad9ff16e787aa1b24': // Parking
        		return { 
        			icon: this.MAP_ICONS.PARKING,
		          fillColor: '#1a875c',
		          fillOpacity: 1,
		          strokeWeight: 3,
		          strokeColor: 'white',
		          strokeOpacity: 0.3
		        }
        		break;
      		default: // other
		        return {
		        	icon: this.MAP_ICONS.DEFAULT,
		          fillColor: '#0077CA',
		          fillOpacity: 1,
		          strokeWeight: 3,
		          strokeColor: '#003C71',
		          strokeOpacity: 0.3
		        }
        }
      });

      instance.data.addListener('mouseover', event => {
        instance.data.revertStyle();
        instance.data.overrideStyle(event.feature, {
          fillColor: '#C71566',
          fillOpacity: 0.7,
          strokeWeight: 5,
          strokeColor: 'white',
          strokeOpacity: 0.7
        });
        this.showToast(event.feature);
      });

      instance.data.addListener('mouseout', event => {
        instance.data.revertStyle();
        this.hideToast();
      });

      instance.data.addListener('click', event => {
				let feature = event.feature;
				
				let xy = { clientX: 0, clientY: 0 };
				for (const prop in event) {
					if (event[prop] && event[prop].clientX && event[prop].clientY) {
						xy.clientX = event[prop].clientX;
						xy.clientY = event[prop].clientY;
					}
				}

			  const position = this.$mdPanel.newPanelPosition()
			    .absolute()
			    .top(`${ xy.clientY }px`)
			    .left(`${ xy.clientX }px`);

			  const config = {
			    attachTo: angular.element(document.body),
			    controller: 'MapDetailCtrl',
			    controllerAs: 'ctrl',
			    templateUrl: 'detail/_map-detail.html',
			    hasBackdrop: true,
			    panelClass: 'demo-dialog-example',
			    position: position,
			    locals: {
			    	callback: this.onGotoBldg,
			    	location: this.currentLocation,
			    	feature
			    },
			    trapFocus: true,
			    zIndex: 150,
			    clickOutsideToClose: true,
			    escapeToClose: true,
			    focusOnOpen: true
			  };
			  this.$mdPanel.open(config);
			});

	    this.$scope.$watch( () => this.mapControls, (newVal) => {
	    	this.clearMapData(instance);
	    	this.updateMapData(instance, newVal);
	    	this.currentLocation = newVal.location;
	    });

    });
	}
	showToast(feature) {
		let featureName = feature.getProperty('name');
		if (!this.toastActive) {
			this.toast.textContent(featureName).position('bottom left').hideDelay(0);
			this.$mdToast.show(this.toast);
			this.toastActive = true;
		} else {
			this.$timeout.cancel(this.toastCanceler);
			this.$timeout( () => {
				this.$mdToast.updateTextContent(featureName);
			})
		}
	}
	hideToast() {
		this.toastCanceler = this.$timeout( () => {
			this.$mdToast.hide(this.toast);
			this.toastActive = false;
	  }, 3000);
	}
	clearMapData(instance) {
		instance.data.forEach(feature => {
			instance.data.remove(feature);
		});
	}
	updateMapData(instance, newVal) {
		if (newVal && newVal.showAll) {
      instance.data.addGeoJson(newVal.collection);
		} else {
  		instance.data.loadGeoJson(`http://localhost:3000/api/v1/feature-collections/${newVal.collection._id}`, null, () => {
			  this.fitBounds(instance);
  		});
		}
	}
	processBounds(geometry, callback, thisArg) {
	  if (geometry instanceof google.maps.LatLng) {
	    callback.call(thisArg, geometry);
	  } else if (geometry instanceof google.maps.Data.Point) {
	    callback.call(thisArg, geometry.get());
	  } else {
	    geometry.getArray().forEach(g => {
	      this.processBounds(g, callback, thisArg);
	    });
	  }
	}
	fitBounds(instance) {
	  const bounds = new google.maps.LatLngBounds();
	  instance.data.forEach(feature => {
	    this.processBounds(feature.getGeometry(), bounds.extend, bounds);
	  });
	  instance.fitBounds(bounds);
	}
}

export default MapCtrl;