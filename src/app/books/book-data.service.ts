import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
/**
 * Service for fetching book data from the server.
 */
@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  /**
   * 
   * @param http The HTTP client to use for making requests.
   */
  constructor(private http: HttpClient) { }
  /**
   * 
   * @returns An observable that will emit an array of books.
   */
  getBooks(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>(environment.BASE_URL + '/books');
  }
  /**
   * 
   * @param isbn The ISBN of the book to fetch.
   * @returns 
   */
  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(environment.BASE_URL + '/books/' + isbn);
  }

  insertBook(book: Book): Observable<Book> {
    return this.http.post<Book>(environment.BASE_URL + '/books', book);
  }
}
