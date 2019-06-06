import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

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
      .subscribe(() => this.gameDuration--);
  }

}
