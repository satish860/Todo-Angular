import {Todo} from "./Todo";
import {Injectable} from "@angular/core"


@Injectable()
export class TodoService{
    todoList:Array<Todo>

    constructor(){
        this.todoList=new Array<Todo>();
    }

    addTodoItem(todoItem:Todo){
        this.todoList.push(todoItem);
        console.log(this.todoList);
    }

}