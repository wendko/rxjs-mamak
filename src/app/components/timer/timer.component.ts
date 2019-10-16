import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { TimeService } from 'src/app/services';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
    constructor(private timeService: TimeService) { }
    timeIsUp$ = new Subject<Boolean>();
    showTimesUpMsg$ = this.timeIsUp$.asObservable().pipe(
        map(val => val ? 'Time is up!' : '')
    );
    time$ = this.timeService.gameTimer$.pipe(
        map(val => `${(this.timeService.gameDuration / 1000) - +val}s left`),
        finalize(() => this.timeIsUp$.next(true))
    );
}
