import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BerkasComponent } from './berkas/berkas.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserDetailComponent } from './features/users/components/user-detail/user-detail.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from './features/products/components/product-detail/product-detail.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { TodoComponent } from './features/todos/components/todo/todo.component';
import { TodoDetailComponent } from './features/todos/components/todo-detail/todo-detail.component';
import { TodoFormComponent } from './features/todos/components/todo-form/todo-form.component';
import { TodoListComponent } from './features/todos/components/todo-list/todo-list.component';
import { TodoTotalComponent } from './features/todos/components/todo-total/todo-total.component';
import { AttrDirective } from './attr.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoService } from './cores/services/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    BerkasComponent,
    UserComponent,
    UserProfileComponent,
    UserDetailComponent,
    ProductDetailComponent,
    NavigationComponent,
    TodoComponent,
    TodoDetailComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoTotalComponent,
    AttrDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
