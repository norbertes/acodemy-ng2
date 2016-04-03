import 'angular2/bundles/angular2-polyfills';

import { bootstrap } from 'angular2/platform/browser';
import {
  Component,
  Input,
  provide
} from 'angular2/core';

import { HTTP_PROVIDERS } from 'angular2/http';
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouteConfig,
  APP_BASE_HREF
} from 'angular2/router';

import { SearchService } from './search/search.service.ts';
import { Search } from './search/search.component.ts';
import { Album } from './album/album';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
 {
   path: '/',
   name: 'Search',
   component: Search,
   useAsDefault: true
 }, {
   path: '/album/:id',
   name: 'Album',
   component: Album
 }
])
class App {};

bootstrap(App, [
  SearchService,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' })
]);
