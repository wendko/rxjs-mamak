import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { ProgressComponent } from './progress/progress.component';
import { GameComponent } from './game/game.component';
import { ItemComponent } from './item/item.component';

const COMPONENTS = [
    ProgressComponent,
    GameComponent,
    ItemComponent
];

@NgModule({
    declarations: [
        AppComponent,
        ...COMPONENTS
    ],
    imports: [
        BrowserModule
    ],
    providers: [GameService],
    bootstrap: [AppComponent]
})
export class AppModule { }
