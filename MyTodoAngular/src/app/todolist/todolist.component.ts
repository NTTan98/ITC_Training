import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  @Input() items: Array<string> = [];
  console = console;
  public deleteTask(index: number) {
    let confirmResult = confirm(
      `Are you sure you want to delete: ${this.items[index]}?`
    );
    if (confirmResult) {
      this.items.splice(index, 1);
    }
  }
  public editTask(index: number) {
    let result = prompt('Edit task', this.items[index]);
    if (result != null) {
      this.items[index] = result;
    }
  }
  public completeTask(index: number) {
    this.console.log(index);
  }
  constructor() {}

  ngOnInit(): void {}
}
