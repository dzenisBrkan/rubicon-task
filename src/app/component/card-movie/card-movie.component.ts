import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  @Input('movie') movie: any;

  constructor() { }

  ngOnInit(): void{
    this.getImage();
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
