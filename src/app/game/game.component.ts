import { Component } from "@angular/core";
import { GameService } from "../game.service";

@Component({
    selector: 'app-game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.scss']
})
export class GameComponent {
    gameStarted$ = this.gameService.gameStarted$;

    constructor(private gameService: GameService) { }

    startGame() {
        this.gameService.gameStarted.next(true);
    }
}