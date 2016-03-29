import {
  Component,
  Input,
} from 'angular2/core';

import { Duration } from '../shared/pipes/duration';

@Component({
  selector: 'track-item-list',
  pipes: [Duration],
  template: `
  <table class="tracks-table">
    <tr *ngFor="#track of tracks">
      <td>
        <button class="play-button">
          <div class="icon-background">
            <i class="fa fa-play"></i>
          </div>
        </button>
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
