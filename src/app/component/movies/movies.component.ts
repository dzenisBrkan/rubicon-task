import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../_services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:any = [];
  // movies =[
  //   { id: 11, title: 'Mr. robot', type: 'Show', year: '2006', poster: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png?format=2500w' },
  //   { id: 12, title: 'Shogun' , type: 'Show', year: '2006', poster: 'N/A'},
  //   { id: 13, title: 'Game of Thrones' , type: 'Show', year: '2006', poster: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png?format=2500w'},
  //   { id: 14, title: 'Dark Knigt' , type: 'Movie' , year: '2006', poster: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png?format=2500w'},
  //   { id: 15, title: 'Moon Knight' , type: 'Show', year: '2006', poster: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png?format=2500w'},
  //   { id: 16, title: 'Avengers' , type: 'Movie', year: '2006', poster: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png?format=2500w'},
  //   { id: 17, title: 'Star Wars' , type: 'Movie', year: '2006', poster: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png?format=2500w'},
  //   { id: 18, title: 'Ashoka' , type: 'Fantasy', year: '2006', poster: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png?format=2500w'},
  //   { id: 19, title: 'Flash' , type: 'Movie', year: '2006', poster: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png?format=2500w'},
  //   { id: 20, title: 'Mandaloraian' , type: 'Fantasy', year: '2006', poster: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png?format=2500w'}
  // ];

  constructor(private movieService: MovieService){}

  ngOnInit()
 {
  // this.getMovies('');
  // this.getMovies(searchString)
  //  console.log('muvi', this.movies)
  }

  // getMovies(searchString:string): any{
  //   this.movieService.getMovies().subscribe(movies => {
  //     this.movies = movies;
  //     console.log(this.movies);
  //   });
  // }

  getMovies(searchString: string){
    this.movieService.getMovies(searchString).subscribe({
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

}
