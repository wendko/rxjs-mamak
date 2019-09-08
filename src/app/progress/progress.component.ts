import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { GameService } from "../game.service";

@Component({
    selector: 'app-progress',
    templateUrl: 'progress.component.html',
    styleUrls: ['progress.component.scss']
})
export class ProgressComponent {
    gameOverText$ = this.gameService.gameOver$
        .pipe(map(_ => this.gameService.gameOverText));
    countDown$ = this.gameService.countDown$;
    gameStarted$ = this.gameService.gameStarted$;

    constructor(private gameService: GameService) { }
}