import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-menu',
  templateUrl: './todo-menu.component.html',
  styleUrls: ['./todo-menu.component.css']
})
export class TodoMenuComponent {
  title = 'ToDo List';

  todoValue!: string;
  myTaskList!: Todo[];

  ngOnInit() {
    this.myTaskList = [];
    this.todoValue = "";
  }

  addItem() {
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.myTaskList.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id: number) {
    this.myTaskList = this.myTaskList.filter(item => item.id !== id);
  }
}
