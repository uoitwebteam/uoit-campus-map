import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Feature } from '.';

@Injectable()
export class FeatureService {

  cachedResults = new Map<string, GeoJSON.FeatureCollection<GeoJSON.GeometryObject>>();

  constructor(
    private http: HttpClient
  ) { }

  getFeatures<T extends GeoJSON.GeometryObject>(filter?) {
    const params = <HttpParams>this.formatFilter(filter);
    const paramString = params.toString();
    return this.cachedResults.has(paramString) ?
      Observable.of(this.cachedResults.get(paramString)) :
      this.http.get<Feature<T>[]>('/api/v1/features', { params })
        .map(features => <GeoJSON.FeatureCollection<T>>({
          type: 'FeatureCollection',
          features,
        }))
        .do(result => this.cachedResults.set(paramString, result));
  }

  private formatFilter(filter = {}) {
    return new HttpParams().set('filter', JSON.stringify(filter));
  }

}
