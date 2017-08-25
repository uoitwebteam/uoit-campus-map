import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MdSelectModule,
  MdCheckboxModule,
} from '@angular/material';

import {
  FilterService,
  FilterComponent,
  FilterControlComponent,
} from '.';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MdSelectModule,
    MdCheckboxModule,
  ],
  declarations: [
    FilterComponent,
    FilterControlComponent,
  ],
  providers: [
    FilterService,
  ],
  exports: [
    FilterComponent,
    FilterControlComponent,
  ],
})
export class FilterModule { }
