import { Component, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
import { finalize, takeUntil, tap } from 'rxjs/operators';
import { FoodService } from '../food.service';
import { PlateComponent } from '../plate/plate.component';
import { TimeService } from '../time.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    items: any[];
    queuedItems: any[];
    showGameOver: boolean;
    score: number;
    maxWidth = 70;
    countdownText: string;
    showOrderFulfilled: boolean;

    @ViewChild(PlateComponent) plateComponent;

    constructor(
        private foodService: FoodService,
        private timeService: TimeService
    ) {
        this.items = [];
        this.score = 0;

        this.timeService.gameTimer$.pipe(
            tap(console.log),
            finalize(() => console.log('done!'))
        ).subscribe();


    }

    ngOnInit() {
        this.queuedItems = this.foodService.prepareItemsAndOrder();
        const singleOrderFulfilled$ = this.foodService.ordersCompletedSubject.pipe(
            tap(x => this.showOrderFulfilled = true)
        );

        const spawning$ = this.foodService.timeKeeper(true).pipe(
            tap(this.spawnItem.bind(this)),
            takeUntil(this.foodService.timeRunsOut()),
            takeUntil(this.foodService.gameWon$),
            finalize(() => {
                this.showGameOver = true;
                this.items = [];
            }),
        );

        const gameReady$ = this.foodService.timeKeeper()
            .pipe(
                tap(x => {
                    this.countdownText = !x ? 'Ready?' : 'Go!';
                }),
                takeUntil(timer(this.foodService.startGameDelay)),
                finalize(() => { this.countdownText = ''; }),
            );

        singleOrderFulfilled$.subscribe();
        spawning$.subscribe();
        gameReady$.subscribe();
    }

    spawnItem(): void {
        const positionX = this.foodService.randomizeIndex(this.maxWidth);
        const queuedItem = this.queuedItems.pop();
        if (!queuedItem) {
            return;
        }
        this.items.push({ positionX, ...queuedItem });
    }


    restart() {
        this.showGameOver = false;
        this.foodService.reset();
        // more elegant reload!
        location.reload();
    }

}
