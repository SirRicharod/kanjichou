import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import { Progressservice } from '../../services/progress';

@Component({
  selector: 'app-kanjicard',
  imports: [],
  templateUrl: './kanjicard.html',
  styleUrl: './kanjicard.css',
})
export class Kanjicard {
  @Input() character :string = '';
  @Output() cardClicked = new EventEmitter<string>();

  public progressService = inject(Progressservice);
  
  onCardClick() {
    this.cardClicked.emit(this.character);
  }
}
