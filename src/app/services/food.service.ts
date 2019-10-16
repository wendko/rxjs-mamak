import { Injectable } from '@angular/core';
import { interval, Observable, ReplaySubject, timer, Subject, of } from 'rxjs';
import { delay, takeUntil, tap, map } from 'rxjs/operators';
import { DrinkName, FoodName, ItemType, Food } from '../enum';

interface Item {
    type: ItemType;
    name: DrinkName | FoodName;
    done: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    requestOrder$ = new Subject();
    currentOrder$ = new Subject<string[]>();

    nonOrder$ = interval(1000).pipe(
        map(() => Object.keys(Food)[Math.floor(Math.random() * Math.floor(Object.keys(Food).length))])
    );

    prepOrder$ = this.requestOrder$.asObservable().pipe(
        tap(() => {
            const allFood = Object.keys(Food);
            // Get random 3 items
            let newOrder = Array.of(
                allFood[Math.floor(Math.random() * Math.floor(allFood.length))],
                allFood[Math.floor(Math.random() * Math.floor(allFood.length))],
                allFood[Math.floor(Math.random() * Math.floor(allFood.length))],
            );
            this.currentOrder$.next(newOrder);
        })
    );






    public gameDurationInSeconds = 20;
    public startGameDelay = 3000;
    public maxOrderCount;
    public scoreUnit = 1;

    public score: number;
    public orders;

    public gameWon$: ReplaySubject<boolean>;
    public ordersCompletedSubject: ReplaySubject<number>;
    public gameWon: boolean;

    private correctTexts = ['Cool!', 'Awesome!', 'Yay!'];
    private wrongTexts = ['Nooo!', 'Try Again!', 'Nope!'];
    private orderLength = { max: 3, min: 2 };


    constructor() {
        this.prepOrder$.subscribe();






        this.reset();
        this.maxOrderCount = this.randomizeIndex(2, 2);
    }

    //#region time
    public timeRunsOut(): Observable<number> {
        return timer((this.gameDurationInSeconds + 3) * 1000);
    }

    public timeKeeper(shouldDelay: boolean = false, intervalUnit: number = 1000): Observable<number> {
        const timeInterval = interval(intervalUnit);

        if (shouldDelay) {
            return timeInterval.pipe(
                delay(this.startGameDelay),
                takeUntil(this.timeRunsOut())
            );
        } else {
            return timeInterval.pipe(takeUntil(this.timeRunsOut()));
        }
    }
    //#endregion

    //#region misc
    reset(): void {
        this.orders = new Array(this.maxOrderCount);
        this.gameWon$ = new ReplaySubject();
        this.ordersCompletedSubject = new ReplaySubject();
        this.gameWon = false;
        this.score = 0;
    }

    randomizeIndex(offset: number, minValue: number = 0): number {
        return Math.floor(Math.random() * offset) + minValue;
    }

    getItemClickedText(isCorrect: boolean) {
        const textArray = isCorrect ? this.correctTexts : this.wrongTexts;
        return textArray[this.randomizeIndex(textArray.length)];
    }
    //#endregion

    //#region items
    public prepareItemsAndOrder(): Item[] {
        const queuedItems: Item[] = [];
        let queuedOrders = [];

        while (queuedItems.length < this.gameDurationInSeconds) {
            const randomItem: Item = this.randomizeItem();
            queuedItems.push(randomItem);
        }

        if (this.maxOrderCount === 2) {
            const partitionLength = (this.gameDurationInSeconds / 2);
            const arr1 = queuedItems.slice(0, partitionLength);
            const arr2 = queuedItems.slice(partitionLength);
            queuedOrders = this.pluckOrderItems(arr1, arr2);
        } else {
            const partitionLength = Math.floor(this.gameDurationInSeconds / 3);
            const arr1 = queuedItems.slice(0, partitionLength);
            const arr2 = queuedItems.slice(partitionLength, partitionLength * 2);
            const arr3 = queuedItems.slice(partitionLength * 2, this.gameDurationInSeconds);
            queuedOrders = this.pluckOrderItems(arr1, arr2, arr3);
        }
        this.orders = queuedOrders;
        return queuedItems.reverse();
    }

    // for each in partition, randomly pick x number of items and insert in this.orders
    private pluckOrderItems(...arrays) {
        const orderItemsList = [];

        for (const array of arrays) {
            const orderItems = [];
            const orderSize = this.getRandomOrderCount(this.orderLength.min, this.orderLength.max);
            const samples = array.slice();

            while (orderItems.length < orderSize) {
                const itemIndex = this.randomizeIndex(samples.length);
                const [item] = samples.splice(itemIndex, 1);
                orderItems.push(item);
            }
            orderItemsList.push(orderItems);
        }
        return orderItemsList;
    }

    private randomizeItem(): { type, name, done } {
        const totalTypes = Object.keys(ItemType).length / 2;
        const randomizedType = ItemType[this.randomizeIndex(totalTypes)];

        const itemName = (randomizedType === ItemType[ItemType.Drink]) ? DrinkName : FoodName;
        const totalNames = Object.keys(itemName).length / 2;
        const randomizedName = itemName[this.randomizeIndex(totalNames)];

        return { type: randomizedType, name: randomizedName, done: false };
    }
    //#endregion

    //#region order
    getTopOrder(): Item[] {
        return this.orders[0];
    }

    checkOrder(itemName: FoodName | DrinkName): boolean {
        const currentOrder = this.getTopOrder();
        const foundOrder = currentOrder.find(item => item.name === itemName && !item.done);
        if (foundOrder) {
            this.updateOrder(foundOrder);
            this.checkGameStatus();
            return true;
        } else {
            this.updateOrder();
            return false;
        }
    }

    checkGameStatus(): void {
        if (this.orders.length === 0) {
            this.gameWon = true;
            this.gameWon$.next(true);
        }
    }

    updateOrder(foundOrder: Item = null): void {
        if (!foundOrder) {
            this.score -= this.scoreUnit;
            return;
        }

        foundOrder.done = true;
        this.score += this.scoreUnit;

        const orderFulfilled = this.orders[0].every(x => x.done);
        if (orderFulfilled) {
            this.ordersCompletedSubject.next(1);
            this.orders.shift();
            this.score += (this.scoreUnit * 2);
        }
    }

    public remainingOrderCount(): number {
        return this.orders.length;
    }

    public getRandomOrderCount(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //#endregion

}

// https://medium.com/front-end-weekly/dynamically-add-components-to-the-dom-with-angular-71b0cb535286
