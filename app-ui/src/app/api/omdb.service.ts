import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OmdbService {
  movieTitle: string;
  imdbId: string;

  constructor(
    private http: HttpClient
  ) { }

  searchMovies(): Observable<any> {
    if (this.movieTitle === undefined || this.movieTitle === null) { this.movieTitle = ''; }
    const url = 'http://3.135.63.254:3000/omdb/search?title=' + this.movieTitle;
    console.log(this.http.get(url))
    return this.http.get(url);
  }
  viewMovies(): Observable<any> {
    const url = 'http://3.135.63.254:3000/omdb/result/' + this.imdbId;
    console.log("true")
    console.log(this.http.get(url))
    return this.http.get(url);
  }
}
