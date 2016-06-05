// src/counter/counter.component.ts
import {Component} from '@angular/core';

@Component({
  selector: 'counter',
  inputs: ['count: initialCount'],
  template: `
    <div class="item" (click)="addCount()">
      The count {{ count }}
    </div>
  `
})
export class CounterComponent {
  count: number;

  addCount() {
    this.count = this.count + 1;
  }
}

// src/demo.component.html
<div class="ui main container">
  <div class="ui list">
    <counter
      class="item"
      *ngFor="let count of counts"
      [initialCount]="count"></counter>
  </div>
</div>
