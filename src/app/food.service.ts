import { Injectable } from '@angular/core';
import { interval, Observable, timer, ReplaySubject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { DrinkName, FoodName, ItemType } from './enum';

interface Item {
  type: ItemType;
  name: DrinkName | FoodName;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  public gameDurationInSeconds = 20; // minimum 10 seconds
  public startGameDelay = 0;
  public maxOrderCount = 2;
  public scoreUnit = 1;

  public score: number;
  public orders; // every 10 seconds -> 1 order

  // public gameDurationInSeconds = 10; // minimum 10 seconds
  // public orders = new Array(this.gameDurationInSeconds / 5); // every 10 seconds -> 1 order
  // public startGameDelay = 3000;
  public ordersCompleted: ReplaySubject<boolean>;

  public gameWon: boolean;

  constructor() {
    this.reset();

    this.timeRunsOut().subscribe(() => {
      console.log('Game over!');
    });
    this.ordersCompleted.subscribe(
      x => console.log(`ordersCompleted ${x}`)
    );
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
    this.ordersCompleted = new ReplaySubject();
    this.gameWon = false;
    this.score = 0;
  }

  randomizeIndex(maxValue: number): number {
    return Math.floor(Math.random() * Math.floor(maxValue));
  }
  //#endregion

  //#region items
  public prepareItemsAndOrder(): Item[] {
    const queuedItems: Item[] = [];
    const orders = [];
    const orderLength = { max: 3, min: 1 };

    let currentOrder = [];
    let maxCurrentOrderCount = this.getRandomOrderCount(orderLength.min, orderLength.max);

    while (orders.length < this.orders.length) {
      const randomItem: Item = this.randomizeItem();
      queuedItems.push(randomItem);

      if (currentOrder.length < maxCurrentOrderCount) {
        const isMenuItem = (Math.random() * 100) < 20;
        if (isMenuItem) {
          currentOrder.push(randomItem);
        }
      } else {
        orders.push(currentOrder);
        currentOrder = [];
        maxCurrentOrderCount = this.getRandomOrderCount(orderLength.min, orderLength.max);
      }
    }

    this.orders = orders;

    return queuedItems;
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
    const foundOrder = currentOrder.find(item => item.name === itemName);
    if (foundOrder) {
      this.updateOrder(itemName, true);
      this.checkGameStatus();
      return true;
    } else {
      this.updateOrder(itemName, false);
      return false;
    }
  }

  checkGameStatus(): void {
    if (this.orders.length === 0) {
      this.gameWon = true;
      this.ordersCompleted.next(true);
    }
  }

  updateOrder(itemName: FoodName | DrinkName, isCorrectItem: boolean): void {
    if (!isCorrectItem) {
      this.score -= this.scoreUnit;
      return;
    }

    const item = this.orders[0].find(x => x.name === itemName && !x.done);
    item.done = true;
    this.score += this.scoreUnit;

    const orderFulfilled = this.orders[0].every(x => x.done);
    if (orderFulfilled) {
      this.orders.shift();
      this.score += (this.scoreUnit * 2);
    }
  }

  public remainingOrderCount(): number {
    return this.orders.length;
  }

  public getRandomOrderCount(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
  //#endregion

}

// https://medium.com/front-end-weekly/dynamically-add-components-to-the-dom-with-angular-71b0cb535286
