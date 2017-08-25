import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MapModule, FilterModule } from './map';
import { AppComponent } from './app.component';

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
