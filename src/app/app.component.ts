import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <app-todos></app-todos>
    </div>
  `,
  styles: [
    'h1 { margin-bottom: 1rem; text-align: center; }',
    '.container { padding-top: 3rem; width: 600px; margin: 0 auto; }',
  ],
})
export class AppComponent {
  title = 'MyFirstAngularApp';
}
