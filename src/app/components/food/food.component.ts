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

    ngOnInit() {
        if (this.descending) {
            // top: 15% - 85%
            // left: 5% - 70%
            this.foodComp.nativeElement.classList.add('game-food')
            // this.foodComp.nativeElement.style.left = '70%';
            this.foodComp.nativeElement.animate([
                { transform: `scale(0)` },
                { transform: `scale(1)` }
            ], {
                duration: 500,
                iterations: 1
            });
        }
    }

}