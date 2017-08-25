import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  Category,
  FeatureCollection
} from '.';

@Injectable()
export class FilterService {

  constructor(
    private http: HttpClient
  ) { }

  getLocations(filter?) {
    const params = this.formatFilter(filter);
    return this.http.get<vt.TourDefinition[]>('/api/v1/locations', { params });
  }

  getBuildings(filter?) {
    const params = this.formatFilter(filter);
    return this.http.get<vt.TourDefinition[]>('/api/v1/buildings', { params });
  }

  getScenes(filter?) {
    const params = this.formatFilter(filter);
    return this.http.get<vt.TourDefinition[]>('/api/v1/scenes', { params });
  }

  getCategories(filter?) {
    const params = this.formatFilter(filter);
    return this.http.get<Category[]>('/api/v1/categories', { params })
      .map(categories => categories.map(category => new Category(category)))
  }

  getFeatureCollections(filter?) {
    const params = this.formatFilter(filter);
    return this.http.get<FeatureCollection[]>('/api/v1/feature-collections', { params });
  }

  private formatFilter(filter) {
    return filter ? new HttpParams().set('filter', filter) : null;
  }

}
