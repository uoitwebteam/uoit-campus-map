import campusMap from './map_component'
import MapCtrl from './map_controller';

import campusMapControls from './controls/map-controls_component';
import MapControlsCtrl from './controls/map-controls_controller';

import MapDetailCtrl from './detail/map-detail_controller';

import MAP_SETTINGS from './constants/map-settings_constant';
import MAP_ICONS from './constants/map-icons_constant';

// development only
//
import templates from './_templates';
//
// ----------------

export default angular.module('campusMap', [])
	.run(templates)
  .controller('MapCtrl', MapCtrl)
  .controller('MapControlsCtrl', MapControlsCtrl)
  .controller('MapDetailCtrl', MapDetailCtrl)
  .component('campusMap', campusMap)
  .component('campusMapControls', campusMapControls)
  .constant('MAP_SETTINGS', MAP_SETTINGS)
  .constant('MAP_ICONS', MAP_ICONS);
