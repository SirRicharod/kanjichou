import { Component, Input } from '@angular/core';
import { KanjiDetail } from '../../services/kanjiapi';

@Component({
  selector: 'app-sidepanel',
  imports: [],
  templateUrl: './sidepanel.html',
  styleUrl: './sidepanel.css',
})
export class Sidepanel {
@Input() activeKanji :KanjiDetail | null = null;

}
