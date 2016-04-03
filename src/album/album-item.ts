import {
  Component,
  Input
} from 'angular2/core';

import { RouterLink } from 'angular2/router';

@Component({
  selector: 'album-item',
  directives: [RouterLink],
  template: `
    <a
      class="tile thumb-m"
      title="Album"
      [routerLink]="['Album', { id: item.id }]">
       <img src="{{item.images[0].url}}"
            width="128">
       {{ item.name }}
    </a>
  `
})
export class AlbumItem {
  @Input() item;
}
