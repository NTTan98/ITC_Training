import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoQuery } from '../state/todo.query';
import { TodoService } from '../state/todo.service';
import { Todo } from '../state/todo.model';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todos$: Observable<Todo[]>;
  public titleEdit!: string | null;

  constructor(private todoQuery: TodoQuery, private todo: TodoService) {
    this.todos$ = this.todoQuery.selectAll();
  }
  removeTodo(id: string, title: string) {
    let confirmResult = confirm(`Are you sure you want to delete: ${title}? `);
    if (confirmResult) {
      this.todo.removeTodo(id);
    }
  }
  editTodo(id: string, title: string) {
    this.titleEdit = prompt('Edit your todo', title);
    if (
      this.titleEdit !== null &&
      this.titleEdit !== '' &&
      this.titleEdit.trim() !== ''
    ) {
      this.todo.editTodo(id, this.titleEdit);
    }
  }
  ngOnInit(): void {}
}
