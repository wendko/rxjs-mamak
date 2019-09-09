import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { tap, takeUntil } from "rxjs/operators";
import { GameService } from "../game.service";

@Component({
    selector: 'app-game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.gameService.prepOrders$.subscribe();
        this.gameService.currentOrder$.
            pipe(tap(x => console.log(`watching currentOrderObs ${x}`))).subscribe();
    }

    startGame(): void {
        this.gameService.gameStatus.next('Start');
    }

    newGame(): void {
        this.gameService.gameStatus.next('New');
    }

    // temp
    ordersCompleted = 0;
    nextOrder(): void {
        if (this.ordersCompleted < this.gameService.orderCount) {
            this.gameService.currentOrder.next(this.ordersCompleted + 1);
            this.ordersCompleted++;
        } else {
            console.log('all done!');
        }
    }
}