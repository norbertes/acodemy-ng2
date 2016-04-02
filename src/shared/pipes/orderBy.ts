import { Pipe } from 'angular2/core';

@Pipe({
  name: 'orderBy'
})
export class OrderBy {
  transform(collection:Object[], [field]: [string]) {
    return collection.sort( (a, b) => {
      if (a[field] < b[field]) return -1;
      else if (a[field] > b[field]) return 1;
      else return 0;
    });
  }
}
