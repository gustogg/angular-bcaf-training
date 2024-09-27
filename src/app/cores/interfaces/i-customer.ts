import { IAdressChild } from "./i-address";

export interface ICustomer {
    id: number;
    name: string;
    email: string;
    address: IAdressChild;
    status: string;
    
}
