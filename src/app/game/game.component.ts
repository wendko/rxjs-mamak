import { Component, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FoodService } from '../food.service';
import { PlateComponent } from '../plate/plate.component';

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

  @ViewChild(PlateComponent) plateComponent;

  constructor(
    private foodService: FoodService
  ) {
    this.items = [];
    this.score = 0;
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
    const positionX = this.foodService.randomizeIndex(this.maxWidth);
    const queuedItem = this.queuedItems.pop();
    if (!queuedItem) {
      return;
    }
    this.items.push({ positionX: positionX, ...queuedItem });
  }



  queueItemsAndOrder() {
    this.queuedItems = this.foodService.prepareItemsAndOrder();
  }



  restart() {
    location.reload();
    // refinement : refresh timer, orders and game only
  }


  handleCollision(): void {
    // const plateObserver = this.foodService.timeKeeper(false, 1000);
    // // const plateObserver = interval(5000);
    // plateObserver.subscribe(() => console.log(this.plateComponent.positionX));
    // console.log(this.plateComponent.positionX);


    // get all items position
    // console.log(this.items)
  }

}

// https://stackblitz.com/edit/rxjs-breakout?file=index.ts - collision
