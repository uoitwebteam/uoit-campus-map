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
	
	var _map_controller = __webpack_require__(2);
	
	var _map_controller2 = _interopRequireDefault(_map_controller);
	
	var _mapControls_component = __webpack_require__(4);
	
	var _mapControls_component2 = _interopRequireDefault(_mapControls_component);
	
	var _mapControls_controller = __webpack_require__(5);
	
	var _mapControls_controller2 = _interopRequireDefault(_mapControls_controller);
	
	var _mapDetail_controller = __webpack_require__(3);
	
	var _mapDetail_controller2 = _interopRequireDefault(_mapDetail_controller);
	
	var _mapSettings_constant = __webpack_require__(6);
	
	var _mapSettings_constant2 = _interopRequireDefault(_mapSettings_constant);
	
	var _mapIcons_constant = __webpack_require__(7);
	
	var _mapIcons_constant2 = _interopRequireDefault(_mapIcons_constant);
	
	var _templates = __webpack_require__(8);
	
	var _templates2 = _interopRequireDefault(_templates);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	// ----------------
	
	exports.default = angular.module('campusMap', []).run(_templates2.default).controller('MapCtrl', _map_controller2.default).controller('MapControlsCtrl', _mapControls_controller2.default).component('campusMap', _map_component2.default).component('campusMapControls', _mapControls_component2.default).constant('MAP_SETTINGS', _mapSettings_constant2.default).constant('MAP_ICONS', _mapIcons_constant2.default);
	
	// development only
	//

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var campusMap = {
	  // transclude: true,
	  bindings: {
	    onGotoBldg: '<',
	    collection: '<?'
	    // location: '<?',
	    // building: '<?',
	    // feature: '<?'
	  },
	  templateUrl: '_map.html',
	  controller: 'MapCtrl'
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
	
			// attach dependencies
			this._$timeout = $timeout;
			this._$scope = $scope;
			this._$window = $window;
			this._$mdToast = $mdToast;
			this._$mdPanel = $mdPanel;
			// init constants
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
		}
	
		_createClass(MapCtrl, [{
			key: '$onInit',
			value: function $onInit() {
				var _this = this;
	
				this.getMap().then(function (instance) {
					_this.map = instance;
	
					/*
	    	This is a stupid hack that makes the map fill space by force.
	    	Best not used whenever possible.
	     */
					// angular.element(this._$window).triggerHandler('resize');
					google.maps.event.trigger(instance, 'resize');
	
					instance.data.setStyle(function (feature) {
						var category = feature.getProperty('category');
						switch (category) {
							case '581a2c57d9ff16e787aa1b20':
								// Services
								return { icon: _this._MAP_ICONS.SERVICE };
								break;
							case '581a2c5ed9ff16e787aa1b21':
								// Emergency services
								return { icon: _this._MAP_ICONS.AED };
								break;
							case '581a2c77d9ff16e787aa1b22':
								// Restaurants and food courts
								return {
									icon: _this._MAP_ICONS.FOOD,
									fillColor: '#5F259F',
									fillOpacity: 1,
									strokeWeight: 3,
									strokeColor: 'white',
									strokeOpacity: 0.3
								};
								break;
							case '581a2c8ad9ff16e787aa1b24':
								// Parking
								return {
									icon: _this._MAP_ICONS.PARKING,
									fillColor: '#53565A',
									fillOpacity: 0.5,
									strokeWeight: 3,
									strokeColor: 'white',
									strokeOpacity: 0.3
								};
								break;
							case '581a2c8fd9ff16e787aa1b25':
								// Parking
								return {
									icon: _this._MAP_ICONS.OUTDOOR,
									fillColor: '#1a875c',
									fillOpacity: 0.5,
									strokeWeight: 3,
									strokeColor: 'white',
									strokeOpacity: 0.1
								};
								break;
							default:
								// other
								return {
									icon: _this._MAP_ICONS.DEFAULT,
									fillColor: '#0077CA',
									fillOpacity: 1,
									strokeWeight: 3,
									strokeColor: '#003C71',
									strokeOpacity: 0.3
								};
						}
					});
	
					instance.data.addListener('mouseover', function (event) {
						instance.data.overrideStyle(event.feature, {
							fillColor: '#C71566',
							fillOpacity: 0.7,
							strokeWeight: 5,
							strokeColor: 'white',
							strokeOpacity: 0.7
						});
						_this.showToast(event.feature);
					});
	
					instance.data.addListener('mouseout', function (event) {
						instance.data.revertStyle();
						_this.toastCanceler = _this.hideToast();
					});
	
					instance.data.addListener('click', function (event) {
						_this.showDetail(event.feature, _this.isolateMouseEvent(event));
					});
	
					_this._$scope.$watch(function () {
						return _this.mapControls;
					}, function (newVal) {
						if (newVal) {
							console.log('map component detected internal changes:', newVal);
							_this.clearMapData().then(function () {
								return _this.updateMapData(newVal);
							});
							if (newVal.location && _this.location !== newVal.location) {
								_this.location = newVal.location;
							}
						}
					});
				});
			}
	
			// $onChanges({ collection: { currentValue: collection} }) {
			// 	console.log('map component detected external changes:', collection);
			//  	this.clearMapData().then(() => this.updateMapData({ collection }));
			// }
	
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
					if (newVal.collection) {
						if (angular.isArray(newVal.collection)) {
							angular.forEach(newVal.collection, function (collection, index) {
								_this2._$scope.$applyAsync(function () {
									return map.data.loadGeoJson('http://localhost:3000/api/v1/feature-collections/' + collection._id, null, function () {
										index === newVal.collection.length - 1 && _this2.fitBounds(map);
										console.log('map data updated!');
									});
								});
							});
						} else {
							map.data.addGeoJson(newVal.collection);
						}
						console.log('map data updated!');
					}
					// } else {
					// 	this._$scope.$applyAsync(() => {
					// 		angular.forEach(newVal.collection, (collection, index) => {
					// 			map.data.loadGeoJson(`http://localhost:3000/api/v1/feature-collections/${collection._id}`, null, () => {
					// 			  (index === newVal.collection.length - 1) && this.fitBounds(map);
					// 				console.log('map data updated!');
					//   		});
					// 		});
					// 	});
					// }
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
			value: function showDetail(feature, _ref) {
				var left = _ref.clientX,
				    top = _ref.clientY;
	
	
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
						callback: this.onGotoBldg(),
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
			value: function fitBounds() {
				var _this6 = this;
	
				var bounds = new google.maps.LatLngBounds();
				this.map.data.forEach(function (feature) {
					_this6.processBounds(feature.getGeometry(), bounds.extend, bounds);
				});
				this.map.fitBounds(bounds);
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
	
			if (this.feature.getProperty('linked')) {
				this.building = this.feature.getProperty('building');
	
				this.name = this.building.name;
				this.description = $sce.trustAsHtml(this.building.desc);
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
	   * @param  {Function} callback The function to be run
	   * @return {Promise}           Status of dialog close
	   */
	
		}, {
			key: 'gotoBldg',
			value: function gotoBldg(callback) {
				var location = this.location,
				    building = this.building;
	
				return this.close().then(function () {
					callback({
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
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var campusMapControls = {
	  require: {
	    $ngModel: 'ngModel'
	    // MapCtrl: '^map'
	  },
	  templateUrl: 'controls/_map-controls.html',
	  controller: 'MapControlsCtrl'
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
	
	    this.FeatureResource = $mapApi.feature;
	    this.CollectionResource = $mapApi.collection;
	    this.CategoryResource = $mapApi.category;
	    this.LocationResource = $tourApi.location;
	  }
	
	  /**
	   * Initializes the controls (show all map elements)
	   */
	
	
	  _createClass(MapControlsCtrl, [{
	    key: '$onInit',
	    value: function $onInit() {
	      var _this = this;
	
	      this.loadLocations().then(function (locations) {
	        _this.location = locations[1];
	        _this.updateLocation();
	        // this.showAll();
	        // angular.element(this.$window).triggerHandler('resize');
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
	
	      return this.LocationResource.query().$promise.then(function (locations) {
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
	
	      return this.CategoryResource.query().$promise.then(function (categories) {
	        _this3.categories = categories;
	        return categories;
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
	    value: function loadFeatures() {
	      var _this4 = this;
	
	      return this.FeatureResource.query({
	        filter: {
	          'properties.category': {
	            $in: [].concat(_toConsumableArray(this.category.map(function (category) {
	              return category._id;
	            })))
	          }
	        }
	      }).$promise.then(function (features) {
	        _this4.features = features;
	        console.log('FEATURES:', features);
	        return features;
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
	      var _this5 = this;
	
	      return this.CollectionResource.query({
	        filter: {
	          location: this.location._id,
	          category: {
	            $in: [].concat(_toConsumableArray(this.category.map(function (category) {
	              return category._id;
	            })))
	          }
	        }
	      }).$promise.then(function (collections) {
	        _this5.collections = collections;
	        return collections;
	      });
	    }
	
	    /**
	     * After selecting a location, loads categories and sets category
	     * to first item in list; kicks off category update.
	     */
	
	  }, {
	    key: 'updateLocation',
	    value: function updateLocation() {
	      var _this6 = this;
	
	      this.loadCategories().then(function (categories) {
	        _this6.category = [].concat(_toConsumableArray(categories));
	        _this6.updateCategory();
	      });
	    }
	
	    /**
	     * After selecting a category, loads collections and sets collection
	     * to first item in list; kicks off collection update.
	     */
	
	  }, {
	    key: 'updateCategory',
	    value: function updateCategory() {
	      var _this7 = this;
	
	      this.loadFeatures().then(function () {
	        return _this7.updateFeatures();
	      }).then(function () {
	        return _this7.loadCollections();
	      }).then(function (collections) {
	        _this7.collection = [].concat(_toConsumableArray(collections));
	        //   this.updateCollection();
	      });
	    }
	  }, {
	    key: 'updateFeatures',
	    value: function updateFeatures() {
	      var location = this.location,
	          category = this.category,
	          features = this.features;
	
	      this.setCollection({
	        location: location,
	        category: category,
	        collection: {
	          type: 'FeatureCollection',
	          features: features
	        }
	      });
	    }
	
	    /**
	     * After selecting a collection, extracts all relevant filter
	     * properties from controller and uses `setCollection()` to
	     * send the data to the view.
	     */
	
	  }, {
	    key: 'updateCollection',
	    value: function updateCollection() {
	      var location = this.location,
	          category = this.category,
	          collection = this.collection;
	
	      this.setCollection({
	        location: location,
	        category: category,
	        collection: collection
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
	     * @example
	     * // "true" collection
	     * const feature = this.CollectionResource.get('featureId');
	     * this.setCollection({ feature });
	     * 
	     * // mock collection
	     * const features = this.FeatureResource.query();
	     * this.setCollection({
	     *   collection: {
	     *     type: 'FeatureCollection',
	     *     features
	     *   }
	     * }, true);
	     * 
	     * @param {Object}  resources
	     * @param {Object}  resources.location    Currently selected location `$resource`
	     * @param {Object}  resources.category    Currently selected category `$resource`
	     * @param {Object}  resources.collection  Currently selected collection `$resource`
	     * @param {Boolean} [showAll=false]       Whether to show all features
	     */
	
	  }, {
	    key: 'setCollection',
	    value: function setCollection(_ref) {
	      var location = _ref.location,
	          category = _ref.category,
	          collection = _ref.collection;
	      var showAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      this.$ngModel.$setViewValue({
	        location: location,
	        category: category,
	        collection: collection,
	        showAll: showAll
	      });
	    }
	
	    /**
	     * Fetches a list of every feature available for display on the map; mocks up
	     * a "fake" `FeatureCollection` and uses `setCollection()` to render the
	     * selection to the component.
	     * 
	     * @return {Promise} Resolves to a list of the returned features
	     */
	
	  }, {
	    key: 'showAll',
	    value: function showAll() {
	      var _this8 = this;
	
	      console.log('show all activated!');
	      return this.FeatureResource.query({}).$promise.then(function (features) {
	        _this8.setCollection({
	          location: _this8.location,
	          collection: {
	            type: 'FeatureCollection',
	            features: features
	          }
	        }, true);
	        return features;
	      });
	    }
	  }]);
	
	  return MapControlsCtrl;
	}();
	
	exports.default = MapControlsCtrl;

/***/ },
/* 6 */
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
/* 7 */
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
	    strokeWeight: 2,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  ACCESS: {
	    path: 'M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z',
	    fillColor: '#0077CA',
	    fillOpacity: 1,
	    strokeOpacity: 0.5,
	    strokeWeight: 2,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  FOOD: {
	    path: 'M3,3A1,1 0 0,0 2,4V8L2,9.5C2,11.19 3.03,12.63 4.5,13.22V19.5A1.5,1.5 0 0,0 6,21A1.5,1.5 0 0,0 7.5,19.5V13.22C8.97,12.63 10,11.19 10,9.5V8L10,4A1,1 0 0,0 9,3A1,1 0 0,0 8,4V8A0.5,0.5 0 0,1 7.5,8.5A0.5,0.5 0 0,1 7,8V4A1,1 0 0,0 6,3A1,1 0 0,0 5,4V8A0.5,0.5 0 0,1 4.5,8.5A0.5,0.5 0 0,1 4,8V4A1,1 0 0,0 3,3M19.88,3C19.75,3 19.62,3.09 19.5,3.16L16,5.25V9H12V11H13L14,21H20L21,11H22V9H18V6.34L20.5,4.84C21,4.56 21.13,4 20.84,3.5C20.63,3.14 20.26,2.95 19.88,3Z',
	    fillColor: '#5F259F',
	    fillOpacity: 0.8,
	    strokeOpacity: 0.5,
	    strokeWeight: 2,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  SERVICE: {
	    path: 'M18,16H6V15.1C6,13.1 10,12 12,12C14,12 18,13.1 18,15.1M12,5.3C13.5,5.3 14.7,6.5 14.7,8C14.7,9.5 13.5,10.7 12,10.7C10.5,10.7 9.3,9.5 9.3,8C9.3,6.5 10.5,5.3 12,5.3M19,2H5C3.89,2 3,2.89 3,4V18A2,2 0 0,0 5,20H9L12,23L15,20H19A2,2 0 0,0 21,18V4C21,2.89 20.1,2 19,2Z',
	    fillColor: '#003c71',
	    fillOpacity: 0.8,
	    strokeOpacity: 0.5,
	    strokeWeight: 2,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  OUTDOOR: {
	    path: 'M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z',
	    fillColor: '#1a875c',
	    fillOpacity: 0.8,
	    strokeOpacity: 0.5,
	    strokeWeight: 2,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  PARKING: {
	    path: 'M13.2,11H10V7H13.2A2,2 0 0,1 15.2,9A2,2 0 0,1 13.2,11M13,3H6V21H10V15H13A6,6 0 0,0 19,9C19,5.68 16.31,3 13,3Z',
	    fillColor: '#1a875c',
	    fillOpacity: 0.8,
	    strokeOpacity: 0.5,
	    strokeWeight: 2,
	    strokeColor: 'white',
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  DEFAULT: {
	    path: 'M3.83,3.57A11.8,11.8,0,0,1,12.5,0a11.8,11.8,0,0,1,8.67,3.57,11.8,11.8,0,0,1,3.57,8.67,16.43,16.43,0,0,1-1.27,5.83,36,36,0,0,1-3.08,6.16q-1.81,2.88-3.57,5.38t-3,4L12.5,35l-1.31-1.52q-.82-.94-3-3.78a63.32,63.32,0,0,1-3.74-5.5,40,40,0,0,1-2.92-6A16.62,16.62,0,0,1,.26,12.24,11.8,11.8,0,0,1,3.83,3.57ZM9.42,15.32A4.2,4.2,0,0,0,12.5,16.6a4.35,4.35,0,0,0,4.35-4.35A4.35,4.35,0,0,0,12.5,7.89a4.35,4.35,0,0,0-4.35,4.35A4.2,4.2,0,0,0,9.42,15.32Z',
	    strokeColor: 'white',
	    strokeOpacity: 0.5,
	    strokeWeight: 2,
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
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var templates = ['$templateCache', function ($templateCache) {
	  $templateCache.put('_map.html', '<ng-map\n  center="43.9443802,-78.8975857"\n  zoom="17"\n  styles="{{ ::$ctrl._MAP_SETTINGS.styles }}"\n  map-type-id="{{ ::$ctrl._MAP_SETTINGS.type }}"\n  disable-default-u-i="true"\n  tilt="45"\n  heading="0"\n  layout\n  layout-fill>\n  <custom-control id="map-controls" position="TOP_LEFT" index="1">\n\t\t<campus-map-controls ng-model="$ctrl.mapControls"></campus-map-controls>\n  </custom-control>\n</ng-map>');
	  $templateCache.put('detail/_map-detail.html', '<md-whiteframe\n  class="md-whiteframe-16dp"\n  layout="column">\n  <md-toolbar>\n    <div class="md-toolbar-tools">\n      <h2>\n        <span>{{ ::ctrl.name }}</span>\n      </h2>\n      <span flex></span>\n      <md-button class="md-icon-button" aria-label="Close info" ng-click="ctrl.close()">\n        <span>&times;</span>\n      </md-button>\n    </div>\n  </md-toolbar>\n  <div\n  \tlayout="column"\n  \tlayout-margin\n  \tlayout-align="center center">\n    <md-button ng-click="ctrl.showDetails()">{{ ctrl.detailsShowing ? \'Hide\' : \'Show\'}} details <span class="detail-arrow" ng-class="{ \'arrow-up\' : ctrl.detailsShowing }"></span></md-button>\n  \t<md-content layout-padding layout-margin class="details-text" ng-bind-html="::ctrl.description" ng-show="ctrl.detailsShowing"></md-content>\n  \t<md-button layout-padding class="md-raised md-primary" aria-label="Tour this building" ng-if="::ctrl.building" ng-click="ctrl.gotoBldg(ctrl.callback)">\n  \t\tTake a tour &raquo;\n  \t</md-button>\n  </div>\n</md-whiteframe>');
	  $templateCache.put('controls/_map-controls.html', '<md-whiteframe\n  class="md-whiteframe-16dp map-controls"\n  layout="column"\n  layout-align="center center"\n  layout-fill>\n  <div layout="row">\n\n    <md-input-container flex>\n      <label>Location</label>\n      <md-select ng-model="$ctrl.location" md-on-open="$ctrl.loadLocations()" ng-change="$ctrl.updateLocation()" ng-model-options="{trackBy: \'$value._id\'}">\n        <md-option ng-repeat="location in ::$ctrl.locations" ng-value="::location" ng-disabled="$ctrl.location === location">\n          {{ ::location.label}}\n        </md-option>\n      </md-select>\n    </md-input-container>\n\n    <md-input-container flex>\n      <label>Feature category</label>\n      <md-select ng-model="$ctrl.category" md-on-open="$ctrl.loadCategories()" ng-change="$ctrl.updateCategory()" ng-model-options="{trackBy: \'$value._id\'}" ng-disabled="!$ctrl.location" multiple>\n        <md-option ng-repeat="category in $ctrl.categories" ng-value="::category" ng-disabled="$ctrl.category === category">\n          {{ ::category.name }}\n        </md-option>\n      </md-select>\n    </md-input-container>\n\n    <md-input-container flex>\n      <label>Feature collection</label>\n      <md-select ng-model="$ctrl.collection" md-on-open="$ctrl.loadCollections()" ng-change="$ctrl.updateCollection()" ng-model-options="{trackBy: \'$value._id\'}" ng-disabled="!$ctrl.category" multiple>\n        <md-optgroup ng-repeat="group in $ctrl.category" label="{{ ::group.name }}">\n\t        <md-option ng-repeat="collection in $ctrl.collections | filter: { category: group._id }" ng-value="::collection" ng-disabled="$ctrl.collection === collection">\n\t          {{ ::collection.name }}\n\t        </md-option>\n        </md-optgroup>\n      </md-select>\n    </md-input-container>\n\n  </div>\n  <div layout="row">\n\n    <md-button class="md-primary" ng-click="$ctrl.showAll()">\n    \tShow all\n      <md-tooltip md-direction="bottom">\n        Turn on visibility for all available map features\n      </md-tooltip>\n    </md-button>\n    \n  </div>\n</md-whiteframe>');
	}];exports.default = templates;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=uoit-campus-map.js.map