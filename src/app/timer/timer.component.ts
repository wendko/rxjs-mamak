import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { tap, finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  gameDuration: number;

  constructor(private foodService: FoodService) {
  }

  ngOnInit() {
    this.gameDuration = this.foodService.gameDurationInSeconds;
    this.foodService.timeKeeper(true)
      .pipe(
        tap(() => this.gameDuration--),
        takeUntil(this.foodService.timeRunsOut()),
        takeUntil(this.foodService.gameWon$),
        finalize(() => this.gameDuration = -1)
      )
      .subscribe();
  }

}
