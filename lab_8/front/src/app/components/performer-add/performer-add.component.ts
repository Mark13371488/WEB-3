import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Performer } from "../../models/Performer";
import { PerformersService } from '../../services/performers.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-performer-add',
  templateUrl: './performer-add.component.html',
  styleUrls: ['./performer-add.component.css']
})
export class PerformerAddComponent implements OnInit {

  @Output()
  changed = new EventEmitter();

  constructor(private performersService: PerformersService, private messageService: MessageService) { }

  ngOnInit() {
  }

  addPerformer(id: number, number: number, experience: number, workers: number) {
    let newPerformer = new Performer(id, number, experience, workers);
    this.performersService.addPerformer(newPerformer).subscribe(response => {
      this.messageService.add(response);
      this.change();
    });
  }

  private change() {
    this.changed.emit();
  }
}
