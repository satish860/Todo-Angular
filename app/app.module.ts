import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AddTodoComponent} from './AddTodo/addTodo.component'
import {FormsModule} from "@angular/forms";
import {TodoService} from "./TodoStore/TodoService"

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[AppComponent,AddTodoComponent],
    bootstrap:[AppComponent],
    providers:[TodoService]
})

export class AppModule{

}

