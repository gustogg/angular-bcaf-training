import { Component, Input } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { ReservasiService } from '../../../../cores/services/reservasi.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent {
  @Input()
  customer!: ICustomer;

  static selectedCustomer: ICustomer | null = null; // Static property to track the globally selected customer

  isSelected: boolean = false; // Local property

  constructor(private reservasiService: ReservasiService) {}

  customerReservasi() {
    this.reservasiService.customer = this.customer;
    CustomerDetailComponent.selectedCustomer = this.customer; // Set the global selected customer
  }

  isCustomerSelected(): boolean {
    return CustomerDetailComponent.selectedCustomer === this.customer; // Check if the current customer is the selected one
  }
  
  
}
