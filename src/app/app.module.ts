import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { ShowsComponent } from './component/shows/shows.component';
import { TabSwitchComponent } from './component/tab-switch/tab-switch.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './component/movies/movies.component';
import { MoviesDetailsComponent } from './component/movies-details/movies-details.component';
import { CardMovieComponent } from './component/card-movie/card-movie.component';

@NgModule({
  declarations: [	
    AppComponent,
    // SearchBarComponent,
    // ShowsComponent,
    // TabSwitchComponent,
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
