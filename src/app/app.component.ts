import { Component } from '@angular/core';
import { FoodService } from './food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public foodService: FoodService) {
  }

}
