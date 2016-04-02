import { Control } from 'angular2/common';
import { ROUTER_DIRECTIVES, RouteParams, Location } from 'angular2/router';
import { URLSearchParams } from 'angular2/http';
import {
  Component,
  Output,
  EventEmitter
} from 'angular2/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'navbar',
  template: `
    <nav class="app-navbar initialized"
         [ngClass]="{minimized: phrase.length}">
      <div class="app-logo">
        <a href="">
          <i class="fa fa-spotify"></i> Spotify browser
        </a>
      </div>
      <div class="app-search">
        <input #searchbox
        id="searchbox"
               type="text"
               placeholder="search..."
               [ngFormControl]="term">
        <button type="button"
                class="input-clear"
                tabindex="-1">
          <i class="fa fa-times"></i>
        </button>
      </div>
    </nav>
  `
})
export class Navbar {
  phrase:string = '';
  term:Control = new Control();
  @Output() filterPhrase = new EventEmitter();

  constructor(
    private location: Location,
    private params: RouteParams
  ) {
    this.phrase = this.params.get('query') || '';
    this.term.valueChanges
             .debounceTime(500)
             .subscribe((value) => this.updatePhrase(value));
  }

  ngAfterViewInit() {
    document.querySelector('#searchbox').value = this.phrase;
  }

  updatePhrase(phrase:string) {
    this.phrase = phrase;
    this.location.go(`?query=${phrase}`);
    this.filterPhrase.emit(this.phrase);
  }
}
