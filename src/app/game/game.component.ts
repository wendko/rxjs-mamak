import { Component } from "@angular/core";
import { GameService } from "../game.service";

@Component({
    selector: 'app-game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.scss']
})
export class GameComponent {
    gameStatus$ = this.gameService.gameStatus$;

    constructor(private gameService: GameService) { }

    startGame() {
        this.gameService.gameStatus.next('Start');
    }

    newGame() {
        this.gameService.gameStatus.next('New');
    }

}