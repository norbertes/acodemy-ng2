import {
  Component,
  Output,
  EventEmitter
} from 'angular2/core';

@Component({
  selector: 'navbar',
  template: `
    <nav class="app-navbar initialized"
         [ngClass]="{minimized: phrase.length}">
      <div class="app-logo">
        <a href="">
          <i class="fa fa-spotify"></i> Spotify browser {{ phrase }}
        </a>
      </div>
      <div class="app-search">
        <input #searchbox
               type="text"
               placeholder="search..."
               (keyup)="updatePhrase(searchbox.value)" >
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
  @Output() filterPhrase = new EventEmitter();
  phrase = '';

  updatePhrase(phrase) {
    this.phrase = phrase;
    this.filterPhrase.emit(this.phrase);
  }
}
