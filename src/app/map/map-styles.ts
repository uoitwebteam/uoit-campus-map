export const MAP_STYLES = {
	basic: [{
					'elementType': 'geometry',
					'stylers': [{
							'visibility': 'simplified',
					}, ],
			},
			{
					'elementType': 'labels',
					'stylers': [{
							'visibility': 'off',
					}, ],
			},
			{
					'featureType': 'administrative.land_parcel',
					'stylers': [{
							'visibility': 'off',
					}, ],
			},
			{
					'featureType': 'administrative.neighborhood',
					'stylers': [{
							'visibility': 'off',
					}, ],
			},
			{
					'featureType': 'road',
					'elementType': 'labels',
					'stylers': [{
							'visibility': 'on',
					}, ],
			},
	],
	transparent: [{
			'stylers': [{
					'visibility': 'on',
			}, {
					'saturation': -100,
			}, {
					'gamma': 0.54,
			}],
	}, {
			'featureType': 'landscape.natural',
			'elementType': 'geometry',
			'stylers': [{
					'visibility': 'off',
			}],
	}, {
			'featureType': 'road',
			'elementType': 'labels.icon',
			'stylers': [{
					'visibility': 'off',
			}],
	}, {
			'featureType': 'water',
			'stylers': [{
					'color': '#B0B0B0',
			}],
	}, {
			'featureType': 'poi',
			'elementType': 'labels.icon',
			'stylers': [{
					'visibility': 'off',
			}],
	}, {
			'featureType': 'poi',
			'elementType': 'labels.text',
			'stylers': [{
					'visibility': 'off',
			}],
	}, {
			'featureType': 'road',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#ffffff',
			}],
	}, {
			'featureType': 'road.local',
			'elementType': 'labels.text',
			'stylers': [{
					'visibility': 'simplified',
			}],
	}, {
			'featureType': 'water',
			'elementType': 'labels.text.fill',
			'stylers': [{
					'color': '#ffffff',
			}],
	}, {
			'featureType': 'transit.line',
			'elementType': 'geometry',
			'stylers': [{
					'gamma': 0.48,
			}],
	}, {
			'featureType': 'transit.station',
			'elementType': 'labels.icon',
			'stylers': [{
					'visibility': 'off',
			}],
	}, {
			'featureType': 'road',
			'elementType': 'geometry.stroke',
			'stylers': [{
					'gamma': 7.18,
			}],
	}],
	greens: [{
			'featureType': 'landscape.man_made',
			'elementType': 'all',
			'stylers': [{
					'hue': '#c3dfd9',
			}, {
					'visibility': 'on',
			}],
	}, {
			'featureType': 'landscape.natural',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#e0e9e8',
			}, {
					'visibility': 'on',
			}],
	}, {
			'featureType': 'poi',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#c3dfd9',
			}],
	}, {
			'featureType': 'poi',
			'elementType': 'labels',
			'stylers': [{
					'visibility': 'off',
			}],
	}, {
			'featureType': 'road.highway',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#a9c8c9',
			}],
	}, {
			'featureType': 'road.highway',
			'elementType': 'geometry.stroke',
			'stylers': [{
					'color': '#6f9b9c',
			}],
	}, {
			'featureType': 'road.highway',
			'elementType': 'labels.icon',
			'stylers': [{
					'visibility': 'off',
			}],
	}, {
			'featureType': 'road.highway.controlled_access',
			'elementType': 'labels.icon',
			'stylers': [{
					'visibility': 'off',
			}],
	}, {
			'featureType': 'road.local',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#d0d5d5',
			}],
	}, {
			'featureType': 'road.local',
			'elementType': 'geometry.stroke',
			'stylers': [{
					'visibility': 'on',
			}],
	}, {
			'featureType': 'water',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#b8e3e8',
			}],
	}],
	soft: [{
			'featureType': 'administrative',
			'elementType': 'labels',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'landscape',
			'elementType': 'geometry.fill',
			'stylers': [{
					'visibility': 'on'
			}, {
					'saturation': '-24'
			}, {
					'lightness': '-4'
			}]
	}, {
			'featureType': 'landscape',
			'elementType': 'labels.text',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'landscape.natural',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#878c8c'
			}, {
					'gamma': '3.61'
			}, {
					'lightness': '1'
			}, {
					'saturation': '13'
			}]
	}, {
			'featureType': 'landscape.natural.landcover',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#ae4343'
			}]
	}, {
			'featureType': 'landscape.natural.landcover',
			'elementType': 'labels.text.fill',
			'stylers': [{
					'color': '#e33f3f'
			}]
	}, {
			'featureType': 'poi',
			'elementType': 'geometry.fill',
			'stylers': [{
					'visibility': 'on'
			}, {
					'hue': '#1900ff'
			}, {
					'color': '#c0e8e8'
			}]
	}, {
			'featureType': 'poi.attraction',
			'elementType': 'all',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'poi.business',
			'elementType': 'all',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'poi.government',
			'elementType': 'all',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'poi.medical',
			'elementType': 'all',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'poi.park',
			'elementType': 'all',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'poi.park',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#727e4c'
			}, {
					'visibility': 'on'
			}, {
					'lightness': '59'
			}, {
					'saturation': '0'
			}, {
					'gamma': '1'
			}]
	}, {
			'featureType': 'poi.place_of_worship',
			'elementType': 'all',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'poi.school',
			'elementType': 'all',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'poi.sports_complex',
			'elementType': 'all',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'poi.sports_complex',
			'elementType': 'labels.text',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'road',
			'elementType': 'geometry',
			'stylers': [{
					'lightness': 100
			}, {
					'visibility': 'simplified'
			}]
	}, {
			'featureType': 'road',
			'elementType': 'labels',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'road',
			'elementType': 'labels.text',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'road.highway',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#3e2859'
			}, {
					'lightness': '66'
			}, {
					'saturation': '-51'
			}]
	}, {
			'featureType': 'road.highway',
			'elementType': 'labels.text',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'road.highway.controlled_access',
			'elementType': 'labels.text',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'road.arterial',
			'elementType': 'geometry.stroke',
			'stylers': [{
					'visibility': 'simplified'
			}]
	}, {
			'featureType': 'road.arterial',
			'elementType': 'labels.text',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'road.local',
			'elementType': 'geometry',
			'stylers': [{
					'visibility': 'simplified'
			}]
	}, {
			'featureType': 'road.local',
			'elementType': 'labels.text',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'transit',
			'elementType': 'all',
			'stylers': [{
					'visibility': 'simplified'
			}]
	}, {
			'featureType': 'transit.line',
			'elementType': 'all',
			'stylers': [{
					'visibility': 'simplified'
			}]
	}, {
			'featureType': 'transit.line',
			'elementType': 'geometry',
			'stylers': [{
					'visibility': 'simplified'
			}, {
					'lightness': 700
			}]
	}, {
			'featureType': 'transit.line',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#878c8c'
			}, {
					'lightness': '55'
			}]
	}, {
			'featureType': 'transit.station',
			'elementType': 'labels',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'transit.station',
			'elementType': 'labels.icon',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'transit.station.bus',
			'elementType': 'labels.text',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'transit.station.bus',
			'elementType': 'labels.icon',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'water',
			'elementType': 'all',
			'stylers': [{
					'color': '#7dcdcd'
			}]
	}, {
			'featureType': 'water',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#62b1c0'
			}, {
					'lightness': '47'
			}]
	}, {
			'featureType': 'water',
			'elementType': 'labels.text',
			'stylers': [{
					'visibility': 'off'
			}]
	}],
	blues: [{
			'featureType': 'all',
			'elementType': 'geometry',
			'stylers': [{
					'color': '#acccdd'
			}]
	}, {
			'featureType': 'all',
			'elementType': 'labels.text.fill',
			'stylers': [{
					'visibility': 'on'
			}, {
					'color': '#6d8d9f'
			}]
	}, {
			'featureType': 'all',
			'elementType': 'labels.text.stroke',
			'stylers': [{
					'saturation': -31
			}, {
					'lightness': -33
			}, {
					'weight': 2
			}, {
					'gamma': 0.8
			}, {
					'visibility': 'off'
			}]
	}, {
			'featureType': 'all',
			'elementType': 'labels.icon',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'landscape',
			'elementType': 'geometry',
			'stylers': [{
					'lightness': 30
			}, {
					'saturation': 30
			}, {
					'color': '#e7ecef'
			}]
	}, {
			'featureType': 'landscape.man_made',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#e7ecef'
			}, {
					'visibility': 'off'
			}]
	}, {
			'featureType': 'landscape.man_made',
			'elementType': 'geometry.stroke',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'poi',
			'elementType': 'geometry',
			'stylers': [{
					'saturation': 20
			}]
	}, {
			'featureType': 'poi.park',
			'elementType': 'all',
			'stylers': [{
					'color': '#c3d8e3'
			}, {
					'visibility': 'simplified'
			}]
	}, {
			'featureType': 'poi.park',
			'elementType': 'geometry',
			'stylers': [{
					'lightness': 20
			}, {
					'saturation': -20
			}]
	}, {
			'featureType': 'poi.park',
			'elementType': 'labels.text.fill',
			'stylers': [{
					'color': '#628497'
			}, {
					'visibility': 'on'
			}]
	}, {
			'featureType': 'road',
			'elementType': 'geometry',
			'stylers': [{
					'lightness': 10
			}, {
					'saturation': -30
			}]
	}, {
			'featureType': 'road',
			'elementType': 'geometry.stroke',
			'stylers': [{
					'saturation': 25
			}, {
					'lightness': 25
			}]
	}, {
			'featureType': 'road.arterial',
			'elementType': 'geometry.fill',
			'stylers': [{
					'color': '#ccd7dd'
			}]
	}, {
			'featureType': 'road.arterial',
			'elementType': 'geometry.stroke',
			'stylers': [{
					'visibility': 'on'
			}, {
					'color': '#cdd8de'
			}]
	}, {
			'featureType': 'road.arterial',
			'elementType': 'labels.text.fill',
			'stylers': [{
					'color': '#6d8d9f'
			}]
	}, {
			'featureType': 'road.arterial',
			'elementType': 'labels.text.stroke',
			'stylers': [{
					'color': '#ff0000'
			}, {
					'visibility': 'off'
			}]
	}, {
			'featureType': 'road.local',
			'elementType': 'geometry.fill',
			'stylers': [{
					'saturation': '-24'
			}, {
					'lightness': '100'
			}, {
					'visibility': 'on'
			}, {
					'color': '#ffffff'
			}]
	}, {
			'featureType': 'road.local',
			'elementType': 'geometry.stroke',
			'stylers': [{
					'saturation': '19'
			}, {
					'lightness': '-100'
			}, {
					'visibility': 'on'
			}, {
					'color': '#ffffff'
			}]
	}, {
			'featureType': 'road.local',
			'elementType': 'labels.text.fill',
			'stylers': [{
					'visibility': 'on'
			}, {
					'color': '#6d8d9f'
			}]
	}, {
			'featureType': 'road.local',
			'elementType': 'labels.text.stroke',
			'stylers': [{
					'visibility': 'off'
			}]
	}, {
			'featureType': 'water',
			'elementType': 'all',
			'stylers': [{
					'lightness': -20
			}, {
					'color': '#8ad6ff'
			}]
	}]
};
