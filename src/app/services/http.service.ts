import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  serverBaseUrl = environment.serverBaseUrl;
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  sendUserNameAndGetUserId(userName: string): Observable<number> {    
    return this.http.post<number>(this.serverBaseUrl + "/get-user-id", userName, this.httpOptions);
  }

  setNumberOfRoundsAndStartGame(numberOfRounds: number): void {
    this.http.post(this.serverBaseUrl + "/set-number-of-rounds-and-start-game", numberOfRounds, this.httpOptions);
  }

  subscribeClientToWebsocket(): WebSocketSubject<number[]> {
    return webSocket(this.serverBaseUrl + "/register-client");
  }

  requestHighscore(): Observable<{userName: string, score: number}[]> {    
    return this.http.get<{userName: string, score: number}[]>(this.serverBaseUrl + "/request-highscore", this.httpOptions);
  }
}
