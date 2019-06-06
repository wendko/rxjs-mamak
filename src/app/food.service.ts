import { Injectable } from '@angular/core';
import { Observable, timer, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ItemType, DrinkName, FoodName } from './enum';


interface Item {
  type: ItemType;
  name: DrinkName | FoodName;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  public gameDurationInSeconds = 10;
  public maxItemsCount = this.gameDurationInSeconds * 2;
  public orders;

  public timeRunsOut(isTimer: boolean = false): Observable<number> {
    if (isTimer) {
      return timer((this.gameDurationInSeconds + 1000) * 1000);
    }
    return timer(this.gameDurationInSeconds * 1000);
  }

  public timeKeeper(isTimer: boolean = false, intervalUnit: number = 1000): Observable<number> {
    const gameEnds = this.timeRunsOut(isTimer);

    return interval(intervalUnit)
      .pipe(takeUntil(gameEnds));
  }

  public prepareItemsAndOrder(): Item[] {
    const queuedItems: Item[] = [];
    const orders = [];
    const orderLength = { max: 3, min: 1 };

    let currentOrder = [];
    let maxCurrentOrderCount = Math.random() * (orderLength.max - orderLength.min) + orderLength.min;

    while (queuedItems.length < this.maxItemsCount) {
      const randomItem: Item = this.randomizeItem();
      queuedItems.push(randomItem);

      if (currentOrder.length < maxCurrentOrderCount) {
        // just push every item first - must randomize!
        currentOrder.push(randomItem);

      } else {
        orders.push(currentOrder);
        currentOrder = [];
        maxCurrentOrderCount = Math.random() * (orderLength.max - orderLength.min) + orderLength.min;
      }
    }

    this.orders = orders;

    return queuedItems;
  }


  private randomizeItem(): { type, name } {
    const totalTypes = Object.keys(ItemType).length / 2;
    const randomizedType = ItemType[this.randomizeIndex(totalTypes)];

    const itemName = (randomizedType === ItemType[ItemType.Drink]) ? DrinkName : FoodName;
    const totalNames = Object.keys(itemName).length / 2;
    const randomizedName = itemName[this.randomizeIndex(totalNames)];

    console.log(`${randomizedType}: ${randomizedName}`);
    return { type: randomizedType, name: randomizedName };
  }


  randomizeIndex(maxValue: number) {
    return Math.floor(Math.random() * Math.floor(maxValue));
  }

  getTopOrder() {
    return this.orders[0];
  }

}

// https://medium.com/front-end-weekly/dynamically-add-components-to-the-dom-with-angular-71b0cb535286
