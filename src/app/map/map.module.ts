import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MdButtonModule
} from '@angular/material';

import {
  FeatureService,
  MapService,
  MapComponent,
  InfowindowService,
  InfowindowComponent
} from '.';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MdButtonModule,
  ],
  declarations: [
    MapComponent,
    InfowindowComponent,
  ],
  providers: [
    FeatureService,
    MapService,
    InfowindowService,
  ],
  exports: [
    MapComponent,
    InfowindowComponent,
  ],
})
export class MapModule { }
