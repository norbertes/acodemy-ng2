import 'angular2/bundles/angular2-polyfills';

import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

import { AlbumItem } from './album/album-item.ts';

import { TrackItem } from './track/track-item.ts';

@Component({
  selector: 'app',
  directives: [AlbumItem, TrackItem],
  templateUrl: './search/search.html'
})
class App {};

bootstrap(App, []);
