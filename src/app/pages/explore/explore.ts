import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kanjiapi } from '../../services/kanjiapi';
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

  handleKanjiSelection(character :string) {
    this.selectedKanji.set(character);
    console.log("Explore Received");
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