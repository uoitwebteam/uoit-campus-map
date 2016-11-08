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
	
	var _mapControls_component = __webpack_require__(3);
	
	var _mapControls_component2 = _interopRequireDefault(_mapControls_component);
	
	var _mapControls_controller = __webpack_require__(4);
	
	var _mapControls_controller2 = _interopRequireDefault(_mapControls_controller);
	
	var _mapDetail_controller = __webpack_require__(5);
	
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
	
	exports.default = angular.module('campusMap', []).run(_templates2.default).controller('MapCtrl', _map_controller2.default).controller('MapControlsCtrl', _mapControls_controller2.default).controller('MapDetailCtrl', _mapDetail_controller2.default).component('campusMap', _map_component2.default).component('campusMapControls', _mapControls_component2.default).constant('MAP_SETTINGS', _mapSettings_constant2.default).constant('MAP_ICONS', _mapIcons_constant2.default).factory('BuildingResource', ['$resource', function ($resource) {
	  return $resource('http://localhost:3000/api/v1/buildings/:id');
	}]).factory('CategoryResource', ['$resource', function ($resource) {
	  return $resource('http://localhost:3000/api/v1/categories/:id');
	}]).factory('LocationResource', ['$resource', function ($resource) {
	  return $resource('http://localhost:3000/api/v1/locations/:id');
	}]).factory('CollectionResource', ['$resource', function ($resource) {
	  return $resource('http://localhost:3000/api/v1/feature-collections/:id');
	}]).factory('FeatureResource', ['$resource', function ($resource) {
	  return $resource('http://localhost:3000/api/v1/features/:id');
	}]);
	
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
	    // onToggle: '&?',
	    markers: '<'
	  },
	  templateUrl: '_map.html',
	  controller: 'MapCtrl'
	};
	
	exports.default = campusMap;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MapCtrl = function () {
		_createClass(MapCtrl, null, [{
			key: '$inject',
			get: function get() {
				return ['$timeout', '$scope', // angular core
				'NgMap', // external deps
				'$mdToast', '$mdPanel', // md deps
				'MAP_SETTINGS', 'MAP_ICONS' // constants
				];
			}
		}]);
	
		function MapCtrl($timeout, $scope, NgMap, $mdToast, $mdPanel, MAP_SETTINGS, MAP_ICONS) {
			_classCallCheck(this, MapCtrl);
	
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
	
		_createClass(MapCtrl, [{
			key: '$onInit',
			value: function $onInit() {
				var _this = this;
	
				// unwrap promise supplied by ngMap
				this.getMap().then(function (instance) {
					// force map to fill entire content (glitch?)
					google.maps.event.trigger(instance, 'resize');
	
					// set styles of ma
					instance.data.setStyle(function (feature) {
						var category = feature.getProperty('category');
						switch (category) {
							case '581a2c57d9ff16e787aa1b20':
								// Services
								return { icon: _this.MAP_ICONS.SERVICE };
								break;
							case '581a2c5ed9ff16e787aa1b21':
								// Emergency services
								return { icon: _this.MAP_ICONS.AED };
								break;
							case '581a2c77d9ff16e787aa1b22':
								// Restaurants and food courts
								return {
									icon: _this.MAP_ICONS.FOOD,
									fillColor: '#1a875c',
									fillOpacity: 1,
									strokeWeight: 3,
									strokeColor: 'white',
									strokeOpacity: 0.3
								};
								break;
							case '581a2c8ad9ff16e787aa1b24':
								// Parking
								return {
									icon: _this.MAP_ICONS.PARKING,
									fillColor: '#1a875c',
									fillOpacity: 1,
									strokeWeight: 3,
									strokeColor: 'white',
									strokeOpacity: 0.3
								};
								break;
							default:
								// other
								return {
									icon: _this.MAP_ICONS.DEFAULT,
									fillColor: '#0077CA',
									fillOpacity: 1,
									strokeWeight: 3,
									strokeColor: '#003C71',
									strokeOpacity: 0.3
								};
						}
					});
	
					instance.data.addListener('mouseover', function (event) {
						instance.data.revertStyle();
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
						_this.hideToast();
					});
	
					instance.data.addListener('click', function (event) {
						var feature = event.feature;
	
						var xy = { clientX: 0, clientY: 0 };
						for (var prop in event) {
							if (event[prop] && event[prop].clientX && event[prop].clientY) {
								xy.clientX = event[prop].clientX;
								xy.clientY = event[prop].clientY;
							}
						}
	
						var position = _this.$mdPanel.newPanelPosition().absolute().top(xy.clientY + 'px').left(xy.clientX + 'px');
	
						var config = {
							attachTo: angular.element(document.body),
							controller: 'MapDetailCtrl',
							controllerAs: 'ctrl',
							templateUrl: 'detail/_map-detail.html',
							hasBackdrop: true,
							panelClass: 'demo-dialog-example',
							position: position,
							locals: {
								location: _this.currentLocation,
								feature: feature
							},
							trapFocus: true,
							zIndex: 150,
							clickOutsideToClose: true,
							escapeToClose: true,
							focusOnOpen: true
						};
						_this.$mdPanel.open(config);
					});
	
					_this.$scope.$watch(function () {
						return _this.mapControls;
					}, function (newVal) {
						_this.clearMapData(instance);
						_this.updateMapData(instance, newVal);
						_this.currentLocation = newVal.location;
					});
				});
			}
		}, {
			key: 'showToast',
			value: function showToast(feature) {
				var _this2 = this;
	
				var featureName = feature.getProperty('name');
				if (!this.toastActive) {
					this.toast.textContent(featureName).position('bottom left').hideDelay(0);
					this.$mdToast.show(this.toast);
					this.toastActive = true;
				} else {
					this.$timeout.cancel(this.toastCanceler);
					this.$timeout(function () {
						_this2.$mdToast.updateTextContent(featureName);
					});
				}
			}
		}, {
			key: 'hideToast',
			value: function hideToast() {
				var _this3 = this;
	
				this.toastCanceler = this.$timeout(function () {
					_this3.$mdToast.hide(_this3.toast);
					_this3.toastActive = false;
				}, 3000);
			}
		}, {
			key: 'clearMapData',
			value: function clearMapData(instance) {
				instance.data.forEach(function (feature) {
					instance.data.remove(feature);
				});
			}
		}, {
			key: 'updateMapData',
			value: function updateMapData(instance, newVal) {
				var _this4 = this;
	
				if (newVal && newVal.showAll) {
					instance.data.addGeoJson(newVal.collection);
				} else {
					instance.data.loadGeoJson('http://localhost:3000/api/v1/feature-collections/' + newVal.collection._id, null, function () {
						_this4.fitBounds(instance);
					});
				}
			}
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
		}, {
			key: 'fitBounds',
			value: function fitBounds(instance) {
				var _this6 = this;
	
				var bounds = new google.maps.LatLngBounds();
				instance.data.forEach(function (feature) {
					_this6.processBounds(feature.getGeometry(), bounds.extend, bounds);
				});
				instance.fitBounds(bounds);
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
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MapControlsCtrl = function () {
		_createClass(MapControlsCtrl, null, [{
			key: '$inject',
			get: function get() {
				return ['LocationResource', 'CategoryResource', 'CollectionResource', 'FeatureResource', '$timeout', '$window'];
			}
		}]);
	
		function MapControlsCtrl(LocationResource, CategoryResource, CollectionResource, FeatureResource, $timeout, $window) {
			_classCallCheck(this, MapControlsCtrl);
	
			this.FeatureResource = FeatureResource;
			this.CollectionResource = CollectionResource;
			this.CategoryResource = CategoryResource;
			this.LocationResource = LocationResource;
			this.$timeout = $timeout;
			this.$window = $window;
		}
	
		_createClass(MapControlsCtrl, [{
			key: '$onInit',
			value: function $onInit() {
				var _this = this;
	
				this.loadLocations(function (locations) {
					_this.location = locations[1];
					_this.updateLocation();
				});
			}
		}, {
			key: 'loadLocations',
			value: function loadLocations(callback) {
				var _this2 = this;
	
				return this.LocationResource.query().$promise.then(function (locations) {
					_this2.locations = locations;
					callback && callback(locations);
					_this2.$timeout(function () {
						return angular.element(_this2.$window).triggerHandler('resize');
					});
				});
			}
		}, {
			key: 'loadCategories',
			value: function loadCategories(callback) {
				var _this3 = this;
	
				return this.CategoryResource.query().$promise.then(function (categories) {
					_this3.categories = categories;
					callback && callback(categories);
				});
			}
		}, {
			key: 'loadCollections',
			value: function loadCollections(callback) {
				var _this4 = this;
	
				var location = this.location,
				    category = this.category;
	
				return this.CollectionResource.query({
					filter: { location: location._id, category: category._id }
				}).$promise.then(function (collections) {
					_this4.collections = collections;
					callback && callback(collections);
				});
			}
		}, {
			key: 'updateLocation',
			value: function updateLocation() {
				var _this5 = this;
	
				this.loadCategories(function (categories) {
					_this5.category = categories[0];
					_this5.updateCategory();
				});
			}
		}, {
			key: 'updateCategory',
			value: function updateCategory() {
				var _this6 = this;
	
				this.loadCollections(function (collections) {
					_this6.collection = collections[0];
					_this6.updateCollection();
				});
			}
		}, {
			key: 'updateCollection',
			value: function updateCollection() {
				var location = this.location,
				    category = this.category,
				    collection = this.collection;
	
				this.$ngModel.$setViewValue({ location: location, category: category, collection: collection });
			}
		}, {
			key: 'showAll',
			value: function showAll() {
				var _this7 = this;
	
				this.FeatureResource.query({}).$promise.then(function (features) {
					_this7.$ngModel.$setViewValue({
						showAll: true,
						collection: { type: 'FeatureCollection', features: features }
					});
				});
			}
		}]);
	
		return MapControlsCtrl;
	}();
	
	exports.default = MapControlsCtrl;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MapDetailCtrl = function () {
		_createClass(MapDetailCtrl, null, [{
			key: '$inject',
			get: function get() {
				return ['$sce', '$state'];
			}
		}]);
	
		function MapDetailCtrl($sce, $state) {
			_classCallCheck(this, MapDetailCtrl);
	
			this.$state = $state;
			if (this.feature.getProperty('linked')) {
				this.building = this.feature.getProperty('building');
	
				this.name = this.building.name;
				this.description = $sce.trustAsHtml(this.building.desc);
			} else {
				this.name = this.feature.getProperty('name');
				this.description = $sce.trustAsHtml(this.feature.getProperty('desc'));
			}
			this.detailsShowing = false;
		}
	
		_createClass(MapDetailCtrl, [{
			key: 'showDetails',
			value: function showDetails() {
				this.detailsShowing = !this.detailsShowing;
			}
		}, {
			key: 'goToBldg',
			value: function goToBldg() {
				this.$state.go('building', {
					location: this.location.code,
					building: this.building.code
				});
				// console.log(this.location.code, this.building.code);
			}
		}, {
			key: 'close',
			value: function close() {
				this.mdPanelRef.close();
			}
		}]);
	
		return MapDetailCtrl;
	}();
	
	exports.default = MapDetailCtrl;

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
	  FOOD: {
	    path: 'M3,3A1,1 0 0,0 2,4V8L2,9.5C2,11.19 3.03,12.63 4.5,13.22V19.5A1.5,1.5 0 0,0 6,21A1.5,1.5 0 0,0 7.5,19.5V13.22C8.97,12.63 10,11.19 10,9.5V8L10,4A1,1 0 0,0 9,3A1,1 0 0,0 8,4V8A0.5,0.5 0 0,1 7.5,8.5A0.5,0.5 0 0,1 7,8V4A1,1 0 0,0 6,3A1,1 0 0,0 5,4V8A0.5,0.5 0 0,1 4.5,8.5A0.5,0.5 0 0,1 4,8V4A1,1 0 0,0 3,3M19.88,3C19.75,3 19.62,3.09 19.5,3.16L16,5.25V9H12V11H13L14,21H20L21,11H22V9H18V6.34L20.5,4.84C21,4.56 21.13,4 20.84,3.5C20.63,3.14 20.26,2.95 19.88,3Z',
	    fillColor: '#1a875c',
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
	  $templateCache.put('_map.html', '<ng-map\n  center="43.9443802,-78.8975857"\n  zoom="17"\n  styles="{{ $ctrl.MAP_SETTINGS.styles }}"\n  map-type-id="{{ $ctrl.MAP_SETTINGS.type }}"\n  disable-default-u-i="true"\n  tilt="45"\n  heading="0"\n  layout\n  layout-fill>\n  <custom-control id="map-controls" position="TOP_LEFT" index="1">\n\t\t<campus-map-controls ng-model="$ctrl.mapControls"></campus-map-controls>\n  </custom-control>\n</ng-map>');
	  $templateCache.put('controls/_map-controls.html', '<md-whiteframe\n  class="md-whiteframe-16dp map-controls"\n  layout="column"\n  layout-align="center center"\n  layout-fill>\n  <div layout="row">\n    <md-input-container>\n      <label>Location</label>\n      <md-select ng-model="$ctrl.location" md-on-open="$ctrl.loadLocations()" ng-change="$ctrl.updateLocation()" ng-model-options="{trackBy: \'$value._id\'}">\n        <md-option ng-repeat="location in $ctrl.locations" ng-value="location" ng-disabled="$ctrl.location === location">\n          {{location.label}}\n        </md-option>\n      </md-select>\n    </md-input-container>\n    <md-input-container>\n      <label>Feature category</label>\n      <md-select ng-model="$ctrl.category" md-on-open="$ctrl.loadCategories()" ng-change="$ctrl.updateCategory()" ng-model-options="{trackBy: \'$value._id\'}">\n        <md-option ng-repeat="category in $ctrl.categories" ng-value="category" ng-disabled="$ctrl.category === category">\n          {{ category.name }}\n        </md-option>\n      </md-select>\n    </md-input-container>\n    <md-input-container ng-if="$ctrl.category">\n      <label>Feature collection</label>\n      <md-select ng-model="$ctrl.collection" md-on-open="$ctrl.loadCollections()" ng-change="$ctrl.updateCollection()" ng-model-options="{trackBy: \'$value._id\'}">\n        <md-option ng-repeat="collection in $ctrl.collections" ng-value="collection" ng-disabled="$ctrl.collection === collection">\n          {{ collection.name }}\n        </md-option>\n      </md-select>\n    </md-input-container>\n  </div>\n  <div layout="row">\n    <md-button class="md-primary" ng-click="$ctrl.showAll()">\n    \tShow all\n    </md-button>\n  </div>\n</md-whiteframe>');
	  $templateCache.put('detail/_map-detail.html', '<md-whiteframe\n  class="md-whiteframe-16dp map-detail"\n  layout="column"\n  layout-align="center center">\n  <md-toolbar>\n    <div class="md-toolbar-tools">\n      <h2>\n        <span>{{ ctrl.name }}</span>\n      </h2>\n      <span flex></span>\n      <md-button class="md-icon-button" aria-label="Close info" ng-click="ctrl.close()">\n        <span>&times;</span>\n      </md-button>\n    </div>\n  </md-toolbar>\n  <div layout="column" layout-margin>\n    <md-button ng-click="ctrl.showDetails()">{{ ctrl.detailsShowing ? \'Hide\' : \'Show\'}} details <span class="detail-arrow" ng-class="{ \'arrow-up\' : ctrl.detailsShowing }"></span></md-button>\n  \t<md-content layout-padding layout-margin class="details-text" ng-bind-html="ctrl.description" ng-show="ctrl.detailsShowing"></md-content>\n  \t<md-button layout-padding class="md-raised md-primary" aria-label="Tour this building" ng-if="ctrl.building" ng-click="ctrl.goToBldg()">\n  \t\tTake a tour &raquo;\n  \t</md-button>\n  </div>\n</md-whiteframe>');
	}];exports.default = templates;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=uoit-campus-map.js.map