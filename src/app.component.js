import { AppController as controller } from './app.controller.js'
import template from './app.component.html';

export const AppComponent = {
  bindings: {
    mapData: '<?'
    // location: '<?',
    // building: '<?',
    // feature: '<?'
  },
  template,
  controller
}