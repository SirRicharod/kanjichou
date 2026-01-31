import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Progressservice {

  learnedKanji = signal(new Set<string>());

  ToggleKanji(kanji: string) {
    this.learnedKanji.update((currentSet) => {
      // make new set so we keep the original
      const newSet = new Set(currentSet);
      // check whether kanji is already in the set
      if (newSet.has(kanji)) {
        //if it is we remove it
        newSet.delete(kanji);
      }// if it isn't we add it
      else {
        newSet.add(kanji);
      }
      return newSet;
    })
  }



  constructor() {
    const storedData = localStorage.getItem('learned_kanji');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.learnedKanji.set(new Set(parsedData));
    }

    effect(() => {
      const currentSet = this.learnedKanji();

      const array = Array.from(currentSet);

      localStorage.setItem('learned_kanji', JSON.stringify(array));
    });
  }
}