import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { EndScreenComponent } from './end-screen/end-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    GameScreenComponent,
    EndScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
