import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoServices: TodoService) { }

  ngOnInit() {
    this.todoServices.getTodos().subscribe( todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoServices.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    // tslint:disable-next-line: no-shadowed-variable
    this.todoServices.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
