import { Component } from 'angular2/core';

@Component({
  selector: 'album-item',
  template: `
    <a
      class="tile thumb-m"
      title="Album"
      href="album/index.html">
       <img src="{{image}}"
            width="128">
       {{ name }}
    </a>
  `
})
export class AlbumItem {
  constructor() {
    Object.assign(this, {
      id: "3B0PgLmgaW0gJth55ApWbw",
      image: "https://i.scdn.co/image/fa8a3b68578c65fff17f59cc5e5058b4e2fc48b2",
      name: "Transistor Original Soundtrack"
    })
  }
}
