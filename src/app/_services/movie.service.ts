import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
 private API_URL: string = 'https://api.themoviedb.org/3/discover/movie?';
 private API_KEY: string = '861ff84c4cf5d4c636f19707b68e0932';
 private API_READ_Access_Token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjFmZjg0YzRjZjVkNGM2MzZmMTk3MDdiNjhlMDkzMiIsInN1YiI6IjY2M2E0ZTMwODEzY2I2MDEyOThhNTEzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5iyhhiJL_DngFAvXT3kM3ilAsLuDkrNp3UdfXcIXJ5I';

  constructor(private http: HttpClient) {}

   getMovies(searchString: string): Observable<any>{
    // ${searchString}
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie?api_key=861ff84c4cf5d4c636f19707b68e0932');
  }

  getMovie(id: string){
    return this.http.get<any>(`${this.API_URL}i=${id}${this.API_KEY}`);
  }
}
