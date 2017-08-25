import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';

import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import {
  MapService,
  GEOMETRY_STYLES,
  ICON_STYLES
} from '.';
import {
  Category,
  FeatureCollection,
} from '../filter';

@Component({
  selector: 'campus-map',
  template: `<div class="campus-map" #mapEl></div>`,
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@AutoUnsubscribe()
export class MapComponent implements OnInit, OnChanges {

  mapInstance: google.maps.Map;

  @Input() mapData: FeatureCollection;
  @Input() categories: Category[];

  @ViewChild('mapEl', {read: ElementRef}) mapEl: ElementRef;

  constructor(private mapService: MapService) {
    this.setStylesByCategory = this.setStylesByCategory.bind(this);
  }

  ngOnInit() {
    this.mapService.getMap(this.mapEl.nativeElement)
      .subscribe(instance => this.mapInstance = instance);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mapData && changes.mapData.currentValue) {
      this.mapService.clearData();
      this.mapService.addData(changes.mapData.currentValue);
    }
    if (changes.categories && changes.categories.currentValue) {
      this.mapService.setStyle(this.setStylesByCategory);
    }
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
