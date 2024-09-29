import { Component } from '@angular/core';
import { CustomerService } from '../../../../cores/services/customer.service';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrl: './customer-search.component.css',
})
export class CustomerSearchComponent {
  query: string = '';
  field: string = 'name';
  icons = {
    search: faSearch,
  };

  constructor(private customerService: CustomerService) {}

  onSearch() {
    this.customerService
      .search(this.field, this.query)
      .subscribe((resp: ICustomer[]) => {
        this.customerService.customers = resp;
      });
  }
}
