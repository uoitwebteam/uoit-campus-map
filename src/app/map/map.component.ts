import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/do';

import {
  MapService,
  CategoryService,
  FeatureService,
  Category,
  GEOMETRY_STYLES,
  ICON_STYLES
} from '.';

@Component({
  selector: 'campus-map',
  template: `<div class="campus-map" #mapEl></div>`,
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @ViewChild('mapEl', {read: ElementRef}) mapEl: ElementRef;

  categories: Category[];

  constructor(
    private mapService: MapService,
    private categoryService: CategoryService,
    private featureService: FeatureService
  ) {
    this.setStylesByCategory = this.setStylesByCategory.bind(this);
  }

  ngOnInit() {
    Observable.zip(
      this.categoryService.getCategories(),
      this.mapService.getMap(this.mapEl.nativeElement)
    ) .do(
      ([categories, instance]) => (this.categories = categories) && instance.data.setStyle(this.setStylesByCategory)
    ).subscribe(map => console.log('[map]', map));

    this.featureService.getFeatures()
      .subscribe(featureCollection => this.mapService.addData(featureCollection));
  }

  setStylesByCategory(feature) {
    return Object.assign({}, GEOMETRY_STYLES, {
      icon: ICON_STYLES,
      title: feature.getProperty('name'),
    }, this.categories.find(
      category => category._id === feature.getProperty('category')
    ));
  }

}
