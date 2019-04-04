import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameEndComponent } from './game-end/game-end.component';
import { GameStartComponent } from './game-start/game-start.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { GameWaitComponent } from './game-wait/game-wait.component';

const routes: Routes = [
  {path: "", component: GameStartComponent},
  {path: "start", component: GameStartComponent},
  {path: "wait", component: GameWaitComponent},
  {path: "play", component: GamePlayComponent},
  {path: "end", component: GameEndComponent},
  {path: "**", component: GameStartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
