import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, EMPTY, interval, ReplaySubject, timer } from "rxjs";
import { concatMap, delay, filter, finalize, map, take, takeUntil, tap } from "rxjs/operators";
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
    itemSpawnExtra = 2;
    orderCount = Math.floor(this.gameDuration / 1000 / this.secondsPerSingleOrder);
    totalItems: (Food | Drink)[] = [...Object.values(Drink), ...Object.values(Food)];
    currentOrder = new BehaviorSubject<number>(0);
    currentOrder$ = this.currentOrder.asObservable();
    orderList = new ReplaySubject<(Food | Drink)[][]>();
    orderList$ = this.orderList.asObservable();
    prepOrders$ = this.gameStatus$.pipe(
        filter((x: GameStatus) => x === 'Start'),
        map(_ => {
            const orders = Array.from({ length: this.orderCount },
                _ => this.getRandomItems(this.itemsPerSingleOrder));
            this.orderList.next(orders);
            return EMPTY;
        })
    );

    itemSpawn$ =
        combineLatest(
            this.orderList$,
            this.currentOrder$
        ).pipe(
            tap(([orderList, currentOrderIndex]) => {
                console.log('in itemSpawn$ -----------')
                console.log(`${orderList} ${currentOrderIndex}`);
            }),
            filter(([orderList, currentOrderIndex]) =>
                currentOrderIndex < this.orderCount
                && Boolean(orderList[currentOrderIndex])
            ),
            concatMap(([orderList, currentOrderIndex]) => {
                const currentOrderList = orderList[currentOrderIndex];

                return interval(this.spawnInterval).pipe(
                    take(currentOrderList.length),
                    map(index => [
                        currentOrderList[index],
                        ...this.getRandomItems(this.itemSpawnExtra)
                    ]),
                    finalize(() => this.currentOrder.next(currentOrderIndex + 1))
                );
            })
        );

    getRandomItems(itemCount: number): (Food | Drink)[] {
        return Array.from({ length: itemCount },
            _ => this.totalItems[Math.floor(Math.random() * this.totalItems.length)])
    }

}