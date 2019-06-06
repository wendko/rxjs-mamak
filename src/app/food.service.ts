import { Injectable } from '@angular/core';
import { Observable, timer, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  public gameDurationInSeconds = 10;

  public timeRunsOut(isTimer: boolean = false): Observable<number> {
    if (isTimer) {
      return timer((this.gameDurationInSeconds + 1000) * 1000);
    }
    return timer(this.gameDurationInSeconds * 1000);
  }

  public timeKeeper(isTimer: boolean = false, intervalUnit: number = 1000): Observable<number> {
    const gameEnds = this.timeRunsOut(isTimer);

    return interval(intervalUnit)
      .pipe(takeUntil(gameEnds));
  }


}

// https://medium.com/front-end-weekly/dynamically-add-components-to-the-dom-with-angular-71b0cb535286
