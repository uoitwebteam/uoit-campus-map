import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';

import {
  MapService,
  Category,
  GEOMETRY_STYLES,
  ICON_STYLES
} from '.';

@Component({
  selector: 'campus-map',
  template: `<div class="campus-map" #mapEl></div>`,
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnChanges {

  mapInstance: google.maps.Map;

  @Input() mapData: GeoJSON.FeatureCollection<GeoJSON.GeometryObject>;
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
