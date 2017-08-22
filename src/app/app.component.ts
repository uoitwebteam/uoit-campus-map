import { Component, OnInit } from '@angular/core';
import {
  CategoryService,
  FeatureService,
  FilterService,
} from './map';

@Component({
  selector: 'campus-map-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  mapData = this.featureService.getFeatures();
  categories = this.categoryService.getCategories();
  locations = this.filterService.getLocations();

  constructor(
    private featureService: FeatureService,
    private categoryService: CategoryService,
    private filterService: FilterService
  ) { }

  onFilterChange({ location, category, group }) {
    console.log('[onFilterChange]', { location, category, group });
    this.mapData = this.featureService.getFeatures({ location });
  }
}
