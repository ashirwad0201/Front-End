import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../api/omdb.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie_info=[]
  imdbId: string;
  viewMovieSub: Subscription;

  constructor(
    private omdbService: OmdbService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.imdbId = this.omdbService.imdbId;
    console.log(this.imdbId);
    this.viewMovies();
  }

  viewMovies() {
    this.viewMovieSub = this.omdbService.viewMovies().subscribe(
      res => this.viewSuccess(res),
      err => this.viewError(err)
    )
  }

  viewSuccess(res) {
    this.movie_info=res;
     console.log(this.movie_info)
    
  }

  viewError(err) {
    console.log(err)
  }

  

}
