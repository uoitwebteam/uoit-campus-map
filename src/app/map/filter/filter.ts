export interface FilterControls {
  location: string;
  category: string[];
  group: string[];
}

export type InputType = 'radio' | 'checkbox' | 'select' | 'text' | 'textarea';

export class Filter {
  title: string;
  name: string;
  label: string;
  value: string;
  options: any[];
  type: InputType;
  constructor(filter: Filter) {
    Object.assign(this, filter);
  }
}
