import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})

export class BookDetailComponent {

  constructor(private route: ActivatedRoute, private bookDataService: BookDataService) {
  }

  book: Book | null = null;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookDataService.getBook(params['isbn']).subscribe(book => this.book = book);
    });
  }

}