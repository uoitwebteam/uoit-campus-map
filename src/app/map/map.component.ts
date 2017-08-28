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
  private featureListeners: {
    mouseover(event): void,
    mouseout(event): void,
    click(event): void
  };
  private mapListeners: {
    zoom_changed(event): void
  };

  @Input() mapData: FeatureCollection;
  @Input() categories: Category[];
  @Output() featureClick = new EventEmitter();

  @ViewChild('mapEl', {read: ElementRef}) mapEl: ElementRef;

  constructor(private mapService: MapService) {
    this.setStylesByCategory = this.setStylesByCategory.bind(this);
    this.setLabelsByBuilding = this.setLabelsByBuilding.bind(this);
    this.featureListeners = {
      mouseover: this.onFeatureMouseover.bind(this),
      mouseout: this.onFeatureMouseout.bind(this),
      click: this.onFeatureClick.bind(this),
    };
    this.mapListeners = {
      zoom_changed: this.onMapZoomChanged.bind(this),
    };
  }

  ngOnInit() {
    this.mapService.getMap(this.mapEl.nativeElement)
      .subscribe(instance => {
        Object.keys(this.featureListeners).forEach(event => instance.data.addListener(event, this.featureListeners[event]));
        Object.keys(this.mapListeners).forEach(event => instance.addListener(event, this.mapListeners[event]));
        this.mapInstance = instance;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mapData && changes.mapData.currentValue) {
      this.mapService.clearData();
      this.mapService.addData(changes.mapData.currentValue);
      this.mapInstance.data.forEach(this.setLabelsByBuilding)
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

  // event handler functions
  //
  private onFeatureMouseover(event) {
    this.mapService.setFeatureStyle(event.feature, HOVER_STYLES);
  }
  private onFeatureMouseout(event) {
    this.mapService.resetFeatureStyles();
  }
  private onFeatureClick(event) {
    this.featureClick.emit(event);
  }
  private onMapZoomChanged(event) {
    if (this.mapInstance.getZoom() > 16) {
      this.mapMarkers.forEach(marker => marker.setMap(this.mapInstance));
    } else {
      this.mapMarkers.forEach(marker => marker.setMap(null));
    }
  }

}
