import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoFormComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
