import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
    @Input() name: string;
    @Input() descending: boolean;

    @ViewChild('foodComp') foodComp: ElementRef;

    maxTop = 85;
    minTop = 15;
    maxLeft = 70;
    minLeft = 5;

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
        }
    }

}