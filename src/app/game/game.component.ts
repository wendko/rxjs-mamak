import { Component, OnInit } from '@angular/core';
import { FoodName, ItemType, DrinkName } from '../enum';
import { FoodService } from '../food.service';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  items: any[];
  showGameOver: boolean;
  score: number;

  constructor(
    private foodService: FoodService
  ) {
    this.items = [];
    this.score = 0;
  }

  ngOnInit() {
    this.foodService.timeKeeper()
      .pipe(finalize(() => this.showGameOver = true))
      .subscribe(() => {
        this.spawnItem();
        this.handleCollision();
      });
  }


  spawnItem(): void {
    const maxWidth = 75;
    const positionX = this.randomizeIndex(maxWidth);
    const { type, name } = this.randomizeItem();
    this.items.push({ positionX: positionX, name: name, type: type });
  }

  handleCollision(): void {

  }

  randomizeItem(): { type, name } {
    const totalTypes = Object.keys(ItemType).length / 2;
    const randomizedType = ItemType[this.randomizeIndex(totalTypes)];
    console.log(randomizedType);

    const itemName = (randomizedType === ItemType[ItemType.Drink]) ? DrinkName : FoodName;

    const totalNames = Object.keys(itemName).length / 2;
    const randomizedName = itemName[this.randomizeIndex(totalNames)];
    console.log(randomizedName);

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
