import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, EMPTY, interval, ReplaySubject, timer } from "rxjs";
import { concatMap, delay, filter, finalize, map, take, takeUntil, tap } from "rxjs/operators";
import { GameStatus } from "./game";
import { Drink, Food } from "./item";

@Injectable()
export class GameService {
    /** Timing */
    //  fix the timing - it can only work with 5000 and 1000 right now!
    private readonly _gameDuration = 5000;
    private readonly _gameInterval = 1000;
    gameOver$ = timer(this._gameDuration)
        .pipe(
            delay(this._gameInterval),
            tap(() => this.gameStatus.next('End'))
        );
    countDown$ = interval(this._gameInterval)
        .pipe(
            map(time => (this._gameDuration / 1000) - time),
            takeUntil(this.gameOver$),
        )


    /** Status */
    gameStatus = new BehaviorSubject<GameStatus>('New');
    gameStatus$ = this.gameStatus.asObservable();

    /** Orders */
    private readonly _singleOrderSize = 2;
    private readonly _itemSpawnExtra = 2;
    private readonly _totalItems: (Food | Drink)[] = [...Object.values(Drink), ...Object.values(Food)];
    private readonly _spawnInterval = this._gameInterval;
    orderCount = 0;
    currentOrder = new BehaviorSubject<number>(0);
    currentOrder$ = this.currentOrder.asObservable();
    orderList = new ReplaySubject<(Food | Drink)[][]>();
    orderList$ = this.orderList.asObservable();
    prepOrders$ = this.gameStatus$.pipe(
        filter((x: GameStatus) => x === 'Start'),
        map(_ => {
            const remainder = (this._gameDuration / 1000) % this._singleOrderSize;

            this.orderCount = Math.floor(this._gameDuration / 1000 / this._singleOrderSize) + (remainder ? 1 : 0);

            const orders = Array.from({ length: this.orderCount },
                (_, index) => this.getRandomItems((index === this.orderCount - 1) ?
                    remainder : this._singleOrderSize)
            );

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

                return interval(this._spawnInterval).pipe(
                    take(currentOrderList.length),
                    map(index => [
                        currentOrderList[index],
                        ...this.getRandomItems(this._itemSpawnExtra)
                    ]),
                    finalize(() => this.currentOrder.next(currentOrderIndex + 1))
                );
            })
        );

    getRandomItems(itemCount: number): (Food | Drink)[] {
        return Array.from({ length: itemCount },
            _ => this._totalItems[Math.floor(Math.random() * this._totalItems.length)])
    }

}