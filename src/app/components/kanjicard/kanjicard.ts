import { Component, input, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kanjicard',
  imports: [],
  templateUrl: './kanjicard.html',
  styleUrl: './kanjicard.css',
})
export class Kanjicard {
  @Input() character :string = '';
  @Output() cardClicked = new EventEmitter<string>();
  
  onCardClick() {
    this.cardClicked.emit(this.character);
  }
}
