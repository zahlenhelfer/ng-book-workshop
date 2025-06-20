import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  standalone: false,
  name: 'bookSearchFilter'
})
export class BookSearchFilterPipe implements PipeTransform {

  transform(books: Array<Book>, filterValue: string = ''): Array<Book> {

    if (!filterValue) {
      return books;
    }

    filterValue = filterValue.toLowerCase();

    const result = books.filter((book) => {
      return book.title.toLowerCase().includes(filterValue);
    });

    return result;

  }
}