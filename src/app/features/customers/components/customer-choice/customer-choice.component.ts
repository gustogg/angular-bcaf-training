import { Component } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';

@Component({
  selector: 'app-customer-choice',
  templateUrl: './customer-choice.component.html',
  styleUrl: './customer-choice.component.css',
})
export class CustomerChoiceComponent {
  selectedCustomer: ICustomer | null = null; // Track selected customer

  // Method to set the selected customer
  setSelectedCustomer(customer: ICustomer) {
    this.selectedCustomer = customer;
  }
  
}
