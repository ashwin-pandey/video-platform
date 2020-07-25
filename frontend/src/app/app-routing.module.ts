import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './movies/home/home.component';

/**
 * All the parent routes for the application
 */
const routes: Routes = [
  {
    path: '', redirectTo: '/movies', pathMatch: 'full'
  },
  { 
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) 
  },
  { path: '**', redirectTo: '/movies', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
