import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }

  getCurrentTime(): string {
    return (new Date()).toDateString();
  }

  getCatFact(): Observable<any> {
    return this.http.get<any>('https://catfact.ninja/fact');
  }

  getDogImage(): Observable<any> {
    return this.http.get<any>('https://dog.ceo/api/breeds/image/random').pipe(map(data => data.message));
  }
}
