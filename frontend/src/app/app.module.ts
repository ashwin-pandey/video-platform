import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Angular module imports */
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/** Component imports */
import { AppComponent } from './app.component';

/** Routing import */
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './videos/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
