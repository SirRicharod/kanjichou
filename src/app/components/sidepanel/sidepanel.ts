import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  imports: [],
  templateUrl: './sidepanel.html',
  styleUrl: './sidepanel.css',
})
export class Sidepanel {
@Input() activeKanji :string | null = null;

}
