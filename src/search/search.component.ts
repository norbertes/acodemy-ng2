import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { AlbumItem } from './../album/album-item.ts';
import { ArtistItem } from './../artist/artist-item.ts';
import { TrackItemList } from './../track/track-item-list.ts';
import { Navbar } from './../navbar/components/navbar.ts';

import { PhraseFilter } from './../shared/pipes/phraseFilter.ts';
import { OrderBy } from './../shared/pipes/orderBy.ts';

import { SearchService } from './../search/search.service.ts';

@Component({
  templateUrl: './search/search.html',
  directives: [AlbumItem, ArtistItem, TrackItemList, Navbar, Search],
  pipes: [PhraseFilter, OrderBy],
})
export class Search {
  searchResults: Object;
  filterPhrase: string;

  constructor(
    private searchService: SearchService,
    private params: RouteParams
  ) {}

  ngOnInit() {
    this.filterPhrase = this.params.get('query') || '';
    this.getData(this.filterPhrase);
  }

  updatePhrase(phrase:string) {
    this.filterPhrase = phrase;
    this.getData(phrase);
  }

  getData(phrase:string = '') {
    this.searchService.getResults(phrase)
    .subscribe(
      response => this.searchResults = response,
      error => console.log(error)
    );
  }
}
