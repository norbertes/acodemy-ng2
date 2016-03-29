import { Pipe } from 'angular2/core';

@Pipe({
  name: 'duration'
})
export class Duration {
  transform(value) {
    let seconds = value / 1000;
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds > 10 ? seconds : '0' + seconds}`;
  }
}
