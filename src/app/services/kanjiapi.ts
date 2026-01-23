import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class Kanjiapi {

  private base_url = 'https://kanjiapi.dev/v1/kanji/'

  constructor(private http: HttpClient) {}

  getKanjiByCollection(collection :string) {
    return this.http.get<string[]>(`${this.base_url}${collection}`)
  }
  
}