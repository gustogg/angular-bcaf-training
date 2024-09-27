import { LOCALE_ID, NgModule } from '@angular/core';
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
// import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { TodoComponent } from './features/todos/components/todo/todo.component';
import { TodoDetailComponent } from './features/todos/components/todo-detail/todo-detail.component';
import { TodoFormComponent } from './features/todos/components/todo-form/todo-form.component';
import { TodoListComponent } from './features/todos/components/todo-list/todo-list.component';
import { TodoTotalComponent } from './features/todos/components/todo-total/todo-total.component';
import { AttrDirective } from './attr.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoService } from './cores/services/todo.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { UserService } from './cores/services/user.service';
import { CustomerChoiceComponent } from './features/customer/components/customer-choice/customer-choice.component';
import { CustomerDetailComponent } from './features/customer/components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './features/customer/components/customer-list/customer-list.component';
import { CustomerSearchComponent } from './features/customer/components/customer-search/customer-search.component';
import { ReservasiCreateComponent } from './features/reservasi/components/reservasi-create/reservasi-create.component';




@NgModule({
  declarations: [
    AppComponent,
    BerkasComponent,
    UserComponent,
    UserProfileComponent,
    UserDetailComponent,
    ProductDetailComponent,
    TodoComponent,
    TodoDetailComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoTotalComponent,
    AttrDirective,
    CustomerChoiceComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerSearchComponent,
    ReservasiCreateComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule, HttpClientModule],
  providers: [
    provideHttpClient(),
    TodoService,
    { provide: LOCALE_ID, useValue: 'id-ID' },
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

