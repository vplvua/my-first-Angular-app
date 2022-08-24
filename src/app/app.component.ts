import { Component } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date: any;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <app-todos [todos]="todos"></app-todos>
    </div>
  `,
  styles: [
    'h1 { margin-bottom: 1rem; text-align: center; }',
    '.container { padding-top: 3rem; width: 600px; margin: 0 auto; }',
  ],
})
export class AppComponent {
  title = 'MyFirstAngularApp';

  public todos: Todo[] = [
    {
      id: 1,
      title: 'Вивчити Angular',
      completed: false,
      date: new Date(),
    },
    {
      id: 2,
      title: 'Зробити домашку ScriptJedi42',
      completed: true,
      date: new Date(),
    },
    {
      id: 3,
      title: 'Freecodecamp пройти розділ',
      completed: false,
      date: new Date(),
    },
  ];
}
