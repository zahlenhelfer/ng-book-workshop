import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent implements OnInit {

  constructor(private bookDataService: BookDataService) {
    console.log('BookListComponent created');
  }

  ngOnInit() {
    console.log('BookListComponent initialized');
    this.bookDataService.getBooks().subscribe(books => this.books = books);
  }

  filterValue: string = '';

  coverIsVisible = true;

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

  plus(isbn: string) {
    console.log('plus was clicked for', isbn);
    const book = this.books.find(book => book.isbn === isbn);
    if (book) {
      book.rating = Math.min(5, parseFloat((book.rating + 0.1).toFixed(1)));
    }
  }

  minus(isbn: string) {
    console.log('minus was clicked for', isbn);
    const book = this.books.find(book => book.isbn === isbn);
    if (book) {
      book.rating = Math.max(1, parseFloat((book.rating -= 0.1).toFixed(1)));
    }
  }

  books: Array<Book> = [];
}