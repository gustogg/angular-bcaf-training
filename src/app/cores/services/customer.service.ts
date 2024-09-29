import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/i-customer';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private _customers: ICustomer[] = [];

  constructor(private http: HttpClient) {}

  // public all(): Observable<ICustomer[]> {
  //   return this.http.get<ICustomer[]>(
  //     `${environment.BASE_URL}/customer?_limit=10`
  //   );
  // }

  // munculkan semua data
  public all(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${environment.BASE_URL}/customer`);
  }

  
  public search(field: string, query: string): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(
      `${environment.BASE_URL}/customer?_limit=10&${field}=${query}`
    );
  }

  get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(data: ICustomer[]) {
    this._customers = data;
  }
}
