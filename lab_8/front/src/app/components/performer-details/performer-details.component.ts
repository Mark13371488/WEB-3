import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Performer } from "../../models/Performer";
import { PerformersService } from '../../services/performers.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-performer-details',
  templateUrl: './performer-details.component.html',
  styleUrls: ['./performer-details.component.css']
})
export class PerformerDetailsComponent implements OnInit {

  @Input()
  performer: Performer;
  @Output()
  changed = new EventEmitter();

  constructor(private performersService: PerformersService,
              private messageService: MessageService) { }

  ngOnInit() {
  }

  editPerformer(id: number, number: number, experience: number, workers: number) {
    let editedPerformer = new Performer(id, number, experience, workers);
    this.performersService.editPerformers(editedPerformer).subscribe(response => {
      this.messageService.add(response);
      this.performer = editedPerformer;
      this.change();
    });
  }

  deletePerformer(performer: Performer) {
    this.performersService.deletePerformer(performer).subscribe(response => {
      this.messageService.add(response);
      this.performer = undefined;
      this.change();
    });
  }

  change() {
    this.changed.emit();
  }

}
