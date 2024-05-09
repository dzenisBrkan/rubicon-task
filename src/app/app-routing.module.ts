import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './component/details/details.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { AppComponent } from './app.component';
import { ShowsComponent } from './component/shows/shows.component';

const routes: Routes = [
  {
    path: 'main-page',
    component: AppComponent
  },
  {
    path: 'movies',
    component: ShowsComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
