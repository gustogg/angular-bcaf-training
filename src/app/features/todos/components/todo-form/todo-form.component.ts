import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../../../../cores/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  constructor(private todoService: TodoService) {}

  icons = {
    add: faPlusCircle,
  };

  todo: ITodo = {
    id: 0,
    isDone: false,
    task: '',
  };

  add() {
    this.todoService.addTodo(this.todo);
  }

  search() {
    this.todoService.searchTodo(this.todo.task);
  }
}
