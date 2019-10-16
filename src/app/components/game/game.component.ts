import { Component, OnInit } from '@angular/core';
import { interval, timer, combineLatest } from 'rxjs';
import { finalize, map, take, takeUntil, tap, startWith, switchMap } from 'rxjs/operators';
import { FoodService, TimeService } from 'src/app/services';


type GameState = 'instructions' | 'playing' | 'end';
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



    gameState: GameState;
    showInstructions: boolean;
    instructionsBuffer = this.timeService.gameDelay / 1000;
    countdown$ = interval(1000).pipe(
        take(this.instructionsBuffer + 1),
        map(val => this.instructionsBuffer - val),
        finalize(() => {
            this.foodService.nextOrder$.next();
            this.gameState = 'playing';
        })
    );
    counter = 0;
    currentSpawn: string[][];
    spawningFood$ = combineLatest([
        this.foodService.prepOrder$,
        this.foodService.nonOrder$,
        this.foodService.nonOrder$
    ]).pipe(
        map(([orders, nonOrder1, nonOrder2]) => {
            const spawn = [orders[this.counter++], nonOrder1, nonOrder2];
            if (this.counter > 2) { this.counter = 0 }
            console.log(spawn);
            this.currentSpawn = spawn;
            return spawn;
        }),
        takeUntil(timer(this.timeService.gameDuration + this.timeService.gameEndBuffer))
    )

    constructor(
        private foodService: FoodService,
        private timeService: TimeService,
    ) {
        this.items = [];
        this.score = 0;
    }


    ngOnInit() {
        this.showInstructions = true;
        this.gameState = 'instructions';
        this.spawningFood$.subscribe();








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
