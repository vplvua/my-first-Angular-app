import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable({ providedIn: 'root' })
export class TodosServise {
  public todos: Todo[] = [
    //     {
    //       id: 1,
    //       title: 'Вивчити Angular',
    //       completed: false,
    //       date: new Date(),
    //     },
    //     {
    //       id: 2,
    //       title: 'Зробити домашку ScriptJedi42',
    //       completed: true,
    //       date: new Date(),
    //     },
    //     {
    //       id: 3,
    //       title: 'Freecodecamp пройти розділ',
    //       completed: false,
    //       date: new Date(),
    //     },
  ];

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .pipe(tap((todos) => (this.todos = todos)));
  }

  onToggle(id: number) {
    const index = this.todos.findIndex((element) => element.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((element) => element.id !== id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
