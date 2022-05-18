import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from './todo.model';
const initialState = {};
export interface State extends EntityState<Todo> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'todos' })
export class TodoStore extends EntityStore<State, Todo> {
  constructor() {
    super(initialState);
  }
}
