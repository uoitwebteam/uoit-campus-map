export class CampusMapService {
  static get $inject() {
    return ['$document', '$q', 'MAP_DEFAULTS'];
  }

  constructor($document, $q, MAP_DEFAULTS) {
    this.$document = $document;
    this.$q = $q;

    const { API_URL, API_KEY } = MAP_DEFAULTS;
    this.apiUrl = API_URL;
    this.apiKey = API_KEY;

    this.geometryStyles = MAP_DEFAULTS.geometryStyles;
    this.iconStyles = MAP_DEFAULTS.iconStyles;
    this.mapStyles = MAP_DEFAULTS.mapStyles;
    this.mapType = MAP_DEFAULTS.mapType;

    this._mapInstance = null;
    this.categories = {};
  }

  getGoogle() {
    return new Promise((resolve, reject) => {
      if (window.google) {
        resolve(window.google);
      } else {
        window.gmapCallback = () => {
          console.log('GMAP LOADED!', window.google);
          resolve(window.google);
        }
        const script = document.createElement('script');
        script.src = `${this.apiUrl}?key=${this.apiKey}&callback=gmapCallback`;
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
        styles: this.mapStyles,
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

  async addCategory(_category) {
    const google = await this.getGoogle();
  	const category = Object.assign({}, _category)
		const {
			icon: {
				anchor: { left, top },
				size: { width, height }
			}
		} = _category;
		category.icon.anchor = new google.maps.Point(left, top);
		category.icon.size = new google.maps.Point(width, height);
		this.categories[_category._id] = category;
		console.log('Category added to CampusMapService:', category);
  }

  async updateStyles() {
  	const instance = await this.getMap();
  	  instance.data.setStyle(
  	  	feature => Object.assign(
  	      {},
  	      this.geometryStyles,
  	      { icon: this.iconStyles, title: feature.getProperty('name') },
      		this.categories[feature.getProperty('category')]
      	)
  	  );
  }
}
