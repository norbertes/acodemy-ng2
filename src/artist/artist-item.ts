import {
  Component,
  Input
} from 'angular2/core';

@Component({
  selector: 'artist-item',
  template: `
    <a
      class="tile thumb-m"
      title="Artist"
      href="artist/index.html">
      <ng-content></ng-content>
    </a>
  `,
})
export class ArtistItem {
}
