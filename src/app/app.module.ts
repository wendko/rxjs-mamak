import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { TimerComponent } from './components/timer/timer.component';
import { GameComponent } from './components/game/game.component';
import { OrderComponent } from './components/order/order.component';
import { FoodComponent } from './components/food/food.component';

@NgModule({
    declarations: [
        AppComponent,
        ItemComponent,
        TimerComponent,
        GameComponent,
        OrderComponent,
        FoodComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
