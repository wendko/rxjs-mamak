import { Injectable } from "@angular/core";
import { timer, interval } from "rxjs";
import { map, takeUntil, delay } from "rxjs/operators";

@Injectable()
export class GameService {
    gameOverText = 'Game Over!'
    gameDuration = 5000;
    gameInterval = 1000;

    gameOver$ = timer(this.gameDuration)
        .pipe(delay(1000));

    countDown$ = interval(this.gameInterval)
        .pipe(
            map(time => (this.gameDuration / 1000) - time),
            takeUntil(this.gameOver$),
        )

}