import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { FeatureCollection } from '.';

@Injectable()
export class CollectionService {

  constructor(
    private http: HttpClient
  ) { }

  getFeatureCollections() {
    return this.http.get<FeatureCollection[]>('/api/v1/feature-collections');
  }

}
