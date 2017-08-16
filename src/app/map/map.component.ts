import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { MapService } from './';

@Component({
  selector: 'campus-map',
  template: `<div class="campus-map" #mapEl></div>`,
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @ViewChild('mapEl', {read: ElementRef}) mapEl: ElementRef;

  constructor(
    private mapService: MapService
  ) { }

  ngOnInit() {
    this.mapService.getMap(this.mapEl.nativeElement)
      .subscribe(map => console.log('[map]', map));
  }

}
