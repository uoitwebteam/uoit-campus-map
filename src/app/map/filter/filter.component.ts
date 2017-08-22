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

@Component({
  selector: 'campus-map-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  @Input() locations: vt.TourDefinition[];
  @Output() filterChange = new EventEmitter();

  filterControls = this.fb.group({
    location: '',
    category: '',
    group: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.filterControls.valueChanges.subscribe(filters => this.filterChange.emit(filters));
  }

}
