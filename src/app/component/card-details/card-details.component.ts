import { resolve } from 'node:path';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MovieService } from '../../_services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  movie: any;
  id: number;
  isMoviesTab: boolean = false;
  previousRoute: string | null = null;
  
  constructor(private movieService: MovieService,
    private route: ActivatedRoute, 
    private router: Router) {
    this.id = parseInt(this.route.snapshot.params['id']);
   }

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousRoute = event.urlAfterRedirects;
      }
    });

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

  goBack(): void {
    if (this.previousRoute) {
      this.router.navigateByUrl(this.previousRoute);
    } else {
      // Default behavior if previous route is not available
      this.router.navigate(['/movies']);
    }
  }
}
