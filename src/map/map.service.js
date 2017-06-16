export class CampusMapService {
  static get $inject() {
    return ['$document', '$q', 'MAP_DEFAULTS'];
  }

  constructor($document, $q, MAP_DEFAULTS) {
    this.$document = $document;
    this.$q = $q;
    this.MAP_DEFAULTS = MAP_DEFAULTS;

    this._mapInstance = null;
  }

  getGoogle() {
    return new Promise((resolve, reject) => {
      if (window.google) {
        resolve(window.google);
      } else {
		   	const { API_URL, API_KEY } = this.MAP_DEFAULTS;
        window.gmapCallback = () => resolve(window.google);
        const script = document.createElement('script');
        script.src = `${API_URL}?key=${API_KEY}&callback=gmapCallback`;
        script.onerror = reject;
        this.$document.find('head')[0].appendChild(script);
      }
    });
  }

  async getMap() {
    if (this._mapInstance) {
      return this._mapInstance;
    } else {
      const google = await this.getGoogle();
      const mapOptions = {
        center: await this.newLatLng({ lat: 43.9443802, lng: -78.8975857 }),
        zoom: 17,
        styles: this.MAP_DEFAULTS.mapStyles,
        // mapTypeId: this.mapType,
        disableDefaultUI: true,
        tilt: 45,
        heading: 0
      }
      const mapInstance = this.$document[0].getElementById('map-instance');
      this._mapInstance = new google.maps.Map(mapInstance, mapOptions);
      return this._mapInstance;
    }
  }

  async newLatLng(coords) {
    const google = await this.getGoogle();
    const latLng = new google.maps.LatLng(coords)
    return latLng;
  }

  async addData(collection) {
    const instance = await this.getMap();
		instance.data.addGeoJson(collection);
		await this.fitBounds(instance);
  }

	/**
	 * Direct port of Google Maps `processBounds` example function
	 * for recalculation of map boundaries based on map data.
	 * @param  {Object}   geometry LatLng geometry object
	 * @param  {Function} callback Recursion callback
	 * @param  {*}   			thisArg  Context for `this`
	 */
	async processBounds(geometry, callback, thisArg) {
    const google = await this.getGoogle();
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

	/**
	 * Resizes map view to fit recalculated bounds.
	 */
	async fitBounds(instance) {
    const google = await this.getGoogle();
	  const bounds = new google.maps.LatLngBounds();
	  await instance.data.forEach(feature => {
	    this.processBounds(feature.getGeometry(), bounds.extend, bounds);
	  });
	  instance.fitBounds(bounds);
	}
}
