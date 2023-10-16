import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private baseUrl = 'https://libretranslate.com/translate';

  constructor(private http: HttpClient) {}

  translateText(text: string, targetLanguage: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { q: text, source: 'auto', target: targetLanguage };

    return this.http.post(this.baseUrl, body, { headers });
  }
}
