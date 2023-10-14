import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError , tap , timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  @Output() eventHttp: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  public realizarGet(url: string, opciones?: any, timeoutMs = 30000): any{
    this.eventHttp.emit(false);
    return this.http.get(url, opciones).pipe(
      tap(_ => {
        this.eventHttp.emit(true);
      }),
      timeout(timeoutMs),
      catchError((error: HttpErrorResponse) => {
        this.eventHttp.emit(true);
        return error + "Error";
      })
    );
  }
}