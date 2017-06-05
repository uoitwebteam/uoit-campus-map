import controller from './map-controls_controller.js'
import './map-controls.scss';

const campusMapControls = {
  require: {
    $ngModel: 'ngModel',
    MapCtrl: '^campusMap'
  },
  templateUrl: 'controls/_map-controls.html',
  controller
}

export default campusMapControls;