import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MapService,
  MapComponent,
} from '.';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MapComponent,
  ],
  providers: [
    MapService,
  ],
  exports: [
    MapComponent,
  ],
})
export class MapModule { }
