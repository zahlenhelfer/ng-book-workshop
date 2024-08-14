import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { BookSearchFilterPipe } from './books/book-search-filter.pipe';
import { RatingComponent } from './shared/rating/rating.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './books/welcome/welcome.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookSearchFilterPipe,
    RatingComponent,
    WelcomeComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
