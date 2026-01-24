import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface KanjiDetail {
  freq_mainichi_shinbun : number | null,
  grade: number | null,
  heisig_en: string[] | null,
  jlpt: number |null,
  kanji: string,
  kun_readings: string[] | null,
  meanings: string[],
  name_readings: string[] | null,
  notes: string[] | null,
  on_readings: string[] | null,
  stroke_count: number,
  unicode: string
}

@Injectable({
  providedIn: 'root',
})

export class Kanjiapi {

  private base_url = 'https://kanjiapi.dev/v1/kanji/'

  constructor(private http: HttpClient) {}

  getKanjiByCollection(collection :string) {
    return this.http.get<string[]>(`${this.base_url}${collection}`);
  }

  getKanjiDetail(character :string) :Observable<KanjiDetail>{
    return this.http.get<KanjiDetail>(`${this.base_url}${character}`);
  }
  
}