import { Component } from 'angular2/core';

@Component({
  selector: 'track-item',
  template: `
    <tr>
      <td>
        <button class="play-button">
          <div class="icon-background">
            <i class="fa fa-play"></i>
          </div>
        </button>
      </td>
      <td><a href="album/index.html">{{ name }}</a></td>
      <td><a href="album/index.html">{{ album }}</a></td>
      <td><a href="artist/index.html">{{ artist }}</a></td>
      <td class="">{{ time }}</td>
    </tr>
  `
})
export class TrackItem {
  constructor() {
    Object.assign(this, {
      name: 'abc',
      album: 'foo',
      artist: 'bar',
      time: '5:50'
    })
  }
};
