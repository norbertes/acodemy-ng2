import {Injectable} from 'angular2/core';
import {URLSearchParams, Http} from 'angular2/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  constructor(private http: Http) {}

  getResults(phrase:string) {
    return this.http.get(`
      https://api.spotify.com/v1/search?q=${phrase}&type=album,artist,track&limit=10
    `)
      .map(res => res.json());
  }
}
