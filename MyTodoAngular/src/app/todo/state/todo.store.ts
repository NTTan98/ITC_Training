import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  StoreConfig,
  ActiveState,
  ID,
  transaction,
} from '@datorama/akita';
import { Todo, createTodo } from './todo.model';
