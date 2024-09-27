import { IGeo } from './i-geo';

export interface IAddress {
  street: string;
  suite?: string; // optional
  city: string;
  zipcode?: string; // optional
  geo?: IGeo; // optional
}

export interface IAdressChild extends IAddress {
  zip: string;
}
