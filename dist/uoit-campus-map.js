(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["campusMap"] = factory();
	else
		root["campusMap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map_component = __webpack_require__(1);
	
	var _map_component2 = _interopRequireDefault(_map_component);
	
	var _mapControls_component = __webpack_require__(4);
	
	var _mapControls_component2 = _interopRequireDefault(_mapControls_component);
	
	var _filterBuilder_directive = __webpack_require__(6);
	
	var _filterBuilder_directive2 = _interopRequireDefault(_filterBuilder_directive);
	
	var _filterInput_directive = __webpack_require__(8);
	
	var _filterInput_directive2 = _interopRequireDefault(_filterInput_directive);
	
	var _mapSettings_constant = __webpack_require__(10);
	
	var _mapSettings_constant2 = _interopRequireDefault(_mapSettings_constant);
	
	var _mapIcons_constant = __webpack_require__(11);
	
	var _mapIcons_constant2 = _interopRequireDefault(_mapIcons_constant);
	
	var _templates = __webpack_require__(12);
	
	var _templates2 = _interopRequireDefault(_templates);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	// ----------------
	
	exports.default = angular.module('campusMap', []).run(_templates2.default).component('campusMap', _map_component2.default).component('campusMapControls', _mapControls_component2.default).directive('filterBuilder', _filterBuilder_directive2.default).directive('filterInput', _filterInput_directive2.default).constant('MAP_SETTINGS', _mapSettings_constant2.default).constant('MAP_ICONS', _mapIcons_constant2.default);
	
	// development only
	//

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map_controller = __webpack_require__(2);
	
	var _map_controller2 = _interopRequireDefault(_map_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var campusMap = {
	  // transclude: true,
	  bindings: {
	    onGotoBldg: '&?',
	    mapData: '<?'
	    // location: '<?',
	    // building: '<?',
	    // feature: '<?'
	  },
	  templateUrl: '_map.html',
	  transclude: {
	    controls: 'campusMapControls'
	  },
	  controller: _map_controller2.default
	};
	
	exports.default = campusMap;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mapDetail_controller = __webpack_require__(3);
	
	var _mapDetail_controller2 = _interopRequireDefault(_mapDetail_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The `MapCtrl` is the lead orchestrator of the component: it wraps the
	 * `NgMap` directive's methods and provides its own for interfacing with
	 * the map's controls, generating dialogs, and re-rendering the map elements.
	 */
	var MapCtrl = function () {
		_createClass(MapCtrl, null, [{
			key: '$inject',
			get: function get() {
				return ['$timeout', '$scope', '$window', // angular core
				'NgMap', // external deps
				'$mdToast', '$mdPanel', // md deps
				'MAP_SETTINGS', 'MAP_ICONS' // constants
				];
			}
			/**
	   * Initialize the controller's dependencies.
	   * 
	   * @param  {Object} $timeout     Angular's setTimeout wrapper
	   * @param  {Object} $scope       The current scope
	   * @param  {Object} $window      Angular's window wrapper
	   * @param  {Object} NgMap        Angular Google Maps
	   * @param  {Object} $mdToast     Material toast service
	   * @param  {Object} $mdPanel     Material panel service
	   * @param  {Object} MAP_SETTINGS Constant for map config object
	   * @param  {Object} MAP_ICONS    Constant for map icon definitions
	   */
	
		}]);
	
		function MapCtrl($timeout, $scope, $window, NgMap, $mdToast, $mdPanel, MAP_SETTINGS, MAP_ICONS) {
			_classCallCheck(this, MapCtrl);
	
			this._$timeout = $timeout;
			this._$scope = $scope;
			this._$window = $window;
			this._$mdToast = $mdToast;
			this._$mdPanel = $mdPanel;
			this._MAP_SETTINGS = MAP_SETTINGS;
			this._MAP_ICONS = MAP_ICONS;
			/**
	   * Function for resolving map instance from promise.
	   * @type {Function}
	   */
			this.getMap = NgMap.getMap;
			/**
	   * Property to store the loaded map instance.
	   * @type {null|Object}
	   */
			this.map = null;
			/**
	   * Property to store map event listeners for later deregistration.
	   * @type {null|Object}
	   */
			this.mapListeners = [];
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
			/**
	   * Object to hold map of available categories by `_id` (will be populated
	   * by `MapControlsCtrl` when categories are loaded).
	   * @type {Object}
	   */
			this.categories = {};
		}
	
		_createClass(MapCtrl, [{
			key: '$onInit',
			value: function $onInit() {
				var _this = this;
	
				this.getMap().then(function (instance) {
					_this.map = instance;
	
					/*
	    	This is a stupid hack that makes the map fill space by force.
	    	Best not used whenever possible; this isn't one of those times.
	     */
					// angular.element(this._$window).triggerHandler('resize');
					google.maps.event.trigger(instance, 'resize');
					console.log(_this.categories);
					instance.data.setStyle(function (feature) {
						// console.log(feature.getId())
						var styles = _this.categories[feature.getProperty('category')];
						styles.title = feature.getProperty('name');
						return styles; //this.categories[feature.getProperty('category')];
					});
	
					var mouseoverListener = instance.data.addListener('mouseover', function (event) {
						instance.data.overrideStyle(event.feature, {
							fillColor: '#C71566',
							fillOpacity: 0.7,
							strokeWeight: 5,
							strokeColor: 'white',
							strokeOpacity: 0.7
						});
						_this.showToast(event.feature);
					});
	
					var mouseoutListener = instance.data.addListener('mouseout', function (event) {
						instance.data.revertStyle();
						_this.toastCanceler = _this.hideToast();
					});
	
					var clickListener = instance.data.addListener('click', function (event) {
						_this.showDetail(event.feature, _this.isolateMouseEvent(event));
					});
	
					_this.mapListeners.push(mouseoverListener, mouseoutListener, clickListener);
				});
			}
		}, {
			key: '$onChanges',
			value: function $onChanges(_ref) {
				var mapData = _ref.mapData;
	
				if (mapData.isFirstChange()) return;
				console.log('map component detected external changes:', mapData);
				var _mapData$currentValue = mapData.currentValue,
				    location = _mapData$currentValue.location,
				    category = _mapData$currentValue.category,
				    collection = _mapData$currentValue.collection;
	
				if (location && collection) {
					this.location = location;
					this.updateMapData({
						location: location, category: category, collection: collection
					});
				}
			}
	
			/**
	   * Clean up event listeners that the controller has attached via
	   * the Google Maps API. This is especially important for the map
	   * component in general, whose listeners may not always exist in
	   * a context that Angular is aware of (and therefore will lead to
	   * memory leaks if left attached).
	   */
	
		}, {
			key: '$onDestroy',
			value: function $onDestroy() {
				this.mapListeners.forEach(function (listener) {
					return google.maps.event.removeListener(listener);
				});
				google.maps.event.clearInstanceListeners(this.map.data);
			}
	
			/**
	   * Handler method for map data `$watch`; watches incoming geoJSON
	   * data for changes and adds it to the map if detected. If the
	   * new data has a `showAll` property (and it is true), all features
	   * all loaded and the map bounds are recalculated.
	   * 
	   * @param  {Object} newVal New incoming map data
	   */
	
		}, {
			key: 'updateMapData',
			value: function updateMapData(newVal) {
				var _this2 = this;
	
				console.log('updating map data...', newVal);
				return this.clearMapData().then(function (map) {
					if (newVal.collection.features.length && newVal.category.length) {
						map.data.addGeoJson(newVal.collection);
						_this2.fitBounds(map);
						console.log('map data updated!');
					}
				});
			}
	
			/**
	   * Removes all features from the map by looping over feature
	   * data objects and calling their `map.remove()` on them.
	   */
	
		}, {
			key: 'clearMapData',
			value: function clearMapData() {
				console.log('clearing map data...');
				return this.getMap().then(function (map) {
					map.data.forEach(function (feature) {
						map.data.remove(feature);
					});
					console.log('map data cleared!');
					return map;
				});
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
	
		}, {
			key: 'showDetail',
			value: function showDetail(feature, _ref2) {
				var left = _ref2.clientX,
				    top = _ref2.clientY;
	
	
				var panelRef = void 0;
				var position = this._$mdPanel.newPanelPosition().absolute().center();
				// .top(`${ top }px`)
				// .left(`${ left }px`);
	
				var animation = this._$mdPanel.newPanelAnimation().openFrom({ top: top, left: left }).closeTo({ top: top, left: left }).withAnimation(this._$mdPanel.animation.SCALE);
	
				return this._$mdPanel.open({
					attachTo: angular.element(document.body),
					controller: _mapDetail_controller2.default,
					controllerAs: 'ctrl',
					templateUrl: 'detail/_map-detail.html',
					hasBackdrop: true,
					panelClass: 'map-detail',
					locals: {
						onGotoBldg: this.onGotoBldg(),
						location: this.location,
						feature: feature
					},
					trapFocus: true,
					zIndex: 150,
					clickOutsideToClose: true,
					escapeToClose: true,
					focusOnOpen: true,
					onDomRemoved: function onDomRemoved() {
						panelRef.destroy();
					},
	
					animation: animation,
					position: position
				}).then(function (panel) {
					panelRef = panel;
				});
			}
	
			/**
	   * Shows a simple toast notification containing the name of the 
	   * future being hovered over. If there is already a toast active,
	   * it updates the name in the toast instead of making a new one.
	   * 
	   * @param  {Object} feature The feature being hovered over
	   */
	
		}, {
			key: 'showToast',
			value: function showToast(feature) {
				var _this3 = this;
	
				var featureName = feature.getProperty('name');
				if (!this.toastActive) {
					this.toast.textContent(featureName).position('bottom left').hideDelay(0);
					this._$mdToast.show(this.toast);
					this.toastActive = true;
				} else {
					this._$timeout.cancel(this.toastCanceler);
					this._$timeout(function () {
						_this3._$mdToast.updateTextContent(featureName);
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
	
		}, {
			key: 'hideToast',
			value: function hideToast() {
				var _this4 = this;
	
				return this._$timeout(function () {
					_this4._$mdToast.hide(_this4.toast);
					_this4.toastActive = false;
				}, 3000);
			}
	
			/**
	   * Direct port of Google Maps `processBounds` example function
	   * for recalculation of map boundaries based on map data.
	   * @param  {Object}   geometry LatLng geometry object
	   * @param  {Function} callback Recursion callback
	   * @param  {*}   			thisArg  Context for `this`
	   */
	
		}, {
			key: 'processBounds',
			value: function processBounds(geometry, callback, thisArg) {
				var _this5 = this;
	
				if (geometry instanceof google.maps.LatLng) {
					callback.call(thisArg, geometry);
				} else if (geometry instanceof google.maps.Data.Point) {
					callback.call(thisArg, geometry.get());
				} else {
					geometry.getArray().forEach(function (g) {
						_this5.processBounds(g, callback, thisArg);
					});
				}
			}
	
			/**
	   * Resizes map view to fit recalculated bounds.
	   */
	
		}, {
			key: 'fitBounds',
			value: function fitBounds(map) {
				var _this6 = this;
	
				var bounds = new google.maps.LatLngBounds();
				map.data.forEach(function (feature) {
					_this6.processBounds(feature.getGeometry(), bounds.extend, bounds);
				});
				map.fitBounds(bounds);
			}
	
			/**
	   * Since Google Map events store private properties under names
	   * that change periodically, it is necessary to manually evaluate
	   * which property is the `MouseEvent` by loop-and-compare. This
	   * method returns a `MouseEvent` from a Map event.
	   * @param  {Event} mapEvent Google map event
	   * @return {Event}          MouseEvent
	   */
	
		}, {
			key: 'isolateMouseEvent',
			value: function isolateMouseEvent(mapEvent) {
				for (var prop in mapEvent) {
					if (mapEvent[prop] && mapEvent[prop] instanceof MouseEvent) {
						console.log(mapEvent[prop]);
						return mapEvent[prop];
					}
				}
			}
		}]);
	
		return MapCtrl;
	}();
	
	exports.default = MapCtrl;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The `MapDetailCtrl` is a small controller with few responsibilties –
	 * it is only instantiated by ng-material's `$mdPanel` service as a means
	 * to provide data from a clicked feature to a dialog window that will
	 * display the data; it also contains transition methods for viewing
	 * tour items (e.g. from the dialog's _"Take a tour"_ button).
	 *
	 * Since feature descriptions can contain HTML, the `$sce` service is used
	 * to parse and sanitize the descriptions for rendering. The dialog has access
	 * to:
	 * - the feature that the user clicked, which can include information about...
	 *   - the feature itself (`feature`), which supplies its own `name` and `desc`
	 *   property, **or...**
	 *   - a linked tour element (`building`), which the feature inherits those
	 *   properties from instead
	 * - the current campus location (`location`), which will either be north or downtown.
	 *
	 * The `onGoToBldg()` method simply executes a callback after closing the dialog,
	 * passing it the `code` property of the controller's `location` and `building` –
	 * this allows the context of the action to come from outside the component (i.e.
	 * the codes can be used to transition states in the application.)
	 */
	var MapDetailCtrl = function () {
		_createClass(MapDetailCtrl, null, [{
			key: '$inject',
			get: function get() {
				return ['$sce'];
			}
	
			/**
	   * Initializes the controller's dependencies and extracts relevant information
	   * from data passed in via the `locals` property (when `$mdPanel` initializes
	   * the dialog).
	   *
	   * If the feature's `linked` property is true, the data is extracted from
	   * the building. If not, it is extracted directly from the feature.
	   * 
	   * @param  {Object} $sce Angular's strict contextual escape service
	   */
	
		}]);
	
		function MapDetailCtrl($sce) {
			_classCallCheck(this, MapDetailCtrl);
	
			var linked = this.feature.getProperty('linked');
			if (linked === 'buildings' || linked === 'true') {
				this.building = this.feature.getProperty('building');
				this.name = this.building.name;
				this.description = $sce.trustAsHtml(this.building.desc);
			} else if (linked === 'scenes') {
				this.scene = this.feature.getProperty('scene');
				this.name = this.scene.name;
			} else {
				this.name = this.feature.getProperty('name');
				this.description = $sce.trustAsHtml(this.feature.getProperty('desc'));
			}
	
			/**
	   * Property to control the visibility of the description details inside
	   * the dialog.
	   * @type {Boolean}
	   */
			this.detailsShowing = false;
		}
	
		/**
	  * Toggles the value of `detailsShowing` to hide and show the description.
	  * @return {Boolean} The visibility of the description _after_ method is run
	  */
	
	
		_createClass(MapDetailCtrl, [{
			key: 'showDetails',
			value: function showDetails() {
				this.detailsShowing = !this.detailsShowing;
			}
	
			/**
	   * Closes the dialog, and on completion, extracts the `code` property
	   * from the controller's `location` and `building` (assuming they exist)
	   * and runs a callback with these as the parameters.
	   *
	   * This can, for instance, be used to make a state transition from within
	   * the application (as in the example below). The callback passed to this
	   * method is the same as the one passed into the main map component.
	   * 
	   * @example
	   * // from app controller
	   * const onGotoBldg = ({ location, building }) => {
	   *   $state.go('building', { location, building });
	   * };
	   * // from HTML (map component)
	   * <campus-map on-goto-bldg="$ctrl.onGotoBldg()"></campus-map>
	   * 
	   * @return {Promise}           Status of dialog close
	   */
	
		}, {
			key: 'gotoBldg',
			value: function gotoBldg() {
				var _this = this;
	
				var location = this.location,
				    building = this.building;
	
				return this.close().then(function () {
					_this.onGotoBldg({
						location: location.code,
						building: building.code
					});
				});
			}
	
			/**
	   * Closes the dialog using the panel reference stored on
	   * the controller automatically by the `$mdPanel` service.
	   * @return {Promise} Resolves to the status of the panel close
	   */
	
		}, {
			key: 'close',
			value: function close() {
				return this.mdPanelRef.close();
			}
		}]);
	
		return MapDetailCtrl;
	}();
	
	exports.default = MapDetailCtrl;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mapControls_controller = __webpack_require__(5);
	
	var _mapControls_controller2 = _interopRequireDefault(_mapControls_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var campusMapControls = {
	  require: {
	    $ngModel: 'ngModel',
	    MapCtrl: '^campusMap'
	  },
	  templateUrl: 'controls/_map-controls.html',
	  controller: _mapControls_controller2.default
	};
	
	exports.default = campusMapControls;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The `MapControlsCtrl` provides an interface between the map component
	 * and the map control filter dropdowns.
	 * 
	 * It is not responsible for much actual map logic, but instead for
	 * accepting user input and turning it into queries whose results
	 * are assigned back to the controller. The `MapCtrl` takes care of
	 * turning the returned values into map-usable data, whereas this controller
	 * simply makes it available.
	 *
	 * The controller is made up of:
	 * - constructor
	 * - 3 methods for loading query results (location, category, collection)
	 * - 3 methods for updating dropdown contents
	 * - utility methods for setting active collection and showing all collections
	 */
	var MapControlsCtrl = function () {
	  _createClass(MapControlsCtrl, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['$mapApi', '$tourApi'];
	    }
	
	    /**
	     * Initialize controller dependencies.
	     * 
	     * @param  {Object} $mapApi  Map $resource service
	     * @param  {Object} $tourApi Tour $resource service
	     * @param  {Object} $window  Angular's window wrapper
	     */
	
	  }]);
	
	  function MapControlsCtrl($mapApi, $tourApi) {
	    _classCallCheck(this, MapControlsCtrl);
	
	    this._FeatureResource = $mapApi.feature;
	    this._CollectionResource = $mapApi.collection;
	    this._CategoryResource = $mapApi.category;
	    this._LocationResource = $tourApi.location;
	
	    /**
	     * Holds the user's selected location (by ID).
	     * @type {String}
	     */
	    this.location = '';
	    /**
	     * Holds the user's selected categories (by ID).
	     * @type {Array}
	     */
	    this.category = [];
	    /**
	     * Holds the user's selected feature collections (by ID).
	     * @type {Array}
	     */
	    this.collection = [];
	  }
	
	  /**
	   * Initialize the controls (show all map elements)
	   */
	
	
	  _createClass(MapControlsCtrl, [{
	    key: '$onInit',
	    value: function $onInit() {
	      var _this = this;
	
	      this.loadLocations().then(function (locations) {
	        _this.location = locations[1]._id;
	        return _this.loadCategories();
	      }).then(function (categories) {
	        categories.forEach(function (category) {
	          var _category$icon = category.icon,
	              _category$icon$anchor = _category$icon.anchor,
	              left = _category$icon$anchor.left,
	              top = _category$icon$anchor.top,
	              _category$icon$size = _category$icon.size,
	              width = _category$icon$size.width,
	              height = _category$icon$size.height;
	
	          category.icon.anchor = new google.maps.Point(left, top);
	          category.icon.size = new google.maps.Point(width, height);
	          _this.MapCtrl.categories[category._id] = category;
	        });
	        _this.category = [].concat(_toConsumableArray(categories.map(function (category) {
	          return category._id;
	        })));
	        return _this.loadCollections();
	      }).then(function (collections) {
	        _this.collection = [].concat(_toConsumableArray(collections.map(function (collection) {
	          return collection._id;
	        })));
	        return _this.loadFeatures(_this.filter);
	      });
	    }
	
	    /**
	     * Load location list from server.
	     * 
	     * @return {Promise} Resolves to list of locations
	     */
	
	  }, {
	    key: 'loadLocations',
	    value: function loadLocations() {
	      var _this2 = this;
	
	      return this.locations || this._LocationResource.query().$promise.then(function (locations) {
	        _this2.locations = locations;
	        return locations;
	      });
	    }
	
	    /**
	     * Load category list from server.
	     * 
	     * @return {Promise} Resolves to list of categories
	     */
	
	  }, {
	    key: 'loadCategories',
	    value: function loadCategories() {
	      var _this3 = this;
	
	      return this.categories || this._CategoryResource.query().$promise.then(function (categories) {
	        _this3.categories = categories;
	        return categories;
	      });
	    }
	
	    /**
	     * Load collection list from server using the `_id` of the currently
	     * selected category and location (extracted directly from the
	     * controller / `this`) to filter by.
	     *
	     * @todo Update this doc to describe array of categories
	     * 
	     * @return {Promise} Resolves to list of collections
	     */
	
	  }, {
	    key: 'loadCollections',
	    value: function loadCollections() {
	      var _this4 = this;
	
	      return this._CollectionResource.query({
	        filter: {
	          location: this.location,
	          category: {
	            $in: [].concat(_toConsumableArray(this.category))
	          }
	        }
	      }).$promise.then(function (collections) {
	        _this4.collections = collections;
	        return collections;
	      });
	    }
	
	    /**
	     * Load feature list from server using the `_id`s of the currently
	     * selected categories to filter by.
	     *
	     * @todo Update this doc to describe array of categories
	     * 
	     * @return {Promise} Resolves to list of collections
	     */
	
	  }, {
	    key: 'loadFeatures',
	    value: function loadFeatures(filter) {
	      var _this5 = this;
	
	      return this._FeatureResource.query({ filter: filter }).$promise.then(function (features) {
	        _this5.features = features;
	        return features;
	      }).then(function (features) {
	        return _this5.setMapData({
	          location: _this5.locations.find(function (location) {
	            return location._id === _this5.location;
	          }),
	          category: _this5.getItemsInListByProp(_this5.category, _this5.categories, '_id'),
	          collection: {
	            type: 'FeatureCollection',
	            features: features
	          }
	        });
	      });
	    }
	
	    /**
	     * Sends current data to view for rendering in selection dropdowns.
	     *
	     * In order for the map to properly render the selected collection, the
	     * `options.collection` param passed to this method must at least _look_
	     * like a valid `FeatureCollection` (i.e. it can be a "true" collection,
	     * or an object with a `type` property of `FeatureCollection` and a `features`
	     * property containing an array of `Feature` objects).
	     *
	     * In the example, both scenarios are demonstrated – the `location` and
	     * `category` properties are left out for brevity, but `location` is
	     * required in order for features to properly direct to tour scenes.
	     *
	     * @example
	     * // "true" collection
	     * const collection = this._CollectionResource.get('collectionId');
	     * this.setMapData({ collection });
	     * 
	     * // "mock" collection
	     * const features = this._FeatureResource.query();
	     * this.setMapData({
	     *   collection: {
	     *     type: 'FeatureCollection',
	     *     features
	     *   }
	     * });
	     * 
	     * @param {Object}  resources
	     * @param {Object}  resources.location    Currently selected location `$resource`
	     * @param {Object}  resources.category    Currently selected category `$resource`
	     * @param {Object}  resources.collection  Currently selected collection `$resource`
	     */
	
	  }, {
	    key: 'setMapData',
	    value: function setMapData(_ref) {
	      var location = _ref.location,
	          category = _ref.category,
	          collection = _ref.collection;
	
	      this.$ngModel.$setViewValue({
	        location: location,
	        category: category,
	        collection: collection
	      });
	    }
	
	    /**
	     * Filter an array for matches in another array by a property;
	     * return the matched items.
	     * 
	     * @param  {Array}  items Items to match with
	     * @param  {Array}  list  List to match from
	     * @param  {String} prop  Property to match against
	     * @return {Array}        List of filtered items
	     */
	
	  }, {
	    key: 'getItemsInListByProp',
	    value: function getItemsInListByProp(items, list, prop) {
	      return list && [].concat(_toConsumableArray(list)).filter(function (item) {
	        return [].concat(_toConsumableArray(items)).indexOf(item[prop]) !== -1;
	      });
	    }
	
	    /**
	     * Find a specific array item and remove it from the array.
	     * 
	     * @param  {*}     item The item to remove
	     * @param  {Array} list The list to remove from
	     */
	
	  }, {
	    key: 'removeItemFromList',
	    value: function removeItemFromList(item, list) {
	      var index = [].concat(_toConsumableArray(list)).indexOf(item);
	      console.log(item, list, index);
	      index > -1 && list.splice(index, 1);
	    }
	
	    /**
	     * Checks whether the number of selected items is more than zero but
	     * less than the total of available items (sets checkbox inputs to "indeterminate").
	     * 
	     * @param  {String}  selected Name of property that holds selected items
	     * @param  {String}  items    Name of property that holds all items
	     * @return {Boolean}          Whether checkbox should be indeterminate
	     */
	
	  }, {
	    key: 'isIndeterminate',
	    value: function isIndeterminate(selected, items) {
	      return this[selected] && this[items] && this[selected].length !== 0 && this[selected].length !== this[items].length;
	    }
	
	    /**
	     * Utility function for determining whether all items are selected (set
	     * 'select all' checkbox to checked if so).
	     * 
	     * @param  {String}  selected Name of property that holds selected items
	     * @param  {String}  items    Name of property that holds all items
	     * @return {Boolean}          Whether checkbox should be checked
	     */
	
	  }, {
	    key: 'isChecked',
	    value: function isChecked(selected, items) {
	      return this[selected] && this[items] && this[selected].length === this[items].length;
	    }
	
	    /**
	     * Utility function for or selecting or deselecting all items (set all
	     * item checkboxes to checked/unchecked).
	     * 
	     * @param  {String}  selected Name of property that holds selected items
	     * @param  {String}  items    Name of property that holds all items
	     */
	
	  }, {
	    key: 'toggleAll',
	    value: function toggleAll(selected, items) {
	      if (this[selected].length === this[items].length) {
	        console.log('deselected all');
	        this[selected] = [];
	      } else if (this[selected].length >= 0) {
	        console.log('selected all');
	        this[selected] = [].concat(_toConsumableArray(this[items].map(function (item) {
	          return item._id || item.id;
	        })));
	      }
	    }
	  }]);
	
	  return MapControlsCtrl;
	}();
	
	exports.default = MapControlsCtrl;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _filterBuilder_controller = __webpack_require__(7);
	
	var _filterBuilder_controller2 = _interopRequireDefault(_filterBuilder_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function filterBuilder() {
		return {
			restrict: 'E',
			template: '<form novalidate\n\t\t\t\t\t\t\t\tng-submit="$event.preventDefault()"\n\t\t\t\t\t\t\t\tlayout="column"\n\t\t\t\t\t\t\t\tlayout-align="start center"\n\t\t\t\t\t\t\t\tflex="grow"\n\t\t\t\t\t\t\t\tng-transclude>\n\t\t\t\t\t\t\t</form>',
			require: {
				$ngModel: 'ngModel'
			},
			transclude: true,
			bindToController: true,
			controller: _filterBuilder_controller2.default
		};
	}
	
	exports.default = filterBuilder;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The FilterBuilderCtrl class provides a controller for the
	 * `<filter-builder>` directive; it contains logic for extracting
	 * and combining the `ng-model` of any number of arbitrary
	 * transcluded inputs inside it.
	 *
	 * The values of its transcluded inputs are converted to a unified
	 * query filter object (MongoDB/Mongoose-style in this case).
	 *
	 * Unlike the `<filter-controls>` component, this directive does not
	 * make any server calls or deal otherwise with with the actual map
	 * data – it is purely responsible for providing the filter to make
	 * the server calls with.
	 */
	var FilterBuilderCtrl = function () {
	  _createClass(FilterBuilderCtrl, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['$scope', '$attrs', '$parse'];
	    }
	  }]);
	
	  function FilterBuilderCtrl($scope, $attrs, $parse) {
	    _classCallCheck(this, FilterBuilderCtrl);
	
	    this._$scope = $scope;
	    this._$attrs = $attrs;
	    this._$parse = $parse;
	    /**
	     * Holds a map of child input NgModelControllers keyed by the
	     * _string reference to the scope model_ of the input. For example,
	     * if a child input has an `ng-model="this.that"` attribute, its
	     * key in this property will be `'this.that'`.
	     * 
	     * Its value represents the "model" of this directive: the
	     * parts of this property are compiled an parsed into the final filter.
	     *
	     * @example
	     * // in HTML...
	     * `<filter-builder ng-model="$ctrl.animalFilter">
	     *   <select ng-model="$ctrl.furType">....</select>
	     *   <input type="checkbox" ng-model="$ctrl.hasClaws" />
	     * </filter builder>`
	     *
	     * // ...will result in `this.parts` being equivalent to:
	     * { '$ctrl.furType': NgModel, '$ctrl.hasClaws': NgModel }
	     * 
	     * @type {Object}
	     */
	    this.parts = {};
	  }
	  /**
	   * Initializes and attaches the controller's behaviours – this includes:
	   * - setting a `$watchCollection` on the scope that...
	   *   - watches the returned value of `getViewValue()`
	   *   - responds to changes in the watch by calling `setViewValue()`
	   * - pushing `parseViewValue` onto ng-model's `$parsers`
	   * - pushing `formatModelValue` onto ng-model's `$formatters`
	   */
	
	
	  _createClass(FilterBuilderCtrl, [{
	    key: '$onInit',
	    value: function $onInit() {
	      var _this = this;
	
	      this._$scope.$watchCollection(function () {
	        return _this.getViewValue();
	      }, function () {
	        return _this.setViewValue();
	      });
	
	      this.$ngModel.$parsers.push(function (viewValue) {
	        return _this.parseViewValue(viewValue);
	      });
	      this.$ngModel.$formatters.push(function (modelValue) {
	        return _this.formatModelValue(modelValue);
	      });
	
	      var onUpdate = this._$parse(this._$attrs.onUpdate);
	      this.$ngModel.$viewChangeListeners.push(function () {
	        return onUpdate(_this._$scope);
	      });
	    }
	
	    /**
	     * Gets the `$viewValue` of each child input from the controller's
	     * `parts` collection and returns them in a newly-mapped array
	     * for efficient `$watchCollection`ing.
	     * 
	     * @return {Array} Array of $viewValues
	     */
	
	  }, {
	    key: 'getViewValue',
	    value: function getViewValue() {
	      var _this2 = this;
	
	      return Object.keys(this.parts).map(function (key) {
	        return _this2.parts[key].$viewValue;
	      });
	    }
	
	    /**
	     * Sets the `$viewValue` of this directive's ng-model based on
	     * the `$watch` results of `getViewValue()`. Since the value needs
	     * to be bound by reference, the original `parts` collection is used
	     * instead of the `$watch`'s copy value.
	     *
	     * The values mapped into the new view value by this function are
	     * obtained by using the `parts[key].getFilter()` method, which is
	     * defined on the filter input directive's NgModelController object.
	     * If the value is an array, the `getFilter()` wraps the array in
	     * a MongoDB `{ $in: {...} }` operator and assigns it to a property
	     * keyed by the input's `name` attribute; if it is a primitive it
	     * is assigned without wrapping.
	     *
	     * Before `setViewValue()` is called to fire off the parser pipeline,
	     * the final value is run through `removeNulls()` to cleanse it of
	     * `null` and `undefined` values.
	     */
	
	  }, {
	    key: 'setViewValue',
	    value: function setViewValue() {
	      var _this3 = this;
	
	      var newViewValue = Object.keys(this.parts).map(function (key) {
	        return _this3.parts[key].getFilter();
	      });
	      this.$ngModel.$setViewValue(this.removeNulls(newViewValue));
	    }
	
	    /**
	     * The `formatModelValue` function is pushed onto the `$formatters` of
	     * the `NgModelController`. It is responsible for delegating incoming
	     * scope values (set programmatically) to their respective input elements' scopes.
	     * The function needs to:
	     * - determine which scope models are available to set
	     * - disregard incoming values with no matching input element by building an
	     * array of models with a matching value
	     *   - `[{ modelName: '$ctrl.modelName', modelValue: '...' }, {...}]`
	     * - for each available model with a matching value:
	     *   - use Angular's `$parse` service to generate a getter/setter for the
	     *   model's scope reference
	     *   - use the provided setter to set the scope reference, therefore updating
	     *   the child input elements by setting off their respective `$formatters`
	     * 
	     * @param  {Object} modelValue Map of values by name to set on child scopes
	     */
	
	  }, {
	    key: 'formatModelValue',
	    value: function formatModelValue(modelValue) {
	      var _this4 = this;
	
	      if (modelValue) {
	        var modelsToSet = Object.keys(this.parts).map(function (key) {
	          return modelValue[_this4.parts[key].$name] && {
	            modelName: key,
	            modelValue: modelValue[_this4.parts[key].$name] };
	        });
	        modelsToSet.forEach(function (newModel) {
	          var getModel = _this4._$parse(newModel.modelName),
	              setModel = getModel.assign;
	          setModel(_this4._$scope, newModel.modelValue);
	        });
	        // console.log(`formatter set input to`, modelsToSet);
	      }
	    }
	
	    /**
	     * The `parseViewValue` function is pushed onto the `$parsers` of
	     * the `NgModelController`. It is responsible for determining how many values
	     * are being set on the view. If the view has...
	     * - **no values**, return an empty object
	     * - **one value**, return that value
	     * - **more than one value**, return them wrapped in `{ $and: [...] }`
	     *
	     * @example
	     * // anything considered empty...
	     * []
	     * [{}]
	     * // turns into this:
	     * {}
	     *
	     * // a single predicate...
	     * [{ category: 'abc123' }];
	     * // gets flattened:
	     * { category: 'abc123' };
	     *
	     * // multiple predicates...
	     * [{ category: 'abc123' }, { feature: '123abc' }];
	     * // get wrapped with the `$and` operator:
	     * { $and: [{ category: 'abc123' }, { feature: '123abc' }] }
	     * 
	     * 
	     * @param  {Array} viewValue Incoming data from setViewValue
	     * @return {Object}          Final filter formatted for view
	     */
	
	  }, {
	    key: 'parseViewValue',
	    value: function parseViewValue(viewValue) {
	      // console.log('builder parser (view » model)', viewValue);
	      if (!viewValue.length) return {};
	      if (viewValue.length === 1) return viewValue[0];
	      if (viewValue.length > 1) return { $and: viewValue };
	    }
	
	    /**
	     * Removes null and undefined values from a given array.
	     * 
	     * @example
	     * // turns these...
	     * [0, '', false, null, null]
	     * [null, null]
	     * 
	     * // ..into these:
	     * [0, '', false]
	     * []
	     * 
	     * @param  {Array} array The array to remove nulls from
	     * @return {Array}       A null-free array
	     */
	
	  }, {
	    key: 'removeNulls',
	    value: function removeNulls(array) {
	      return array.filter(function (v) {
	        return v != null;
	      });
	    }
	  }]);
	
	  return FilterBuilderCtrl;
	}();
	
	exports.default = FilterBuilderCtrl;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function getFilter(filterName) {
		return this.$viewValue && (0, _lodash2.default)(this.$viewValue) ? this.$viewValue.length ? _defineProperty({}, this.$name, { $in: this.$viewValue }) : null : this.$viewValue ? _defineProperty({}, this.$name, this.$viewValue) : null;
	}
	
	var filterInput = ['$parse', function filterInput($parse) {
		return {
			restrict: 'A',
			require: {
				NgModelCtrl: 'ngModel',
				FilterBuilderCtrl: '^filterBuilder'
			},
			link: function FilterInputLink(scope, el, attrs, ctrl) {
				if (!attrs.name) throw new Error('A filter control is missing its \'name\' attribute!');
				var NgModelCtrl = ctrl.NgModelCtrl,
				    FilterBuilderCtrl = ctrl.FilterBuilderCtrl;
	
				NgModelCtrl.getFilter = getFilter;
				if (attrs.filterInput) {
					$parse(attrs.filterInput).assign(scope, function () {
						return NgModelCtrl.getFilter();
					});
				}
				FilterBuilderCtrl.parts[attrs.ngModel] = NgModelCtrl;
			}
		};
	}];
	
	exports.default = filterInput;

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isArray;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MAP_SETTINGS = {
	  type: 'ROADMAP',
	  styles: [{
	    "stylers": [{
	      "visibility": "on"
	    }, {
	      "saturation": -100
	    }, {
	      "gamma": 0.54
	    }]
	  }, {
	    "featureType": "landscape.natural",
	    "elementType": "geometry",
	    "stylers": [{
	      "visibility": "off"
	    }]
	  }, {
	    "featureType": "road",
	    "elementType": "labels.icon",
	    "stylers": [{
	      "visibility": "off"
	    }]
	  }, {
	    "featureType": "water",
	    "stylers": [{
	      "color": "#B0B0B0"
	    }]
	  }, {
	    "featureType": "poi",
	    "elementType": "labels.icon",
	    "stylers": [{
	      "visibility": "off"
	    }]
	  }, {
	    "featureType": "poi",
	    "elementType": "labels.text",
	    "stylers": [{
	      "visibility": "off"
	    }]
	  }, {
	    "featureType": "road",
	    "elementType": "geometry.fill",
	    "stylers": [{
	      "color": "#ffffff"
	    }]
	  }, {
	    "featureType": "road.local",
	    "elementType": "labels.text",
	    "stylers": [{
	      "visibility": "simplified"
	    }]
	  }, {
	    "featureType": "water",
	    "elementType": "labels.text.fill",
	    "stylers": [{
	      "color": "#ffffff"
	    }]
	  }, {
	    "featureType": "transit.line",
	    "elementType": "geometry",
	    "stylers": [{
	      "gamma": 0.48
	    }]
	  }, {
	    "featureType": "transit.station",
	    "elementType": "labels.icon",
	    "stylers": [{
	      "visibility": "off"
	    }]
	  }, {
	    "featureType": "road",
	    "elementType": "geometry.stroke",
	    "stylers": [{
	      "gamma": 7.18
	    }]
	  }]
	  // [{
	  //   "featureType": "landscape.natural",
	  //   "elementType": "geometry",
	  //   "stylers": [{
	  //     "visibility": "off"
	  //   }]
	  // }, {
	  //   "featureType": "poi.school",
	  //   "elementType": "geometry",
	  //   "stylers": [{
	  //     "color": "#ededed"
	  //   }]
	  // }, {
	  //   "featureType": "landscape.man_made",
	  //   "elementType": "geometry",
	  //   "stylers": [{
	  //     "color": "#0077ca"
	  //   }]
	  // }],
	};
	
	exports.default = MAP_SETTINGS;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MAP_ICONS = {
	  AED: {
	    path: 'M7.5,4A5.5,5.5 0 0,0 2,9.5C2,10 2.09,10.5 2.22,11H6.3L7.57,7.63C7.87,6.83 9.05,6.75 9.43,7.63L11.5,13L12.09,11.58C12.22,11.25 12.57,11 13,11H21.78C21.91,10.5 22,10 22,9.5A5.5,5.5 0 0,0 16.5,4C14.64,4 13,4.93 12,6.34C11,4.93 9.36,4 7.5,4V4M3,12.5A1,1 0 0,0 2,13.5A1,1 0 0,0 3,14.5H5.44L11,20C12,20.9 12,20.9 13,20L18.56,14.5H21A1,1 0 0,0 22,13.5A1,1 0 0,0 21,12.5H13.4L12.47,14.8C12.07,15.81 10.92,15.67 10.55,14.83L8.5,9.5L7.54,11.83C7.39,12.21 7.05,12.5 6.6,12.5H3Z',
	    fillColor: '#c71566',
	    fillOpacity: 1,
	    strokeOpacity: 0.5,
	    strokeWeight: 1,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  ACCESS: {
	    path: 'M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z',
	    fillColor: '#0077CA',
	    fillOpacity: 1,
	    strokeOpacity: 0.5,
	    strokeWeight: 1,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  FOOD: {
	    path: 'M3,3A1,1 0 0,0 2,4V8L2,9.5C2,11.19 3.03,12.63 4.5,13.22V19.5A1.5,1.5 0 0,0 6,21A1.5,1.5 0 0,0 7.5,19.5V13.22C8.97,12.63 10,11.19 10,9.5V8L10,4A1,1 0 0,0 9,3A1,1 0 0,0 8,4V8A0.5,0.5 0 0,1 7.5,8.5A0.5,0.5 0 0,1 7,8V4A1,1 0 0,0 6,3A1,1 0 0,0 5,4V8A0.5,0.5 0 0,1 4.5,8.5A0.5,0.5 0 0,1 4,8V4A1,1 0 0,0 3,3M19.88,3C19.75,3 19.62,3.09 19.5,3.16L16,5.25V9H12V11H13L14,21H20L21,11H22V9H18V6.34L20.5,4.84C21,4.56 21.13,4 20.84,3.5C20.63,3.14 20.26,2.95 19.88,3Z',
	    fillColor: '#5F259F',
	    fillOpacity: 0.8,
	    strokeOpacity: 0.5,
	    strokeWeight: 1,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  SERVICE: {
	    path: 'M18,16H6V15.1C6,13.1 10,12 12,12C14,12 18,13.1 18,15.1M12,5.3C13.5,5.3 14.7,6.5 14.7,8C14.7,9.5 13.5,10.7 12,10.7C10.5,10.7 9.3,9.5 9.3,8C9.3,6.5 10.5,5.3 12,5.3M19,2H5C3.89,2 3,2.89 3,4V18A2,2 0 0,0 5,20H9L12,23L15,20H19A2,2 0 0,0 21,18V4C21,2.89 20.1,2 19,2Z',
	    fillColor: '#003c71',
	    fillOpacity: 0.8,
	    strokeOpacity: 0.5,
	    strokeWeight: 1,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  OUTDOOR: {
	    path: 'M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z',
	    fillColor: '#1a875c',
	    fillOpacity: 0.8,
	    strokeOpacity: 0.5,
	    strokeWeight: 1,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  PARKING: {
	    path: 'M13.2,11H10V7H13.2A2,2 0 0,1 15.2,9A2,2 0 0,1 13.2,11M13,3H6V21H10V15H13A6,6 0 0,0 19,9C19,5.68 16.31,3 13,3Z',
	    fillColor: '#1a875c',
	    fillOpacity: 0.8,
	    strokeOpacity: 0.5,
	    strokeWeight: 1,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  DEFAULT: {
	    path: 'M3.83,3.57A11.8,11.8,0,0,1,12.5,0a11.8,11.8,0,0,1,8.67,3.57,11.8,11.8,0,0,1,3.57,8.67,16.43,16.43,0,0,1-1.27,5.83,36,36,0,0,1-3.08,6.16q-1.81,2.88-3.57,5.38t-3,4L12.5,35l-1.31-1.52q-.82-.94-3-3.78a63.32,63.32,0,0,1-3.74-5.5,40,40,0,0,1-2.92-6A16.62,16.62,0,0,1,.26,12.24,11.8,11.8,0,0,1,3.83,3.57ZM9.42,15.32A4.2,4.2,0,0,0,12.5,16.6a4.35,4.35,0,0,0,4.35-4.35A4.35,4.35,0,0,0,12.5,7.89a4.35,4.35,0,0,0-4.35,4.35A4.2,4.2,0,0,0,9.42,15.32Z',
	    strokeColor: 'white',
	    strokeOpacity: 0.5,
	    strokeWeight: 1,
	    fillColor: '#003c71',
	    fillOpacity: 0.9,
	    rotation: 0,
	    scale: 1.0,
	    anchor: new google.maps.Point(12.5, 35),
	    size: new google.maps.Size(30, 40)
	  }
	};
	
	exports.default = MAP_ICONS;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var templates = ['$templateCache', function ($templateCache) {
	  $templateCache.put('_map.html', '<ng-map\n  center="43.9443802,-78.8975857"\n  zoom="17"\n  styles="{{ ::$ctrl._MAP_SETTINGS.styles }}"\n  map-type-id="{{ ::$ctrl._MAP_SETTINGS.type }}"\n  disable-default-u-i="true"\n  tilt="45"\n  heading="0"\n  layout\n  layout-fill>\n</ng-map>\n<div ng-transclude="controls" class="map-controls"></div>');
	  $templateCache.put('controls/_map-controls.html', '<div class="map-controls-handle" layout="row" ng-class="{ \'map-controls-open\': $ctrl.mapControlsOpen }">\n\t<md-button ng-click="$ctrl.mapControlsOpen = !$ctrl.mapControlsOpen">\n\t  <svg style="width:32px;height:32px" viewBox="0 0 24 24">\n\t    <path fill="#FFFFFF" d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z" />\n\t\t</svg>\n\t</md-button>\n\n\t<md-sidenav\n\t    class="md-sidenav-right map-controls-sidenav"\n\t    md-component-id="uoit-campus-map:right"\n\t    md-disable-backdrop\n\t    md-whiteframe="4"\n\t    md-is-locked-open="$ctrl.mapControlsOpen" \n\t    md-is-open="$ctrl.mapControlsOpen"\n\t    layout="column">\n\t  <md-toolbar class="md-primary" layout>\n\t    <div class="md-toolbar-tools">\n\t\t  \t<h1>Map filtering</h1>\n\t  \t</div>\n\t  </md-toolbar>\n\n\t  <md-content\n\t\t  flex="grow"\n\t\t  layout="column">\n\t\t\t<filter-builder ng-model="$ctrl.filter" on-update="$ctrl.loadFeatures($ctrl.filter)" layout="column" layout-padding flex="grow">\n\t\t\t  <md-input-container>\n\t\t\t    <label>Location</label>\n\t\t\t    <md-select ng-model="$ctrl.location" md-on-open="$ctrl.loadLocations()" filter-input name="location" md-on-close="$ctrl.loadFeatures($ctrl.filter)">\n\t\t\t      <md-option ng-repeat="location in ::$ctrl.locations" ng-value="::location._id" ng-disabled="$ctrl.location === location">\n\t\t\t        {{ ::location.label}}\n\t\t\t      </md-option>\n\t\t\t    </md-select>\n\t\t\t  </md-input-container>\n\n\t\t\t  <md-input-container>\n\t\t\t    <label>Feature category</label>\n\t\t\t    <md-select ng-model="$ctrl.category" md-on-open="$ctrl.loadCategories()" ng-disabled="!$ctrl.location.length" multiple filter-input name="properties.category" md-on-close="$ctrl.loadFeatures($ctrl.filter)">\n\t\t\t      <md-option ng-repeat="category in $ctrl.categories" ng-value="::category._id" ng-disabled="$ctrl.category === category">\n\t\t\t        {{ ::category.name }}\n\t\t\t      </md-option>\n\t\t\t    </md-select>\n\t\t\t  </md-input-container>\n\t\t\t  <div layout-padding>\n\t        <md-checkbox aria-label="Select All"\n\t\t\t\t\t\tng-checked="$ctrl.isChecked(\'category\', \'categories\')"\n\t\t\t\t\t\tmd-indeterminate="$ctrl.isIndeterminate(\'category\', \'categories\')"\n\t\t\t\t\t\tng-click="$ctrl.toggleAll(\'category\', \'categories\')">\n\t\t\t\t\t\tSelect all categories\n\t        </md-checkbox>\n        </div>\n<!-- \t\t\t\t<div>\n\t\t\t    <md-chips>\n\t\t\t      <md-chip ng-repeat="category in $ctrl.getItemsInListByProp($ctrl.category, $ctrl.categories, \'_id\') track by $index">\n\t\t\t      \t{{ category.name }}\n\t\t\t\t\t\t  <button class="md-chip-remove" ng-click="$ctrl.removeItemFromList(category._id, $ctrl.category)">&times;</button>\n\t\t\t      </md-chip>\n\t\t\t\t\t</md-chips>\n\t\t\t\t</div> -->\n\n\t\t\t  <md-input-container>\n\t\t\t    <label>Feature collection</label>\n\t\t\t    <md-select ng-model="$ctrl.collection" md-on-open="$ctrl.loadCollections()" ng-disabled="!$ctrl.category.length" multiple filter-input="filters.collection" name="group" md-on-close="$ctrl.loadFeatures($ctrl.filter)">\n\t\t\t      <md-optgroup ng-repeat="group in $ctrl.getItemsInListByProp($ctrl.category, $ctrl.categories, \'_id\')" label="{{ ::group.name }}">\n\t\t\t        <md-option ng-repeat="collection in $ctrl.collections | filter: { category: group._id }" ng-value="::collection._id" ng-disabled="$ctrl.collection === collection">\n\t\t\t          {{ ::collection.name }}\n\t\t\t        </md-option>\n\t\t\t      </md-optgroup>\n\t\t\t    </md-select>\n\t\t\t  </md-input-container>\n\t\t\t  <div layout-padding>\n\t        <md-checkbox aria-label="Select All"\n\t\t\t\t\t\tng-checked="$ctrl.isChecked(\'collection\', \'collections\')"\n\t\t\t\t\t\tmd-indeterminate="$ctrl.isIndeterminate(\'collection\', \'collections\')"\n\t\t\t\t\t\tng-click="$ctrl.toggleAll(\'collection\', \'collections\')">\n\t\t\t\t\t\tSelect all collections\n\t        </md-checkbox>\n        </div>\n\t\t\t\t<!-- <small><pre>{{ $ctrl.filter | json }}</pre></small> -->\n\t\t\t</filter-builder>\n\t<!--   <div layout="column">\n\n\t    <md-button class="md-primary" ng-click="$ctrl.showAll()">\n\t    \tShow all\n\t      <md-tooltip md-direction="bottom">\n\t        Turn on visibility for all available map features\n\t      </md-tooltip>\n\t    </md-button>\n\t  </div> -->\n\t  </md-content>\n\t</md-sidenav>\n</div>');
	  $templateCache.put('detail/_map-detail.html', '<md-whiteframe\n  class="md-whiteframe-16dp"\n  layout="column">\n  <md-toolbar>\n    <div class="md-toolbar-tools">\n      <h2>\n        <span>{{ ::ctrl.name }}</span>\n      </h2>\n      <span flex></span>\n      <md-button class="md-icon-button" aria-label="Close info" ng-click="ctrl.close()">\n        <span>&times;</span>\n      </md-button>\n    </div>\n  </md-toolbar>\n  <div\n  \tlayout="column"\n  \tlayout-margin\n  \tlayout-align="center center">\n    <md-button ng-click="ctrl.showDetails()">{{ ctrl.detailsShowing ? \'Hide\' : \'Show\'}} details <span class="detail-arrow" ng-class="{ \'arrow-up\' : ctrl.detailsShowing }"></span></md-button>\n  \t<md-content layout-padding layout-margin class="details-text" ng-bind-html="::ctrl.description" ng-show="ctrl.detailsShowing"></md-content>\n  \t<md-button layout-padding class="md-raised md-primary" aria-label="Tour this building" ng-if="::ctrl.building" ng-click="ctrl.gotoBldg()">\n  \t\tTake a tour &raquo;\n  \t</md-button>\n  </div>\n</md-whiteframe>');
	}];exports.default = templates;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=uoit-campus-map.js.map