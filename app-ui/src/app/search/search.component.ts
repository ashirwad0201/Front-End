import {Component,OnInit,OnDestroy,OnChanges, Input} from '@angular/core';
import { OmdbService } from '../api/omdb.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  movies = [];
  movieTitle: string; 
  searchMovieSub: Subscription;

  constructor(
    private router: Router,
    private omdbService: OmdbService
  ) { }

  ngOnInit(): void {
    // Angular Lifecycle Stages Hooks
    // OnInit, OnChanges ( Input Changes ), OnDestoy
    this.movieTitle = this.omdbService.movieTitle;
    this.searchMovies()
  }

  ngOnDestroy() {
    this.searchMovieSub.unsubscribe();
  }

  searchMovies() {
    this.searchMovieSub = this.omdbService.searchMovies().subscribe(
      res => this.searchSuccess(res),
      err => this.searchError(err)
    )
  }

  searchSuccess(res) {
    this.movies = res.Search;
    console.log(res.Search)
  }

  searchError(err) {
    console.log(err)
  }

  onSearch() {
    this.omdbService.movieTitle = this.movieTitle;
    this.searchMovies()
  }
  onView(imdbId: string) {
    //this.omdbService.imdbId = this.imdbId;
    //console.log(imdbId);
    this.omdbService.imdbId=imdbId
    this.router.navigate(['movie/:imdbId']);
  }

}
