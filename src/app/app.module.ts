import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlateComponent } from './plate/plate.component';
import { ItemComponent } from './item/item.component';
import { TimerComponent } from './timer/timer.component';
import { GameComponent } from './game/game.component';
import { FoodService } from './food.service';

@NgModule({
  declarations: [
    AppComponent,
    PlateComponent,
    ItemComponent,
    TimerComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
