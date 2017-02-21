import campusMap from './map_component'
import campusMapControls from './controls/map-controls_component';

import filterBuilder from './filter/filter-builder_directive';
import filterInput from './filter/filter-input_directive';

import MAP_DEFAULTS from './map_constant';

import templates from './_templates';

/**
 * Removes default injection of "Roboto" font by Google Maps.
 */
const head = document.getElementsByTagName('head')[0];
const insertBefore = head.insertBefore;
head.insertBefore = (newElement, referenceElement) =>
	(newElement.href && newElement.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) ?
    console.info('Prevented Roboto from loading!') :
  	insertBefore.call(head, newElement, referenceElement);

export default angular.module('campusMap', [])

  .component('campusMap', campusMap)
  .component('campusMapControls', campusMapControls)

  .directive('filterBuilder', filterBuilder)
  .directive('filterInput', filterInput)

  .constant('MAP_DEFAULTS', MAP_DEFAULTS)

	.run(templates)

	.name;
