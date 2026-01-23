import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-kanjicard',
  imports: [],
  templateUrl: './kanjicard.html',
  styleUrl: './kanjicard.css',
})
export class Kanjicard {
  @Input() kanji :string = '';
}
