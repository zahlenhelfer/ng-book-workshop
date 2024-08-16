import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'book-insert',
  templateUrl: './book-insert.component.html',
  styleUrl: './book-insert.component.css'
})

export class BookInsertComponent {
  bookForm: FormGroup;

  //Erstmal nur eine Datenstrktur
  constructor() {
    // FormGroup ist ein Formular-Container
    this.bookForm = new FormGroup({
      // FormControl ist ein Formularfeld
      isbn: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      price: new FormControl(0),
      coverUrl: new FormControl('')
    });
  };

  /**
   * Speichert die eingegebenen Daten
   */
  speichern() {
    console.log(this.bookForm.value);
  }

}
