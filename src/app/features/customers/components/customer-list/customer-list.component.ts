import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { CustomerService } from '../../../../cores/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'], // Fixed the property name
})
export class CustomerListComponent implements OnInit {
  @Input() selectedCustomer: ICustomer | null = null; 
  @Output() customerClicked = new EventEmitter<ICustomer>(); 

  // Pagination properties
  customers: ICustomer[] = [];
  paginatedCustomers: ICustomer[] = [];
  currentPage = 1;
  itemsPerPage = 3; 

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.all().subscribe((resp: ICustomer[]) => {
      this.customers = resp;
      this.updatePaginatedCustomers();
    });
  }

    // Pagination Update For The Recent Page
  updatePaginatedCustomers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedCustomers = this.customers.slice(start, end);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePaginatedCustomers();
  }

  onCustomerClick(customer: ICustomer) {
    this.customerClicked.emit(customer); 
  }
}
