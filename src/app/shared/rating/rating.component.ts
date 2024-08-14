import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnChanges {
  @Input()
  stars: number = 0;

  @Input()
  id: string = '';

  @Output()
  plusWasClicked: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  minusWasClicked: EventEmitter<string> = new EventEmitter<string>();

  plus() {
    console.log('plus');
    this.plusWasClicked.emit(this.id);
  }
  minus() {
    console.log('minus');
    this.minusWasClicked.emit(this.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('RatingComponent.ngOnChanges', changes);
  }
}
