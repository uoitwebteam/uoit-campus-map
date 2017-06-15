import { CampusMapComponent } from './map_component'
import { CampusMapControlsComponent } from './controls/map-controls_component';

import { FilterBuilderDirective } from './filter/filter-builder_directive';
import { FilterInputDirective } from './filter/filter-input_directive';

import { MAP_DEFAULTS } from './map_constant';

import { TemplateRun } from './_templates';

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

  .component('campusMap', CampusMapComponent)
  .component('campusMapControls', CampusMapControlsComponent)

  .directive('filterBuilder', FilterBuilderDirective)
  .directive('filterInput', FilterInputDirective)

  .constant('MAP_DEFAULTS', MAP_DEFAULTS)

	.run(TemplateRun)

	.name;
