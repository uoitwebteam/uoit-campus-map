import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  CategoryService,
  FeatureService,
  MapService,
  MapComponent,
} from '.';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    MapComponent,
  ],
  providers: [
    CategoryService,
    FeatureService,
    MapService,
  ],
  exports: [
    MapComponent,
  ],
})
export class MapModule { }
