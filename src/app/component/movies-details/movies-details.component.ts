import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../_services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  // movie: any;
  movie = { id: 11, title: 'Mr. robot', type: 'Show', year: '2006', poster: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png?format=2500w' }
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadMovie();
  }

  loadMovie(){
    // this.movieService.getMovie(this.route.snapshot.paramMap.get("id")).subscribe(movie => {
    //   this.movie = movie;
    // })
  }

}
