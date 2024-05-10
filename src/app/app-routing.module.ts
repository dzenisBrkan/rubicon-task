import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './component/details/details.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { AppComponent } from './app.component';
import { ShowsComponent } from './component/shows/shows.component';
import { MoviesComponent } from './component/movies/movies.component';
import { MoviesDetailsComponent } from './component/movies-details/movies-details.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movies/:id',
    component: MoviesDetailsComponent
  },
  {
    path: '**',
    component: MoviesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
