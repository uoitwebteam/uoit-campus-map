import { MapDetailCtrl as controller } from './map-detail/map-detail.controller.js';
import template from './map-detail/map-detail.component.html';

/**
 * The `MapCtrl` is the lead orchestrator of the component: it wraps the
 * `NgMap` directive's methods and provides its own for interfacing with
 * the map's controls, generating dialogs, and re-rendering the map elements.
 */
export class MapCtrl {
	static get $inject() {
		return [
			'$timeout', '$scope', '$window', // angular core
			'$campusMap', '$mapInterface', // services
			'$mdToast', '$mdPanel', // md deps
			'MAP_DEFAULTS' // constants
		];
	}
	/**
	 * Initialize the controller's dependencies.
	 * 
	 * @param  {Object} $timeout     Angular's setTimeout wrapper
	 * @param  {Object} $scope       The current scope
	 * @param  {Object} $window      Angular's window wrapper
	 * @param  {Object} $campusMap   CampusMapService
	 * @param  {Object} $mdToast     Material toast service
	 * @param  {Object} $mdPanel     Material panel service
	 * @param  {Object} MAP_SETTINGS Constant for map config object
	 * @param  {Object} MAP_ICONS    Constant for map icon definitions
	 */
	constructor($timeout, $scope, $window, $campusMap, $mapInterface, $mdToast, $mdPanel, MAP_DEFAULTS) {
    this._$timeout = $timeout;
    this._$scope = $scope;
    this._$window = $window;
    this._$mdToast = $mdToast;
    this._$mdPanel = $mdPanel;
    this._defaults = MAP_DEFAULTS;

    this.$campusMap = $campusMap;
    this.$mapInterface = $mapInterface;
  }

  async $onInit() {
    	const instance = await this.$campusMap.getMap();

      this.$mapInterface.updateStyles();

	    /**
	     * Property to store map event listeners for later deregistration.
	     * @type {Object}
	     */
      this.listeners = {
      	mouseover: event => {
		      this.$mapInterface.setFeatureStyle(event.feature);
	        this.$mapInterface.showToast(event.feature);
	      },
	      mouseout: event => {
		      this.$mapInterface.resetFeatureStyles();
	        this.$mapInterface.hideToast();
	      },
	      click: event => {
	        this.showDetail(event.feature, this.isolateMouseEvent(event));
	      }
      }
      
      Object.keys(this.listeners).forEach(event => instance.data.addListener(event, this.listeners[event]));
	}

	async $onChanges({ mapData }) {
		if (mapData.isFirstChange()) return;	
		console.log('map component detected external changes:', mapData);
		this.updateMapData(mapData);
	}

	/**
	 * Clean up event listeners that the controller has attached via
	 * the Google Maps API. This is especially important for the map
	 * component in general, whose listeners may not always exist in
	 * a context that Angular is aware of (and therefore will lead to
	 * memory leaks if left attached).
	 */
	async $onDestroy() {
  	const google = await this.$campusMap.getGoogle();
  	const instance = await this.$campusMap.getMap();
		google.maps.event.clearInstanceListeners(instance.data);
	}

	onControlChanged(data) {
		console.log('FILTERCHANGE', data);
		this.updateMapData(data);
	}

	/**
	 * Handler method for map data `$watch`; watches incoming geoJSON
	 * data for changes and adds it to the map if detected. If the
	 * new data has a `showAll` property (and it is true), all features
	 * all loaded and the map bounds are recalculated.
	 * 
	 * @param  {Object} newVal New incoming map data
	 */
	async updateMapData(data) {
		const	{ location, category, collection } = data;
		if (location && collection) {
    	this.location = location;
			await this.clearMapData();
			console.log('updating map data...', data);
			if (data.collection.features.length && data.category.length) {
	      await this.$campusMap.addData(data.collection);
				console.log('map data updated!');
			}
		}
	}
	
	/**
	 * Removes all features from the map by looping over feature
	 * data objects and calling their `map.remove()` on them.
	 */
	async clearMapData() {
		console.log('clearing map data...');
    await this.$campusMap.clearData();
		console.log('map data cleared!');
	}

	/**
	 * Shows a detail popup, called by user clicking map feature. This
	 * method uses ng-material's `$mdPanel` service to build a floating
	 * panel config, immediately show it, and manually clean up its scope
	 * listeners on close.
	 * @param  {Object} feature         The feature that was clicked
	 * @param  {Object} options
	 * @param  {Number} options.clientX Horizontal position of user's click
	 * @param  {Number} options.clientY Vertical position of user's click
	 * @return {Promise}                Resolves to panel reference
	 */
	showDetail(feature, { clientX: left, clientY: top }) {

		let panelRef;
	  const position = this._$mdPanel.newPanelPosition()
	    .absolute().center();
	    // .top(`${ top }px`)
	    // .left(`${ left }px`);

	  const animation = this._$mdPanel.newPanelAnimation()
      .openFrom({ top, left })
      .closeTo({ top, left })
			.withAnimation(this._$mdPanel.animation.SCALE);

	  return this._$mdPanel.open({
	    controller,
	    controllerAs: 'ctrl',
	    attachTo: angular.element(document.body),
	    template,
	    hasBackdrop: true,
	    panelClass: 'map-detail',
	    locals: {
	    	onGotoBldg: this.onGotoBldg(),
	    	location: this.location,
	    	feature
	    },
	    trapFocus: true,
	    zIndex: 150,
	    clickOutsideToClose: true,
	    escapeToClose: true,
	    focusOnOpen: true,
	    onDomRemoved() {
	    	panelRef.destroy();
	    },
	    animation,
	    position
	  }).then(panel => {
	  	panelRef = panel;
	  });
	}

	/**
	 * Since Google Map events store private properties under names
	 * that change periodically, it is necessary to manually evaluate
	 * which property is the `MouseEvent` by loop-and-compare. This
	 * method returns a `MouseEvent` from a Map event.
	 * @param  {Event} mapEvent Google map event
	 * @return {Event}          MouseEvent
	 */
	isolateMouseEvent(mapEvent) {
		for (const prop in mapEvent) {
			if (mapEvent[prop] && mapEvent[prop] instanceof MouseEvent) {
				console.log(mapEvent[prop]);
				return mapEvent[prop];
			}
		}
	}
}
