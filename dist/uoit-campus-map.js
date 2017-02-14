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
	
	var _mapControls_component = __webpack_require__(10);
	
	var _mapControls_component2 = _interopRequireDefault(_mapControls_component);
	
	var _filterBuilder_directive = __webpack_require__(14);
	
	var _filterBuilder_directive2 = _interopRequireDefault(_filterBuilder_directive);
	
	var _filterInput_directive = __webpack_require__(16);
	
	var _filterInput_directive2 = _interopRequireDefault(_filterInput_directive);
	
	var _map_constant = __webpack_require__(18);
	
	var _map_constant2 = _interopRequireDefault(_map_constant);
	
	var _templates = __webpack_require__(19);
	
	var _templates2 = _interopRequireDefault(_templates);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	// ----------------
	
	exports.default = angular.module('campusMap', []).run(_templates2.default).component('campusMap', _map_component2.default).component('campusMapControls', _mapControls_component2.default).directive('filterBuilder', _filterBuilder_directive2.default).directive('filterInput', _filterInput_directive2.default).constant('MAP_DEFAULTS', _map_constant2.default);
	
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
	
	__webpack_require__(8);
	
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
				'MAP_DEFAULTS' // constants
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
	
		function MapCtrl($timeout, $scope, $window, NgMap, $mdToast, $mdPanel, MAP_DEFAULTS) {
			_classCallCheck(this, MapCtrl);
	
			this._$timeout = $timeout;
			this._$scope = $scope;
			this._$window = $window;
			this._$mdToast = $mdToast;
			this._$mdPanel = $mdPanel;
			this._defaults = MAP_DEFAULTS;
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
	
					instance.data.setStyle(function (feature) {
						return Object.assign({}, _this._defaults.geometryStyles, { icon: _this._defaults.iconStyles, title: feature.getProperty('name') }, _this.categories[feature.getProperty('category')]);
					});
	
					/**
	     * Property to store map event listeners for later deregistration.
	     * @type {Object}
	     */
					_this.listeners = {
						mouseover: function mouseover(event) {
							instance.data.overrideStyle(event.feature, _this._defaults.hoverStyles);
							_this.showToast(event.feature);
						},
						mouseout: function mouseout(event) {
							instance.data.revertStyle();
							_this.toastCanceler = _this.hideToast();
						},
						click: function click(event) {
							_this.showDetail(event.feature, _this.isolateMouseEvent(event));
						}
					};
	
					Object.keys(_this.listeners).forEach(function (event) {
						return instance.data.addListener(event, _this.listeners[event]);
					});
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
				var _this2 = this;
	
				this.getMap().then(function (instance) {
					Object.keys(_this2.listeners).forEach(function (event) {
						return instance.data.removeListener(event, _this2.listeners[event]) && console.log('map listener removed!');
					});
					// this.mapListeners.forEach(listener => google.maps.event.removeListener(listener)&&console.log('map listener removed!'));
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
				var _this3 = this;
	
				console.log('updating map data...', newVal);
				return this.clearMapData().then(function (map) {
					if (newVal.collection.features.length && newVal.category.length) {
						map.data.addGeoJson(newVal.collection);
						_this3.fitBounds(map);
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
				var _this4 = this;
	
				var featureName = feature.getProperty('name');
				if (!this.toastActive) {
					this.toast.textContent(featureName).position('bottom left').hideDelay(0);
					this._$mdToast.show(this.toast);
					this.toastActive = true;
				} else {
					this._$timeout.cancel(this.toastCanceler);
					this._$timeout(function () {
						_this4._$mdToast.updateTextContent(featureName);
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
				var _this5 = this;
	
				return this._$timeout(function () {
					_this5._$mdToast.hide(_this5.toast);
					_this5.toastActive = false;
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
				var _this6 = this;
	
				if (geometry instanceof google.maps.LatLng) {
					callback.call(thisArg, geometry);
				} else if (geometry instanceof google.maps.Data.Point) {
					callback.call(thisArg, geometry.get());
				} else {
					geometry.getArray().forEach(function (g) {
						_this6.processBounds(g, callback, thisArg);
					});
				}
			}
	
			/**
	   * Resizes map view to fit recalculated bounds.
	   */
	
		}, {
			key: 'fitBounds',
			value: function fitBounds(map) {
				var _this7 = this;
	
				var bounds = new google.maps.LatLngBounds();
				map.data.forEach(function (feature) {
					_this7.processBounds(feature.getGeometry(), bounds.extend, bounds);
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(4);
	
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

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/lib/loader.js?sourceMap!./map-detail.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/lib/loader.js?sourceMap!./map-detail.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".map-detail {\n  /* max-width: 400px; */\n  background-color: rgba(255, 255, 255, 0.75);\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n\n.details-text {\n  font-size: 14px;\n  /* max-height: 300px; */\n  line-height: 1.6em;\n  color: rgba(0, 0, 0, 0.54); }\n\n.detail-arrow {\n  margin-left: 3px; }\n  .detail-arrow::after {\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    content: '';\n    border-bottom: solid 2px;\n    border-right: solid 2px;\n    transform: rotate(45deg);\n    transition: transform 0.3s ease; }\n  .detail-arrow.arrow-up::after {\n    transform: rotate(-135deg); }\n", "", {"version":3,"sources":["/./src/detail/map-detail.scss"],"names":[],"mappings":"AAAA;EACC,uBAAuB;EACtB,4CAA2C;EAC3C,yBAAwB;EACxB,iBAAgB,EACjB;;AAED;EACC,gBAAe;EACf,wBAAwB;EACxB,mBAAkB;EAClB,2BAAuB,EACvB;;AACD;EACC,iBAAgB,EAchB;EAfD;IAGE,sBAAqB;IACrB,WAAU;IACV,YAAW;IACX,YAAW;IACX,yBAAwB;IACxB,wBAAuB;IACvB,yBAAwB;IACxB,gCAA+B,EAC/B;EAXF;IAaE,2BAA0B,EAC1B","file":"map-detail.scss","sourcesContent":[".map-detail {\n\t/* max-width: 400px; */\n  background-color: rgba(255, 255, 255, 0.75);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.details-text {\n\tfont-size: 14px;\n\t/* max-height: 300px; */\n\tline-height: 1.6em;\n\tcolor: rgba(0,0,0,0.54);\n}\n.detail-arrow {\n\tmargin-left: 3px;\n\t&::after {\n\t\tdisplay: inline-block;\n\t\twidth: 6px;\n\t\theight: 6px;\n\t\tcontent: '';\n\t\tborder-bottom: solid 2px;\n\t\tborder-right: solid 2px;\n\t\ttransform: rotate(45deg);\n\t\ttransition: transform 0.3s ease;\n\t}\n\t&.arrow-up::after {\n\t\ttransform: rotate(-135deg);\n\t}\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/sass-loader/lib/loader.js?sourceMap!./map.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/sass-loader/lib/loader.js?sourceMap!./map.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "ng-map,\ncampus-map {\n  width: 100%;\n  height: 100%; }\n\ncampus-map {\n  background: linear-gradient(135deg, rgba(0, 119, 202, 0.7) 0%, rgba(199, 21, 102, 0.7) 100%) !important; }\n\nng-map,\nng-map > div,\nng-map > div > div {\n  background-color: transparent !important; }\n", "", {"version":3,"sources":["/./src/map.scss"],"names":[],"mappings":"AAAA;;EAEE,YAAW;EACX,aAAY,EACb;;AAED;EACC,wGAAgG,EAChG;;AAED;;;EAGE,yCAAwC,EACzC","file":"map.scss","sourcesContent":["ng-map,\ncampus-map {\n  width: 100%;\n  height: 100%;\n}\n\ncampus-map {\n\tbackground: linear-gradient(135deg, rgba(0,119,202,0.7) 0%,rgba(199,21,102,0.7) 100%) !important;\n}\n\nng-map,\nng-map > div,\nng-map > div > div {\n  background-color: transparent !important;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mapControls_controller = __webpack_require__(11);
	
	var _mapControls_controller2 = _interopRequireDefault(_mapControls_controller);
	
	__webpack_require__(12);
	
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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/lib/loader.js?sourceMap!./map-controls.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/lib/loader.js?sourceMap!./map-controls.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".map-controls-sidenav {\n  background: rgba(255, 255, 255, 0.8); }\n  .map-controls-sidenav md-content {\n    background: transparent; }\n\n.map-controls-handle {\n  height: 100%;\n  position: absolute;\n  right: 0; }\n  .map-controls-handle .md-button {\n    transition: 0.4s ease;\n    background: rgba(0, 0, 0, 0.15); }\n  .map-controls-handle .map-controls-open .md-button {\n    /* opacity: 0; */\n    transition: 0.4s ease;\n    transform: translateX(70%); }\n    .map-controls-handle .map-controls-open .md-button svg {\n      transition: 0.6s ease;\n      transform: translateX(-80%) rotateY(180deg); }\n\n.map-controls md-input-container {\n  padding: 0;\n  /* max-width: 260px; */\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0; }\n\n.map-controls .md-chips {\n  font-size: 12px; }\n\n.map-controls:hover {\n  background-color: rgba(255, 255, 255, 0.9); }\n\nmd-toolbar:not(.md-menu-toolbar),\n.md-button.md-primary.md-raised {\n  background-color: #0077CA; }\n", "", {"version":3,"sources":["/./src/controls/map-controls.scss"],"names":[],"mappings":"AAAA;EACC,qCAAiC,EAIjC;EALD;IAGE,wBAAuB,EACvB;;AAGF;EACC,aAAY;EACZ,mBAAkB;EAClB,SAAQ,EAcR;EAjBD;IAKE,sBAAqB;IACrB,gCAA+B,EAC/B;EAPF;IASE,iBAAiB;IACjB,sBAAqB;IACrB,2BAA0B,EAK1B;IAhBF;MAaG,sBAAqB;MACrB,4CAA2C,EAC3C;;AAIH;EAEG,WAAU;EACV,uBAAuB;EACvB,oBAAmB;EACnB,qBAAoB;EACpB,iBAAgB,EACjB;;AAPF;EAUE,gBAAe,EACf;;AAXF;EAcG,2CAA0C,EAC3C;;AAGF;;EAEE,0BAAyB,EAC1B","file":"map-controls.scss","sourcesContent":[".map-controls-sidenav {\n\tbackground: rgba(255,255,255,0.8);\n\tmd-content {\n\t\tbackground: transparent;\n\t}\n}\n\n.map-controls-handle {\n\theight: 100%;\n\tposition: absolute;\n\tright: 0;\n\t.md-button {\n\t\ttransition: 0.4s ease;\n\t\tbackground: rgba(0, 0, 0, 0.15);\n\t}\n\t.map-controls-open .md-button {\n\t\t/* opacity: 0; */\n\t\ttransition: 0.4s ease;\n\t\ttransform: translateX(70%);\n\t\tsvg {\n\t\t\ttransition: 0.6s ease;\n\t\t\ttransform: translateX(-80%) rotateY(180deg);\n\t\t}\n\t}\n}\n\n.map-controls {\n\tmd-input-container {\n\t  padding: 0;\n\t  /* max-width: 260px; */\n\t  margin-left: 0.5rem;\n\t  margin-right: 0.5rem;\n\t  margin-bottom: 0;\n\t}\n\n\t.md-chips {\n\t\tfont-size: 12px;\n\t}\n\n\t&:hover {\n\t  background-color: rgba(255, 255, 255, 0.9);\n\t}\n}\n\nmd-toolbar:not(.md-menu-toolbar),\n.md-button.md-primary.md-raised {\n  background-color: #0077CA;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _filterBuilder_controller = __webpack_require__(15);
	
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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _lodash = __webpack_require__(17);
	
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
/* 17 */
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
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MAP_DEFAULTS = {
	  mapType: 'ROADMAP',
	  mapStyles: [{
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
	  }],
	  iconStyles: {
	    path: 'M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,12.5A1.5,1.5 0 0,1 10.5,11A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 13.5,11A1.5,1.5 0 0,1 12,12.5M12,7.2C9.9,7.2 8.2,8.9 8.2,11C8.2,14 12,17.5 12,17.5C12,17.5 15.8,14 15.8,11C15.8,8.9 14.1,7.2 12,7.2Z',
	    strokeColor: '#FFFFFF',
	    strokeOpacity: 0.5,
	    strokeWeight: 1,
	    fillColor: '#0077CA',
	    fillOpacity: 0.8,
	    rotation: 0,
	    scale: 1.5,
	    anchor: new google.maps.Point(12, 12),
	    size: new google.maps.Size(24, 24)
	  },
	  geometryStyles: {
	    strokeColor: '#003C71',
	    strokeOpacity: 0.3,
	    strokeWeight: 3,
	    fillColor: '#0077CA',
	    fillOpacity: 0.5,
	    zIndex: 1
	  },
	  hoverStyles: {
	    fillColor: '#C71566',
	    fillOpacity: 0.7,
	    strokeWeight: 5,
	    strokeColor: '#FFFFFF',
	    strokeOpacity: 0.7
	  }
	};
	
	exports.default = MAP_DEFAULTS;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var templates = ['$templateCache', function ($templateCache) {
	  $templateCache.put('_map.html', '<ng-map\n  center="43.9443802,-78.8975857"\n  zoom="17"\n  styles="{{ ::$ctrl._defaults.mapStyles }}"\n  map-type-id="{{ ::$ctrl._defaults.mapType }}"\n  disable-default-u-i="true"\n  tilt="45"\n  heading="0"\n  layout\n  layout-fill>\n</ng-map>\n<div ng-transclude="controls" class="map-controls"></div>');
	  $templateCache.put('controls/_map-controls.html', '<div class="map-controls-handle" layout="row" ng-class="{ \'map-controls-open\': $ctrl.mapControlsOpen }">\n\t<md-button ng-click="$ctrl.mapControlsOpen = !$ctrl.mapControlsOpen">\n\t  <svg style="width:32px;height:32px" viewBox="0 0 24 24">\n\t    <path fill="#FFFFFF" d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z" />\n\t\t</svg>\n\t</md-button>\n\n\t<md-sidenav\n\t    class="md-sidenav-right map-controls-sidenav"\n\t    md-component-id="uoit-campus-map:right"\n\t    md-disable-backdrop\n\t    md-whiteframe="4"\n\t    md-is-locked-open="$ctrl.mapControlsOpen" \n\t    md-is-open="$ctrl.mapControlsOpen"\n\t    layout="column">\n\t  <md-toolbar class="md-primary" layout>\n\t    <div class="md-toolbar-tools">\n\t\t  \t<h1>Map filtering</h1>\n\t  \t</div>\n\t  </md-toolbar>\n\n\t  <md-content\n\t\t  flex="grow"\n\t\t  layout="column">\n\t\t\t<filter-builder ng-model="$ctrl.filter" on-update="$ctrl.loadFeatures($ctrl.filter)" layout="column" layout-padding flex="grow">\n\t\t\t  <md-input-container>\n\t\t\t    <label>Location</label>\n\t\t\t    <md-select ng-model="$ctrl.location" md-on-open="$ctrl.loadLocations()" filter-input name="location" md-on-close="$ctrl.loadFeatures($ctrl.filter)">\n\t\t\t      <md-option ng-repeat="location in ::$ctrl.locations" ng-value="::location._id" ng-disabled="$ctrl.location === location">\n\t\t\t        {{ ::location.label}}\n\t\t\t      </md-option>\n\t\t\t    </md-select>\n\t\t\t  </md-input-container>\n\n\t\t\t  <md-input-container>\n\t\t\t    <label>Feature category</label>\n\t\t\t    <md-select ng-model="$ctrl.category" md-on-open="$ctrl.loadCategories()" ng-disabled="!$ctrl.location.length" multiple filter-input name="properties.category" md-on-close="$ctrl.loadFeatures($ctrl.filter)">\n\t\t\t      <md-option ng-repeat="category in $ctrl.categories" ng-value="::category._id" ng-disabled="$ctrl.category === category">\n\t\t\t        {{ ::category.name }}\n\t\t\t      </md-option>\n\t\t\t    </md-select>\n\t\t\t  </md-input-container>\n\t\t\t  <div layout-padding>\n\t        <md-checkbox aria-label="Select All"\n\t\t\t\t\t\tng-checked="$ctrl.isChecked(\'category\', \'categories\')"\n\t\t\t\t\t\tmd-indeterminate="$ctrl.isIndeterminate(\'category\', \'categories\')"\n\t\t\t\t\t\tng-click="$ctrl.toggleAll(\'category\', \'categories\')">\n\t\t\t\t\t\tSelect all categories\n\t        </md-checkbox>\n        </div>\n<!-- \t\t\t\t<div>\n\t\t\t    <md-chips>\n\t\t\t      <md-chip ng-repeat="category in $ctrl.getItemsInListByProp($ctrl.category, $ctrl.categories, \'_id\') track by $index">\n\t\t\t      \t{{ category.name }}\n\t\t\t\t\t\t  <button class="md-chip-remove" ng-click="$ctrl.removeItemFromList(category._id, $ctrl.category)">&times;</button>\n\t\t\t      </md-chip>\n\t\t\t\t\t</md-chips>\n\t\t\t\t</div> -->\n\n\t\t\t  <md-input-container>\n\t\t\t    <label>Feature collection</label>\n\t\t\t    <md-select ng-model="$ctrl.collection" md-on-open="$ctrl.loadCollections()" ng-disabled="!$ctrl.category.length" multiple filter-input="filters.collection" name="group" md-on-close="$ctrl.loadFeatures($ctrl.filter)">\n\t\t\t      <md-optgroup ng-repeat="group in $ctrl.getItemsInListByProp($ctrl.category, $ctrl.categories, \'_id\')" label="{{ ::group.name }}">\n\t\t\t        <md-option ng-repeat="collection in $ctrl.collections | filter: { category: group._id }" ng-value="::collection._id" ng-disabled="$ctrl.collection === collection">\n\t\t\t          {{ ::collection.name }}\n\t\t\t        </md-option>\n\t\t\t      </md-optgroup>\n\t\t\t    </md-select>\n\t\t\t  </md-input-container>\n\t\t\t  <div layout-padding>\n\t        <md-checkbox aria-label="Select All"\n\t\t\t\t\t\tng-checked="$ctrl.isChecked(\'collection\', \'collections\')"\n\t\t\t\t\t\tmd-indeterminate="$ctrl.isIndeterminate(\'collection\', \'collections\')"\n\t\t\t\t\t\tng-click="$ctrl.toggleAll(\'collection\', \'collections\')">\n\t\t\t\t\t\tSelect all collections\n\t        </md-checkbox>\n        </div>\n\t\t\t\t<!-- <small><pre>{{ $ctrl.filter | json }}</pre></small> -->\n\t\t\t</filter-builder>\n\t<!--   <div layout="column">\n\n\t    <md-button class="md-primary" ng-click="$ctrl.showAll()">\n\t    \tShow all\n\t      <md-tooltip md-direction="bottom">\n\t        Turn on visibility for all available map features\n\t      </md-tooltip>\n\t    </md-button>\n\t  </div> -->\n\t  </md-content>\n\t</md-sidenav>\n</div>');
	  $templateCache.put('detail/_map-detail.html', '<md-whiteframe\n  class="md-whiteframe-16dp"\n  layout="column">\n  <md-toolbar>\n    <div class="md-toolbar-tools">\n      <h2>\n        <span>{{ ::ctrl.name }}</span>\n      </h2>\n      <span flex></span>\n      <md-button class="md-icon-button" aria-label="Close info" ng-click="ctrl.close()">\n        <span>&times;</span>\n      </md-button>\n    </div>\n  </md-toolbar>\n  <div\n  \tlayout="column"\n  \tlayout-margin\n  \tlayout-align="center center">\n    <md-button ng-click="ctrl.showDetails()">{{ ctrl.detailsShowing ? \'Hide\' : \'Show\'}} details <span class="detail-arrow" ng-class="{ \'arrow-up\' : ctrl.detailsShowing }"></span></md-button>\n  \t<md-content layout-padding layout-margin class="details-text" ng-bind-html="::ctrl.description" ng-show="ctrl.detailsShowing"></md-content>\n  \t<md-button layout-padding class="md-raised md-primary" aria-label="Tour this building" ng-if="::ctrl.building" ng-click="ctrl.gotoBldg()">\n  \t\tTake a tour &raquo;\n  \t</md-button>\n  </div>\n</md-whiteframe>');
	}];exports.default = templates;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=uoit-campus-map.js.map