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

import { Category } from '../category';

interface FilterControls {
  location: string;
  category: string;
  group: string[];
}

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
    location: '',
    category: [''],
    group: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.filterControls.valueChanges.subscribe((filters: FilterControls) => {
      const filterValues = Object.entries(filters)
        .map(([name, value]) => this.getFilterValue(name, value))
        .filter(Boolean);
      const length = filterValues.length;
      const formattedFilter = length > 1 ?
        { $and: filterValues } :
        length === 1 ?
          filterValues[0] :
          {};
      this.filterChange.emit(formattedFilter)
    });
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
