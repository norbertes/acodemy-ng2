import 'angular2/bundles/angular2-polyfills';

import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

import { HTTP_PROVIDERS } from 'angular2/http';

import { AlbumItem } from './album/album-item.ts';
import { ArtistItem } from './artist/artist-item.ts';
import { TrackItem } from './track/track-item.ts';
import { Navbar } from './navbar/components/navbar.ts';

import { SearchService } from './search/search.service.ts';

@Component({
  selector: 'app',
  directives: [AlbumItem, ArtistItem, TrackItem, Navbar],
  templateUrl: './search/search.html'
})
class App {
  searchResults;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.getResults()
    .subscribe(
      response => this.searchResults = response,
      error => console.log(error)
    );
  }
};

bootstrap(App, [SearchService, HTTP_PROVIDERS]);
