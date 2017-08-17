import {
  Injectable,
  NgZone
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {
  CategoryService,
  API_URL,
  API_KEY,
  MAP_STYLES,
  ICON_STYLES,
} from '.';

@Injectable()
export class MapService {

  private googleSubject = new Subject<Google>();
  private googleInstance: Google;

  private mapSubject = new Subject<google.maps.Map>();
  private mapInstance: google.maps.Map;

  constructor(
    private zone: NgZone,
    private categoryService: CategoryService
  ) {
    this.loadGoogle();
    this.getCategories();
  }

  private loadGoogle() {
    if (this.googleInstance) {
      this.googleSubject.next(this.googleInstance);
    } else {
      this.zone.runOutsideAngular(() => {
        const callbackId = 'g' + (new Date()).getTime().toString(12);
        window[callbackId] = () => {
          console.log('[map.service] getGoogle', window.google);
          this.zone.run(() => {
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
    return this.googleSubject.asObservable()
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
          heading: 0,
        }))
    // } else {
    //   throw new Error('No valid map instance is available!');
    // }
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(category => console.log('[category]', category));
  }

  addData(collection) {
    this.mapInstance.data.addGeoJson(collection);
    this.fitBounds(this.mapInstance);
  }

  clearData() {
    this.mapInstance.data.forEach(feature => {
      this.mapInstance.data.remove(feature);
    });
  }

  /**
   * Direct port of Google Maps `processBounds` example function
   * for recalculation of map boundaries based on map data.
   *
   * @param {google.maps.LatLng | google.maps.Data.Point | google.maps.Data.Geometry} geometry LatLng geometry object
   * @param {any} callback Recursion callback
   * @param {any} thisArg Context for `this`
   * @memberof MapService
   */
  processBounds(geometry, callback, thisArg) {
    if (geometry instanceof google.maps.LatLng) {
      callback.call(thisArg, geometry);
    } else if (geometry instanceof google.maps.Data.Point) {
      callback.call(thisArg, geometry.get());
    } else {
      geometry.getArray().forEach(g => {
        this.processBounds(g, callback, thisArg);
      });
    }
  }

  /**
   * Resizes map view to fit recalculated bounds.
   */
  fitBounds(instance) {
    const bounds = new google.maps.LatLngBounds();
    instance.data.forEach(feature => {
      this.processBounds(feature.getGeometry(), bounds.extend, bounds);
    });
    instance.fitBounds(bounds);
  }
}
