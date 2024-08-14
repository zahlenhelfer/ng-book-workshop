import { Component } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent {

  books = [
    {
      "isbn": "978-0-596-52068-8",
      "title": "JavaScript: The Good Parts",
      "price": 29.99,
      "rating": 4.5
    },
    {
      "isbn": "978-1-59327-584-6",
      "title": "Python Crash Course",
      "price": 24.99,
      "rating": 4.7
    },
    {
      "isbn": "978-0-596-00708-4",
      "title": "Learning Perl",
      "price": 39.99,
      "rating": 4.2
    },
    {
      "isbn": "978-1-59327-603-4",
      "title": "Automate the Boring Stuff with Python",
      "price": 29.99,
      "rating": 4.8
    },
    {
      "isbn": "978-1-59327-702-4",
      "title": "Eloquent JavaScript",
      "price": 34.99,
      "rating": 4.6
    },
    {
      "isbn": "978-1-59327-950-9",
      "title": "Python for Data Analysis",
      "price": 44.99,
      "rating": 4.4
    },
    {
      "isbn": "978-1-59327-792-5",
      "title": "Clean Code",
      "price": 49.99,
      "rating": 4.9
    }
  ];

}
