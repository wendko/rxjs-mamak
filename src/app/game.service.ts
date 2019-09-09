import { Injectable } from "@angular/core";
import { BehaviorSubject, interval, timer, ReplaySubject, EMPTY, merge } from "rxjs";
import { delay, filter, map, takeUntil, tap, mergeMap, concatMap, take } from "rxjs/operators";
import { GameStatus } from "./game";
import { Drink, Food } from "./item";

@Injectable()
export class GameService {
    /** Timing */
    gameDuration = 5000;
    gameInterval = 1000;
    spawnInterval = this.gameInterval;
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

    /** Status */
    gameStatus = new BehaviorSubject<GameStatus>('End');
    gameStatus$ = this.gameStatus.asObservable();

    /** Orders */
    secondsPerSingleOrder = 2;
    itemsPerSingleOrder = 3;
    itemSpawnSize = 4;
    orderCount = Math.floor(this.gameDuration / 1000 / this.secondsPerSingleOrder);
    totalItems: (Food | Drink)[] = [...Object.values(Drink), ...Object.values(Food)];
    currentOrder$ = new BehaviorSubject<number>(0);
    currentOrderObs$ = this.currentOrder$.asObservable();
    orderList$ = new ReplaySubject<(Food | Drink)[][]>();
    prepOrders$ = this.gameStatus$.pipe(
        filter((x: GameStatus) => x === 'Start'),
        map(_ => {
            const orders = Array.from({ length: this.orderCount },
                _ => this.getRandomItems(this.itemsPerSingleOrder));
            this.orderList$.next(orders);
            return EMPTY;
        })
    );
    itemSpawn$ = this.orderList$
        .pipe(
            mergeMap(orders => merge(orders, this.currentOrderObs$)),
            tap((result) => {
                console.log(`current order is ${JSON.stringify(result)}`);
            }),
            concatMap((currentOrder: (Food | Drink)[], currentOrderIndex: number) =>
                currentOrderIndex < this.orderCount ?
                    interval(this.spawnInterval).pipe(
                        take(currentOrder.length),
                        map(index => [
                            currentOrder[index],
                            ...this.getRandomItems(this.itemSpawnSize)
                        ])
                    ) : EMPTY
            ),
        );

    getRandomItems(itemCount: number): (Food | Drink)[] {
        return Array.from({ length: itemCount },
            _ => this.totalItems[Math.floor(Math.random() * this.totalItems.length)])
    }

}