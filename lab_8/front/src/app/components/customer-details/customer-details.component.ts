import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from "../../models/Customer";
import { CustomersService } from '../../services/customers.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input()
  customer: Customer;
  @Output()
  changed = new EventEmitter();

  constructor(private customersService: CustomersService,
              private messageService: MessageService) { }

  ngOnInit() {
  }

  editCustomer(id: number, name: string, budget: number) {
    let editedCustomer = new Customer(id, name, budget);
    this.customersService.editCustomers(editedCustomer).subscribe(response => {
      this.messageService.add(response);
      this.customer = editedCustomer;
      this.change();
    });
  }

  deleteCustomer(customer: Customer) {
    this.customersService.deleteCustomer(customer).subscribe(response => {
      this.messageService.add(response);
      this.customer = undefined;
      this.change();
    });
  }

  change() {
    this.changed.emit();
  }

}
