import { Injectable } from "@angular/core";
import { timer, interval, Subject, BehaviorSubject } from "rxjs";
import { map, takeUntil, delay, tap } from "rxjs/operators";
import { GameStatus } from "./game";

@Injectable()
export class GameService {
    gameOverText = 'Game Over!'
    gameDuration = 5000;
    gameInterval = 1000;

    gameOver$ = timer(this.gameDuration)
        .pipe(
            delay(1000),
            tap(() => this.gameStatus.next('End'))
        );

    countDown$ = interval(this.gameInterval)
        .pipe(
            map(time => (this.gameDuration / 1000) - time),
            takeUntil(this.gameOver$),
        )

    gameStatus = new BehaviorSubject<GameStatus>('End');
    gameStatus$ = this.gameStatus.asObservable();

}