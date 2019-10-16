import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { DrinkName, FoodName } from '../../enum';
import { FoodService } from 'src/app/services';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    @Input() isStatic: boolean;
    @Input() name;
    @Input() type;
    @Input() done;
    @Input() positionX;

    @ViewChild('item') itemComponent;

    positionStyle;
    positionY: number;
    fill: string;
    imageSource: string;
    width: number;
    height: number;
    clicked: boolean;
    addScore: boolean;
    scoreText: string;

    startingPositionY = -5;
    movementYUnit = 1;
    movementInterval = 50;
    maxHeight = 85;
    clickedEvent: Observable<MouseEvent>;

    constructor(private foodService: FoodService) { }

    ngOnInit() {
        this.setItemImage();

        if (this.isStatic) {
            this.width = 40;
            this.height = 40;
            return;
        }

        this.width = 80;
        this.height = 80;
        this.positionY = this.startingPositionY;

        this.positionStyle = {
            top: this.positionY + 'vh',
            left: this.positionX + 'vw'
        };

        this.clickedEvent = fromEvent(this.itemComponent.nativeElement, 'click');
        this.clickedEvent.subscribe(this.clickedItem.bind(this));

        const descendingObservable = this.foodService.timeKeeper(false, this.movementInterval)
            .pipe(
                takeUntil(this.clickedEvent),
                takeUntil(this.foodService.timeRunsOut()),
                tap(this.descending.bind(this)),
            );

        descendingObservable.subscribe();
    }

    clickedItem() {
        this.clicked = true;
        const orderFulfilled = this.foodService.checkOrder(this.name);
        this.addScore = orderFulfilled ? true : false;
        this.scoreText = this.foodService.getItemClickedText(this.addScore);
        this.itemComponent.nativeElement.classList.add('clicked');
    }

    setItemImage() {
        switch (this.name) {
            case DrinkName[DrinkName.TehTarik]:
                this.imageSource = 'assets/images/drink_tehtarik.png';
                break;
            case DrinkName[DrinkName.Kopi]:
                this.imageSource = 'assets/images/drink_kopi.png';
                break;
            case DrinkName[DrinkName.LimauAis]:
                this.imageSource = 'assets/images/drink_limauais.png';
                break;
            case DrinkName[DrinkName.SoyaCincau]:
                this.imageSource = 'assets/images/drink_soyacincau.png';
                break;
            case DrinkName[DrinkName.SirapBandung]:
                this.imageSource = 'assets/images/drink_bandung.png';
                break;
            case FoodName[FoodName.RotiCanai]:
                this.imageSource = 'assets/images/food_roticanai.png';
                break;
            case FoodName[FoodName.NasiLemak]:
                this.imageSource = 'assets/images/food_nasilemak.png';
                break;
            case FoodName[FoodName.AsamLaksa]:
                this.imageSource = 'assets/images/food_asamlaksa.png';
                break;
            case FoodName[FoodName.RotiBakar]:
                this.imageSource = 'assets/images/food_rotibakar.png';
                break;
            case FoodName[FoodName.AyamRendang]:
                this.imageSource = 'assets/images/food_ayamrendang.png';
                break;
            default:
                break;
        }
    }

    descending() {
        if (this.positionY <= this.maxHeight) {
            this.positionY += this.movementYUnit;
            this.positionStyle.top = this.positionY + 'vh';
        } else {
            this.removeFromDisplay();
        }
    }

    removeFromDisplay() {
        this.positionStyle = {
            display: 'none'
        };
    }

}
