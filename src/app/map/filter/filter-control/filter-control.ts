export type InputType = 'radio' | 'checkbox' | 'select' | 'text' | 'textarea';

export class FilterControl {
  /**
   * The title of this filter grouping; i.e. this label can
   * represent multiple form controls in a single fieldset.
   *
   * @type {string}
   * @memberof Filter
   */
  title: string;
  /**
   * The string to use as the input group's "name" – this property
   * becomes the name of the `FormControl` instance in a `FormGroup`.
   *
   * @type {string}
   * @memberof Filter
   */
  name: string;
  /**
   * The *property name* of an object passed into the `options`
   * array whose value will be used as the input's label.
   *
   * @type {string}
   * @memberof Filter
   */
  label: string;
  /**
   * The *property name* of an object passed into the `options`
   * array whose value will be used as the input's value.
   *
   * @type {string}
   * @memberof Filter
   */
  value: string;
  /**
   * An array of option objects representing the inputs that
   * make up this input group.
   *
   * How these options are rendered depends on the `type` of
   * the `Filter` instance:
   *
   * - `type: 'radio'`: will render a checkbox for each option
   * - `type: 'select'`: will render the `<option>`s in the select
   * - etc...
   *
   * @type {any[]}
   * @memberof Filter
   */
  options: any[];
  /**
   * The type of filter (i.e. the name of an input element such as
   * `radio` or `select`). This property determines how the `Filter`
   * instance's `options` attribute is rendered.
   *
   * @type {InputType}
   * @memberof Filter
   */
  type: InputType;
  constructor(control: FilterControl) {
    Object.assign(this, control);
  }
}