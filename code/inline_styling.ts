import {Component} from '@angular/core';

@Component({
  selector: 'counter',
  inputs: ['count: initialCount'],
  template: `
    <div class="item"
      [ngStyle]="{'border-bottom': '1px solid #afa',
        'padding': '10px'}"
      (click)="addCount()">
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

import {Component} from '@angular/core';

@Component({
  selector: 'counter',
  inputs: ['count: initialCount'],
  template: `
    <div class="item"
      [ngStyle]="styleObject"
      (click)="addCount()">
        The count {{ count }}
    </div>
  `
})
export class CounterComponent {
  count: number;
  styleObject: Object = {'color': 'blue'}

  addCount() {
    this.count = this.count + 1;
  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'counter',
  inputs: ['count: initialCount'],
  template: `
    <div [ngClass]="item"
      (click)="addCount()">
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

import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  inputs: ['count: initialCount'],
  template: `
    <div [ngClass]="item"
      [ngStyle]="{color: getColor(count)}"
      (click)="addCount()">
        The count {{ count }}
    </div>
  `
})
export class CounterComponent {
  count: number;

  addCount() {
    this.count = this.count + 1;
  }

  getColor(x) {
    return x % 2 == 0 ? 'red': 'blue';
  }
}
