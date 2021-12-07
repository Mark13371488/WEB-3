import { Component, OnInit } from '@angular/core';
import { PerformersService } from "../../services/performers.service";
import { Performer } from '../../models/Performer';

@Component({
  selector: 'app-performers',
  templateUrl: './performers.component.html',
  styleUrls: ['./performers.component.css']
})
export class PerformersComponent implements OnInit {

  performers: Performer[];

  selectedPerformer: Performer;

  constructor(private performersService: PerformersService) { }

  ngOnInit() {
    this.getPerformers();
  }

  getPerformers() {
    this.performersService.getPerformers().subscribe(performers => this.performers = performers);
  }

  onSelect(performer: Performer) {
    this.performersService.getPerformer(performer.id).subscribe(performer => this.selectedPerformer = performer);
  }

}
