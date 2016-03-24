import {Injectable} from 'angular2/core';
import {URLSearchParams, Http} from 'angular2/http';

@Injectable()
export class SearchService {
  constructor(private http: Http) {}

  getResults() {
    return this.http.get('./search/search.json');
  }
}
