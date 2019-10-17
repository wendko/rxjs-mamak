import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";
import { fromEvent } from "rxjs";
import { tap } from "rxjs/operators";
import { FoodService } from "src/app/services";

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
    @Input() name: string;
    @Input() descending: boolean;

    @ViewChild('foodComp') foodComp: ElementRef;

    private readonly maxTop = 85;
    private readonly minTop = 15;
    private readonly maxLeft = 70;
    private readonly minLeft = 5;

    constructor(private foodService: FoodService) { };

    getRandomPos = (min: number, max: number) => Math.random() * (max - min) + min;
    ngOnInit() {
        if (this.descending) {
            this.foodComp.nativeElement.style.top = `${this.getRandomPos(this.maxTop, this.minTop)}%`;
            this.foodComp.nativeElement.style.left = `${this.getRandomPos(this.maxLeft, this.minLeft)}%`;
            this.foodComp.nativeElement.animate([
                { transform: `scale(0)` },
                { transform: `scale(1)` }
            ], {
                duration: 100,
                iterations: 1
            });
            fromEvent(this.foodComp.nativeElement, 'click').pipe(
                tap((e: Event) => this.foodService.clickedFood$.next((e.target as HTMLImageElement).alt)),
                tap(() => this.foodComp.nativeElement.classList.add('disappear'))
            ).subscribe();
        }
    }

}