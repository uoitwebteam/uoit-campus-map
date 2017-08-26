import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {
  FeatureService,
  FilterService,
  FilterControl,
} from '.';

@Component({
  selector: 'campus-map-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  mapData: Observable<GeoJSON.FeatureCollection<GeoJSON.GeometryObject>>;

  collections = this.filterService.getFeatureCollections();
  categories = this.filterService.getCategories();
  locations = this.filterService.getLocations();

  filters = Observable.forkJoin(
    this.collections,
    this.categories,
    this.locations
  ).map(([group, category, location]) => ([
    new FilterControl({
      title: 'Locations',
      name: 'location',
      label: 'name',
      value: '_id',
      options: location,
      type: 'radio',
    }),
    new FilterControl({
      title: 'Categories',
      name: 'category',
      label: 'name',
      value: '_id',
      options: category,
      type: 'select',
    }),
    new FilterControl({
      title: 'Collections',
      name: 'group',
      label: 'name',
      value: '_id',
      options: group,
      type: 'select',
    }),
  ]));

  constructor(
    private featureService: FeatureService,
    private filterService: FilterService
  ) { }

  onFilterChange(filter) {
    console.log('[onFilterChange]', filter);
    this.mapData = this.featureService.getFeatures(filter);
  }

  onGotoBuilding(building) {
    console.log('[onGotoBuilding]', building);
  }
}
