import {
  Component,
  Input
} from 'angular2/core';

@Component({
  selector: 'album-item',
  template: `
    <a
      class="tile thumb-m"
      title="Album"
      href="album/index.html">
       <img src="{{item.images[0].url}}"
            width="128">
       {{ item.name }}
    </a>
  `
})
export class AlbumItem {
  @Input() item;
}
