import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { FilterControl } from '.';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'filter-control',
  templateUrl: './filter-control.component.html',
  styleUrls: ['./filter-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@AutoUnsubscribe()
export class FilterControlComponent implements OnInit, AfterViewInit {
  @Input() filter: FilterControl;
  @Input() form: FormGroup;

  private filterSubscription: Subscription;

  private checkedSubject = new Subject<boolean>();
  checked = this.checkedSubject.asObservable();
  private indeterminateSubject = new Subject<boolean>();
  indeterminate = this.indeterminateSubject.asObservable();

  get formControl() {
    return this.form.get(this.filter.name);
  }

  ngOnInit() {
    this.filterSubscription = this.formControl.valueChanges
      .filter(value => value && value instanceof Array)
      .subscribe(value => this.updateCheckboxState(value));
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateCheckboxState(this.formControl.value))
  }

  select(event: Event) {
    const newValue = (<HTMLInputElement>event.target).checked ?
      [...this.filter.options.map(f => f[this.filter.value])] :
      [];
    this.formControl.setValue(newValue);
  }

  private updateCheckboxState(value: any[]): void {
    if (value.length === this.filter.options.length) {
      this.indeterminateSubject.next(false);
      this.checkedSubject.next(true);
    } else if (value.length > 0) {
      this.checkedSubject.next(false);
      this.indeterminateSubject.next(true);
    } else {
      this.indeterminateSubject.next(false);
      this.checkedSubject.next(false);
    }
  }

}
