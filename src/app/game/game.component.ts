import { Component, OnInit, ViewChild } from '@angular/core';
import { finalize, takeUntil, tap } from 'rxjs/operators';
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

    const gameOver = this.foodService.timeRunsOut();
    gameOver.subscribe(x => this.showGameOver = true);
    // const gameWon = this.foodService.wonGame();

    this.foodService.timeKeeper(true)
      .pipe(
        takeUntil(gameOver), // stop spawning when game is over
        tap(this.spawnItem.bind(this)),
        // takeUntil(gameWon), // stop spawning when game is won
        finalize(this.resetGame.bind(this))
      )
      .subscribe();
  }

  resetGame() {
    this.items = [];
    // reset other stuff?
  }

  gameOver() {
    this.showGameOver = true;
  }

  spawnItem(): void {
    const positionX = this.foodService.randomizeIndex(this.maxWidth);
    const queuedItem = this.queuedItems.pop();
    if (!queuedItem) {
      return;
    }
    this.items.push({ positionX, ...queuedItem });
  }

  queueItemsAndOrder() {
    this.queuedItems = this.foodService.prepareItemsAndOrder();
  }

  restart() {
    location.reload();
    // refinement : refresh timer, orders and game only
  }

}
