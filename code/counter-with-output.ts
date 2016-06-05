import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'counter',
  inputs: ['count: initialCount'],
  template: `
    <div (click)="addCount()">
      The count: {{count}}
    </div>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class CounterComponent {
  count: number;

  addCount() {
    this.count = this.count + 1;
  }
}
