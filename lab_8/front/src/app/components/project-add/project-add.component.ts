import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Project } from "../../models/Project";
import { ProjectsService } from '../../services/projects.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  @Output()
  changed = new EventEmitter();

  constructor(private projectsService: ProjectsService, private messageService: MessageService) { }

  ngOnInit() {
  }

  addProject(id: number, name: string, description: string, customer: string, skill: number) {
    let newProject = new Project(id,name,description,customer,skill);
    this.projectsService.addProject(newProject).subscribe(response => {
      this.messageService.add(response);
      this.change();
    });
  }

  private change() {
    this.changed.emit();
  }

}
