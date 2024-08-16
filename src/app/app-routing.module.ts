import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './books/welcome/welcome.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BookInsertComponent } from './books/book-insert/book-insert.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'book/:isbn', component: BookDetailComponent },
  { path: 'newbook', component: BookFormComponent },
  { path: 'insertbook', component: BookInsertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
