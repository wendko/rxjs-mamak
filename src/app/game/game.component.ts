import { Component, Input, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  items: any[];
  @Input() gameDuration: number;

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    const timeRunsOut = timer(this.gameDuration * 1000);
    interval(1000)
      .pipe(takeUntil(timeRunsOut))
      .subscribe(() => this.spawnItem());
  }

  spawnItem() {
    const maxWidth = 80;
    const positionX = Math.floor(Math.random() * Math.floor(maxWidth));

    // randomize item type

    this.items.push({ positionX });
  }

}


// this.foodService.setRootViewContainerRef(this.viewContainerRef);
// this.foodService.addDynamicComponent();


// https://stackblitz.com/edit/rxjs-alphabet-invasion?file=index.ts - spawning vertically
// https://stackblitz.com/edit/rxjs-breakout?file=index.ts - collision
