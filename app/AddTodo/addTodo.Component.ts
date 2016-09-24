import { Component, OnInit } from '@angular/core';
import {TodoService} from '../TodoStore/TodoService';
import {Todo} from '../TodoStore/Todo';

@Component({
    selector: 'add-todo',
    templateUrl: 'app/AddTodo/add-todo.component.html'
})
export class AddTodoComponent implements OnInit {

    newItem:string;

    constructor(private todoSevice:TodoService) { }

    ngOnInit() { 
        this.newItem="";
    }

    addTodo(){
        this.todoSevice.addTodoItem(new Todo(this.newItem));
        this.newItem="";
    }
}