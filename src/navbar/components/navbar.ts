import { Control } from 'angular2/common';
import {
  Component,
  Output,
  EventEmitter
} from 'angular2/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

@Component({
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
  term = new Control();
  @Output() filterPhrase = new EventEmitter();

  constructor() {
    this.term.valueChanges
             .debounceTime(500)
             .subscribe(value => this.updatePhrase(value));
  }

  updatePhrase(phrase:string) {
    this.phrase = phrase;
    this.filterPhrase.emit(this.phrase);
  }
}
