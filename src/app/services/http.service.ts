import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registerUserAndGetId(userName: string): Observable<number> {    
    return this.http.post<number>(this.apiUrl + "/register-user", userName, this.httpOptions);
  }

  
}
