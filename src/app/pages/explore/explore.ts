import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kanjiapi, KanjiDetail } from '../../services/kanjiapi';
import { OnInit } from '@angular/core';
import { Kanjigrid } from '../../components/kanjigrid/kanjigrid';
import { Sidepanel } from '../../components/sidepanel/sidepanel';

@Component({
  selector: 'app-explore',
  imports: [Kanjigrid, Sidepanel],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})

export class Explore implements OnInit {
  kanjiList = signal<string[]>([]);
  selectedKanji = signal<string | null>(null);
  kanjiDetails = signal<KanjiDetail | null>(null);

  handleKanjiSelection(character :string) {
    // Set the selected kanji
    this.selectedKanji.set(character);

    // API call
    this.kanjiService.getKanjiDetail(character).subscribe({
      next: (data) => {
        this.kanjiDetails.set(data);
      },
      error: (err) => {
        console.error("Something went wrong:", err);
      }
    })
  }



  constructor(
    private route: ActivatedRoute,
    private kanjiService: Kanjiapi
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const collection = params['collection']; // This gets 'jlpt-1', 'joyo', etc.

      if (collection) {
        this.kanjiService.getKanjiByCollection(collection).subscribe({
          next: (data) => {
            this.kanjiList.set(data); // Store the array in your signal
          },
          error: (err) => {
            console.error('Error fetching kanji:', err);
          }
        });
      }
    });
  }

}