const MAP_SETTINGS = {
    type: 'ROADMAP',
    styles: [
    {
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
  }

  export default MAP_SETTINGS;