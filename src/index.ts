import 'angular2/bundles/angular2-polyfills';

import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <div>Hello world</div>
  `
})
class App {};

bootstrap(App, []);
