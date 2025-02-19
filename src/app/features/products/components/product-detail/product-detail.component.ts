import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/i-product';
import { IVariant } from '../../interfaces/i-variant';
import { Variant } from '../../models/variant';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  active: number = 1;
  index!: number;
  productVariant: IVariant = new Variant();

  product: IProduct = {
    title: 'Motul Lubricants',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    price: 34000,
    variants: [
      {
        key: 'Mandi',
        value: 1,
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClMfzR5qtFoowxUPTWNz8i6VpeqKn6Kj_pA&s',
      },
    ],
    stock: 0,
  };

  getPajak(persentase: number, hargaAfterDiskon: number): number {
    return hargaAfterDiskon + this.product.price * persentase;
  }

  addVariant() {
    let payload = {
      key: this.productVariant.key,
      value: this.productVariant.value,
      picture: this.productVariant.picture,
    };
    this.product.variants.push(payload);

    this.productVariant.key = '';
    this.productVariant.value = '';
    this.productVariant.picture = '';
  }

  getVariant(data: IVariant) {
    let index: number = this.product.variants.findIndex((value: IVariant) => {
      return data.key === value.key;
    });
    this.index = index;

    // versi non-control (reference)
    // this.productVariant = data;
    // versi control (copy)
    this.productVariant.key = data.key;
    this.productVariant.picture = data.picture;
    this.productVariant.value = data.value;
    // console.log(index);
  }

  updateVariant() {
    console.log(this.index);
    if (this.index > -1) {
      this.product.variants[this.index] = this.productVariant;
    }
  }

  deleteVariant(i: number) {
    this.product.variants.splice(i, 1);
  }
  countExistingKeys(): number {
    return this.product.variants.filter(variant => variant.key).length;
  }
}
