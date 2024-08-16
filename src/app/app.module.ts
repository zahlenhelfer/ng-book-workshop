import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookSearchFilterPipe } from './books/book-search-filter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './books/welcome/welcome.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BookInsertComponent } from './books/book-insert/book-insert.component';
import { SharedModule } from './shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookSearchFilterPipe,
    WelcomeComponent,
    BookDetailComponent,
    BookFormComponent,
    BookInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule, MatMenuModule],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
