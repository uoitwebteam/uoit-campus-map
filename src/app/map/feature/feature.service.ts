import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class FeatureService {

  constructor(
    private http: HttpClient
  ) { }

  getFeatures() {
    const params = new HttpParams().set('filter', '{}');
    return this.http.get<any[]>('/api/v1/features', { params })
      // .flatMap(features => Observable.from(features))
      .map(features => ({
        type: 'FeatureCollection',
        features,
      }));
  }

}
