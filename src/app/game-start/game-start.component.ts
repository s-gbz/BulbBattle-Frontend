import { Component, OnInit } from '@angular/core';
import { Player } from '../player';


@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.sass']
})
export class GameStartComponent implements OnInit {

  player: Player;

  constructor() { }

  ngOnInit() { }

  confirmNameCreatePlayerAndRequestId(playerName: string) {
    this.player = new Player(playerName);
    console.log(playerName);
    console.log(this.player);
    
  }

}
