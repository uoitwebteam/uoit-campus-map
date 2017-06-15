import { MapCtrl as controller } from './map_controller.js'
import './map.scss';

export const CampusMapComponent = {
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
