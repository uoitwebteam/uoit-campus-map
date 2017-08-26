import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdSelectModule,
  MdCheckboxModule,
  MdButtonToggleModule,
  MdRadioModule,
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
    BrowserAnimationsModule,
    MdSelectModule,
    MdCheckboxModule,
    MdButtonToggleModule,
    MdRadioModule,
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
