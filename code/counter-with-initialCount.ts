// src/app/counter/counter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  inputs: ['initialCount'],
  template: `
    The count: {{initialCount}}
  `
})
export class CounterComponent {
}
