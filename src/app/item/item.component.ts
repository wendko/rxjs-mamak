import { Component, OnInit, Input } from '@angular/core';

enum ItemType {
  Drink,
  Food
}

enum ItemName {
  TehTarik,
  Kopi,
  Cham,
  // KopiO,
  // KopiC,
  // TehOAis,
  // TehO,
  // TehC,
  RotiCanai,
  RotiTelur,
  RotiTosai,
  NasiLemak
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  // name
  @Input() positionX: number[];
  // movementUnit = 30;

  constructor() { }

  ngOnInit() {
  }

}
