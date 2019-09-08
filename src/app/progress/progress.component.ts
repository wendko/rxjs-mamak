import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { GameService } from "../game.service";

@Component({
    selector: 'app-progress',
    templateUrl: 'progress.component.html',
    styleUrls: ['progress.component.scss']
})
export class ProgressComponent {
    countDown$ = this.gameService.countDown$;
    gameStatus$ = this.gameService.gameStatus$;
    // prepOrders$ = this.gameService.prepOrders$;


    constructor(private gameService: GameService) { }
}