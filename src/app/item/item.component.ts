import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { DrinkName, FoodName } from '../enum';
import { FoodService } from '../food.service';
import { takeUntil, finalize } from 'rxjs/operators';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  // @Input() isMenuItem: boolean;

  @Input() name;
  @Input() type;
  @Input() positionX;

  @ViewChild('item') itemComponent;

  positionStyle;
  positionY: number;
  fill: string;
  imageSource: string;

  startingPositionY = 0;
  movementYUnit = 1;
  movementInterval = 50;
  maxHeight = 85;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.renderItem();

    // if (!this.isMenuItem) {

    this.positionY = this.startingPositionY;

    this.positionStyle = {
      top: this.positionY + 'vh',
      left: this.positionX + 'vw'
    };

    // this.trackLocation(true);

    const clicked = fromEvent(this.itemComponent.nativeElement, 'click');

    this.foodService.timeKeeper(false, this.movementInterval)
      .pipe(takeUntil(clicked), finalize(() => { this.clickedItem(); }))
      .subscribe(this.descending.bind(this));
  }

  clickedItem() {
    // check if fulfills order
    // add points
    this.itemComponent.nativeElement.classList.add('clicked');
  }

  renderItem() {
    switch (this.name) {
      case DrinkName[DrinkName.TehTarik]:
        this.imageSource = '../../assets/images/drink_tehtarik.png';
        break;
      case DrinkName[DrinkName.Kopi]:
        this.imageSource = '../../assets/images/drink_tehtarik.png';
        break;
      case DrinkName[DrinkName.Cham]:
        this.imageSource = '../../assets/images/drink_tehtarik.png';
        break;
      case DrinkName[DrinkName.KopiO]:
        this.imageSource = '../../assets/images/drink_tehtarik.png';
        break;
      case DrinkName[DrinkName.KopiC]:
        this.imageSource = '../../assets/images/drink_tehtarik.png';
        break;
      case DrinkName[DrinkName.TehOAis]:
        this.imageSource = '../../assets/images/drink_tehtarik.png';
        break;
      case DrinkName[DrinkName.TehO]:
        this.imageSource = '../../assets/images/drink_tehtarik.png';
        break;
      case DrinkName[DrinkName.TehC]:
        this.imageSource = '../../assets/images/drink_tehtarik.png';
        break;
      case FoodName[FoodName.RotiCanai]:
        this.imageSource = '../../assets/images/food_roticanai.png';
        break;
      case FoodName[FoodName.RotiTelur]:
        this.imageSource = '../../assets/images/food_roticanai.png';
        break;
      case FoodName[FoodName.RotiTosai]:
        this.imageSource = '../../assets/images/food_roticanai.png';
        break;
      case FoodName[FoodName.NasiLemak]:
        this.imageSource = '../../assets/images/food_roticanai.png';
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

  trackLocation(doTrack: boolean) {
    console.log(`tracking ${doTrack}`);
  }

}
