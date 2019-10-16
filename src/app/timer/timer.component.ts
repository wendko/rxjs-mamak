import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { TimeService } from '../time.service';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
    constructor(private timeService: TimeService) { }
    timeIsUp$ = new Subject<Boolean>();
    showTimesUpMsg$ = this.timeIsUp$.asObservable();
    time$ = this.timeService.gameTimer$.pipe(
        map(val => (this.timeService.gameEnds / 1000) - val),
        finalize(() => this.timeIsUp$.next(true))
    );
}
