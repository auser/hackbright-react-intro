export class CountService {
  counts: Array<number>;

  constructor() {
    this.counts = [1, 2, 3];
  }

}











import {Injectable} from '@angular/core';

@Injectable()
export class CountService {
  counts: Array<number>;

  constructor() {
    this.counts = [1, 2, 3];
  }

}










import { Component } from '@angular/core';
import {CounterComponent} from './counter/counter.component';
import {CountService} from
  './count.service';

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
  counts: number[];
  loading: boolean = true;

  constructor(countService:CountService) {
    this.counts = countService.counts;
  }
}
