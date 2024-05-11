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
  
  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.id = parseInt(this.route.snapshot.params['id']);
   }

  ngOnInit() {
    this.loadMovie();
    this.loadTV();
  }

  loadMovie() {
    console.log("id:", this.id);
    this.movieService.getMovieDetails(this.id).subscribe(movie => {
      this.movie = movie;
      console.log("ovooo",movie);
    })
  }

  loadTV() {
    console.log("id:", this.id);
    this.movieService.getTVsDetails(this.id).subscribe(movie => {
      this.movie = movie;
      console.log("ovooo",movie);
    })
  }


  getImage(){
    if(this.movie.poster_path == 'N/A'){
      return 'http://via.placeholder.com/400'
    }
    else{
      return 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
    }
  }

}
