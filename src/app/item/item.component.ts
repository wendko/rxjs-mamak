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
  @Input() isStatic: boolean;
  @Input() name;
  @Input() type;
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

  startingPositionY = 0;
  movementYUnit = 1;
  movementInterval = 50;
  maxHeight = 85;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.renderItem();

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

    const clicked = fromEvent(this.itemComponent.nativeElement, 'click');

    this.foodService.timeKeeper(false, this.movementInterval)
      .pipe(takeUntil(clicked), finalize(() => { this.clickedItem(); }))
      .subscribe(this.descending.bind(this));
  }

  clickedItem() {
    if (this.foodService.gameOver) {

    }

    const orderFulfilled = this.foodService.checkOrder(this.name);
    this.clicked = true;
    this.addScore = orderFulfilled ? true : false;
    this.scoreText = this.getScoreText();
    this.itemComponent.nativeElement.classList.add('clicked');
  }

  getScoreText(): string {
    if (this.addScore) {
      return 'Cool!';
    } else {
      return 'Nooo!';
    }
  }

  renderItem() {
    switch (this.name) {
      case DrinkName[DrinkName.TehTarik]:
        this.imageSource = '../../assets/images/drink_tehtarik.png';
        break;
      case DrinkName[DrinkName.Kopi]:
        this.imageSource = '../../assets/images/drink_kopi.png';
        break;
      case DrinkName[DrinkName.LimauAis]:
        this.imageSource = '../../assets/images/drink_limauais.png';
        break;
      case DrinkName[DrinkName.SoyaCincau]:
        this.imageSource = '../../assets/images/drink_soyacincau.png';
        break;
      case DrinkName[DrinkName.SirapBandung]:
        this.imageSource = '../../assets/images/drink_bandung.png';
        break;
      case FoodName[FoodName.RotiCanai]:
        this.imageSource = '../../assets/images/food_roticanai.png';
        break;
      case FoodName[FoodName.NasiLemak]:
        this.imageSource = '../../assets/images/food_nasilemak.png';
        break;
      case FoodName[FoodName.AsamLaksa]:
        this.imageSource = '../../assets/images/food_asamlaksa.png';
        break;
      case FoodName[FoodName.RotiBakar]:
        this.imageSource = '../../assets/images/food_rotibakar.png';
        break;
      case FoodName[FoodName.AyamRendang]:
        this.imageSource = '../../assets/images/food_ayamrendang.png';
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

  // trackLocation(doTrack: boolean) {
  //   console.log(`tracking ${doTrack}`);
  // }

}
