import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class FilterService {

  constructor(
    private http: HttpClient
  ) { }

  getLocations(filter) {
    const params = this.formatFilter(filter);
    return this.http.get<vt.TourDefinition[]>('/api/v1/locations', { params });
  }

  getBuildings(filter) {
    const params = this.formatFilter(filter);
    return this.http.get<vt.TourDefinition[]>('/api/v1/buildings', { params });
  }

  getScenes(filter) {
    const params = this.formatFilter(filter);
    return this.http.get<vt.TourDefinition[]>('/api/v1/scenes', { params });
  }

  private formatFilter(filter) {
    return filter ? new HttpParams().set('filter', filter) : null;
  }

}
