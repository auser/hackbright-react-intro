// src/count.service.ts
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from
  'rxjs/BehaviorSubject';

@Injectable()
export class CountService {
  private _counts:number[] = [1, 2, 3];
  counter: Subject<number[]> =
    new BehaviorSubject<number[]>(this._counts);
}








// src/demo.component.ts
import { Component } from '@angular/core';
import {CounterComponent} from './counter/counter.component';
import {CountService} from './count.service';
import {Subject} from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  directives: [CounterComponent],
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css'],
  providers: [CountService]
})
export class DemoAppComponent {
  title = 'demo works!';
  counts: Subject<number[]>;
  loading: boolean = true;

  constructor(countService:CountService) {
    this.counts = countService.counter;
  }
}

// src/demo.component.ts
<div class="ui main text container">
  <div class="ui list">
    <counter
      class="item"
      *ngFor="let count of counts | async"
      [initialCount]="count"></counter>
  </div>
</div>










import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CountService {
  private _counts:number[] = [1, 2, 3];
  counter: Subject<number[]> = new BehaviorSubject<number[]>(this._counts);

  getAnotherNumber() {
    let newNumber:number = Math.floor(Math.random() * 10) + 1;
    this._counts = [newNumber].concat(this._counts);
    this.counter.next(this._counts);
  }
}
