import { Component, OnInit, Input } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() gameDuration;
  @Input() gameTimer;

  constructor() { }

  ngOnInit() {
    const timeRunsOut = timer((this.gameDuration + 1000) * 1000);

    interval(1000)
      .pipe(takeUntil(timeRunsOut))
      .subscribe(() => this.gameDuration--);
  }

}
