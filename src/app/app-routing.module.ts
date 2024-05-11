import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
