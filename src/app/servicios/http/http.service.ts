import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError , tap , timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  @Output() eventHttp: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  public realizarGet(url: string): any {
    this.eventHttp.emit(false);
    return this.http.get(url).pipe(
      tap(_ => {
        this.eventHttp.emit(true);
      }),
      catchError((error: HttpErrorResponse) => {
        this.eventHttp.emit(true);
        if (error.status === 404) {
          return throwError('Error 404: Recurso no encontrado');
        }
        return throwError('Otro error'); // Puedes personalizar el mensaje para otros códigos de error si es necesario
      })
    );
  }
}