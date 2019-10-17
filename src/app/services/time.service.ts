import { Injectable } from "@angular/core";
import { interval, timer } from "rxjs";
import { delay, startWith, takeUntil } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class TimeService {
    constructor() { }

    gameDelay = 0;
    gameInterval = 1000;
    gameDuration = 60000;
    gameEndBuffer = 1000;

    gameTimer$ = interval(this.gameInterval).pipe(
        delay(this.gameDelay),
        startWith(0),
        takeUntil(timer(this.gameDelay + this.gameDuration + this.gameEndBuffer)),
    )
}