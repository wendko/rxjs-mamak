import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { DrinkName, FoodName } from '../enum';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() name;
  @Input() type;
  @Input() positionX;

  positionStyle;
  positionY: number;
  fill: string;

  startingPositionY = 0;
  movementYUnit = 1;
  movementInterval = 50;
  maxHeight = 85;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.renderItem();

    this.foodService.timeKeeper(false, this.movementInterval)
      .subscribe(this.descending.bind(this));

    interval(1).subscribe(this.trackLocation.bind(this));
  }

  renderItem() {
    this.positionY = this.startingPositionY;

    this.positionStyle = {
      top: this.positionY + 'vh',
      left: this.positionX + 'vw'
    };

    switch (this.name) {
      case DrinkName[DrinkName.TehTarik]:
        this.fill = 'red';
        break;
      case DrinkName[DrinkName.Kopi]:
        this.fill = 'orange';
        break;
      case DrinkName[DrinkName.Cham]:
        this.fill = 'yellow';
        break;
      case DrinkName[DrinkName.KopiO]:
        this.fill = 'green';
        break;
      case DrinkName[DrinkName.KopiC]:
        this.fill = 'blue';
        break;
      case DrinkName[DrinkName.TehOAis]:
        this.fill = 'indigo';
        break;
      case DrinkName[DrinkName.TehO]:
        this.fill = 'violet';
        break;
      case DrinkName[DrinkName.TehC]:
        this.fill = 'palegreen';
        break;
      case FoodName[FoodName.RotiCanai]:
        this.fill = 'pink';
        break;
      case FoodName[FoodName.RotiTelur]:
        this.fill = 'cyan';
        break;
      case FoodName[FoodName.RotiTosai]:
        this.fill = 'teal';
        break;
      case FoodName[FoodName.NasiLemak]:
        this.fill = 'purple';
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
      this.positionStyle = {
        display: 'none'
      };
    }
  }

  trackLocation() {
    if (this.positionY <= this.maxHeight) {
      // console.log(this.positionY);
    }
    // console.log(this.positionX);
  }

}
