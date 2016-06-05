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
  count: number;

  constructor() {
    this.count = 3;
  }
}

// src/demo.component.html
<h1>
  {{title}}
</h1>
<counter [initialCount]="count"></counter>
