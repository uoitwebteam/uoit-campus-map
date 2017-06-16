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
}
