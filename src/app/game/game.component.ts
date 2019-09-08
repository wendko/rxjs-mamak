import { Component, OnInit } from "@angular/core";
import { GameService } from "../game.service";

@Component({
    selector: 'app-game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.scss']
})
export class GameComponent implements OnInit {
    itemSpawn$ = this.gameService.itemSpawn$;

    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.gameService.prepOrders$.subscribe();
    }

    startGame() {
        this.gameService.gameStatus.next('Start');
    }

    newGame() {
        this.gameService.gameStatus.next('New');
    }

}