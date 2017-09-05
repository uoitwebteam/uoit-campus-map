export const API_URL = 'https://maps.googleapis.com/maps/api/js';
export const API_KEY = 'AIzaSyC1jk1XLwGumgFRELljo2fjUeXNh3Oh-Ls';

export const MAP_TYPE = 'ROADMAP';

export const MAP_STYLES = [{
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
}];

export const ICON_STYLES = {
  path: [
    'M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0',
    ',0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,12.5A1.5,1.5 0 0,1 ',
    '10.5,11A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 13.5,11A1.5,1.5 0 0,1 12,12.5M12,7.2C9.9',
    ',7.2 8.2,8.9 8.2,11C8.2,14 12,17.5 12,17.5C12,17.5 15.8,14 15.8,11C15.8,8.9 14.1,7.2 12,7.2Z',
  ].join(''),
  strokeColor: '#FFFFFF',
  strokeOpacity: 0.5,
  strokeWeight: 1,
  fillColor: '#0077CA',
  fillOpacity: 0.8,
  rotation: 0,
  scale: 1.5,
  // anchor: new google.maps.Point(12, 12),
  // size: new google.maps.Size(24, 24)
};

export const GEOMETRY_STYLES = {
  strokeColor: '#003C71',
  strokeOpacity: 0.3,
  strokeWeight: 3,
  fillColor: '#0077CA',
  fillOpacity: 0.5,
  zIndex: 1,
};

export const HOVER_STYLES = {
  fillColor: '#C71566',
  fillOpacity: 0.7,
  strokeWeight: 5,
  strokeColor: '#FFFFFF',
  strokeOpacity: 0.7,
};

export const LABEL_STYLES = {
  transform: 'translateX(-50%) translateY(-50%)',
  textTransform: 'uppercase',
  color: 'white',
  fontSize: '0.88rem',
  fontWeight: 900,
  maxWidth: '200px',
  textShadow: '1px 1px 1px rgba(0,0,0,0.7)',
  textAlign: 'center',
};
