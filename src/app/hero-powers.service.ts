import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroPowersService {

  private powersUrl = 'api/powers';  // URL to web api
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    /** GET powers from the server */
  getHeroPowers (): Observable<string[]> {
    return this.http.get<string[]>(this.powersUrl)
      .pipe(
        tap(powers => this.log(`fetched powers`)),
        catchError(this.handleError('getHeroPowers', []))
      );
  }

  /** Log a PowerService message with the MessageService */
  private log(message: string) {
    this.messageService.add('PowerService: ' + message);
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
