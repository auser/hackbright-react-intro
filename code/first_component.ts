// Index.html
<!doctype html>
<html>
<head>
  <!-- ... -->
</head>
<body>
  <app>Loading...</app>

  <!-- ... -->
  <script>
    System.import('system-config.js')
      .then(function () {
        System.import('main');
      }).catch(console.error.bind(console));
  </script>
</body>
</html>

// main.ts
import {bootstrap} from
  '@angular/platform-browser-dynamic';
import {enableProdMode} from
  '@angular/core';
import {DemoAppComponent,
        environment} from './app/';

bootstrap(DemoAppComponent);

//./app/index.ts
export {environment} from './environment';
export {DemoAppComponent} from './demo.component';

// ./app/demo.component.ts
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css']
})
export class DemoAppComponent {
  title = 'demo works!';
}

// ./app/demo.component.html
<h1>
  {{title}}
</h1>
