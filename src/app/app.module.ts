import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameStartComponent } from './game-start/game-start.component';
import { GameEndComponent } from './game-end/game-end.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { GameWaitComponent } from './game-wait/game-wait.component';

@NgModule({
  declarations: [
    AppComponent,
    GameStartComponent,
    GameEndComponent,
    GamePlayComponent,
    GameWaitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
