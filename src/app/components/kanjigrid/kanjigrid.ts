import { Component, Input } from '@angular/core';
import { Kanjicard } from '../kanjicard/kanjicard';

@Component({
  selector: 'app-kanjigrid',
  imports: [Kanjicard],
  templateUrl: './kanjigrid.html',
  styleUrl: './kanjigrid.css',
})
export class Kanjigrid {

    @Input() kanjis :string[] = [];
}
