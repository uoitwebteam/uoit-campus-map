import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

import { InfowindowService } from '.';

@Component({
  selector: 'campus-map-infowindow',
  template: `<div class="info-window">
    <h2 *ngIf="title">{{ title }}</h2>
    <ng-content></ng-content>
    <span *ngIf="description" [innerHTML]="description"></span>
    <button md-button color="primary" (click)="action.emit()">Take a tour »</button>
  </div>`,
  styleUrls: ['./infowindow.component.scss']
})
export class InfowindowComponent implements OnInit {

  @Output() action = new EventEmitter();
  content: HTMLElement;
  title: string;
  description: string;
  building: any;

  constructor(
    private infowindowService: InfowindowService,
    private cd: ChangeDetectorRef,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.content = this.el.nativeElement.querySelector('.info-window');
    this.infowindowService.add(this);
  }

  open(event) {
    const { feature, latLng } = event;
    this.title = feature.getProperty('name');
    this.building = feature.getProperty('building');
    this.description = feature.getProperty('desc') || (this.building ? this.building.desc : 'No description available');

    this.cd.detectChanges();
    this.infowindowService.open(this, latLng);
  }

}
