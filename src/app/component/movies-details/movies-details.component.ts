import { resolve } from 'node:path';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../_services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  movie: any;
  id: number;
  isMoviesTab: boolean = false;
  
  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.id = parseInt(this.route.snapshot.params['id']);
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.isMoviesTab = params['isMoviesTab'].toLowerCase() === 'false' ? false : true;      
    });
    this.isMoviesTab ? this.loadMovie() : this.loadTV();
  }

  loadMovie() {
    this.movieService.getMovieDetails(this.id).subscribe({
      next: (response) => {
        this.movie = response;
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })      
  }

  loadTV() {
    this.movieService.getTVDetails(this.id).subscribe({
      next: (response) => {
        this.movie = response;
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })      
  }

  getImage(){
    return 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  }
}
