import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo-itme',
  templateUrl: './todo-itme.component.html',
  styleUrls: ['./todo-itme.component.css']
})
export class TodoItmeComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoServices: TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;

    this.todoServices.toggleCompeleted(todo).subscribe( todos => {
      console.log(todo);
    });
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
