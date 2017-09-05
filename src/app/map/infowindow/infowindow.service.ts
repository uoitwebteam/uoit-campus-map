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

  open(instance: InfowindowComponent, position) {
    const infowindow = this.cache.get(instance);
    this.mapService.getMap()
      .subscribe(map => {
        console.log('infowindow content', instance.content);
        infowindow.setPosition(position);
        infowindow.setContent(instance.content);
        infowindow.open(map);
      });
  }

}
