import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import {
  Anchor,
  Category,
} from '.';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    return this.http.get<any[]>('/api/v1/categories')
      .flatMap(categories => Observable.from(categories))
      .map(category => new Category(category));
  }

}
