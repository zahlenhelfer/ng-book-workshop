import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'books-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  constructor(private bookDataService: BookDataService,
    private router: Router

  ) { }

  onSubmit(form: NgForm) {
    console.log('Your form data:', form.value);
    const newBook: Book = form.value;
    this.bookDataService.insertBook(newBook).subscribe((book: Book) => {
      // alert(JSON.stringify(book));
      this.router.navigate(['/books']);
    });
  }

}
