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

  private player: Player;
  private isAdmin: boolean;

  constructor( private router: Router) { }

  ngOnInit() { }

  confirmNameCreatePlayerAndRequestId(playerName: string) {
    this.player = new Player(playerName);

    this.httpService.sendUserNameAndGetUserId(playerName).subscribe(
      (receivedId) => {
        this.player.setUserId(receivedId);
        if (receivedId == 1) { 
          this.isAdmin = true; }
        else {
          this.router.navigateByUrl("/game");
        }
      }
    );
  }
}
