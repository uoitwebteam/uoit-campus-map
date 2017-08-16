import {
  Injectable,
  NgZone
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/map';

import {
  API_URL,
  API_KEY,
  MAP_STYLES,
  ICON_STYLES
} from './map-defaults';

@Injectable()
export class MapService {

  private googleSubject = new Subject<Google>();
  private googleInstance: Google;

  private mapSubject = new Subject<google.maps.Map>();
  private mapInstance: google.maps.Map;

  constructor(
    private ngZone: NgZone
  ) {
    this.loadGoogle();
  }

  private loadGoogle() {
    if (this.googleInstance) {
      this.googleSubject.next(this.googleInstance);
    } else {
      this.ngZone.runOutsideAngular(() => {
        const callbackId = 'g' + (new Date()).getTime().toString(12);
        window[callbackId] = () => {
          console.log('[map.service] getGoogle', window.google);
          this.ngZone.run(() => {
            this.googleInstance = window.google;
            this.googleSubject.next(this.googleInstance);
            delete window[callbackId];
          });
        };
        const script = (<Document>document).createElement('script');
        script.async = true;
        script.defer = true;
        script.onerror = () => {
          throw new Error('couldn\'t load Google Maps script')
        };
        script.src = `${API_URL}?key=${API_KEY}&callback=${callbackId}`;
        document.getElementsByTagName('head')[0].appendChild(script);
      });
    }
  }

  getGoogle(): Observable<any> {
    return this.googleSubject.asObservable().shareReplay();
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
