import { Injectable } from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { InfowindowComponent } from '.';
import { MapService } from '../map.service';

@Injectable()
export class InfowindowService {

  private cache = new WeakMap<InfowindowComponent, google.maps.InfoWindow>();

  constructor(private mapService: MapService) { }

  add(instance: InfowindowComponent) {
    this.mapService.createInfoWindow({})
      .subscribe(infowindow => this.cache.set(instance, infowindow))
  }

  open(instance: InfowindowComponent, event: google.maps.Data.MouseEvent) {
    const infowindow = this.cache.get(instance);
    const { feature, latLng } = event;
    const title = feature.getProperty('name');
    const building = feature.getProperty('building');
    const description = feature.getProperty('desc') || (building ? building.desc : 'No description available');
    this.mapService.getMap()
      .subscribe(map => {
        infowindow.setPosition(latLng);
        infowindow.setContent(`<h2>${title}</h2>${description}`);
        infowindow.open(map);
      });
  }

}
