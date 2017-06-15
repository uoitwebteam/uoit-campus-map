import { MapCtrl as controller } from './map.controller.js'
import template from './map.component.html';
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
  transclude:  {
    controls: 'campusMapControls'
  },
  template,
  controller
}
