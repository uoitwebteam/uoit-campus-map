import { MapControlsCtrl as controller } from './map-controls_controller.js'
import './map-controls.scss';

export const CampusMapControlsComponent = {
  require: {
    $ngModel: 'ngModel',
    MapCtrl: '^campusMap'
  },
  templateUrl: 'controls/_map-controls.html',
  controller
}
