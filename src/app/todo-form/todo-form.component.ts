import { Component, OnInit } from '@angular/core';
import { Todo, TodosServise } from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  template: `
    <div>
      <input
        type="text"
        placeholder="Add todo title..."
        [(ngModel)]="title"
        (keydown.enter)="addTodo()"
      />
      <button (click)="addTodo()">Add todo</button>
    </div>
  `,
  styles: [
    `
      div {
        width: 100%;
        display: flex;
        height: 30px;
        align-items: center;
        margin-bottom: 1rem;
        margin-top: 1rem;

        input {
          flex-basis: 80%;
          height: 100%;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
          padding: 0 0.5rem;
        }

        button {
          $color: #eee;
          flex-basis: 20%;
          height: 100%;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
          background: $color;
          transition: 0.3s all;
          cursor: pointer;

          &:hover {
            background: darken($color, 20%);
          }
        }
      }
    `,
  ],
})
export class TodoFormComponent implements OnInit {
  title: string = '';

  constructor(private todoService: TodosServise) {}

  ngOnInit(): void {}

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date(),
    };

    this.todoService.addTodo(todo);
    this.title = '';
  }
}
