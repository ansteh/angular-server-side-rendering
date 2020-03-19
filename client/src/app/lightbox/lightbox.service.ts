import { Injectable, Inject, Optional } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpHeaders }from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LightboxService {

  private apiUrl = '/api';  // URL to web api // http://localhost:3000

  constructor(private http: HttpClient, @Optional() @Inject(APP_BASE_HREF) origin?: string) {
    console.log(`origin: ${origin}`);
  }

  getData(): Observable<any> {
    console.log('getData', this.apiUrl);
    return this.http.get<any>(`${this.apiUrl}/test`)
      .pipe(
        tap(data => console.log('fetched data', data)),
        catchError(this.handleError('getData', null))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
