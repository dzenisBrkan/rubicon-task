import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../_services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:any = [];
  tvs:any = [];

  constructor(private movieService: MovieService){}

  ngOnInit(){
    this.getTVs();
  }

  getMovies(){
    this.movieService.getMovies().subscribe({
      next: (response) => {
        this.movies = response.results;
        console.log(response)

      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })      
  }

  getTVs(){
    this.movieService.getTVs().subscribe({
      next: (response) => {
        this.movies = response.results;
        console.log(response)

      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })      
  }

  searchMovies(searchString:any):void{
    let search: string = searchString.data ? searchString.data : searchString;
    if(search){
      this.movieService.searchMovies(search).subscribe({
        next: (response) => {
          this.movies = response.results;
          console.log(response)
        },
        error: (error) => {
            console.log(error)
        },
        complete: () => {
            console.log('complete')
        }
      })     
    } else {
      this.getMovies()
    }
  }

  searchTVs(searchString:any):void{
    let search: string = searchString.data ? searchString.data : searchString;
    if(search){
      this.movieService.searchTVs(search).subscribe({
        next: (response) => {
          this.movies = response.results;
          console.log(response)
        },
        error: (error) => {
            console.log(error)
        },
        complete: () => {
            console.log('complete')
        }
      })     
    } else {
      this.getMovies()
    }
  }
}
