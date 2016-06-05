// src/demo.component.ts
import { Component } from '@angular/core';
import {CounterComponent} from './counter/counter.component';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  directives: [CounterComponent],
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css']
})
export class DemoAppComponent {
  title = 'demo works!';
  counts: number[];

  constructor() {
    this.counts = [1, 2, 3];
  }
}

// src/demo.component.html
<counter
  *ngFor="let count of counts"
  [initialCount]="count"></counter>
