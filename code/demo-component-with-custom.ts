// ./src/app/demo-component.ts
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
}

// ./src/app/demo-component.html
<h1>
  {{title}}
</h1>
<counter></counter>
