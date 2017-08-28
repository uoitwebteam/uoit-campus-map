import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';

import { InfowindowService } from '.';

@Component({
  selector: 'campus-map-infowindow',
  template: `<div class="info-window"><ng-content></ng-content></div>`,
  styleUrls: ['./infowindow.component.scss'],
})
export class InfowindowComponent implements OnInit {

  content: HTMLElement;

  constructor(
    private infowindowService: InfowindowService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.content = this.el.nativeElement.querySelector('.info-window');
    this.infowindowService.add(this);
  }

  open(feature) {
    this.infowindowService.open(this, feature);
  }

}
