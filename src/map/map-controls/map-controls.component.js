import { MapControlsCtrl as controller } from './map-controls.controller.js'
import template from './map-controls.component.html';
import './map-controls.scss';

export const CampusMapControlsComponent = {
  require: {
    $ngModel: 'ngModel',
    MapCtrl: '^campusMap'
  },
  template,
  controller
}
