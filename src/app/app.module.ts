import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from './features/products/components/product-detail/product-detail.component';
// import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoComponent } from './features/todos/components/todo/todo.component';
import { TodoFormComponent } from './features/todos/components/todo-form/todo-form.component';
import { TodoTotalComponent } from './features/todos/components/todo-total/todo-total.component';
import { TodoDetailComponent } from './features/todos/components/todo-detail/todo-detail.component';
import { TodoListComponent } from './features/todos/components/todo-list/todo-list.component';
import { AttrDirective } from './attr.directive';
import { TodoService } from './cores/services/todo.service';
// import { IndodatePipe } from './indodate.pipe';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { UserService } from './cores/services/user.service';
import { CustomerChoiceComponent } from './features/customers/components/customer-choice/customer-choice.component';
import { CustomerDetailComponent } from './features/customers/components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './features/customers/components/customer-list/customer-list.component';
import { CustomerSearchComponent } from './features/customers/components/customer-search/customer-search.component';
import { ReservasiCreateComponent } from './features/reservasi/components/reservasi-create/reservasi-create.component';
import { ReservasiChoiceComponent } from './features/reservasi/components/reservasi-choice/reservasi-choice.component';
import { ReservasiListComponent } from './features/reservasi/components/reservasi-list/reservasi-list.component';
import { ReservasiDetailComponent } from './features/reservasi/components/reservasi-detail/reservasi-detail.component';
import { ReservasiSearchComponent } from './features/reservasi/components/reservasi-search/reservasi-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    // NavigationComponent,
    TodoComponent,
    TodoFormComponent,
    TodoTotalComponent,
    TodoDetailComponent,
    TodoListComponent,
    AttrDirective,
    // IndodatePipe,
    CustomerChoiceComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerSearchComponent,
    ReservasiCreateComponent,
    ReservasiChoiceComponent,
    ReservasiListComponent,
    ReservasiDetailComponent,
    ReservasiSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    NgbTimepickerModule,
  ],
  providers: [
    provideHttpClient(),
    TodoService,
    // { provide: LOCALE_ID, useValue: 'id-ID' },
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
