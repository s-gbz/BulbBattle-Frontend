import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  sendUserNameAndGetUserId(playerNameJson): Observable<number> {    
    return this.http.post<number>(environment.serverBaseUrl + "/user/register", playerNameJson, this.httpOptions)
    .pipe(tap(), catchError(this.handleError<number>("sendUserNameAndGetUserId")));
  }

  setNumberOfRoundsAndStartGame(numberOfRoundsJson): void {
    this.http.post(environment.serverBaseUrl + "/game/start", numberOfRoundsJson, this.httpOptions)
    .pipe(tap(), catchError(this.handleError<string>("setNumberOfRoundsAndStartGame")));
  }

/*   subscribeClientToWebsocket(): WebSocketSubject<{isActionPhase: boolean, colorCombination: number[]}> {
    return webSocket(environment.websocketBaseUrl + "/socket");
  } */

  requestHighscore(): Observable<any> {    
    return this.http.get(environment.serverBaseUrl + "/user/highscore", this.httpOptions)
    .pipe(tap(), catchError(this.handleError<any>("requestHighscore")));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
