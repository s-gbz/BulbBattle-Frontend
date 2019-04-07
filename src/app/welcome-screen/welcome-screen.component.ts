import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  player: Player;
  isAdmin: boolean = false;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.httpService.subscribeClientToWebsocket().subscribe((roundUpdate: { isActionPhase: boolean, colorCombination: number[] }) => {

    });
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
