import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 private API_KEY: string = 'api_key=861ff84c4cf5d4c636f19707b68e0932';
 private BASE_URL: string = 'https://api.themoviedb.org/3/';
 private API_MOVIE_URL: string = this.BASE_URL + 'discover/movie?'+this.API_KEY;
 private API_TV_URL: string = this.BASE_URL + 'discover/tv?'+this.API_KEY;
 private search_URL: string = this.BASE_URL + 'search/movie?'+ this.API_KEY 
 private search_tv_URL: string = this.BASE_URL + 'search/tv?'+ this.API_KEY 
//  private movieDetails_URL: string = this.BASE_URL + 'movie/' + 940721 + '?' + this.API_KEY;
private movieDetails_URL: string = this.BASE_URL + 'movie/';
private tvDetails_URL: string = this.BASE_URL + 'tv/';

  constructor(private http: HttpClient) {}

   getMovies(searchString: string): Observable<any>{
    return this.http.get<any>(this.API_MOVIE_URL);
  }

  getTVs(searchString: string): Observable<any>{
    return this.http.get<any>(this.API_TV_URL);
  }

  getTVsDetails(id: number): Observable<any>{
    return this.http.get<any>(this.tvDetails_URL + id + '?' + this.API_KEY);
  }

  getMovieDetails(id: number){
    return this.http.get<any>(this.movieDetails_URL + id + '?' + this.API_KEY);
  }

  searchMovies(searchString: string){
    return this.http.get<any>(this.search_URL + '&query=' + searchString);
  }

  // getTV(id: string){
  //   return this.http.get<any>(`${this.API_TV_URL}i=${id}${this.API_KEY}`);
  // }
}
