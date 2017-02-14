import campusMap from './map_component'
import campusMapControls from './controls/map-controls_component';

import filterBuilder from './filter/filter-builder_directive';
import filterInput from './filter/filter-input_directive';

import MAP_DEFAULTS from './map_constant';

// development only
//
import templates from './_templates';
//
// ----------------

export default angular.module('campusMap', [])
	.run(templates)

  .component('campusMap', campusMap)
  .component('campusMapControls', campusMapControls)

  .directive('filterBuilder', filterBuilder)
  .directive('filterInput', filterInput)

  .constant('MAP_DEFAULTS', MAP_DEFAULTS);
