import {
  Directive,
  Input,ElementRef
} from 'angular2/core';

@Directive({
  selector: '[track-item]'
  // template: `
//   <td>
//     <button class="play-button">
//       <div class="icon-background">
//         <i class="fa fa-play"></i>
//       </div>
//     </button>
//   </td>
//   <td><a href="album/index.html">{{ track.name }}</a></td>
//   <td><a href="album/index.html">{{ track.album.name }}</a></td>
//   <td><a href="artist/index.html">{{ track.artists[0].name }}</a></td>
//   <td class="">{{ track.duration_ms }}</td>
// `
})
export class TrackItem {
  @Input('item') item: Object;

  constructor(
    element: ElementRef
  ) {
    console.log(
      element,
      this.item
    );
  }
};
