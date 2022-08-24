import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todos',
  template: `
    <ul>
      <li *ngFor="let todo of todos; let i = index">
        <span>
          <input type="checkbox" />
          <strong>{{ i + 1 }}</strong> {{ todo.title }}
        </span>
        <small>{{ todo.date }}</small>
        <button class="rm">&times;</button>
      </li>
    </ul>
  `,
  styles: [
    `
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: 1rem;

        li {
          position: relative;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 0.5rem 1rem;
          margin-bottom: 0.5rem;
          display: flex;
          justify-content: space-between;
        }

        input {
          margin-right: 1 rem;
        }

        small {
          position: absolute;
          right: 40px;
          bottom: 5px;
          font-size: 0.8rem;
        }
      }
    `,
    `
      .done {
        text-decoration: line-through;
      }
    `,
    `
      .rm {
        $color: red;
        border-radius: 50%;
        background: $color;
        color: #fff;
        font-size: 1rem;
        border: none;
        width: 20px;
        height: 20px;
        transition: 0.3s all;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background: darken($color, 20%);
        }
      }
    `,
  ],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {}
}
