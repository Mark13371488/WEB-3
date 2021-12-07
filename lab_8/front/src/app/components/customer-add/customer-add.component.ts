import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Customer } from "../../models/Customer";
import { CustomersService } from '../../services/customers.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  @Output()
  changed = new EventEmitter();

  constructor(private customersService: CustomersService, private messageService: MessageService) { }

  ngOnInit() {
  }

  addCustomer(id: number, name: string, budget: number) {
    let newCustomer = new Customer(id, name, budget);
    this.customersService.addCustomer(newCustomer).subscribe(response => {
      this.messageService.add(response);
      this.change();
    });
  }

  private change() {
    this.changed.emit();
  }
}
