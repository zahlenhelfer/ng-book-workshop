import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>('http://localhost:3000/books');
  }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/books/' + isbn);
  }
}
