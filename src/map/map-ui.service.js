export class CampusMapUiService {
  static get $inject() {
    return ['$timeout', '$mdToast', '$campusMap', 'MAP_DEFAULTS'];
  }

  constructor($timeout, $mdToast, $campusMap, MAP_DEFAULTS) {
    this.$timeout = $timeout;
    this.$mdToast = $mdToast;
    this.$campusMap = $campusMap;

    /**
     * Helper factory object for deploying simple toasts.
     * @type {Object}
     */
    this.toast = $mdToast.simple();
    /**
     * Token to hold a toast's `$timeout`.
     * @type {null|Promise}
     */
    this.toastCanceler = null;
    /**
     * Flag to determine whether there is already an active toast.
     * @type {Boolean}
     */
    this.toastActive = false;

    this.geometryStyles = MAP_DEFAULTS.geometryStyles;
    this.hoverStyles = MAP_DEFAULTS.hoverStyles;
    this.iconStyles = MAP_DEFAULTS.iconStyles;

    this.categories = {};
  }

  async addCategory(_category) {
    const google = await this.$campusMap.getGoogle();
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
    const google = await this.$campusMap.getGoogle();
  	const instance = await this.$campusMap.getMap();
		instance.data.setStyle(
			feature => Object.assign(
		    {},
		    this.geometryStyles,
		    { icon: this.iconStyles, title: feature.getProperty('name') },
				this.categories[feature.getProperty('category')]
			)
		);
  	/*
  		This is a stupid hack that makes the map fill space by force.
  		Best not used whenever possible; this isn't one of those times.
  	 */
    // angular.element(this._$window).triggerHandler('resize');
    google.maps.event.trigger(instance, 'resize');
  }

  async setFeatureStyle(feature) {
  	const instance = await this.$campusMap.getMap();
    instance.data.overrideStyle(feature, this.hoverStyles);
  }

  async resetFeatureStyles() {
  	const instance = await this.$campusMap.getMap();
		instance.data.revertStyle();
  }

	/**
	 * Shows a simple toast notification containing the name of the 
	 * feature being hovered over. If there is already a toast active,
	 * it updates the name in the toast instead of making a new one.
	 * 
	 * @param  {Object} feature The feature being hovered over
	 */
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
			});
		}
	}

	/**
	 * Hides the toast notification after 3 seconds, but provides
	 * a way to cancel the 3 seconds (`toastCanceler`).
	 *
	 * It is meant to be called on mouseout, so that the toast will
	 * remain on screen for a few seconds, and only disappear if
	 * another isn't needed within those seconds.
	 * 
	 * @return {Promise} Resolves to completed timeout
	 */
	hideToast() {
		this.toastCanceler = this.$timeout( () => {
			this.$mdToast.hide(this.toast);
			this.toastActive = false;
	  }, 3000);
	}
}
