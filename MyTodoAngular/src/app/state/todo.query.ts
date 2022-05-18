import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Todo } from './todo.model';
import { TodoStore } from './todo.store';
import { State } from './todo.store';

@Injectable({ providedIn: 'root' })
export class TodoQuery extends QueryEntity<State, Todo> {
  constructor(protected override store: TodoStore) {
    super(store);
  }
}
