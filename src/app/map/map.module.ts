import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MapService,
  CategoryService,
  FeatureService,
  FilterService,
  MapComponent,
  FilterComponent,
} from '.';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MapComponent,
    FilterComponent,
  ],
  providers: [
    MapService,
    CategoryService,
    FeatureService,
    FilterService,
  ],
  exports: [
    MapComponent,
    FilterComponent,
  ],
})
export class MapModule { }
