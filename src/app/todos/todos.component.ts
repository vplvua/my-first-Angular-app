import { Component, OnInit } from '@angular/core';
import { TodosServise } from '../shared/todos.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  template: `
    <div *ngIf="!loading">
      <ul *ngIf="todosService.todos.length; else noTodos">
        <li *ngFor="let todo of todosService.todos; let i = index">
          <span [class.done]="todo.completed">
            <input
              type="checkbox"
              [checked]="todo.completed"
              (change)="onChange(todo.id)"
            />
            <strong>{{ i + 1 }}</strong> {{ todo.title }}
          </span>
          <small>{{ todo.date | date: 'medium' }}</small>
          <button class="rm" (click)="removeTodo(todo.id)">&times;</button>
        </li>
      </ul>

      <ng-template #noTodos>
        <p style="text-align: center">No todos now</p>
      </ng-template>
    </div>
    <p *ngIf="loading">Loading...</p>
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
  constructor(public todosService: TodosServise) {}

  public loading: boolean = true;

  ngOnInit(): void {
    this.todosService
      .fetchTodos()
      .pipe(delay(2000))
      .subscribe(() => {
        this.loading = false;
      });
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }
}
