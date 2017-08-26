import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';

import { MapService } from '../map.service';

@Component({
  selector: 'campus-map-infowindow',
  templateUrl: './infowindow.component.html',
  styleUrls: ['./infowindow.component.scss'],
})
export class InfowindowComponent implements OnInit {

  constructor(private mapService: MapService, private el: ElementRef) { }

  ngOnInit() {
    const content = this.el.nativeElement.innerHTML;
    this.mapService.addInfoWindow({
      content,
    }).subscribe(infowindow => console.log(infowindow));
  }

}
