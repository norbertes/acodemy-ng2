import { Pipe } from 'angular2/core';

@Pipe({
  name: 'phraseFilter'
})
export class PhraseFilter {
  transform(
    collection: Object[],
    [field = 'name', phrase = '']: [string, string]
  ) {
    return collection.filter( (el) => el[field].toLowerCase().indexOf(phrase) !== -1);
  }
}
