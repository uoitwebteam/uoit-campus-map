import controller from './map_controller.js'
import './map.scss';

const campusMap = {
  // transclude: true,
  bindings: {
    onGotoBldg: '&?',
    mapData: '<?'
    // location: '<?',
    // building: '<?',
    // feature: '<?'
  },
  templateUrl: '_map.html',
  transclude:  {
    controls: 'campusMapControls'
  },
  controller
}

export default campusMap;