import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleMovieComponent } from './single-movie/single-movie.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies.component';

const moviesRoutes: Routes = [
  // { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { 
    path: '', 
    component: MoviesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: ':movieId', component: SingleMovieComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
