import { resolve } from 'node:path';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../_services/movie.service';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  tvs: any = [];
  search = '';
  lastURL = '';
  isMoviesTab: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getTVs();
  }

  getMovies() {
    this.switchIsMoviesTab(true);
    if (this.search && this.search.length > 3) {
      this.searchMovies(this.search);
    } else {
      this.movieService.getMovies().subscribe({
        next: (response) => {
          this.movies = response.results.slice(0, 10);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
    }
  }

  getTVs() {
    this.switchIsMoviesTab(false);
    if (this.search && this.search.length > 3) {
      this.searchTVs(this.search);
    } else {
      this.movieService.getTVs().subscribe({
        next: (response) => {
          this.movies = response.results.slice(0, 10);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
    }
  }

  switchIsMoviesTab(value: boolean) {
    this.isMoviesTab = value;
  }

  searchMovies(searchString: any): void {
    this.search = searchString.data ? searchString.data : searchString;

    if (this.search && this.search.length > 3) {
      timer(1000)
        .pipe(switchMap(() => this.movieService.searchMovies(this.search)))
        .subscribe({
          next: (response) => {
            this.movies = response.results;
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            console.log('complete');
          },
        });
    } else if (this.search === '') {
      this.isMoviesTab ? this.getMovies() : this.getTVs();
    }
  }

  searchTVs(searchString: any): void {
    this.search = searchString.data ? searchString.data : searchString;
    if (this.search && this.search.length > 3) {
      timer(1000)
        .pipe(switchMap(() => this.movieService.searchTVs(this.search)))
        .subscribe({
          next: (response) => {
            this.movies = response.results;
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            console.log('complete');
          },
        });
    } else if (this.search === '') {
      this.isMoviesTab ? this.getMovies() : this.getTVs();
    }
  }
}
