import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import 'rxjs/add/operator/map';

import { Category } from '../category';
import { Filter, FilterControls } from '.';

@Component({
  selector: 'campus-map-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  @Input() locations: vt.TourDefinition[];
  @Input() categories: Category[];
  @Output() filterChange = new EventEmitter();

  filterControls = this.fb.group({
    location: null,
    category: null,
    group: null,
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.filterControls.valueChanges
      .map((filters: FilterControls) =>
        Object.entries(filters)
          .map(([name, value]) => this.getFilterValue(name, value))
          .filter(Boolean)
      )
      .map(filterValues => {
        const length = filterValues.length;
        return length > 1 ?
          { $and: filterValues } :
          length === 1 ?
            filterValues[0] :
            {};
      })
      .subscribe(result => this.filterChange.emit(result));
  }

  private getFilterValue(name: string, value: string | Array<string>) {
    return (value && value instanceof Array) ?
      value.length ?
        { [name]: { $in: value } } :
        null :
      value ?
        { [name]: value } :
        null;
  }

}
