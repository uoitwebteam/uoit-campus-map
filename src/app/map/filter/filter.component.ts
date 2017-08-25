import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { FilterControl, FilterControls } from '.';

@Component({
  selector: 'campus-map-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@AutoUnsubscribe()
export class FilterComponent implements OnInit, OnChanges {

  @Input() filters: FilterControl[];
  @Output() filterChange = new EventEmitter();

  filterControls = this.fb.group({
    location: null,
    category: null,
    group: null,
  });
  filterChangeSubscription: Subscription;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filterChangeSubscription = this.filterControls.valueChanges
      .debounceTime(10)
      .map((filters: FilterControls) =>
        Object.entries(filters || [])
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filters && changes.filters.currentValue) {
      (<FilterControl[]>changes.filters.currentValue)
        .forEach(filter => this.filterControls.setControl(
          filter.name,
          this.fb.control(
            filter.type === 'select' ?
              filter.options.map(v => v[filter.value]) :
              filter.options.find(v => v.code === 'north')._id
          )
        ));
    }
  }

  private getFilterValue(name: string, value: string | Array<string>) {
    return (value && value instanceof Array) ?
      value.length ?
        { [name === 'category' ? 'properties.category' : name]: { $in: value } } :
        null :
      value ?
        { [name]: value } :
        null;
  }
}
