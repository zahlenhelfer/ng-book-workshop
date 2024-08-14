import { Component } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent {

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

  books: Array<Book> = [
    {
      "isbn": "978-0-596-52068-8",
      "title": "JavaScript: The Good Parts",
      "price": 29.99,
      "rating": 4.5,
      "coverUrl": "https://example.com/js-good-parts.jpg"
    },
    {
      "isbn": "978-1-59327-584-6",
      "title": "Python Crash Course",
      "price": 24.99,
      "rating": 4.7,
      "coverUrl": "https://example.com/python-crash-course.jpg"
    },
    {
      "isbn": "978-0-596-00708-4",
      "title": "Learning Perl",
      "price": 39.99,
      "rating": 4.2,
      "coverUrl": "https://example.com/learning-perl.jpg"
    },
    {
      "isbn": "978-1-59327-603-4",
      "title": "Automate the Boring Stuff with Python",
      "price": 29.99,
      "rating": 4.8,
      "coverUrl": "https://example.com/automate-boring-stuff.jpg"
    },
    {
      "isbn": "978-1-59327-702-4",
      "title": "Eloquent JavaScript",
      "price": 34.99,
      "rating": 4.6,
      "coverUrl": "https://example.com/eloquent-javascript.jpg"
    },
    {
      "isbn": "978-1-59327-950-9",
      "title": "Python for Data Analysis",
      "price": 44.99,
      "rating": 4.4,
      "coverUrl": "https://example.com/python-data-analysis.jpg"
    },
    {
      "isbn": "978-0137081073",
      "title": "Clean Code",
      "price": 49.99,
      "rating": 4.9,
      "coverUrl": "https://example.com/clean-code.jpg"
    },
    {
      "isbn": "9783864909467",
      "title": "Angular",
      "price": 42.90,
      "rating": 4.9,
      "coverUrl": "https://example.com/clean-code.jpg"
    }
  ];
}