import { Component, OnInit, HostListener } from '@angular/core';
enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}


@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.scss']
})
export class PlateComponent implements OnInit {
  positionX: number;
  movementUnit = 10;
  maxLeft = 70;
  minLeft = 2;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.updatePositionX(event.keyCode);
  }

  constructor() { }

  ngOnInit() {
    this.positionX = 35;
  }

  updatePositionX(key: KEY_CODE) {
    switch (key) {
      case KEY_CODE.LEFT_ARROW:
        if (this.positionX > this.minLeft) {
          const updatedPositionX = this.positionX - this.movementUnit;
          this.positionX = (updatedPositionX < this.minLeft) ? this.minLeft : updatedPositionX;
        }
        break;
      case KEY_CODE.RIGHT_ARROW:
        if (this.positionX < this.maxLeft) {
          const updatedPositionX = this.positionX + this.movementUnit;
          this.positionX = (updatedPositionX > this.maxLeft) ? this.maxLeft : updatedPositionX;
        }
        break;
      default:
        break;
    }
  }

}
