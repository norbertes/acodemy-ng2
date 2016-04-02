import 'angular2/bundles/angular2-polyfills';

import { bootstrap } from 'angular2/platform/browser';
import {
  Component,
  Input
} from 'angular2/core';

import { HTTP_PROVIDERS } from 'angular2/http';

import { AlbumItem } from './album/album-item.ts';
import { ArtistItem } from './artist/artist-item.ts';
import { TrackItemList } from './track/track-item-list.ts';
import { Navbar } from './navbar/components/navbar.ts';

import { SearchService } from './search/search.service.ts';

import { PhraseFilter } from './shared/pipes/phraseFilter.ts';
import { OrderBy } from './shared/pipes/orderBy.ts';

@Component({
  selector: 'app',
  directives: [AlbumItem, ArtistItem, TrackItemList, Navbar],
  pipes: [PhraseFilter, OrderBy],
  templateUrl: './search/search.html'
})
class App {
  searchResults: Object;
  filterPhrase: string;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.getData();
  }

  updatePhrase(phrase:string) {
    this.filterPhrase = phrase;
    this.getData(phrase);
  }

  getData(phrase:string = 'transistor') {
    this.searchService.getResults(phrase)
    .subscribe(
      response => this.searchResults = response,
      error => console.log(error)
    );
  }
};

bootstrap(App, [SearchService, HTTP_PROVIDERS]);
