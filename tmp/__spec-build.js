/******/ (function(modules) { // webpackBootstrap
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

	__webpack_require__(1);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mochaGlobals = __webpack_require__(2).globals;
	
	window.mocha.setup('bdd');
	window.onload = function () {
	  window.mocha.checkLeaks();
	  window.mocha.globals(Object.keys(mochaGlobals));
	  window.mocha.run();
	  __webpack_require__(3)(window);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"globals": {
			"expect": true,
			"mock": true,
			"sandbox": true,
			"spy": true,
			"stub": true,
			"useFakeServer": true,
			"useFakeTimers": true,
			"useFakeXMLHttpRequest": true
		}
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	module.exports = function (root) {
	  root = root ? root : global;
	  root.expect = root.chai.expect;
	
	  beforeEach(function () {
	    // Using these globally-available Sinon features is preferrable, as they're
	    // automatically restored for you in the subsequent `afterEach`
	    root.sandbox = root.sinon.sandbox.create();
	    root.stub = root.sandbox.stub.bind(root.sandbox);
	    root.spy = root.sandbox.spy.bind(root.sandbox);
	    root.mock = root.sandbox.mock.bind(root.sandbox);
	    root.useFakeTimers = root.sandbox.useFakeTimers.bind(root.sandbox);
	    root.useFakeXMLHttpRequest = root.sandbox.useFakeXMLHttpRequest.bind(root.sandbox);
	    root.useFakeServer = root.sandbox.useFakeServer.bind(root.sandbox);
	  });
	
	  afterEach(function () {
	    delete root.stub;
	    delete root.spy;
	    root.sandbox.restore();
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uoitCampusMap = __webpack_require__(5);
	
	var _uoitCampusMap2 = _interopRequireDefault(_uoitCampusMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe('campusMap', function () {
	  describe('Greet function', function () {
	    beforeEach(function () {
	      spy(_uoitCampusMap2.default, 'greet');
	      _uoitCampusMap2.default.greet();
	    });
	
	    it('should have been run once', function () {
	      expect(_uoitCampusMap2.default.greet).to.have.been.calledOnce;
	    });
	
	    it('should have always returned hello', function () {
	      expect(_uoitCampusMap2.default.greet).to.have.always.returned('hello');
	    });
	  });
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = angular.module('campusMap', ['ngMap']).controller('MapCtrl', ['NgMap', 'LocationResource', 'BuildingResource', 'MAP_SETTINGS', 'FEATURE_CATEGORIES', function (NgMap, LocationResource, BuildingResource, MAP_SETTINGS, FEATURE_CATEGORIES) {
	  var _this = this;
	
	  this.settings = MAP_SETTINGS;
	  this.icon = MAP_SETTINGS.marker;
	
	  this.controls = {
	    locations: LocationResource,
	    categories: FEATURE_CATEGORIES,
	    labels: true
	  };
	
	  this.markers = BuildingResource;
	  console.log(this.markers);
	
	  NgMap.getMap().then(function (instance) {
	    google.maps.event.trigger(instance, 'resize');
	    instance.data.setStyle({
	      icon: "http://maps.google.com/mapfiles/dir_0.png"
	    });
	    instance.data.setStyle(function (feature) {
	      var category = feature.getProperty('category');
	      return {
	        fillColor: '#0077CA',
	        fillOpacity: 1,
	        strokeWeight: 3,
	        strokeColor: '#003C71',
	        strokeOpacity: 0.3
	      };
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
	    });
	    instance.data.addListener('mouseout', function (event) {
	      instance.data.revertStyle();
	    });
	    _this.mapInstance = instance;
	  });
	
	  this.showDetail = function (e) {
	    this.feature = e.feature.f;
	    alert(this.feature.category + ': ' + this.feature.name + '\n\t_id: ' + this.feature.link._id + '\n\tcode: ' + this.feature.link.code + '\n\tcoords: ' + this.feature.link.coords[0] + ', ' + this.feature.link.coords[1] + '\n\tdesc: ' + this.feature.link.desc);
	  };
	
	  this.onChange = function () {
	    google.maps.event.trigger(_this.mapInstance, 'resize');
	  };
	}]).controller('MapControlsCtrl', ['$scope', function ($scope) {
	  var _this2 = this;
	
	  console.log(this);
	  $scope.$watch(function () {
	    return _this2.$ngModel.$modelValue;
	  }, function (newVal, oldVal) {
	    _this2.controls = newVal;
	  }, true);
	}]).component('campusMapControls', {
	  require: {
	    $ngModel: 'ngModel'
	  },
	  template: '<md-whiteframe\n      class="md-whiteframe-16dp map-controls"\n      layout="column"\n      layout-align="center center"\n      layout-fill>\n      <div layout="row">\n        <md-input-container>\n          <label>Location</label>\n          <md-select ng-model="$ctrl.controls.location">\n            <md-option ng-repeat="location in $ctrl.controls.locations" ng-value="location.code" ng-disabled="$ctrl.controls.location === location.code">\n              {{location.label}}\n            </md-option>\n          </md-select>\n        </md-input-container>\n        <md-input-container>\n          <label>Feature category</label>\n          <md-select ng-model="$ctrl.controls.category">\n            <md-option ng-repeat="category in $ctrl.controls.categories" ng-value="category" ng-disabled="$ctrl.controls.category === category">\n              {{ category }}\n            </md-option>\n          </md-select>\n        </md-input-container>\n      </div>\n      <div layout="row">\n        <md-switch\n          ng-model="$ctrl.controls.labels"\n          aria-label="Toggle labels"\n          class="md-primary">\n          Labels are <strong>{{ $ctrl.controls.labels ? \'on\' : \'off\' }}</strong>\n        </md-switch>\n      </div>\n    </md-whiteframe>',
	  controller: 'MapControlsCtrl'
	}).component('campusMap', {
	  // transclude: true,
	  bindings: {
	    // onToggle: '&?',
	    markers: '<'
	  },
	  // templateUrl: 'sidebar/map/_map.html',
	  template: '<ng-map\n\t    center="43.9443802,-78.8975857"\n\t    zoom="17"\n\t    styles="{{ $ctrl.settings.styles }}"\n\t    map-type-id="{{ $ctrl.settings.type }}"\n\t    disable-default-u-i="true"\n\t    tilt="45"\n\t    heading="0"\n\t    layout\n\t    layout-fill>\n\t    <marker\n\t      ng-repeat="m in $ctrl.markers track by $index"\n\t      position="{{ m.coords[1] }}, {{ m.coords[0] }}"\n\t      icon="{{ $ctrl.icon }}"\n\t      id="{{m._id}}"></marker>\n\t    <map-data\n\t      ng-init="callback = $ctrl.showDetail"\n\t      on-click="callback(m)"\n\t      load-geo-json="http://shared.uoit.ca/geo.json">\n\t    </map-data>\n\t    <custom-control id="home" position="TOP_LEFT" index="1">\n\t\t\t\t<campus-map-controls ng-model="$ctrl.controls"></campus-map-controls>\n\t    </custom-control>\n\t  </ng-map>',
	  controller: 'MapCtrl'
	}).constant('MAP_SETTINGS', {
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
	      "visibility": "simplified"
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
	  marker: {
	    path: 'M3.83,3.57A11.8,11.8,0,0,1,12.5,0a11.8,11.8,0,0,1,8.67,3.57,11.8,11.8,0,0,1,3.57,8.67,16.43,16.43,0,0,1-1.27,5.83,36,36,0,0,1-3.08,6.16q-1.81,2.88-3.57,5.38t-3,4L12.5,35l-1.31-1.52q-.82-.94-3-3.78a63.32,63.32,0,0,1-3.74-5.5,40,40,0,0,1-2.92-6A16.62,16.62,0,0,1,.26,12.24,11.8,11.8,0,0,1,3.83,3.57ZM9.42,15.32A4.2,4.2,0,0,0,12.5,16.6a4.35,4.35,0,0,0,4.35-4.35A4.35,4.35,0,0,0,12.5,7.89a4.35,4.35,0,0,0-4.35,4.35A4.2,4.2,0,0,0,9.42,15.32Z',
	    strokeColor: 'white',
	    strokeOpacity: 0.7,
	    strokeWeight: 3,
	    fillColor: '#003c71',
	    fillOpacity: 0.9,
	    rotation: 0,
	    scale: 1.0
	  }
	}).constant('FEATURE_CATEGORIES', ['Buildings', 'Downtown Buildings', 'Services', 'Emergency Services', 'Restaurants & Food Courts', 'Residences', 'Parking', 'Outdoor Spaces', 'Oshawa City Buildings']).value('BuildingResource', [{
	  "_id": "57a8e38b12ad99fe889c95f3",
	  "name": "Business and IT Building (UB)",
	  "label": "Business and IT Building",
	  "code": "ub",
	  "desc": "<p>Referred on campus by many as UB, the 9,700-square-metre Business and Information Technology Building offers our students innovative research laboratories, modern lecture halls, a large caf&eacute; and student lounge areas. It is the home of the Faculty of Business and Information Technology.</p>\r\n<p>Like other UOIT academic buildings, a portion of UB's rooftop is 'green', just one of UOIT's many environmentally friendly features.</p>",
	  "coords": [-78.896095, 43.945156],
	  "parent": "57ead427e481ce773d1544f5"
	}, {
	  "_id": "57a8e4b912ad99fe889c95f4",
	  "name": "Automotive Centre of Excellence (ACE)",
	  "label": "ACE",
	  "code": "ace",
	  "desc": "<p>ACE is the first commercial automotive research, development and innovation centre of its kind in the world. This is a place where industry, researchers and students collaborate to create, test and validate paradigm-shifting innovations with a focus on bringing them to market as rapidly as possible. ACE has an array of testing equipment, including one of the largest and most sophisticated climatic wind tunnels on the planet.</p><p>ACE enables knowledge and practical experience to combine more effectively and to create synergies across disciplines and skill sets, leading to a stronger manufacturing economy in Canada. At the same time, it helps educate and train the skilled personnel needed to take the automotive industry and manufacturing to a new level of competitiveness and success.</p>",
	  "coords": [-78.899121, 43.94565],
	  "parent": "57ead427e481ce773d1544f5"
	}, {
	  "_id": "57d8699c4ced833b63844e45",
	  "desc": "<p>The Campus Ice Centre features two NHL-size ice pads with seating for 500 and 200 people, 10 large change rooms, a sports pro shop, a community room, a full-service restaurant (Shagwells on the Ridge) and a snack bar. The Campus Ice Centre also offers catering services.</p>",
	  "label": "Campus Ice Centre",
	  "code": "cic",
	  "name": "Campus Ice Centre",
	  "coords": [-78.89823, 43.950675],
	  "parent": "57ead427e481ce773d1544f5"
	}, {
	  "_id": "57f7c9947919660300d609b1",
	  "updatedAt": "2016-10-07T16:45:10.322Z",
	  "createdAt": "2016-10-07T16:13:08.451Z",
	  "parent": "57ead427e481ce773d1544f5",
	  "coords": [-78.89683, 43.945127],
	  "desc": "",
	  "code": "ext",
	  "label": "North exterior",
	  "name": "Exterior - North location",
	  "default": {
	    "_id": "57f2c5a45ba0bb03006de220",
	    "code": "2i",
	    "name": "Polonsky Commons 2I",
	    "__v": 3,
	    "script": "",
	    "parent": "57f7c9947919660300d609b1",
	    "updatedAt": "2016-10-08T04:33:29.197Z",
	    "entities": [],
	    "assets": [],
	    "hotSpots": [],
	    "sceneLinks": [{
	      "scene": "57eada3c0f5149583eacf643",
	      "_id": "57f7caac7919660300d609b3",
	      "rotation": ["0", "-110", "70"],
	      "position": ["3.75", "1.25", "-4.75"]
	    }, {
	      "_id": "57f7d28fbdc56803000f34f3",
	      "scene": "57a8c065a9931df287264273",
	      "rotation": ["0", "160", "60"],
	      "position": ["7.5", "0.75", "3.15"]
	    }, {
	      "scene": "57f2c5e15ba0bb03006de222",
	      "_id": "57f7d4cbbdc56803000f34f5",
	      "rotation": ["0", "-40", "70"],
	      "position": ["-7", "0.5", "-5"]
	    }]
	  }
	}, {
	  "_id": "57a8e0c1162ad6f6889919ec",
	  "name": "Science Building (UA)",
	  "label": "Science Building",
	  "code": "ua",
	  "desc": "<p>The 20,000-square-metre Science Building is home to the Faculty of Science and the Faculty of Health Sciences. It includes a 250-seat lecture theatre; chemistry, physics and biology labs; and a student study hall, among many other student-friendly features.</p><p>This four-storey building also houses:</p><ul><li>Two beautiful atria</li><li>11 lecture halls and five classrooms</li><li>Research laboratories</li><li>Meeting rooms</li><li>Faculty and staff offices</li><li>A study hall overlooking Polonsky Commons</li><li>A 20,000-litre Aquatic Toxicology wet lab.</li></ul>",
	  "coords": [-78.896433, 43.944584],
	  "default": {
	    "_id": "57d99216c2b4a2d57f4eae34",
	    "code": "3b-watrium",
	    "name": "Interior 3B, West Atrium",
	    "__v": 6,
	    "script": "",
	    "parent": "57a8e0c1162ad6f6889919ec",
	    "updatedAt": "2016-10-07T18:17:17.339Z",
	    "entities": [],
	    "assets": [],
	    "hotSpots": [],
	    "sceneLinks": [{
	      "scene": "57a8c187a9931df287264276",
	      "_id": "57f7b1db7919660300d609ac",
	      "rotation": ["0", "-155", "60"],
	      "position": ["4.5", "0", "-2"]
	    }, {
	      "_id": "57f7b21a7919660300d609ad",
	      "scene": "57a8b81123f127ab872a95c2",
	      "rotation": ["0", "50", "70"],
	      "position": ["0", "0", "5.5"]
	    }, {
	      "scene": "57eada3c0f5149583eacf643",
	      "_id": "57f7b4df7919660300d609ae",
	      "rotation": ["0", "130", "70"],
	      "position": ["1.5", "0", "9"]
	    }]
	  },
	  "parent": "57ead427e481ce773d1544f5"
	}, {
	  "_id": "57d86a904ced833b63844e47",
	  "desc": "<p>The award-winning North Oshawa Library is designed to incorporate leading-edge technology while maintaining the comfort of a traditional library. Students enjoy 6,800 square metres of total learning space over four floors, including the Dixon-Alger Fireside Reading Room with a two-storey glass rotunda overlooking Polonsky Commons.</p>\r\n<p>The basement of North Oshawa Library serves as a seasonal laptop distribution centre (during high-traffic periods).</p>\r\n<p>The North Oshawa Library features:</p>\r\n<ul>\r\n<li>Individual and collaborative learning spaces</li>\r\n<li>Seating capacity of 500</li>\r\n<li>A reading room and fireplace</li>\r\n<li>160,000-volume book capacity</li>\r\n<li>160 computer workstations</li>\r\n<li>Wired and wireless environments</li>\r\n<li>Features to assist students with visual and learning disabilities</li>\r\n<li>A Starbucks caf&eacute;</li>\r\n</ul>\r\n<p>The Campus Libraries system also operates the Education Library, and the Social Science and Humanities Library at UOIT&rsquo;s downtown Oshawa location; as well as the Library at Durham College&rsquo;s Whitby Campus.</p>",
	  "label": "Library",
	  "code": "lib",
	  "name": "North Oshawa Library",
	  "coords": [-78.897276, 43.945878],
	  "parent": "57ead427e481ce773d1544f5"
	}, {
	  "_id": "57d869f94ced833b63844e46",
	  "desc": "<p>Serving students, faculty and staff from UOIT as well as Durham College, the Campus Recreation and Wellness Centre&rsquo;s (CRWC) modern facilities provide a wide variety of fitness and recreational opportunities.</p>\r\n<p>The 8,400-square-metre CRWC includes a large triple gymnasium, squash courts, an indoor track, The FLEX fitness centre (cardio and weight machines), training rooms, and a dance studio. The CRWC, which welcomes more than 10,000 users each month, also houses the Campus Health Centre&rsquo;s medical clinic and various services ranging from acupuncture and athletic therapy to massage therapy and counselling. There is also a full-service Lovell Drugs pharmacy on site.</p>",
	  "label": "Recreation and Wellness Centre",
	  "code": "crwc",
	  "name": "Campus Recreation and Wellness Centre",
	  "coords": [-78.898665, 43.944024],
	  "parent": "57ead427e481ce773d1544f5"
	}]).value('LocationResource', [{
	  label: 'North location',
	  code: 'north'
	}, {
	  label: 'Downtown location',
	  code: 'dt'
	}]);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWE3YzE1OGUzMjMzM2VkMGRlZTgiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zZXR1cC9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc2V0dXAvLmdsb2JhbHMuanNvbiIsIndlYnBhY2s6Ly8vLi90ZXN0L3NldHVwL3NldHVwLmpzIiwid2VicGFjazovLy8uL3Rlc3QvdW5pdC91b2l0LWNhbXB1cy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VvaXQtY2FtcHVzLW1hcC5qcyJdLCJuYW1lcyI6WyJtb2NoYUdsb2JhbHMiLCJyZXF1aXJlIiwiZ2xvYmFscyIsIndpbmRvdyIsIm1vY2hhIiwic2V0dXAiLCJvbmxvYWQiLCJjaGVja0xlYWtzIiwiT2JqZWN0Iiwia2V5cyIsInJ1biIsIm1vZHVsZSIsImV4cG9ydHMiLCJyb290IiwiZ2xvYmFsIiwiZXhwZWN0IiwiY2hhaSIsImJlZm9yZUVhY2giLCJzYW5kYm94Iiwic2lub24iLCJjcmVhdGUiLCJzdHViIiwiYmluZCIsInNweSIsIm1vY2siLCJ1c2VGYWtlVGltZXJzIiwidXNlRmFrZVhNTEh0dHBSZXF1ZXN0IiwidXNlRmFrZVNlcnZlciIsImFmdGVyRWFjaCIsInJlc3RvcmUiLCJkZXNjcmliZSIsImdyZWV0IiwiaXQiLCJ0byIsImhhdmUiLCJiZWVuIiwiY2FsbGVkT25jZSIsImFsd2F5cyIsInJldHVybmVkIiwiYW5ndWxhciIsImNvbnRyb2xsZXIiLCJOZ01hcCIsIkxvY2F0aW9uUmVzb3VyY2UiLCJCdWlsZGluZ1Jlc291cmNlIiwiTUFQX1NFVFRJTkdTIiwiRkVBVFVSRV9DQVRFR09SSUVTIiwic2V0dGluZ3MiLCJpY29uIiwibWFya2VyIiwiY29udHJvbHMiLCJsb2NhdGlvbnMiLCJjYXRlZ29yaWVzIiwibGFiZWxzIiwibWFya2VycyIsImNvbnNvbGUiLCJsb2ciLCJnZXRNYXAiLCJ0aGVuIiwiZ29vZ2xlIiwibWFwcyIsImV2ZW50IiwidHJpZ2dlciIsImluc3RhbmNlIiwiZGF0YSIsInNldFN0eWxlIiwiY2F0ZWdvcnkiLCJmZWF0dXJlIiwiZ2V0UHJvcGVydHkiLCJmaWxsQ29sb3IiLCJmaWxsT3BhY2l0eSIsInN0cm9rZVdlaWdodCIsInN0cm9rZUNvbG9yIiwic3Ryb2tlT3BhY2l0eSIsImFkZExpc3RlbmVyIiwicmV2ZXJ0U3R5bGUiLCJvdmVycmlkZVN0eWxlIiwibWFwSW5zdGFuY2UiLCJzaG93RGV0YWlsIiwiZSIsImYiLCJhbGVydCIsIm5hbWUiLCJsaW5rIiwiX2lkIiwiY29kZSIsImNvb3JkcyIsImRlc2MiLCJvbkNoYW5nZSIsIiRzY29wZSIsIiR3YXRjaCIsIiRuZ01vZGVsIiwiJG1vZGVsVmFsdWUiLCJuZXdWYWwiLCJvbGRWYWwiLCJjb21wb25lbnQiLCJ0ZW1wbGF0ZSIsImJpbmRpbmdzIiwiY29uc3RhbnQiLCJ0eXBlIiwic3R5bGVzIiwicGF0aCIsInJvdGF0aW9uIiwic2NhbGUiLCJ2YWx1ZSIsImxhYmVsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBSUEsZUFBZSxtQkFBQUMsQ0FBUSxDQUFSLEVBQTJCQyxPQUE5Qzs7QUFFQUMsUUFBT0MsS0FBUCxDQUFhQyxLQUFiLENBQW1CLEtBQW5CO0FBQ0FGLFFBQU9HLE1BQVAsR0FBZ0IsWUFBVztBQUN6QkgsVUFBT0MsS0FBUCxDQUFhRyxVQUFiO0FBQ0FKLFVBQU9DLEtBQVAsQ0FBYUYsT0FBYixDQUFxQk0sT0FBT0MsSUFBUCxDQUFZVCxZQUFaLENBQXJCO0FBQ0FHLFVBQU9DLEtBQVAsQ0FBYU0sR0FBYjtBQUNBVCxHQUFBLG1CQUFBQSxDQUFRLENBQVIsRUFBbUJFLE1BQW5CO0FBQ0QsRUFMRCxDOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7QUNYQVEsUUFBT0MsT0FBUCxHQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDOUJBLFVBQU9BLE9BQU9BLElBQVAsR0FBY0MsTUFBckI7QUFDQUQsUUFBS0UsTUFBTCxHQUFjRixLQUFLRyxJQUFMLENBQVVELE1BQXhCOztBQUVBRSxjQUFXLFlBQU07QUFDZjtBQUNBO0FBQ0FKLFVBQUtLLE9BQUwsR0FBZUwsS0FBS00sS0FBTCxDQUFXRCxPQUFYLENBQW1CRSxNQUFuQixFQUFmO0FBQ0FQLFVBQUtRLElBQUwsR0FBWVIsS0FBS0ssT0FBTCxDQUFhRyxJQUFiLENBQWtCQyxJQUFsQixDQUF1QlQsS0FBS0ssT0FBNUIsQ0FBWjtBQUNBTCxVQUFLVSxHQUFMLEdBQVdWLEtBQUtLLE9BQUwsQ0FBYUssR0FBYixDQUFpQkQsSUFBakIsQ0FBc0JULEtBQUtLLE9BQTNCLENBQVg7QUFDQUwsVUFBS1csSUFBTCxHQUFZWCxLQUFLSyxPQUFMLENBQWFNLElBQWIsQ0FBa0JGLElBQWxCLENBQXVCVCxLQUFLSyxPQUE1QixDQUFaO0FBQ0FMLFVBQUtZLGFBQUwsR0FBcUJaLEtBQUtLLE9BQUwsQ0FBYU8sYUFBYixDQUEyQkgsSUFBM0IsQ0FBZ0NULEtBQUtLLE9BQXJDLENBQXJCO0FBQ0FMLFVBQUthLHFCQUFMLEdBQTZCYixLQUFLSyxPQUFMLENBQWFRLHFCQUFiLENBQW1DSixJQUFuQyxDQUF3Q1QsS0FBS0ssT0FBN0MsQ0FBN0I7QUFDQUwsVUFBS2MsYUFBTCxHQUFxQmQsS0FBS0ssT0FBTCxDQUFhUyxhQUFiLENBQTJCTCxJQUEzQixDQUFnQ1QsS0FBS0ssT0FBckMsQ0FBckI7QUFDRCxJQVZEOztBQVlBVSxhQUFVLFlBQU07QUFDZCxZQUFPZixLQUFLUSxJQUFaO0FBQ0EsWUFBT1IsS0FBS1UsR0FBWjtBQUNBVixVQUFLSyxPQUFMLENBQWFXLE9BQWI7QUFDRCxJQUpEO0FBS0QsRUFyQkQsQzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQUVBQyxVQUFTLFdBQVQsRUFBc0IsWUFBTTtBQUMxQkEsWUFBUyxnQkFBVCxFQUEyQixZQUFNO0FBQy9CYixnQkFBVyxZQUFNO0FBQ2ZNLG9DQUFlLE9BQWY7QUFDQSwrQkFBVVEsS0FBVjtBQUNELE1BSEQ7O0FBS0FDLFFBQUcsMkJBQUgsRUFBZ0MsWUFBTTtBQUNwQ2pCLGNBQU8sd0JBQVVnQixLQUFqQixFQUF3QkUsRUFBeEIsQ0FBMkJDLElBQTNCLENBQWdDQyxJQUFoQyxDQUFxQ0MsVUFBckM7QUFDRCxNQUZEOztBQUlBSixRQUFHLG1DQUFILEVBQXdDLFlBQU07QUFDNUNqQixjQUFPLHdCQUFVZ0IsS0FBakIsRUFBd0JFLEVBQXhCLENBQTJCQyxJQUEzQixDQUFnQ0csTUFBaEMsQ0FBdUNDLFFBQXZDLENBQWdELE9BQWhEO0FBQ0QsTUFGRDtBQUdELElBYkQ7QUFjRCxFQWZELEU7Ozs7Ozs7Ozs7O21CQ0ZlQyxRQUFRNUIsTUFBUixDQUFlLFdBQWYsRUFBNEIsQ0FBQyxPQUFELENBQTVCLEVBQ1o2QixVQURZLENBQ0QsU0FEQyxFQUNVLENBQ3RCLE9BRHNCLEVBQ2Isa0JBRGEsRUFDTyxrQkFEUCxFQUV0QixjQUZzQixFQUVOLG9CQUZNLEVBR3RCLFVBQVNDLEtBQVQsRUFBZ0JDLGdCQUFoQixFQUFrQ0MsZ0JBQWxDLEVBQW9EQyxZQUFwRCxFQUFrRUMsa0JBQWxFLEVBQXNGO0FBQUE7O0FBRXBGLFFBQUtDLFFBQUwsR0FBZ0JGLFlBQWhCO0FBQ0EsUUFBS0csSUFBTCxHQUFZSCxhQUFhSSxNQUF6Qjs7QUFFQSxRQUFLQyxRQUFMLEdBQWdCO0FBQ2RDLGdCQUFXUixnQkFERztBQUVkUyxpQkFBWU4sa0JBRkU7QUFHZE8sYUFBUTtBQUhNLElBQWhCOztBQU1BLFFBQUtDLE9BQUwsR0FBZVYsZ0JBQWY7QUFDQVcsV0FBUUMsR0FBUixDQUFZLEtBQUtGLE9BQWpCOztBQUVBWixTQUFNZSxNQUFOLEdBQWVDLElBQWYsQ0FBb0Isb0JBQVk7QUFDOUJDLFlBQU9DLElBQVAsQ0FBWUMsS0FBWixDQUFrQkMsT0FBbEIsQ0FBMEJDLFFBQTFCLEVBQW9DLFFBQXBDO0FBQ0FBLGNBQVNDLElBQVQsQ0FBY0MsUUFBZCxDQUF1QjtBQUNyQmpCLGFBQU07QUFEZSxNQUF2QjtBQUdBZSxjQUFTQyxJQUFULENBQWNDLFFBQWQsQ0FBdUIsbUJBQVc7QUFDaEMsV0FBSUMsV0FBV0MsUUFBUUMsV0FBUixDQUFvQixVQUFwQixDQUFmO0FBQ0EsY0FBTztBQUNMQyxvQkFBVyxTQUROO0FBRUxDLHNCQUFhLENBRlI7QUFHTEMsdUJBQWMsQ0FIVDtBQUlMQyxzQkFBYSxTQUpSO0FBS0xDLHdCQUFlO0FBTFYsUUFBUDtBQU9ELE1BVEQ7QUFVQVYsY0FBU0MsSUFBVCxDQUFjVSxXQUFkLENBQTBCLFdBQTFCLEVBQXVDLGlCQUFTO0FBQzlDWCxnQkFBU0MsSUFBVCxDQUFjVyxXQUFkO0FBQ0FaLGdCQUFTQyxJQUFULENBQWNZLGFBQWQsQ0FBNEJmLE1BQU1NLE9BQWxDLEVBQTJDO0FBQ3pDRSxvQkFBVyxTQUQ4QjtBQUV6Q0Msc0JBQWEsR0FGNEI7QUFHekNDLHVCQUFjLENBSDJCO0FBSXpDQyxzQkFBYSxPQUo0QjtBQUt6Q0Msd0JBQWU7QUFMMEIsUUFBM0M7QUFPRCxNQVREO0FBVUFWLGNBQVNDLElBQVQsQ0FBY1UsV0FBZCxDQUEwQixVQUExQixFQUFzQyxpQkFBUztBQUM3Q1gsZ0JBQVNDLElBQVQsQ0FBY1csV0FBZDtBQUNELE1BRkQ7QUFHQSxXQUFLRSxXQUFMLEdBQW1CZCxRQUFuQjtBQUNELElBN0JEOztBQStCQSxRQUFLZSxVQUFMLEdBQWtCLFVBQVNDLENBQVQsRUFBWTtBQUM1QixVQUFLWixPQUFMLEdBQWVZLEVBQUVaLE9BQUYsQ0FBVWEsQ0FBekI7QUFDQUMsV0FDSyxLQUFLZCxPQUFMLENBQWFELFFBRGxCLFVBQytCLEtBQUtDLE9BQUwsQ0FBYWUsSUFENUMsaUJBRUMsS0FBS2YsT0FBTCxDQUFhZ0IsSUFBYixDQUFrQkMsR0FGbkIsa0JBR0UsS0FBS2pCLE9BQUwsQ0FBYWdCLElBQWIsQ0FBa0JFLElBSHBCLG9CQUlJLEtBQUtsQixPQUFMLENBQWFnQixJQUFiLENBQWtCRyxNQUFsQixDQUF5QixDQUF6QixDQUpKLFVBSW9DLEtBQUtuQixPQUFMLENBQWFnQixJQUFiLENBQWtCRyxNQUFsQixDQUF5QixDQUF6QixDQUpwQyxrQkFLRSxLQUFLbkIsT0FBTCxDQUFhZ0IsSUFBYixDQUFrQkksSUFMcEI7QUFPRCxJQVREOztBQVdBLFFBQUtDLFFBQUwsR0FBZ0IsWUFBTTtBQUNwQjdCLFlBQU9DLElBQVAsQ0FBWUMsS0FBWixDQUFrQkMsT0FBbEIsQ0FBMEIsTUFBS2UsV0FBL0IsRUFBNEMsUUFBNUM7QUFDRCxJQUZEO0FBSUQsRUEvRHFCLENBRFYsRUFrRVpwQyxVQWxFWSxDQWtFRCxpQkFsRUMsRUFrRWtCLENBQUMsUUFBRCxFQUFXLFVBQVNnRCxNQUFULEVBQWlCO0FBQUE7O0FBQ3pEbEMsV0FBUUMsR0FBUixDQUFZLElBQVo7QUFDQWlDLFVBQU9DLE1BQVAsQ0FDRTtBQUFBLFlBQU0sT0FBS0MsUUFBTCxDQUFjQyxXQUFwQjtBQUFBLElBREYsRUFFRSxVQUFDQyxNQUFELEVBQVNDLE1BQVQsRUFBb0I7QUFDbkIsWUFBSzVDLFFBQUwsR0FBZ0IyQyxNQUFoQjtBQUNBLElBSkgsRUFJSyxJQUpMO0FBS0QsRUFQOEIsQ0FsRWxCLEVBMEVaRSxTQTFFWSxDQTBFRixtQkExRUUsRUEwRW1CO0FBQzlCN0YsWUFBUztBQUNQeUYsZUFBVTtBQURILElBRHFCO0FBSTlCSywrdkNBSjhCO0FBb0M5QnZELGVBQVk7QUFwQ2tCLEVBMUVuQixFQWdIWnNELFNBaEhZLENBZ0hGLFdBaEhFLEVBZ0hXO0FBQ3RCO0FBQ0FFLGFBQVU7QUFDUjtBQUNBM0MsY0FBUztBQUZELElBRlk7QUFNdEI7QUFDQTBDLHV6QkFQc0I7QUErQnRCdkQsZUFBWTtBQS9CVSxFQWhIWCxFQWlKWnlELFFBakpZLENBaUpILGNBakpHLEVBaUphO0FBQ3hCQyxTQUFNLFNBRGtCO0FBRXhCQyxXQUFRLENBQ1I7QUFDRSxnQkFBVyxDQUFDO0FBQ1YscUJBQWM7QUFESixNQUFELEVBRVI7QUFDRCxxQkFBYyxDQUFDO0FBRGQsTUFGUSxFQUlSO0FBQ0QsZ0JBQVM7QUFEUixNQUpRO0FBRGIsSUFEUSxFQVNMO0FBQ0Qsb0JBQWUsbUJBRGQ7QUFFRCxvQkFBZSxVQUZkO0FBR0QsZ0JBQVcsQ0FBQztBQUNWLHFCQUFjO0FBREosTUFBRDtBQUhWLElBVEssRUFlTDtBQUNELG9CQUFlLE1BRGQ7QUFFRCxvQkFBZSxhQUZkO0FBR0QsZ0JBQVcsQ0FBQztBQUNWLHFCQUFjO0FBREosTUFBRDtBQUhWLElBZkssRUFxQkw7QUFDRCxvQkFBZSxPQURkO0FBRUQsZ0JBQVcsQ0FBQztBQUNWLGdCQUFTO0FBREMsTUFBRDtBQUZWLElBckJLLEVBMEJMO0FBQ0Qsb0JBQWUsS0FEZDtBQUVELG9CQUFlLGFBRmQ7QUFHRCxnQkFBVyxDQUFDO0FBQ1YscUJBQWM7QUFESixNQUFEO0FBSFYsSUExQkssRUFnQ0w7QUFDRCxvQkFBZSxLQURkO0FBRUQsb0JBQWUsYUFGZDtBQUdELGdCQUFXLENBQUM7QUFDVixxQkFBYztBQURKLE1BQUQ7QUFIVixJQWhDSyxFQXNDTDtBQUNELG9CQUFlLE1BRGQ7QUFFRCxvQkFBZSxlQUZkO0FBR0QsZ0JBQVcsQ0FBQztBQUNWLGdCQUFTO0FBREMsTUFBRDtBQUhWLElBdENLLEVBNENMO0FBQ0Qsb0JBQWUsWUFEZDtBQUVELG9CQUFlLGFBRmQ7QUFHRCxnQkFBVyxDQUFDO0FBQ1YscUJBQWM7QUFESixNQUFEO0FBSFYsSUE1Q0ssRUFrREw7QUFDRCxvQkFBZSxPQURkO0FBRUQsb0JBQWUsa0JBRmQ7QUFHRCxnQkFBVyxDQUFDO0FBQ1YsZ0JBQVM7QUFEQyxNQUFEO0FBSFYsSUFsREssRUF3REw7QUFDRCxvQkFBZSxjQURkO0FBRUQsb0JBQWUsVUFGZDtBQUdELGdCQUFXLENBQUM7QUFDVixnQkFBUztBQURDLE1BQUQ7QUFIVixJQXhESyxFQThETDtBQUNELG9CQUFlLGlCQURkO0FBRUQsb0JBQWUsYUFGZDtBQUdELGdCQUFXLENBQUM7QUFDVixxQkFBYztBQURKLE1BQUQ7QUFIVixJQTlESyxFQW9FTDtBQUNELG9CQUFlLE1BRGQ7QUFFRCxvQkFBZSxpQkFGZDtBQUdELGdCQUFXLENBQUM7QUFDVixnQkFBUztBQURDLE1BQUQ7QUFIVixJQXBFSyxDQUZnQjtBQTZFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQW5ELFdBQVE7QUFDTm9ELFdBQU0sc2JBREE7QUFFTjdCLGtCQUFhLE9BRlA7QUFHTkMsb0JBQWUsR0FIVDtBQUlORixtQkFBYyxDQUpSO0FBS05GLGdCQUFXLFNBTEw7QUFNTkMsa0JBQWEsR0FOUDtBQU9OZ0MsZUFBVSxDQVBKO0FBUU5DLFlBQU87QUFSRDtBQWhHZ0IsRUFqSmIsRUE0UFpMLFFBNVBZLENBNFBILG9CQTVQRyxFQTRQbUIsQ0FDOUIsV0FEOEIsRUFFOUIsb0JBRjhCLEVBRzlCLFVBSDhCLEVBSTlCLG9CQUo4QixFQUs5QiwyQkFMOEIsRUFNOUIsWUFOOEIsRUFPOUIsU0FQOEIsRUFROUIsZ0JBUjhCLEVBUzlCLHVCQVQ4QixDQTVQbkIsRUF1UVpNLEtBdlFZLENBdVFOLGtCQXZRTSxFQXVRYyxDQUMzQjtBQUNFLFVBQU8sMEJBRFQ7QUFFRSxXQUFRLCtCQUZWO0FBR0UsWUFBUywwQkFIWDtBQUlFLFdBQVEsSUFKVjtBQUtFLFdBQVEsNmJBTFY7QUFNRSxhQUFVLENBQUMsQ0FBQyxTQUFGLEVBQ1IsU0FEUSxDQU5aO0FBU0UsYUFBVTtBQVRaLEVBRDJCLEVBV3hCO0FBQ0QsVUFBTywwQkFETjtBQUVELFdBQVEsdUNBRlA7QUFHRCxZQUFTLEtBSFI7QUFJRCxXQUFRLEtBSlA7QUFLRCxXQUFRLG15QkFMUDtBQU1ELGFBQVUsQ0FBQyxDQUFDLFNBQUYsRUFDUixRQURRLENBTlQ7QUFTRCxhQUFVO0FBVFQsRUFYd0IsRUFxQnhCO0FBQ0QsVUFBTywwQkFETjtBQUVELFdBQVEsdVJBRlA7QUFHRCxZQUFTLG1CQUhSO0FBSUQsV0FBUSxLQUpQO0FBS0QsV0FBUSxtQkFMUDtBQU1ELGFBQVUsQ0FBQyxDQUFDLFFBQUYsRUFDUixTQURRLENBTlQ7QUFTRCxhQUFVO0FBVFQsRUFyQndCLEVBK0J4QjtBQUNELFVBQU8sMEJBRE47QUFFRCxnQkFBYSwwQkFGWjtBQUdELGdCQUFhLDBCQUhaO0FBSUQsYUFBVSwwQkFKVDtBQUtELGFBQVUsQ0FBQyxDQUFDLFFBQUYsRUFDUixTQURRLENBTFQ7QUFRRCxXQUFRLEVBUlA7QUFTRCxXQUFRLEtBVFA7QUFVRCxZQUFTLGdCQVZSO0FBV0QsV0FBUSwyQkFYUDtBQVlELGNBQVc7QUFDVCxZQUFPLDBCQURFO0FBRVQsYUFBUSxJQUZDO0FBR1QsYUFBUSxxQkFIQztBQUlULFlBQU8sQ0FKRTtBQUtULGVBQVUsRUFMRDtBQU1ULGVBQVUsMEJBTkQ7QUFPVCxrQkFBYSwwQkFQSjtBQVFULGlCQUFZLEVBUkg7QUFXVCxlQUFVLEVBWEQ7QUFjVCxpQkFBWSxFQWRIO0FBaUJULG1CQUFjLENBQUM7QUFDYixnQkFBUywwQkFESTtBQUViLGNBQU8sMEJBRk07QUFHYixtQkFBWSxDQUNWLEdBRFUsRUFFVixNQUZVLEVBR1YsSUFIVSxDQUhDO0FBUWIsbUJBQVksQ0FDVixNQURVLEVBRVYsTUFGVSxFQUdWLE9BSFU7QUFSQyxNQUFELEVBYVg7QUFDRCxjQUFPLDBCQUROO0FBRUQsZ0JBQVMsMEJBRlI7QUFHRCxtQkFBWSxDQUNWLEdBRFUsRUFFVixLQUZVLEVBR1YsSUFIVSxDQUhYO0FBUUQsbUJBQVksQ0FDVixLQURVLEVBRVYsTUFGVSxFQUdWLE1BSFU7QUFSWCxNQWJXLEVBMEJYO0FBQ0QsZ0JBQVMsMEJBRFI7QUFFRCxjQUFPLDBCQUZOO0FBR0QsbUJBQVksQ0FDVixHQURVLEVBRVYsS0FGVSxFQUdWLElBSFUsQ0FIWDtBQVFELG1CQUFZLENBQ1YsSUFEVSxFQUVWLEtBRlUsRUFHVixJQUhVO0FBUlgsTUExQlc7QUFqQkw7QUFaVixFQS9Cd0IsRUFxR3hCO0FBQ0QsVUFBTywwQkFETjtBQUVELFdBQVEsdUJBRlA7QUFHRCxZQUFTLGtCQUhSO0FBSUQsV0FBUSxJQUpQO0FBS0QsV0FBUSxva0JBTFA7QUFNRCxhQUFVLENBQUMsQ0FBQyxTQUFGLEVBQ1IsU0FEUSxDQU5UO0FBU0QsY0FBVztBQUNULFlBQU8sMEJBREU7QUFFVCxhQUFRLFlBRkM7QUFHVCxhQUFRLDBCQUhDO0FBSVQsWUFBTyxDQUpFO0FBS1QsZUFBVSxFQUxEO0FBTVQsZUFBVSwwQkFORDtBQU9ULGtCQUFhLDBCQVBKO0FBUVQsaUJBQVksRUFSSDtBQVdULGVBQVUsRUFYRDtBQWNULGlCQUFZLEVBZEg7QUFpQlQsbUJBQWMsQ0FBQztBQUNiLGdCQUFTLDBCQURJO0FBRWIsY0FBTywwQkFGTTtBQUdiLG1CQUFZLENBQ1YsR0FEVSxFQUVWLE1BRlUsRUFHVixJQUhVLENBSEM7QUFRYixtQkFBWSxDQUNWLEtBRFUsRUFFVixHQUZVLEVBR1YsSUFIVTtBQVJDLE1BQUQsRUFhWDtBQUNELGNBQU8sMEJBRE47QUFFRCxnQkFBUywwQkFGUjtBQUdELG1CQUFZLENBQ1YsR0FEVSxFQUVWLElBRlUsRUFHVixJQUhVLENBSFg7QUFRRCxtQkFBWSxDQUNWLEdBRFUsRUFFVixHQUZVLEVBR1YsS0FIVTtBQVJYLE1BYlcsRUEwQlg7QUFDRCxnQkFBUywwQkFEUjtBQUVELGNBQU8sMEJBRk47QUFHRCxtQkFBWSxDQUNWLEdBRFUsRUFFVixLQUZVLEVBR1YsSUFIVSxDQUhYO0FBUUQsbUJBQVksQ0FDVixLQURVLEVBRVYsR0FGVSxFQUdWLEdBSFU7QUFSWCxNQTFCVztBQWpCTCxJQVRWO0FBbUVELGFBQVU7QUFuRVQsRUFyR3dCLEVBeUt4QjtBQUNELFVBQU8sMEJBRE47QUFFRCxXQUFRLHVtQ0FGUDtBQUdELFlBQVMsU0FIUjtBQUlELFdBQVEsS0FKUDtBQUtELFdBQVEsc0JBTFA7QUFNRCxhQUFVLENBQUMsQ0FBQyxTQUFGLEVBQ1IsU0FEUSxDQU5UO0FBU0QsYUFBVTtBQVRULEVBekt3QixFQW1MeEI7QUFDRCxVQUFPLDBCQUROO0FBRUQsV0FBUSw0ckJBRlA7QUFHRCxZQUFTLGdDQUhSO0FBSUQsV0FBUSxNQUpQO0FBS0QsV0FBUSx1Q0FMUDtBQU1ELGFBQVUsQ0FBQyxDQUFDLFNBQUYsRUFDUixTQURRLENBTlQ7QUFTRCxhQUFVO0FBVFQsRUFuTHdCLENBdlFkLEVBcWNaQSxLQXJjWSxDQXFjTixrQkFyY00sRUFxY2MsQ0FDekI7QUFDRUMsVUFBTyxnQkFEVDtBQUVFcEIsU0FBTTtBQUZSLEVBRHlCLEVBS3pCO0FBQ0VvQixVQUFPLG1CQURUO0FBRUVwQixTQUFNO0FBRlIsRUFMeUIsQ0FyY2QsQyIsImZpbGUiOiJfX3NwZWMtYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGFhN2MxNThlMzIzMzNlZDBkZWU4XG4gKiovIiwidmFyIG1vY2hhR2xvYmFscyA9IHJlcXVpcmUoJy4vLmdsb2JhbHMuanNvbicpLmdsb2JhbHM7XG5cbndpbmRvdy5tb2NoYS5zZXR1cCgnYmRkJyk7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5tb2NoYS5jaGVja0xlYWtzKCk7XG4gIHdpbmRvdy5tb2NoYS5nbG9iYWxzKE9iamVjdC5rZXlzKG1vY2hhR2xvYmFscykpO1xuICB3aW5kb3cubW9jaGEucnVuKCk7XG4gIHJlcXVpcmUoJy4vc2V0dXAnKSh3aW5kb3cpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC9zZXR1cC9icm93c2VyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ2xvYmFsc1wiOiB7XG5cdFx0XCJleHBlY3RcIjogdHJ1ZSxcblx0XHRcIm1vY2tcIjogdHJ1ZSxcblx0XHRcInNhbmRib3hcIjogdHJ1ZSxcblx0XHRcInNweVwiOiB0cnVlLFxuXHRcdFwic3R1YlwiOiB0cnVlLFxuXHRcdFwidXNlRmFrZVNlcnZlclwiOiB0cnVlLFxuXHRcdFwidXNlRmFrZVRpbWVyc1wiOiB0cnVlLFxuXHRcdFwidXNlRmFrZVhNTEh0dHBSZXF1ZXN0XCI6IHRydWVcblx0fVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdGVzdC9zZXR1cC8uZ2xvYmFscy5qc29uXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyb290KSB7XG4gIHJvb3QgPSByb290ID8gcm9vdCA6IGdsb2JhbDtcbiAgcm9vdC5leHBlY3QgPSByb290LmNoYWkuZXhwZWN0O1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIC8vIFVzaW5nIHRoZXNlIGdsb2JhbGx5LWF2YWlsYWJsZSBTaW5vbiBmZWF0dXJlcyBpcyBwcmVmZXJyYWJsZSwgYXMgdGhleSdyZVxuICAgIC8vIGF1dG9tYXRpY2FsbHkgcmVzdG9yZWQgZm9yIHlvdSBpbiB0aGUgc3Vic2VxdWVudCBgYWZ0ZXJFYWNoYFxuICAgIHJvb3Quc2FuZGJveCA9IHJvb3Quc2lub24uc2FuZGJveC5jcmVhdGUoKTtcbiAgICByb290LnN0dWIgPSByb290LnNhbmRib3guc3R1Yi5iaW5kKHJvb3Quc2FuZGJveCk7XG4gICAgcm9vdC5zcHkgPSByb290LnNhbmRib3guc3B5LmJpbmQocm9vdC5zYW5kYm94KTtcbiAgICByb290Lm1vY2sgPSByb290LnNhbmRib3gubW9jay5iaW5kKHJvb3Quc2FuZGJveCk7XG4gICAgcm9vdC51c2VGYWtlVGltZXJzID0gcm9vdC5zYW5kYm94LnVzZUZha2VUaW1lcnMuYmluZChyb290LnNhbmRib3gpO1xuICAgIHJvb3QudXNlRmFrZVhNTEh0dHBSZXF1ZXN0ID0gcm9vdC5zYW5kYm94LnVzZUZha2VYTUxIdHRwUmVxdWVzdC5iaW5kKHJvb3Quc2FuZGJveCk7XG4gICAgcm9vdC51c2VGYWtlU2VydmVyID0gcm9vdC5zYW5kYm94LnVzZUZha2VTZXJ2ZXIuYmluZChyb290LnNhbmRib3gpO1xuICB9KTtcblxuICBhZnRlckVhY2goKCkgPT4ge1xuICAgIGRlbGV0ZSByb290LnN0dWI7XG4gICAgZGVsZXRlIHJvb3Quc3B5O1xuICAgIHJvb3Quc2FuZGJveC5yZXN0b3JlKCk7XG4gIH0pO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC9zZXR1cC9zZXR1cC5qc1xuICoqLyIsImltcG9ydCBjYW1wdXNNYXAgZnJvbSAnLi4vLi4vc3JjL3VvaXQtY2FtcHVzLW1hcCc7XG5cbmRlc2NyaWJlKCdjYW1wdXNNYXAnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdHcmVldCBmdW5jdGlvbicsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIHNweShjYW1wdXNNYXAsICdncmVldCcpO1xuICAgICAgY2FtcHVzTWFwLmdyZWV0KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGhhdmUgYmVlbiBydW4gb25jZScsICgpID0+IHtcbiAgICAgIGV4cGVjdChjYW1wdXNNYXAuZ3JlZXQpLnRvLmhhdmUuYmVlbi5jYWxsZWRPbmNlO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBoYXZlIGFsd2F5cyByZXR1cm5lZCBoZWxsbycsICgpID0+IHtcbiAgICAgIGV4cGVjdChjYW1wdXNNYXAuZ3JlZXQpLnRvLmhhdmUuYWx3YXlzLnJldHVybmVkKCdoZWxsbycpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L3VuaXQvdW9pdC1jYW1wdXMtbWFwLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgYW5ndWxhci5tb2R1bGUoJ2NhbXB1c01hcCcsIFsnbmdNYXAnXSlcbiAgLmNvbnRyb2xsZXIoJ01hcEN0cmwnLCBbXG4gIFx0J05nTWFwJywgJ0xvY2F0aW9uUmVzb3VyY2UnLCAnQnVpbGRpbmdSZXNvdXJjZScsXG4gIFx0J01BUF9TRVRUSU5HUycsICdGRUFUVVJFX0NBVEVHT1JJRVMnLFxuICBcdGZ1bmN0aW9uKE5nTWFwLCBMb2NhdGlvblJlc291cmNlLCBCdWlsZGluZ1Jlc291cmNlLCBNQVBfU0VUVElOR1MsIEZFQVRVUkVfQ0FURUdPUklFUykge1xuXHQgICAgXG5cdCAgICB0aGlzLnNldHRpbmdzID0gTUFQX1NFVFRJTkdTO1xuXHQgICAgdGhpcy5pY29uID0gTUFQX1NFVFRJTkdTLm1hcmtlcjtcblx0ICBcblx0ICAgIHRoaXMuY29udHJvbHMgPSB7XG5cdCAgICAgIGxvY2F0aW9uczogTG9jYXRpb25SZXNvdXJjZSxcblx0ICAgICAgY2F0ZWdvcmllczogRkVBVFVSRV9DQVRFR09SSUVTLFxuXHQgICAgICBsYWJlbHM6IHRydWVcblx0ICAgIH1cblxuXHQgICAgdGhpcy5tYXJrZXJzID0gQnVpbGRpbmdSZXNvdXJjZTtcblx0ICAgIGNvbnNvbGUubG9nKHRoaXMubWFya2Vycyk7XG5cdCAgXG5cdCAgICBOZ01hcC5nZXRNYXAoKS50aGVuKGluc3RhbmNlID0+IHtcblx0ICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihpbnN0YW5jZSwgJ3Jlc2l6ZScpO1xuXHQgICAgICBpbnN0YW5jZS5kYXRhLnNldFN0eWxlKHtcblx0ICAgICAgICBpY29uOiBcImh0dHA6Ly9tYXBzLmdvb2dsZS5jb20vbWFwZmlsZXMvZGlyXzAucG5nXCJcblx0ICAgICAgfSk7XG5cdCAgICAgIGluc3RhbmNlLmRhdGEuc2V0U3R5bGUoZmVhdHVyZSA9PiB7XG5cdCAgICAgICAgdmFyIGNhdGVnb3J5ID0gZmVhdHVyZS5nZXRQcm9wZXJ0eSgnY2F0ZWdvcnknKTtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgZmlsbENvbG9yOiAnIzAwNzdDQScsXG5cdCAgICAgICAgICBmaWxsT3BhY2l0eTogMSxcblx0ICAgICAgICAgIHN0cm9rZVdlaWdodDogMyxcblx0ICAgICAgICAgIHN0cm9rZUNvbG9yOiAnIzAwM0M3MScsXG5cdCAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjNcblx0ICAgICAgICB9O1xuXHQgICAgICB9KTtcblx0ICAgICAgaW5zdGFuY2UuZGF0YS5hZGRMaXN0ZW5lcignbW91c2VvdmVyJywgZXZlbnQgPT4ge1xuXHQgICAgICAgIGluc3RhbmNlLmRhdGEucmV2ZXJ0U3R5bGUoKTtcblx0ICAgICAgICBpbnN0YW5jZS5kYXRhLm92ZXJyaWRlU3R5bGUoZXZlbnQuZmVhdHVyZSwge1xuXHQgICAgICAgICAgZmlsbENvbG9yOiAnI0M3MTU2NicsXG5cdCAgICAgICAgICBmaWxsT3BhY2l0eTogMC43LFxuXHQgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiA1LFxuXHQgICAgICAgICAgc3Ryb2tlQ29sb3I6ICd3aGl0ZScsXG5cdCAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjdcblx0ICAgICAgICB9KTtcblx0ICAgICAgfSk7XG5cdCAgICAgIGluc3RhbmNlLmRhdGEuYWRkTGlzdGVuZXIoJ21vdXNlb3V0JywgZXZlbnQgPT4ge1xuXHQgICAgICAgIGluc3RhbmNlLmRhdGEucmV2ZXJ0U3R5bGUoKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHRoaXMubWFwSW5zdGFuY2UgPSBpbnN0YW5jZTtcblx0ICAgIH0pO1xuXG5cdCAgICB0aGlzLnNob3dEZXRhaWwgPSBmdW5jdGlvbihlKSB7XG5cdCAgICAgIHRoaXMuZmVhdHVyZSA9IGUuZmVhdHVyZS5mO1xuXHQgICAgICBhbGVydChcblx0ICAgICAgICBgJHt0aGlzLmZlYXR1cmUuY2F0ZWdvcnl9OiAke3RoaXMuZmVhdHVyZS5uYW1lfVxuXHRfaWQ6ICR7dGhpcy5mZWF0dXJlLmxpbmsuX2lkfVxuXHRjb2RlOiAke3RoaXMuZmVhdHVyZS5saW5rLmNvZGV9XG5cdGNvb3JkczogJHt0aGlzLmZlYXR1cmUubGluay5jb29yZHNbMF19LCAke3RoaXMuZmVhdHVyZS5saW5rLmNvb3Jkc1sxXX1cblx0ZGVzYzogJHt0aGlzLmZlYXR1cmUubGluay5kZXNjfWBcblx0ICAgICAgKTtcblx0ICAgIH07XG5cdCAgXG5cdCAgICB0aGlzLm9uQ2hhbmdlID0gKCkgPT4ge1xuXHQgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMubWFwSW5zdGFuY2UsICdyZXNpemUnKTtcblx0ICAgIH1cblxuICBcdH1dXG4gIClcbiAgLmNvbnRyb2xsZXIoJ01hcENvbnRyb2xzQ3RybCcsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgJHNjb3BlLiR3YXRjaChcbiAgICAgICgpID0+IHRoaXMuJG5nTW9kZWwuJG1vZGVsVmFsdWUsXG4gICAgICAobmV3VmFsLCBvbGRWYWwpID0+IHtcbiAgICAgIFx0dGhpcy5jb250cm9scyA9IG5ld1ZhbDtcbiAgICAgIH0sIHRydWUpO1xuICB9XSlcbiAgLmNvbXBvbmVudCgnY2FtcHVzTWFwQ29udHJvbHMnLCB7XG4gICAgcmVxdWlyZToge1xuICAgICAgJG5nTW9kZWw6ICduZ01vZGVsJ1xuICAgIH0sXG4gICAgdGVtcGxhdGU6IGA8bWQtd2hpdGVmcmFtZVxuICAgICAgY2xhc3M9XCJtZC13aGl0ZWZyYW1lLTE2ZHAgbWFwLWNvbnRyb2xzXCJcbiAgICAgIGxheW91dD1cImNvbHVtblwiXG4gICAgICBsYXlvdXQtYWxpZ249XCJjZW50ZXIgY2VudGVyXCJcbiAgICAgIGxheW91dC1maWxsPlxuICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIj5cbiAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICA8bGFiZWw+TG9jYXRpb248L2xhYmVsPlxuICAgICAgICAgIDxtZC1zZWxlY3QgbmctbW9kZWw9XCIkY3RybC5jb250cm9scy5sb2NhdGlvblwiPlxuICAgICAgICAgICAgPG1kLW9wdGlvbiBuZy1yZXBlYXQ9XCJsb2NhdGlvbiBpbiAkY3RybC5jb250cm9scy5sb2NhdGlvbnNcIiBuZy12YWx1ZT1cImxvY2F0aW9uLmNvZGVcIiBuZy1kaXNhYmxlZD1cIiRjdHJsLmNvbnRyb2xzLmxvY2F0aW9uID09PSBsb2NhdGlvbi5jb2RlXCI+XG4gICAgICAgICAgICAgIHt7bG9jYXRpb24ubGFiZWx9fVxuICAgICAgICAgICAgPC9tZC1vcHRpb24+XG4gICAgICAgICAgPC9tZC1zZWxlY3Q+XG4gICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgIDxsYWJlbD5GZWF0dXJlIGNhdGVnb3J5PC9sYWJlbD5cbiAgICAgICAgICA8bWQtc2VsZWN0IG5nLW1vZGVsPVwiJGN0cmwuY29udHJvbHMuY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgIDxtZC1vcHRpb24gbmctcmVwZWF0PVwiY2F0ZWdvcnkgaW4gJGN0cmwuY29udHJvbHMuY2F0ZWdvcmllc1wiIG5nLXZhbHVlPVwiY2F0ZWdvcnlcIiBuZy1kaXNhYmxlZD1cIiRjdHJsLmNvbnRyb2xzLmNhdGVnb3J5ID09PSBjYXRlZ29yeVwiPlxuICAgICAgICAgICAgICB7eyBjYXRlZ29yeSB9fVxuICAgICAgICAgICAgPC9tZC1vcHRpb24+XG4gICAgICAgICAgPC9tZC1zZWxlY3Q+XG4gICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGxheW91dD1cInJvd1wiPlxuICAgICAgICA8bWQtc3dpdGNoXG4gICAgICAgICAgbmctbW9kZWw9XCIkY3RybC5jb250cm9scy5sYWJlbHNcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbGFiZWxzXCJcbiAgICAgICAgICBjbGFzcz1cIm1kLXByaW1hcnlcIj5cbiAgICAgICAgICBMYWJlbHMgYXJlIDxzdHJvbmc+e3sgJGN0cmwuY29udHJvbHMubGFiZWxzID8gJ29uJyA6ICdvZmYnIH19PC9zdHJvbmc+XG4gICAgICAgIDwvbWQtc3dpdGNoPlxuICAgICAgPC9kaXY+XG4gICAgPC9tZC13aGl0ZWZyYW1lPmAsXG4gICAgY29udHJvbGxlcjogJ01hcENvbnRyb2xzQ3RybCdcbiAgfSlcbiAgLmNvbXBvbmVudCgnY2FtcHVzTWFwJywge1xuICAgIC8vIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgYmluZGluZ3M6IHtcbiAgICAgIC8vIG9uVG9nZ2xlOiAnJj8nLFxuICAgICAgbWFya2VyczogJzwnXG4gICAgfSxcbiAgICAvLyB0ZW1wbGF0ZVVybDogJ3NpZGViYXIvbWFwL19tYXAuaHRtbCcsXG4gICAgdGVtcGxhdGU6IGA8bmctbWFwXG5cdCAgICBjZW50ZXI9XCI0My45NDQzODAyLC03OC44OTc1ODU3XCJcblx0ICAgIHpvb209XCIxN1wiXG5cdCAgICBzdHlsZXM9XCJ7eyAkY3RybC5zZXR0aW5ncy5zdHlsZXMgfX1cIlxuXHQgICAgbWFwLXR5cGUtaWQ9XCJ7eyAkY3RybC5zZXR0aW5ncy50eXBlIH19XCJcblx0ICAgIGRpc2FibGUtZGVmYXVsdC11LWk9XCJ0cnVlXCJcblx0ICAgIHRpbHQ9XCI0NVwiXG5cdCAgICBoZWFkaW5nPVwiMFwiXG5cdCAgICBsYXlvdXRcblx0ICAgIGxheW91dC1maWxsPlxuXHQgICAgPG1hcmtlclxuXHQgICAgICBuZy1yZXBlYXQ9XCJtIGluICRjdHJsLm1hcmtlcnMgdHJhY2sgYnkgJGluZGV4XCJcblx0ICAgICAgcG9zaXRpb249XCJ7eyBtLmNvb3Jkc1sxXSB9fSwge3sgbS5jb29yZHNbMF0gfX1cIlxuXHQgICAgICBpY29uPVwie3sgJGN0cmwuaWNvbiB9fVwiXG5cdCAgICAgIGlkPVwie3ttLl9pZH19XCI+PC9tYXJrZXI+XG5cdCAgICA8bWFwLWRhdGFcblx0ICAgICAgbmctaW5pdD1cImNhbGxiYWNrID0gJGN0cmwuc2hvd0RldGFpbFwiXG5cdCAgICAgIG9uLWNsaWNrPVwiY2FsbGJhY2sobSlcIlxuXHQgICAgICBsb2FkLWdlby1qc29uPVwiaHR0cDovL3NoYXJlZC51b2l0LmNhL2dlby5qc29uXCI+XG5cdCAgICA8L21hcC1kYXRhPlxuXHQgICAgPGN1c3RvbS1jb250cm9sIGlkPVwiaG9tZVwiIHBvc2l0aW9uPVwiVE9QX0xFRlRcIiBpbmRleD1cIjFcIj5cblx0XHRcdFx0PGNhbXB1cy1tYXAtY29udHJvbHMgbmctbW9kZWw9XCIkY3RybC5jb250cm9sc1wiPjwvY2FtcHVzLW1hcC1jb250cm9scz5cblx0ICAgIDwvY3VzdG9tLWNvbnRyb2w+XG5cdCAgPC9uZy1tYXA+YCxcbiAgICBjb250cm9sbGVyOiAnTWFwQ3RybCdcbiAgfSlcbiAgLmNvbnN0YW50KCdNQVBfU0VUVElOR1MnLCB7XG4gICAgdHlwZTogJ1JPQURNQVAnLFxuICAgIHN0eWxlczogW1xuICAgIHtcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICB9LCB7XG4gICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTAwXG4gICAgICB9LCB7XG4gICAgICAgIFwiZ2FtbWFcIjogMC41NFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWxcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI0IwQjBCMFwiXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXQubGluZVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJnYW1tYVwiOiAwLjQ4XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LnN0YXRpb25cIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgXCJnYW1tYVwiOiA3LjE4XG4gICAgICB9XVxuICAgIH1dLFxuICAgIC8vIFt7XG4gICAgLy8gICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWxcIixcbiAgICAvLyAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIC8vICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgLy8gICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgLy8gICB9XVxuICAgIC8vIH0sIHtcbiAgICAvLyAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kuc2Nob29sXCIsXG4gICAgLy8gICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAvLyAgIFwic3R5bGVyc1wiOiBbe1xuICAgIC8vICAgICBcImNvbG9yXCI6IFwiI2VkZWRlZFwiXG4gICAgLy8gICB9XVxuICAgIC8vIH0sIHtcbiAgICAvLyAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubWFuX21hZGVcIixcbiAgICAvLyAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIC8vICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgLy8gICAgIFwiY29sb3JcIjogXCIjMDA3N2NhXCJcbiAgICAvLyAgIH1dXG4gICAgLy8gfV0sXG4gICAgbWFya2VyOiB7XG4gICAgICBwYXRoOiAnTTMuODMsMy41N0ExMS44LDExLjgsMCwwLDEsMTIuNSwwYTExLjgsMTEuOCwwLDAsMSw4LjY3LDMuNTcsMTEuOCwxMS44LDAsMCwxLDMuNTcsOC42NywxNi40MywxNi40MywwLDAsMS0xLjI3LDUuODMsMzYsMzYsMCwwLDEtMy4wOCw2LjE2cS0xLjgxLDIuODgtMy41Nyw1LjM4dC0zLDRMMTIuNSwzNWwtMS4zMS0xLjUycS0uODItLjk0LTMtMy43OGE2My4zMiw2My4zMiwwLDAsMS0zLjc0LTUuNSw0MCw0MCwwLDAsMS0yLjkyLTZBMTYuNjIsMTYuNjIsMCwwLDEsLjI2LDEyLjI0LDExLjgsMTEuOCwwLDAsMSwzLjgzLDMuNTdaTTkuNDIsMTUuMzJBNC4yLDQuMiwwLDAsMCwxMi41LDE2LjZhNC4zNSw0LjM1LDAsMCwwLDQuMzUtNC4zNUE0LjM1LDQuMzUsMCwwLDAsMTIuNSw3Ljg5YTQuMzUsNC4zNSwwLDAsMC00LjM1LDQuMzVBNC4yLDQuMiwwLDAsMCw5LjQyLDE1LjMyWicsXG4gICAgICBzdHJva2VDb2xvcjogJ3doaXRlJyxcbiAgICAgIHN0cm9rZU9wYWNpdHk6IDAuNyxcbiAgICAgIHN0cm9rZVdlaWdodDogMyxcbiAgICAgIGZpbGxDb2xvcjogJyMwMDNjNzEnLFxuICAgICAgZmlsbE9wYWNpdHk6IDAuOSxcbiAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgc2NhbGU6IDEuMFxuICAgIH1cbiAgfSlcbiAgLmNvbnN0YW50KCdGRUFUVVJFX0NBVEVHT1JJRVMnLCBbXG4gICAgJ0J1aWxkaW5ncycsXG4gICAgJ0Rvd250b3duIEJ1aWxkaW5ncycsXG4gICAgJ1NlcnZpY2VzJyxcbiAgICAnRW1lcmdlbmN5IFNlcnZpY2VzJyxcbiAgICAnUmVzdGF1cmFudHMgJiBGb29kIENvdXJ0cycsXG4gICAgJ1Jlc2lkZW5jZXMnLFxuICAgICdQYXJraW5nJyxcbiAgICAnT3V0ZG9vciBTcGFjZXMnLFxuICAgICdPc2hhd2EgQ2l0eSBCdWlsZGluZ3MnXG4gIF0pXG4gIC52YWx1ZSgnQnVpbGRpbmdSZXNvdXJjZScsIFtcbiAge1xuICAgIFwiX2lkXCI6IFwiNTdhOGUzOGIxMmFkOTlmZTg4OWM5NWYzXCIsXG4gICAgXCJuYW1lXCI6IFwiQnVzaW5lc3MgYW5kIElUIEJ1aWxkaW5nIChVQilcIixcbiAgICBcImxhYmVsXCI6IFwiQnVzaW5lc3MgYW5kIElUIEJ1aWxkaW5nXCIsXG4gICAgXCJjb2RlXCI6IFwidWJcIixcbiAgICBcImRlc2NcIjogXCI8cD5SZWZlcnJlZCBvbiBjYW1wdXMgYnkgbWFueSBhcyBVQiwgdGhlIDksNzAwLXNxdWFyZS1tZXRyZSBCdXNpbmVzcyBhbmQgSW5mb3JtYXRpb24gVGVjaG5vbG9neSBCdWlsZGluZyBvZmZlcnMgb3VyIHN0dWRlbnRzIGlubm92YXRpdmUgcmVzZWFyY2ggbGFib3JhdG9yaWVzLCBtb2Rlcm4gbGVjdHVyZSBoYWxscywgYSBsYXJnZSBjYWYmZWFjdXRlOyBhbmQgc3R1ZGVudCBsb3VuZ2UgYXJlYXMuIEl0IGlzIHRoZSBob21lIG9mIHRoZSBGYWN1bHR5IG9mIEJ1c2luZXNzIGFuZCBJbmZvcm1hdGlvbiBUZWNobm9sb2d5LjwvcD5cXHJcXG48cD5MaWtlIG90aGVyIFVPSVQgYWNhZGVtaWMgYnVpbGRpbmdzLCBhIHBvcnRpb24gb2YgVUIncyByb29mdG9wIGlzICdncmVlbicsIGp1c3Qgb25lIG9mIFVPSVQncyBtYW55IGVudmlyb25tZW50YWxseSBmcmllbmRseSBmZWF0dXJlcy48L3A+XCIsXG4gICAgXCJjb29yZHNcIjogWy03OC44OTYwOTUsXG4gICAgICA0My45NDUxNTZcbiAgICBdLFxuICAgIFwicGFyZW50XCI6IFwiNTdlYWQ0MjdlNDgxY2U3NzNkMTU0NGY1XCJcbiAgfSwge1xuICAgIFwiX2lkXCI6IFwiNTdhOGU0YjkxMmFkOTlmZTg4OWM5NWY0XCIsXG4gICAgXCJuYW1lXCI6IFwiQXV0b21vdGl2ZSBDZW50cmUgb2YgRXhjZWxsZW5jZSAoQUNFKVwiLFxuICAgIFwibGFiZWxcIjogXCJBQ0VcIixcbiAgICBcImNvZGVcIjogXCJhY2VcIixcbiAgICBcImRlc2NcIjogXCI8cD5BQ0UgaXMgdGhlIGZpcnN0IGNvbW1lcmNpYWwgYXV0b21vdGl2ZSByZXNlYXJjaCwgZGV2ZWxvcG1lbnQgYW5kIGlubm92YXRpb24gY2VudHJlIG9mIGl0cyBraW5kIGluIHRoZSB3b3JsZC4gVGhpcyBpcyBhIHBsYWNlIHdoZXJlIGluZHVzdHJ5LCByZXNlYXJjaGVycyBhbmQgc3R1ZGVudHMgY29sbGFib3JhdGUgdG8gY3JlYXRlLCB0ZXN0IGFuZCB2YWxpZGF0ZSBwYXJhZGlnbS1zaGlmdGluZyBpbm5vdmF0aW9ucyB3aXRoIGEgZm9jdXMgb24gYnJpbmdpbmcgdGhlbSB0byBtYXJrZXQgYXMgcmFwaWRseSBhcyBwb3NzaWJsZS4gQUNFIGhhcyBhbiBhcnJheSBvZiB0ZXN0aW5nIGVxdWlwbWVudCwgaW5jbHVkaW5nIG9uZSBvZiB0aGUgbGFyZ2VzdCBhbmQgbW9zdCBzb3BoaXN0aWNhdGVkIGNsaW1hdGljIHdpbmQgdHVubmVscyBvbiB0aGUgcGxhbmV0LjwvcD48cD5BQ0UgZW5hYmxlcyBrbm93bGVkZ2UgYW5kIHByYWN0aWNhbCBleHBlcmllbmNlIHRvIGNvbWJpbmUgbW9yZSBlZmZlY3RpdmVseSBhbmQgdG8gY3JlYXRlIHN5bmVyZ2llcyBhY3Jvc3MgZGlzY2lwbGluZXMgYW5kIHNraWxsIHNldHMsIGxlYWRpbmcgdG8gYSBzdHJvbmdlciBtYW51ZmFjdHVyaW5nIGVjb25vbXkgaW4gQ2FuYWRhLiBBdCB0aGUgc2FtZSB0aW1lLCBpdCBoZWxwcyBlZHVjYXRlIGFuZCB0cmFpbiB0aGUgc2tpbGxlZCBwZXJzb25uZWwgbmVlZGVkIHRvIHRha2UgdGhlIGF1dG9tb3RpdmUgaW5kdXN0cnkgYW5kIG1hbnVmYWN0dXJpbmcgdG8gYSBuZXcgbGV2ZWwgb2YgY29tcGV0aXRpdmVuZXNzIGFuZCBzdWNjZXNzLjwvcD5cIixcbiAgICBcImNvb3Jkc1wiOiBbLTc4Ljg5OTEyMSxcbiAgICAgIDQzLjk0NTY1XG4gICAgXSxcbiAgICBcInBhcmVudFwiOiBcIjU3ZWFkNDI3ZTQ4MWNlNzczZDE1NDRmNVwiXG4gIH0sIHtcbiAgICBcIl9pZFwiOiBcIjU3ZDg2OTljNGNlZDgzM2I2Mzg0NGU0NVwiLFxuICAgIFwiZGVzY1wiOiBcIjxwPlRoZSBDYW1wdXMgSWNlIENlbnRyZSBmZWF0dXJlcyB0d28gTkhMLXNpemUgaWNlIHBhZHMgd2l0aCBzZWF0aW5nIGZvciA1MDAgYW5kIDIwMCBwZW9wbGUsIDEwIGxhcmdlIGNoYW5nZSByb29tcywgYSBzcG9ydHMgcHJvIHNob3AsIGEgY29tbXVuaXR5IHJvb20sIGEgZnVsbC1zZXJ2aWNlIHJlc3RhdXJhbnQgKFNoYWd3ZWxscyBvbiB0aGUgUmlkZ2UpIGFuZCBhIHNuYWNrIGJhci4gVGhlIENhbXB1cyBJY2UgQ2VudHJlIGFsc28gb2ZmZXJzIGNhdGVyaW5nIHNlcnZpY2VzLjwvcD5cIixcbiAgICBcImxhYmVsXCI6IFwiQ2FtcHVzIEljZSBDZW50cmVcIixcbiAgICBcImNvZGVcIjogXCJjaWNcIixcbiAgICBcIm5hbWVcIjogXCJDYW1wdXMgSWNlIENlbnRyZVwiLFxuICAgIFwiY29vcmRzXCI6IFstNzguODk4MjMsXG4gICAgICA0My45NTA2NzVcbiAgICBdLFxuICAgIFwicGFyZW50XCI6IFwiNTdlYWQ0MjdlNDgxY2U3NzNkMTU0NGY1XCJcbiAgfSwge1xuICAgIFwiX2lkXCI6IFwiNTdmN2M5OTQ3OTE5NjYwMzAwZDYwOWIxXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE2LTEwLTA3VDE2OjQ1OjEwLjMyMlpcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTYtMTAtMDdUMTY6MTM6MDguNDUxWlwiLFxuICAgIFwicGFyZW50XCI6IFwiNTdlYWQ0MjdlNDgxY2U3NzNkMTU0NGY1XCIsXG4gICAgXCJjb29yZHNcIjogWy03OC44OTY4MyxcbiAgICAgIDQzLjk0NTEyN1xuICAgIF0sXG4gICAgXCJkZXNjXCI6IFwiXCIsXG4gICAgXCJjb2RlXCI6IFwiZXh0XCIsXG4gICAgXCJsYWJlbFwiOiBcIk5vcnRoIGV4dGVyaW9yXCIsXG4gICAgXCJuYW1lXCI6IFwiRXh0ZXJpb3IgLSBOb3J0aCBsb2NhdGlvblwiLFxuICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICBcIl9pZFwiOiBcIjU3ZjJjNWE0NWJhMGJiMDMwMDZkZTIyMFwiLFxuICAgICAgXCJjb2RlXCI6IFwiMmlcIixcbiAgICAgIFwibmFtZVwiOiBcIlBvbG9uc2t5IENvbW1vbnMgMklcIixcbiAgICAgIFwiX192XCI6IDMsXG4gICAgICBcInNjcmlwdFwiOiBcIlwiLFxuICAgICAgXCJwYXJlbnRcIjogXCI1N2Y3Yzk5NDc5MTk2NjAzMDBkNjA5YjFcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxNi0xMC0wOFQwNDozMzoyOS4xOTdaXCIsXG4gICAgICBcImVudGl0aWVzXCI6IFtcblxuICAgICAgXSxcbiAgICAgIFwiYXNzZXRzXCI6IFtcblxuICAgICAgXSxcbiAgICAgIFwiaG90U3BvdHNcIjogW1xuXG4gICAgICBdLFxuICAgICAgXCJzY2VuZUxpbmtzXCI6IFt7XG4gICAgICAgIFwic2NlbmVcIjogXCI1N2VhZGEzYzBmNTE0OTU4M2VhY2Y2NDNcIixcbiAgICAgICAgXCJfaWRcIjogXCI1N2Y3Y2FhYzc5MTk2NjAzMDBkNjA5YjNcIixcbiAgICAgICAgXCJyb3RhdGlvblwiOiBbXG4gICAgICAgICAgXCIwXCIsXG4gICAgICAgICAgXCItMTEwXCIsXG4gICAgICAgICAgXCI3MFwiXG4gICAgICAgIF0sXG4gICAgICAgIFwicG9zaXRpb25cIjogW1xuICAgICAgICAgIFwiMy43NVwiLFxuICAgICAgICAgIFwiMS4yNVwiLFxuICAgICAgICAgIFwiLTQuNzVcIlxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIFwiX2lkXCI6IFwiNTdmN2QyOGZiZGM1NjgwMzAwMGYzNGYzXCIsXG4gICAgICAgIFwic2NlbmVcIjogXCI1N2E4YzA2NWE5OTMxZGYyODcyNjQyNzNcIixcbiAgICAgICAgXCJyb3RhdGlvblwiOiBbXG4gICAgICAgICAgXCIwXCIsXG4gICAgICAgICAgXCIxNjBcIixcbiAgICAgICAgICBcIjYwXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgXCI3LjVcIixcbiAgICAgICAgICBcIjAuNzVcIixcbiAgICAgICAgICBcIjMuMTVcIlxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIFwic2NlbmVcIjogXCI1N2YyYzVlMTViYTBiYjAzMDA2ZGUyMjJcIixcbiAgICAgICAgXCJfaWRcIjogXCI1N2Y3ZDRjYmJkYzU2ODAzMDAwZjM0ZjVcIixcbiAgICAgICAgXCJyb3RhdGlvblwiOiBbXG4gICAgICAgICAgXCIwXCIsXG4gICAgICAgICAgXCItNDBcIixcbiAgICAgICAgICBcIjcwXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgXCItN1wiLFxuICAgICAgICAgIFwiMC41XCIsXG4gICAgICAgICAgXCItNVwiXG4gICAgICAgIF1cbiAgICAgIH1dXG4gICAgfVxuICB9LCB7XG4gICAgXCJfaWRcIjogXCI1N2E4ZTBjMTE2MmFkNmY2ODg5OTE5ZWNcIixcbiAgICBcIm5hbWVcIjogXCJTY2llbmNlIEJ1aWxkaW5nIChVQSlcIixcbiAgICBcImxhYmVsXCI6IFwiU2NpZW5jZSBCdWlsZGluZ1wiLFxuICAgIFwiY29kZVwiOiBcInVhXCIsXG4gICAgXCJkZXNjXCI6IFwiPHA+VGhlIDIwLDAwMC1zcXVhcmUtbWV0cmUgU2NpZW5jZSBCdWlsZGluZyBpcyBob21lIHRvIHRoZSBGYWN1bHR5IG9mIFNjaWVuY2UgYW5kIHRoZSBGYWN1bHR5IG9mIEhlYWx0aCBTY2llbmNlcy4gSXQgaW5jbHVkZXMgYSAyNTAtc2VhdCBsZWN0dXJlIHRoZWF0cmU7IGNoZW1pc3RyeSwgcGh5c2ljcyBhbmQgYmlvbG9neSBsYWJzOyBhbmQgYSBzdHVkZW50IHN0dWR5IGhhbGwsIGFtb25nIG1hbnkgb3RoZXIgc3R1ZGVudC1mcmllbmRseSBmZWF0dXJlcy48L3A+PHA+VGhpcyBmb3VyLXN0b3JleSBidWlsZGluZyBhbHNvIGhvdXNlczo8L3A+PHVsPjxsaT5Ud28gYmVhdXRpZnVsIGF0cmlhPC9saT48bGk+MTEgbGVjdHVyZSBoYWxscyBhbmQgZml2ZSBjbGFzc3Jvb21zPC9saT48bGk+UmVzZWFyY2ggbGFib3JhdG9yaWVzPC9saT48bGk+TWVldGluZyByb29tczwvbGk+PGxpPkZhY3VsdHkgYW5kIHN0YWZmIG9mZmljZXM8L2xpPjxsaT5BIHN0dWR5IGhhbGwgb3Zlcmxvb2tpbmcgUG9sb25za3kgQ29tbW9uczwvbGk+PGxpPkEgMjAsMDAwLWxpdHJlIEFxdWF0aWMgVG94aWNvbG9neSB3ZXQgbGFiLjwvbGk+PC91bD5cIixcbiAgICBcImNvb3Jkc1wiOiBbLTc4Ljg5NjQzMyxcbiAgICAgIDQzLjk0NDU4NFxuICAgIF0sXG4gICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgIFwiX2lkXCI6IFwiNTdkOTkyMTZjMmI0YTJkNTdmNGVhZTM0XCIsXG4gICAgICBcImNvZGVcIjogXCIzYi13YXRyaXVtXCIsXG4gICAgICBcIm5hbWVcIjogXCJJbnRlcmlvciAzQiwgV2VzdCBBdHJpdW1cIixcbiAgICAgIFwiX192XCI6IDYsXG4gICAgICBcInNjcmlwdFwiOiBcIlwiLFxuICAgICAgXCJwYXJlbnRcIjogXCI1N2E4ZTBjMTE2MmFkNmY2ODg5OTE5ZWNcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxNi0xMC0wN1QxODoxNzoxNy4zMzlaXCIsXG4gICAgICBcImVudGl0aWVzXCI6IFtcblxuICAgICAgXSxcbiAgICAgIFwiYXNzZXRzXCI6IFtcblxuICAgICAgXSxcbiAgICAgIFwiaG90U3BvdHNcIjogW1xuXG4gICAgICBdLFxuICAgICAgXCJzY2VuZUxpbmtzXCI6IFt7XG4gICAgICAgIFwic2NlbmVcIjogXCI1N2E4YzE4N2E5OTMxZGYyODcyNjQyNzZcIixcbiAgICAgICAgXCJfaWRcIjogXCI1N2Y3YjFkYjc5MTk2NjAzMDBkNjA5YWNcIixcbiAgICAgICAgXCJyb3RhdGlvblwiOiBbXG4gICAgICAgICAgXCIwXCIsXG4gICAgICAgICAgXCItMTU1XCIsXG4gICAgICAgICAgXCI2MFwiXG4gICAgICAgIF0sXG4gICAgICAgIFwicG9zaXRpb25cIjogW1xuICAgICAgICAgIFwiNC41XCIsXG4gICAgICAgICAgXCIwXCIsXG4gICAgICAgICAgXCItMlwiXG4gICAgICAgIF1cbiAgICAgIH0sIHtcbiAgICAgICAgXCJfaWRcIjogXCI1N2Y3YjIxYTc5MTk2NjAzMDBkNjA5YWRcIixcbiAgICAgICAgXCJzY2VuZVwiOiBcIjU3YThiODExMjNmMTI3YWI4NzJhOTVjMlwiLFxuICAgICAgICBcInJvdGF0aW9uXCI6IFtcbiAgICAgICAgICBcIjBcIixcbiAgICAgICAgICBcIjUwXCIsXG4gICAgICAgICAgXCI3MFwiXG4gICAgICAgIF0sXG4gICAgICAgIFwicG9zaXRpb25cIjogW1xuICAgICAgICAgIFwiMFwiLFxuICAgICAgICAgIFwiMFwiLFxuICAgICAgICAgIFwiNS41XCJcbiAgICAgICAgXVxuICAgICAgfSwge1xuICAgICAgICBcInNjZW5lXCI6IFwiNTdlYWRhM2MwZjUxNDk1ODNlYWNmNjQzXCIsXG4gICAgICAgIFwiX2lkXCI6IFwiNTdmN2I0ZGY3OTE5NjYwMzAwZDYwOWFlXCIsXG4gICAgICAgIFwicm90YXRpb25cIjogW1xuICAgICAgICAgIFwiMFwiLFxuICAgICAgICAgIFwiMTMwXCIsXG4gICAgICAgICAgXCI3MFwiXG4gICAgICAgIF0sXG4gICAgICAgIFwicG9zaXRpb25cIjogW1xuICAgICAgICAgIFwiMS41XCIsXG4gICAgICAgICAgXCIwXCIsXG4gICAgICAgICAgXCI5XCJcbiAgICAgICAgXVxuICAgICAgfV1cbiAgICB9LFxuICAgIFwicGFyZW50XCI6IFwiNTdlYWQ0MjdlNDgxY2U3NzNkMTU0NGY1XCJcbiAgfSwge1xuICAgIFwiX2lkXCI6IFwiNTdkODZhOTA0Y2VkODMzYjYzODQ0ZTQ3XCIsXG4gICAgXCJkZXNjXCI6IFwiPHA+VGhlIGF3YXJkLXdpbm5pbmcgTm9ydGggT3NoYXdhIExpYnJhcnkgaXMgZGVzaWduZWQgdG8gaW5jb3Jwb3JhdGUgbGVhZGluZy1lZGdlIHRlY2hub2xvZ3kgd2hpbGUgbWFpbnRhaW5pbmcgdGhlIGNvbWZvcnQgb2YgYSB0cmFkaXRpb25hbCBsaWJyYXJ5LiBTdHVkZW50cyBlbmpveSA2LDgwMCBzcXVhcmUgbWV0cmVzIG9mIHRvdGFsIGxlYXJuaW5nIHNwYWNlIG92ZXIgZm91ciBmbG9vcnMsIGluY2x1ZGluZyB0aGUgRGl4b24tQWxnZXIgRmlyZXNpZGUgUmVhZGluZyBSb29tIHdpdGggYSB0d28tc3RvcmV5IGdsYXNzIHJvdHVuZGEgb3Zlcmxvb2tpbmcgUG9sb25za3kgQ29tbW9ucy48L3A+XFxyXFxuPHA+VGhlIGJhc2VtZW50IG9mIE5vcnRoIE9zaGF3YSBMaWJyYXJ5IHNlcnZlcyBhcyBhIHNlYXNvbmFsIGxhcHRvcCBkaXN0cmlidXRpb24gY2VudHJlIChkdXJpbmcgaGlnaC10cmFmZmljIHBlcmlvZHMpLjwvcD5cXHJcXG48cD5UaGUgTm9ydGggT3NoYXdhIExpYnJhcnkgZmVhdHVyZXM6PC9wPlxcclxcbjx1bD5cXHJcXG48bGk+SW5kaXZpZHVhbCBhbmQgY29sbGFib3JhdGl2ZSBsZWFybmluZyBzcGFjZXM8L2xpPlxcclxcbjxsaT5TZWF0aW5nIGNhcGFjaXR5IG9mIDUwMDwvbGk+XFxyXFxuPGxpPkEgcmVhZGluZyByb29tIGFuZCBmaXJlcGxhY2U8L2xpPlxcclxcbjxsaT4xNjAsMDAwLXZvbHVtZSBib29rIGNhcGFjaXR5PC9saT5cXHJcXG48bGk+MTYwIGNvbXB1dGVyIHdvcmtzdGF0aW9uczwvbGk+XFxyXFxuPGxpPldpcmVkIGFuZCB3aXJlbGVzcyBlbnZpcm9ubWVudHM8L2xpPlxcclxcbjxsaT5GZWF0dXJlcyB0byBhc3Npc3Qgc3R1ZGVudHMgd2l0aCB2aXN1YWwgYW5kIGxlYXJuaW5nIGRpc2FiaWxpdGllczwvbGk+XFxyXFxuPGxpPkEgU3RhcmJ1Y2tzIGNhZiZlYWN1dGU7PC9saT5cXHJcXG48L3VsPlxcclxcbjxwPlRoZSBDYW1wdXMgTGlicmFyaWVzIHN5c3RlbSBhbHNvIG9wZXJhdGVzIHRoZSBFZHVjYXRpb24gTGlicmFyeSwgYW5kIHRoZSBTb2NpYWwgU2NpZW5jZSBhbmQgSHVtYW5pdGllcyBMaWJyYXJ5IGF0IFVPSVQmcnNxdW87cyBkb3dudG93biBPc2hhd2EgbG9jYXRpb247IGFzIHdlbGwgYXMgdGhlIExpYnJhcnkgYXQgRHVyaGFtIENvbGxlZ2UmcnNxdW87cyBXaGl0YnkgQ2FtcHVzLjwvcD5cIixcbiAgICBcImxhYmVsXCI6IFwiTGlicmFyeVwiLFxuICAgIFwiY29kZVwiOiBcImxpYlwiLFxuICAgIFwibmFtZVwiOiBcIk5vcnRoIE9zaGF3YSBMaWJyYXJ5XCIsXG4gICAgXCJjb29yZHNcIjogWy03OC44OTcyNzYsXG4gICAgICA0My45NDU4NzhcbiAgICBdLFxuICAgIFwicGFyZW50XCI6IFwiNTdlYWQ0MjdlNDgxY2U3NzNkMTU0NGY1XCJcbiAgfSwge1xuICAgIFwiX2lkXCI6IFwiNTdkODY5Zjk0Y2VkODMzYjYzODQ0ZTQ2XCIsXG4gICAgXCJkZXNjXCI6IFwiPHA+U2VydmluZyBzdHVkZW50cywgZmFjdWx0eSBhbmQgc3RhZmYgZnJvbSBVT0lUIGFzIHdlbGwgYXMgRHVyaGFtIENvbGxlZ2UsIHRoZSBDYW1wdXMgUmVjcmVhdGlvbiBhbmQgV2VsbG5lc3MgQ2VudHJlJnJzcXVvO3MgKENSV0MpIG1vZGVybiBmYWNpbGl0aWVzIHByb3ZpZGUgYSB3aWRlIHZhcmlldHkgb2YgZml0bmVzcyBhbmQgcmVjcmVhdGlvbmFsIG9wcG9ydHVuaXRpZXMuPC9wPlxcclxcbjxwPlRoZSA4LDQwMC1zcXVhcmUtbWV0cmUgQ1JXQyBpbmNsdWRlcyBhIGxhcmdlIHRyaXBsZSBneW1uYXNpdW0sIHNxdWFzaCBjb3VydHMsIGFuIGluZG9vciB0cmFjaywgVGhlIEZMRVggZml0bmVzcyBjZW50cmUgKGNhcmRpbyBhbmQgd2VpZ2h0IG1hY2hpbmVzKSwgdHJhaW5pbmcgcm9vbXMsIGFuZCBhIGRhbmNlIHN0dWRpby4gVGhlIENSV0MsIHdoaWNoIHdlbGNvbWVzIG1vcmUgdGhhbiAxMCwwMDAgdXNlcnMgZWFjaCBtb250aCwgYWxzbyBob3VzZXMgdGhlIENhbXB1cyBIZWFsdGggQ2VudHJlJnJzcXVvO3MgbWVkaWNhbCBjbGluaWMgYW5kIHZhcmlvdXMgc2VydmljZXMgcmFuZ2luZyBmcm9tIGFjdXB1bmN0dXJlIGFuZCBhdGhsZXRpYyB0aGVyYXB5IHRvIG1hc3NhZ2UgdGhlcmFweSBhbmQgY291bnNlbGxpbmcuIFRoZXJlIGlzIGFsc28gYSBmdWxsLXNlcnZpY2UgTG92ZWxsIERydWdzIHBoYXJtYWN5IG9uIHNpdGUuPC9wPlwiLFxuICAgIFwibGFiZWxcIjogXCJSZWNyZWF0aW9uIGFuZCBXZWxsbmVzcyBDZW50cmVcIixcbiAgICBcImNvZGVcIjogXCJjcndjXCIsXG4gICAgXCJuYW1lXCI6IFwiQ2FtcHVzIFJlY3JlYXRpb24gYW5kIFdlbGxuZXNzIENlbnRyZVwiLFxuICAgIFwiY29vcmRzXCI6IFstNzguODk4NjY1LFxuICAgICAgNDMuOTQ0MDI0XG4gICAgXSxcbiAgICBcInBhcmVudFwiOiBcIjU3ZWFkNDI3ZTQ4MWNlNzczZDE1NDRmNVwiXG4gIH1dKVxuICAudmFsdWUoJ0xvY2F0aW9uUmVzb3VyY2UnLCBbXG4gICAge1xuICAgICAgbGFiZWw6ICdOb3J0aCBsb2NhdGlvbicsXG4gICAgICBjb2RlOiAnbm9ydGgnXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ0Rvd250b3duIGxvY2F0aW9uJyxcbiAgICAgIGNvZGU6ICdkdCdcbiAgICB9XG4gIF0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdW9pdC1jYW1wdXMtbWFwLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==