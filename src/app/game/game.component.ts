import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodName, ItemType, DrinkName } from '../enum';
import { FoodService } from '../food.service';
import { finalize, tap } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';
import { PlateComponent } from '../plate/plate.component';
import { ItemComponent } from '../item/item.component';

interface Item {
  type: ItemType;
  name: DrinkName | FoodName;
}

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
  maxItemsCount: number;
  maxWidth = 70;

  @ViewChild(PlateComponent) plateComponent;

  constructor(
    private foodService: FoodService
  ) {
    this.items = [];
    this.score = 0;
    this.maxItemsCount = this.foodService.gameDurationInSeconds * 2;
  }

  ngOnInit() {
    this.queueItemsAndOrder();

    // end everything together
    this.foodService.timeKeeper(false, 500)
      .pipe(finalize(this.gameOver.bind(this)))
      .subscribe(() => {
        this.spawnItem();
      });

    this.foodService.timeKeeper(false, 1)
      .subscribe(this.handleCollision.bind(this));
  }

  gameOver() {
    this.showGameOver = true;
    this.items = [];
  }

  spawnItem(): void {
    const positionX = this.randomizeIndex(this.maxWidth);
    const queuedItem = this.queuedItems.pop();
    if (!queuedItem) {
      return;
    }
    this.items.push({ positionX: positionX, ...queuedItem });
  }


  handleCollision(): void {
    // const plateObserver = this.foodService.timeKeeper(false, 1000);
    // // const plateObserver = interval(5000);
    // plateObserver.subscribe(() => console.log(this.plateComponent.positionX));
    // console.log(this.plateComponent.positionX);


    // get all items position
    // console.log(this.items)
  }

  queueItemsAndOrder() {
    this.queuedItems = [];
    const orders = [];
    const orderLength = { max: 3, min: 1 };

    let currentOrder = [];
    let maxCurrentOrderCount = Math.random() * (orderLength.max - orderLength.min) + orderLength.min;

    while (this.queuedItems.length < this.maxItemsCount) {
      const randomItem: Item = this.randomizeItem();
      this.queuedItems.push(randomItem);

      if (currentOrder.length < maxCurrentOrderCount) {
        // just push every item first
        currentOrder.push(randomItem);

      } else {
        orders.push(currentOrder);
        currentOrder = [];
        maxCurrentOrderCount = Math.random() * (orderLength.max - orderLength.min) + orderLength.min;
      }
    }
  }


  randomizeItem(): { type, name } {
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

  restart() {
    location.reload();
    // refinement : refresh timer, orders and game only
  }

}

// https://stackblitz.com/edit/rxjs-breakout?file=index.ts - collision
