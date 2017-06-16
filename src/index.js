import { CampusMapService } from './map/map.service';
import { CampusMapUiService } from './map/map-ui.service';

import { CampusMapComponent } from './map/map.component'
import { CampusMapControlsComponent } from './map/map-controls/map-controls.component';
// import { FilterBuilderComponent } from './filter/filter-builder.component';

import { FilterBuilderDirective } from './filter/filter-builder.directive';
import { FilterInputDirective } from './filter/filter-input.directive';

import { MAP_DEFAULTS } from './map/map-defaults.constant';

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

  .service('$campusMap', CampusMapService)
  .service('$mapInterface', CampusMapUiService)

  .component('campusMap', CampusMapComponent)
  .component('campusMapControls', CampusMapControlsComponent)
  // .component('filterBuilder', FilterBuilderComponent)

  .directive('filterBuilder', FilterBuilderDirective)
  .directive('filterInput', FilterInputDirective)

  .constant('MAP_DEFAULTS', MAP_DEFAULTS)

	.name;
