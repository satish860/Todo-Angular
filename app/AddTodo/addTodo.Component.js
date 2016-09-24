"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TodoService_1 = require('../TodoStore/TodoService');
var Todo_1 = require('../TodoStore/Todo');
var AddTodoComponent = (function () {
    function AddTodoComponent(todoSevice) {
        this.todoSevice = todoSevice;
    }
    AddTodoComponent.prototype.ngOnInit = function () {
        this.newItem = "";
    };
    AddTodoComponent.prototype.addTodo = function () {
        this.todoSevice.addTodoItem(new Todo_1.Todo(this.newItem));
        this.newItem = "";
    };
    AddTodoComponent = __decorate([
        core_1.Component({
            selector: 'add-todo',
            templateUrl: 'app/AddTodo/add-todo.component.html'
        }), 
        __metadata('design:paramtypes', [TodoService_1.TodoService])
    ], AddTodoComponent);
    return AddTodoComponent;
}());
exports.AddTodoComponent = AddTodoComponent;
//# sourceMappingURL=addTodo.Component.js.map