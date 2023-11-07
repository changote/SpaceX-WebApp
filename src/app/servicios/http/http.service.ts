import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError , tap , timeout } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  @Output() eventHttp: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  public realizarGet(url: string): Observable<any[]>{
    return this.http.get<any[]>(url);
  }

  public realizarPost(url: string, datos: any): Observable<boolean> {
    console.log(datos);
    console.log(url);
    return this.http.post<boolean>(url, datos);
  }

  public realizarPut(url: string, id: number, update: any): Observable<boolean> {
    return this.http.put<boolean>(url + id, update);
  }
}