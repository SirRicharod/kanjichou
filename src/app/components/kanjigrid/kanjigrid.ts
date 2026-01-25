import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kanjicard } from '../kanjicard/kanjicard';

@Component({
  selector: 'app-kanjigrid',
  imports: [Kanjicard],
  templateUrl: './kanjigrid.html',
  styleUrl: './kanjigrid.css',
})
export class Kanjigrid {

    @Input() kanjis :string[] = [];

    // Create the "Relay Transmitter"
    @Output() kanjiSelected = new EventEmitter<string>(); 

    // This function catches the card's message and sends it higher
    relaySelection(character :string) {
      this.kanjiSelected.emit(character);
    }

}
