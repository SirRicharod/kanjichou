import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kanjiapi } from '../../services/kanjiapi';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  imports: [],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})

export class Explore implements OnInit {
  kanjiList = signal<string[]>([]);

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
            console.log('Successfully fetched kanji:', data);
          },
          error: (err) => {
            console.error('Error fetching kanji:', err);
          }
        });
      }
    });
  }

}