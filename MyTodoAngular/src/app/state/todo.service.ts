import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { TodoStore } from './todo.store';
import { createTodo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private store: TodoStore) {}
  addTodo(title: string) {
    const todo = createTodo(title);
    this.store.add(todo);
  }
  removeTodo(id: string) {
    this.store.remove(id);
  }
  editTodo(id: string, titleEdit: any) {
    this.store.replace(id, {
      title: titleEdit,
    });
  }
}
