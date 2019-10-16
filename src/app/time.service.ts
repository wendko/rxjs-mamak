import { Injectable } from "@angular/core";
import { interval, timer } from "rxjs";
import { takeUntil, startWith } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class TimeService {

    gameInterval = 1000;
    gameEnds = 10000;
    gameEndBuffer = 1000;
    gameTimer$ = interval(this.gameInterval).pipe(
        startWith(0),
        takeUntil(timer(this.gameEnds + this.gameEndBuffer))
    )


}