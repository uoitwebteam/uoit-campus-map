import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import {
  Category,
} from '.';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    return this.http.get<Category[]>('/api/v1/categories')
      .map(categories => categories.map(category => new Category(category)))
  }

}
