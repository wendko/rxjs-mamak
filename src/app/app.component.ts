import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public gameDurationInSeconds = 5;
  public gameTimerObservable;

  ngOnInit() {
    this.gameTimerObservable = interval(1000)
      .pipe(takeUntil(timer((this.gameDurationInSeconds + 1000) * 1000)));
  }

}










  // testBehaviorSubject() {
  //   const bs = new BehaviorSubject('mickey');
  //   bs.subscribe((value) => console.log('hi ' + value));
  //   bs.next('minnie');
  //   bs.next('donald');
  //   bs.subscribe((value) => console.log('yo ' + value));
  //   bs.next('goofy');
  // }

  // testCombineLatest() {
  //   const bs1 = of(1, 2, 3, 4, 5);
  //   const bs2 = of('a', 'b', 'c', 'd', 'e');

  //   combineLatest(bs1, bs2).subscribe(console.log); // why 5 from bs1?
  // }

  // testFromEvent() {
  // }


