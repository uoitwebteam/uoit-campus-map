import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  FeatureService,
  MapService,
  MapComponent,
  InfowindowComponent
} from '.';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    MapComponent,
    InfowindowComponent,
  ],
  providers: [
    FeatureService,
    MapService,
  ],
  exports: [
    MapComponent,
    InfowindowComponent,
  ],
})
export class MapModule { }
