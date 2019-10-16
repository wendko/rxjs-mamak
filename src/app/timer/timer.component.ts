import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { tap, finalize, takeUntil, map } from 'rxjs/operators';
import { Time } from '@angular/common';
import { TimeService } from '../time.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
    gameDuration: number;

    constructor(
        private timeService: TimeService,
        private foodService: FoodService
    ) { }


    timeIsUp$ = new Subject<string>();


    showTimeIsUp: boolean;
    showTimesUpMsg$ = this.timeIsUp$.pipe(tap(_ => this.showTimeIsUp = true));
    time$ = this.timeService.gameTimer$.pipe(
        map(val => (this.timeService.gameEnds / 1000) - val), // reverse shown
        finalize(() => this.timeIsUp$.next())
    );

    ngOnInit() {
        this.showTimesUpMsg$.subscribe();
    }

}
