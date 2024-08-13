import { Component } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books = [{
    title: 'The Alchemist',
    isbn: '978-0062315007',
    price: 8.99,
    rating: 4.8,
  }, {
    title: 'The Great Gatsby',
    isbn: '978-0743273565',
    price: 9.99,
    rating: 4.5,
  }
  ];

}
