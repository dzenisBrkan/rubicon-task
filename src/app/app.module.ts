import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './component/movies/movies.component';
import { MoviesDetailsComponent } from './component/movies-details/movies-details.component';
import { CardMovieComponent } from './component/card-movie/card-movie.component';

@NgModule({
  declarations: [	
    AppComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    CardMovieComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
