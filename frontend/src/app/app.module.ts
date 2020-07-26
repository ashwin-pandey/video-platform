import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Angular module imports */
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/** Routing import */
import { AppRoutingModule } from './app-routing.module';

/** Component imports */
import { AppComponent } from './app.component';
import { HomeComponent } from './movies/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
