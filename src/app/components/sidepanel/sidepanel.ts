import { Component, inject, Input } from '@angular/core';
import { KanjiDetail } from '../../services/kanjiapi';
import { Progressservice } from '../../services/progress';

@Component({
  selector: 'app-sidepanel',
  imports: [],
  templateUrl: './sidepanel.html',
  styleUrl: './sidepanel.css',
})
export class Sidepanel {
  @Input() activeKanji: KanjiDetail | null = null;

  public progressService = inject(Progressservice);
  
  ToggleLearned() {
    const kanji = this.activeKanji?.kanji;
    if (!kanji) return;
    this.progressService.ToggleKanji(kanji);
  }
}
