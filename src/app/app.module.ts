import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MapModule,
  FilterModule,
  AppComponent
} from '.';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MapModule,
    FilterModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
