import { Component, OnInit } from "@angular/core";
import { merge } from "rxjs";
import { GameService } from "../game.service";

@Component({
    selector: 'app-game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.scss']
})
export class GameComponent implements OnInit {
    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.gameService.prepOrders$.subscribe();
    }

    startGame(): void {
        this.gameService.gameStatus.next('Start');
    }

    newGame(): void {
        this.gameService.gameStatus.next('New');
        this.gameService.currentOrder$.next(0);
    }

    // temp
    ordersCompleted = 0;
    nextOrder(): void {
        if (this.ordersCompleted < this.gameService.orderCount) {
            this.gameService.currentOrder$.next(this.ordersCompleted + 1);
            this.ordersCompleted++;
        } else {
            console.log('all done!');
        }
    }
}