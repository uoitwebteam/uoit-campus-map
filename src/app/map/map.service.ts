import {
  Injectable,
  NgZone
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

import {
  API_URL,
  API_KEY,
  MAP_STYLES,
  ICON_STYLES
} from './map-defaults';

@Injectable()
export class MapService {

  private googleInstance;
  private mapInstance: google.maps.Map;

  constructor(
    private ngZone: NgZone
  ) {}
  private loadGoogle(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.googleInstance) {
        resolve(this.googleInstance);
      } else {

        this.ngZone.runOutsideAngular(() => {
          const callbackId = 'g' + (new Date()).getTime().toString(12);
          window[callbackId] = () => {
            console.log('[map.service] getGoogle', window.google);
            this.ngZone.run(() => {
              this.googleInstance = window.google;
              resolve(this.googleInstance);
              delete window[callbackId];
            });
          };
          const script = (<Document>document).createElement('script');
          script.async = true;
          script.defer = true;
          script.onerror = reject;
          script.src = `${API_URL}?key=${API_KEY}&callback=${callbackId}`;
          document.getElementsByTagName('head')[0].appendChild(script);
        });
      }
    });
  }

  getGoogle(): Observable<any> {
    const googlePromise = this.loadGoogle();
    return Observable.fromPromise(googlePromise)
  }

  getMap(element?: HTMLElement): Observable<google.maps.Map> {
    // if (this.mapInstance) {
    //   return Observable.of(this.mapInstance);
    // } else if (element) {
      return this.getGoogle()
        .map(google => this.mapInstance = new google.maps.Map(element, {
          center: new google.maps.LatLng({ lat: 43.9443802, lng: -78.8975857 }),
          zoom: 17,
          styles: MAP_STYLES,
          disableDefaultUI: true,
          tilt: 45,
          heading: 0
        }))
    // } else {
    //   throw new Error('No valid map instance is available!');
    // }
  }
}
