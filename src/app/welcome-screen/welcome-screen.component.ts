import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

// *to be refactored
import { Observable, of } from 'rxjs';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { environment } from 'src/environments/environment';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client'; 
// *to be refactored

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  player: Player;
  isAdmin: boolean = false;
  stompClient;
  websocketName = "No name";
  log = "Nothing to log";

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    /*     this.httpService.subscribeClientToWebsocket().subscribe((roundUpdate: { isActionPhase: boolean, colorCombination: number[] }) => {
    
        }); */

    // /update-color-combination
    /*    const subject = webSocket(environment.websocketBaseUrl);
   
       subject.subscribe(
          msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
          err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
          () => console.log('complete') // Called when connection is closed (for whatever reason).
        ); */
    this.initializeWebSocketConnection()
  }

  initializeWebSocketConnection() {
    let ws = new SockJS("http://localhost:8080/socket");
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe("/update-color-combination", (message) => {
        console.log(message);
        that.websocketName = message.body;
        that.log = message;
      });
    });
  }

  sendMessage(name) {
    this.stompClient.send("/update-color-combination", {}, name);
  }

  confirmNameCreatePlayerAndRequestId(playerName: string) {
    this.player = new Player(playerName);
    const playerNameJson = { "name": playerName }

    this.httpService.sendUserNameAndGetUserId(playerNameJson).subscribe(
      (receivedId) => {
        this.player.setUserId(receivedId);
        console.log(this.player);
        if (receivedId == 1) {
          this.isAdmin = true;
        }
        else {
          this.router.navigateByUrl("/game");
        }
      }
    );
  }

  startGame(numberOfRounds: number): void {
    const numberOfRoundsJson = { "numberOfRounds": numberOfRounds }

    this.httpService.setNumberOfRoundsAndStartGame(numberOfRoundsJson);
    this.router.navigateByUrl("/game");
  }

  requestHighscore(): void {
    this.httpService.requestHighscore().subscribe((userList) => {
      console.log(userList);
    });
  }
}
