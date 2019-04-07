import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {

  isActionPhase: boolean = true;
  colorCombination: number[] = [];
  enteredColorCombination: number[] = [];
  timeLeftInSeconds: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    timer(0, 1000).subscribe((seconds: number) => {
      this.timeLeftInSeconds = seconds;
    })
  }



}
