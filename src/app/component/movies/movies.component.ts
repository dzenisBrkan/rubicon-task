import { resolve } from 'node:path';
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
  prev = document.getElementById(`prev`);
  current = document.getElementById(`current`);
  next = document.getElementById(`next`);

  currentPage = 1;
  nextPage = 2;
  prevPage = 3;
  lastURL = '';
  totalPages = 100;

  isMoviesTab:boolean = false;

  constructor(private movieService: MovieService){}

  ngOnInit(){
    this.getTVs();
  }

  getMovies(){
    this.switchIsMoviesTab(false);  
    this.movieService.getMovies().subscribe({
      next: (response) => {
        this.movies = response.results.slice(0, 10);
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })
  }

  getTVsPaggination(url: string){
    this.movieService.getTVsPaggination(url).subscribe({
      next: (response) => {
        this.movies = response.results;
        this.currentPage = response.results.page;
        this.nextPage = this.currentPage + 1;
        this.prevPage = this.currentPage - 1;
        this.totalPages = response.results.total_pages;

        // this.current?.innerText = this.currentPage;

        if(this.currentPage <= 1){
          this.prev?.classList.add('disable');
          this.next?.classList.remove('disable');
        }else if(this.currentPage >= this.totalPages){
          this.prev?.classList.remove('disable');
          this.next?.classList.add('disable');
        }else{
          this.prev?.classList.remove('disable');
          this.next?.classList.remove('disable');
        }
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
    this.switchIsMoviesTab(true);
    this.movieService.getTVs().subscribe({
      next: (response) => {
        this.movies = response.results.slice(0, 10);
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })    
  }

  switchIsMoviesTab(value: boolean){
    this.isMoviesTab = !value;
  }

  searchMovies(searchString:any):void{
    let search: string = searchString.data ? searchString.data : searchString;
    if(search){
      this.movieService.searchMovies(search).subscribe({
        next: (response) => {
          this.movies = response.results;
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
    
  prevPageFunction():void{
    this.prev?.addEventListener('click', () =>{
      if(this.prevPage > 0){
        this.pageCall(this.nextPage);
      }
    })
  }

  nextPageFunction():void{
    this.next?.addEventListener('click', () =>{
      if(this.nextPage <= this.totalPages){
        this.pageCall(this.nextPage);
      }
    })
  }

  pageCall(page: number){
    var url = ''
    var urlSplit = url.split('?');
    var queryParams = urlSplit[1].split('&');
    var key = queryParams[queryParams.length - 1].split('=');
    if(key[0] != 'page'){
      let url = this.lastURL + '&page=' + page;
      this.getTVsPaggination(url);
    }else{
      key[1] = page.toString();
      let a = key.join('=');
      queryParams[queryParams.length - 1] = a;
      var b = queryParams.join('&');
      var url = urlSplit[0] + '?' + b;
      this.getTVsPaggination(url); 
    }

  }
}

