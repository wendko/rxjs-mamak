import { Component, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
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
  countdownText: string;

  @ViewChild(PlateComponent) plateComponent;

  constructor(
    private foodService: FoodService
  ) {
    this.items = [];
    this.score = 0;
  }

  ngOnInit() {
    this.queueItemsAndOrder();

    const gameOverObservable = this.foodService.timeRunsOut();

    // TODO: generate?
    const spawningObservable = this.foodService.timeKeeper(true).pipe(
      tap(this.spawnItem.bind(this)),
      takeUntil(this.foodService.timeRunsOut()),
      takeUntil(this.foodService.ordersCompleted),
      finalize(this.resetGame.bind(this)),
    );


    const gameReadyObservable = this.foodService.timeKeeper()
      .pipe(
        tap(x => {
          this.countdownText = !x ? 'Ready?' : 'Go!';
        }),
        takeUntil(timer(this.foodService.startGameDelay)),
        finalize(() => { this.countdownText = ''; }),
      );


    spawningObservable.subscribe();
    gameReadyObservable.subscribe();
  }

  resetGame() {
    this.showGameOver = true;
    this.items = [];
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
    // more elegant reload!
    // refinement : refresh timer, orders and game only
  }

}
