import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { Feature } from '.';

@Injectable()
export class FeatureService {

  constructor(
    private http: HttpClient
  ) { }

  getFeatures<T extends GeoJSON.GeometryObject>() {
    const params = new HttpParams().set('filter', '{}');
    return this.http.get<Feature<T>[]>('/api/v1/features', { params })
      // .flatMap(features => Observable.from(features))
      .map(features => <GeoJSON.FeatureCollection<T>>({
        type: 'FeatureCollection',
        features,
      }));
  }

}
