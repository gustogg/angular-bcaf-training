import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReservasi } from '../interfaces/i-reservasi';
import { Reservasi } from '../models/reservasi';
import { ICustomer } from '../interfaces/i-customer';

@Injectable({
  providedIn: 'root',
})
export class ReservasiService {
  private _reservasi: IReservasi = new Reservasi();
  constructor(private http: HttpClient) {}

  get reservasi(): IReservasi {
    return this._reservasi;
  }

  set reservasi(data: IReservasi) {
    this._reservasi = data;
  }

  set customer(data: ICustomer) {
    this._reservasi.customer = data;
  }
}
