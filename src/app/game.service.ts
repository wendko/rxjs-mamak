import { Injectable } from "@angular/core";
import { BehaviorSubject, interval, timer, ReplaySubject } from "rxjs";
import { delay, filter, map, takeUntil, tap } from "rxjs/operators";
import { GameStatus } from "./game";
import { Drink, Food } from "./item";

@Injectable()
export class GameService {
    /** Timing variables */
    gameOverText = 'Game Over!'
    gameDuration = 5000;
    gameInterval = 1000;
    spawnInterval = this.gameInterval;

    /** Order variables */
    secondsPerSingleOrder = 2;
    itemsPerSingleOrder = 3;
    orderCount = this.gameDuration / 1000 / this.secondsPerSingleOrder;
    totalItems: (Food | Drink)[] = [...Object.values(Drink), ...Object.values(Food)];

    /** Observables */
    gameOver$ = timer(this.gameDuration)
        .pipe(
            delay(1000),
            tap(() => this.gameStatus.next('End'))
        );

    countDown$ = interval(this.gameInterval)
        .pipe(
            map(time => (this.gameDuration / 1000) - time),
            takeUntil(this.gameOver$),
        )

    itemSpawn$ = interval(this.spawnInterval)
        .pipe(
            // map(_ => this.getRandomItems()),
            takeUntil(this.gameOver$),
        )

    gameStatus = new BehaviorSubject<GameStatus>('End');
    gameStatus$ = this.gameStatus.asObservable();

    orderList$ = new ReplaySubject<(Food | Drink)[][]>();
    prepOrders$ = this.gameStatus$.pipe(
        filter((x: GameStatus) => x === 'Start'),
        tap(_ => {
            let orderCount = this.orderCount;
            let itemsPerOrder = this.itemsPerSingleOrder;

            const orders = Array.from({ length: orderCount },
                _ => this.getRandomItems(itemsPerOrder));

            this.orderList$.next(orders);
        })
    );



    getRandomItems(itemCount: number): (Food | Drink)[] {
        return Array.from({ length: itemCount },
            _ => this.totalItems[Math.floor(Math.random() * this.totalItems.length)])
    }

}