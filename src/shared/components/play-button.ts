import {
  Component,
  ElementRef,
  Input
} from 'angular2/core';

const audioElements = [];

@Component({
  selector: 'play-button',
  template: `
    <button class="play-button"
            (click)="togglePlay()">
      <div class="icon-background">
        <i class="fa fa-play"></i>
      </div>
      <audio src="{{ url }}"></audio>
    </button>
  `
})
export class PlayButton {
  @Input() url;
  audio;
  icon;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const audio = this.el.nativeElement.querySelector('audio');
    this.audio = audio;
    this.icon = this.el.nativeElement.querySelector('i');
    audioElements.push(this);
  }

  togglePlay() {
    const paused = this.audio.paused;

    audioElements.forEach( (audio) => audio.pause() );

    if (paused) {
      this.icon.classList.add('fa-pause');
      this.icon.classList.remove('fa-play');
      this.audio.play();
    }
  }

  pause() {
    this.icon.classList.add('fa-play');
    this.icon.classList.remove('fa-pause');
    this.audio.pause();
  }
}
