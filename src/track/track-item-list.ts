import {
  Component,
  Input,
} from 'angular2/core';

import { PlayButton } from '../shared/components/play-button';
import { Duration } from '../shared/pipes/duration';

@Component({
  selector: 'track-item-list',
  directives: [PlayButton],
  pipes: [Duration],
  template: `
  <table class="tracks-table">
    <tr *ngFor="#track of tracks">
      <td>
        <play-button [url]="track.preview_url"></play-button>
      </td>
      <td><a href="album/index.html">{{ track.name | uppercase }}</a></td>
      <td><a href="album/index.html">{{ track.album.name }}</a></td>
      <td><a href="artist/index.html">{{ track.artists[0].name }}</a></td>
      <td class="">{{ track.duration_ms | duration}}</td>
    </tr>
  </table>
`
})
export class TrackItemList {
  @Input() tracks: Object;

  constructor() {}
};
