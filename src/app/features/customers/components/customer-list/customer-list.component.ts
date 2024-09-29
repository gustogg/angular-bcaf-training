import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { CustomerService } from '../../../../cores/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent implements OnInit {
  @Input() selectedCustomer: ICustomer | null = null; // Receive the selected customer from parent
  @Output() customerClicked = new EventEmitter<ICustomer>(); // Emit when customer is clicked

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.all().subscribe((resp: ICustomer[]) => {
      this.customerService.customers = resp;
    });
  }

  get customers(): ICustomer[] {
    return this.customerService.customers;
  }

  onCustomerClick(customer: ICustomer) {
    this.customerClicked.emit(customer); // Emit the clicked customer to parent
  }
}
