import { MapCtrl as controller } from './map.controller.js'
import './map.scss';

export const CampusMapComponent = {
  bindings: {
    mapData: '<?',
    onGotoBuilding: '&?'
  },
  template: `<div class="campus-map"></div>`,
  controller
}
