import { TestBed } from '@angular/core/testing';

import { BookDataService } from './book-data.service';
import { of } from 'rxjs/internal/observable/of';

describe('BookDataService', () => {
  let bookDataService: BookDataService;
  let mockHttp: any;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    bookDataService = new BookDataService(mockHttp);
  });

  it('should be created', () => {
    expect(bookDataService).toBeTruthy();
  });

  it('should call http.get', () => {
    const books = { isbn: '42', title: 'Test Book', price: 9.99 };
    mockHttp.get.and.returnValue(of(books));
    bookDataService.getBook('42');
    expect(mockHttp.get).toHaveBeenCalledWith('http://localhost:3000/books/42');
  });
});
