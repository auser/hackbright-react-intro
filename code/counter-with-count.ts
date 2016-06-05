// src/app/counter/counter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  inputs: ['count: initialCount'],
  template: `
    The count: {{count}}
  `
})
export class CounterComponent {
  count: number;
}
