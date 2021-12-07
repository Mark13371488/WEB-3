import { Component, OnInit } from '@angular/core';
import { CustomersService } from "../../services/customers.service";
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];

  selectedCustomer: Customer;

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customersService.getCustomers().subscribe(customers => this.customers = customers);
  }

  onSelect(customer: Customer) {
    this.customersService.getCustomer(customer.id).subscribe(customer => this.selectedCustomer = customer);
  }

}
