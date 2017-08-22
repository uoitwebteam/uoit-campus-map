import { Component, OnInit } from '@angular/core';
import {
  // MapService,
  CategoryService,
  FeatureService,
} from './map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  mapData = this.featureService.getFeatures();
  categories = this.categoryService.getCategories();

  constructor(
    private featureService: FeatureService,
    private categoryService: CategoryService
  ) { }
}
