import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { ISimpleProduct } from '../features/products/interfaces/i-product';


@Component({
  selector: 'app-berkas',
  templateUrl: './berkas.component.html',
  styleUrl: './berkas.component.css',
})
export class BerkasComponent {
  @Input() oncom!: number;
  @Input() product!: ISimpleProduct;
  @Output() emit: EventEmitter<number> = new EventEmitter();

  up() {
    this.oncom++;
    this.emit.emit(this.oncom);
  }

  down() {
    this.oncom--;
    this.emit.emit(this.oncom);
  }
}