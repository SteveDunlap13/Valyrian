
import { Component } from '@angular/core';
import { TodoserviceService } from '../../services/todoservice.service';
import { TODO } from '../../models/todo';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.container.html',
      providers: [TodoserviceService]
})
export class DashboardContainer {

    todoData: TODO[];
    newTodo: String;

    title = 'Valyrian Todo App!';

  constructor(private todoService: TodoserviceService) {
        this.todoData = todoService.getTodos();
        this.todoData.forEach(function(a) {
            console.log(a);
        })
    }

    onAdd(): void {
        let todo = new TODO(false, this.newTodo);
        this.todoService.addTodo(todo);
    }
}
