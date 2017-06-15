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

    this._mapInstance = null;
  }

  getMap() {
    return (async () => {
      if (this._mapInstance) {
        return this._mapInstance;
      } else {
        const google = await this.getGoogle();
        const mapInstance = this.$document[0].getElementById('map-instance');
        this._mapInstance = new google.maps.Map(mapInstance);
        return this._mapInstance;
      }
    })();
  }

  getGoogle() {
    const deferred = this.$q.defer();

    if (window.google) {
      deferred.resolve(window.google);
    } else {
      const head = this.$document.find('head')[0];
      window.gmapCallback = () => {
        console.log('GMAP LOADED!', window.google);
        deferred.resolve(window.google);
      }
      let s;
      s = document.createElement('script');
      s.src = `${this.apiUrl}?key=${this.apiKey}&callback=gmapCallback`;
      // s.onload = resolve;
      s.onerror = deferred.reject;
      head.appendChild(s);
    }
    return deferred.promise;
  }
}
