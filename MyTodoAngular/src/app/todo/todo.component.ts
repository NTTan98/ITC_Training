import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoQuery } from '../state/todo.query';
import { TodoService } from '../state/todo.service';
import { Todo } from '../state/todo.model';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]>;
  public items: Array<string> = [];
  public newTask!: string;
  constructor(private todoQuery: TodoQuery, private todo: TodoService) {
    this.todos$ = this.todoQuery.selectAll();
  }
  addTodo() {
    if (this.newTask.trim() !== '') {
      this.todo.addTodo(this.newTask);
    } else {
      alert('Please enter a task');
    }
    this.newTask = '';
  }

  ngOnInit(): void {}
}
