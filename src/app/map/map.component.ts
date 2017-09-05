import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';

import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import {
  MapService,
  GEOMETRY_STYLES,
  ICON_STYLES,
  HOVER_STYLES
} from '.';
import {
  Category,
  FeatureCollection,
} from '../filter';

interface ListenerMap {
  [key: string]: (event?: google.maps.Data.MouseEvent) => void
}

interface StylingFunctionMap {
  [key: string]: google.maps.Data.StylingFunction
}

@Component({
  selector: 'campus-map',
  template: `<ng-content select="campus-map-filter"></ng-content>
    <div class="campus-map" #mapEl>
      <ng-content select="campus-map-infowindow"></ng-content>
    </div>`,
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@AutoUnsubscribe()
export class MapComponent implements OnInit, OnChanges {

  mapInstance: google.maps.Map;
  mapMarkers: google.maps.Marker[] = [];
  private featureListeners: ListenerMap = {
    mouseover: this.onFeatureMouseover.bind(this),
    mouseout: this.onFeatureMouseout.bind(this),
    click: this.onFeatureClick.bind(this),
  };
  private mapListeners: ListenerMap = {
    zoom_changed: this.onMapZoomChanged.bind(this),
  };
  private stylingFunctions: StylingFunctionMap = {
    categories: this.setStylesByCategory.bind(this),
  }

  @Input() mapData: FeatureCollection;
  @Input() categories: Category[];
  @Output() featureClick = new EventEmitter();

  @ViewChild('mapEl', {read: ElementRef}) mapEl: ElementRef;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.mapService.getMap(this.mapEl.nativeElement)
      .subscribe(instance => {
        this.mapInstance = instance;
        this.attachListeners(this.mapInstance, this.mapListeners);
      });
  }

  ngOnChanges({ mapData, categories }: SimpleChanges): void {
    if (mapData && mapData.currentValue) {
      this.clearBuildingLabels();
      this.updateMapData(mapData.currentValue);
      this.attachListeners(this.mapInstance.data, this.featureListeners);
      this.setBuildingLabels();
      this.onMapZoomChanged();
    }
    if (categories && categories.currentValue) {
      this.mapService.setStyle(this.stylingFunctions.categories);
    }
  }

  updateMapData(data) {
    this.mapService.clearData();
    this.mapService.addData(data);
  }

  setStylesByCategory(feature: google.maps.Data.Feature): google.maps.Data.StyleOptions {
    const category = feature.getProperty('category');
    return Object.assign(
      {},
      GEOMETRY_STYLES,
      { icon: ICON_STYLES },
      this.categories.find(c => c._id === category)
    );
  }

  setBuildingLabels() {
    this.mapInstance.data.forEach(feature => {
      const building = feature.getProperty('building');
      const position = this.mapService.getCenter(feature);
      if (building) {
        const marker = this.mapService.createMarker(position, building.name);
        this.mapMarkers.push(marker);
      }
    });
  }

  clearBuildingLabels() {
    this.mapMarkers.forEach(marker => marker.setMap(null));
    this.mapMarkers = [];
  }

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
  private onMapZoomChanged() {
    if (this.mapInstance.getZoom() > 17) {
      this.mapMarkers.forEach(marker => marker.setMap(this.mapInstance));
    } else {
      this.mapMarkers.forEach(marker => marker.setMap(null));
    }
  }
  private attachListeners(target: google.maps.Map | google.maps.Data, listeners: object) {
    Object.keys(listeners).forEach(event => target.addListener(event, listeners[event]));
  }

}
