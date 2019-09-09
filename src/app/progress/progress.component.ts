import { Component, ChangeDetectionStrategy } from "@angular/core";
import { GameService } from "../game.service";

@Component({
    selector: 'app-progress',
    templateUrl: 'progress.component.html',
    styleUrls: ['progress.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent {
    constructor(public gameService: GameService) { }
}