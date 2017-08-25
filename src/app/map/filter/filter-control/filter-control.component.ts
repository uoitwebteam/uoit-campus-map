import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FilterControl } from '.';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'filter-control',
  templateUrl: './filter-control.component.html',
  styleUrls: ['./filter-control.component.scss'],
})
export class FilterControlComponent implements OnInit {
  @Input() filter: FilterControl;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
