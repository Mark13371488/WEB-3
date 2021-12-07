import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {

  private customersUrl = `http://localhost:3000/customers`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCustomers(): Observable<Customer[]> {
    this.log(`Fetch all customers`);
    return this.http.get<Customer[]>(this.customersUrl);
  }

  getCustomer(id: number): Observable<Customer> {
    this.log(`Fetch customer with id ${id}`);
    return this.http.get<Customer>(`${this.customersUrl}/${id}`);
  }

  addCustomer(customer: Customer): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Add customer with id ${customer.id}`);
    return this.http.post(`${this.customersUrl}`, customer, {headers: headers, responseType: 'text'});
  }

  editCustomers(customer: Customer): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Edit customer with id ${customer.id}`);
    return this.http.put(`${this.customersUrl}`, customer, {headers: headers, responseType: 'text'});
  }

  deleteCustomer(customer: Customer): Observable<string> {
    this.log(`Delete customer with id ${customer.id}`);
    return this.http.delete(`${this.customersUrl}/${customer.id}`, {responseType: "text"});
  }

  private log(message) {
    this.messageService.add(`CustomersService: ${message}`);
  }
}
