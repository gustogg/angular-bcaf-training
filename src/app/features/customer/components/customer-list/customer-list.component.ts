import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { CustomerService } from '../../../../cores/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.all().subscribe((resp: ICustomer[]) => {
      this.customerService.customers = resp;
    });
  }

  get customers(): ICustomer[] {
    return this.customerService.customers;
  }
}
