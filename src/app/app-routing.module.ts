import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { EndScreenComponent } from './end-screen/end-screen.component';

const routes: Routes = [
  {path: "", component: WelcomeScreenComponent},
  {path: "game", component: GameScreenComponent},
  {path: "end-screen", component: EndScreenComponent},
  {path: "**", component: WelcomeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
