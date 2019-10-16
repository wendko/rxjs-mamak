import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GameState } from "../enum";

@Injectable({
    providedIn: 'root'
})
export class GameStateService {
    // gameState$ = new BehaviorSubject<GameState>(GameState.Idle);
}