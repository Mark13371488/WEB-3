import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from "../../models/Project";
import { ProjectsService } from '../../services/projects.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Input()
  project: Project;
  @Output()
  changed = new EventEmitter();

  constructor(private projectsService: ProjectsService,
              private messageService: MessageService) { }

  ngOnInit() {
  }

  editProject(id: number, name: string, description: string, customer: string, skill: number) {
    let editedProject = new Project(id, name, description, customer, skill);
    this.projectsService.editProjects(editedProject).subscribe(response => {
      this.messageService.add(response);
      this.project = editedProject;
      this.change();
    });
  }

  deleteProject(project: Project) {
    this.projectsService.deleteProject(project).subscribe(response => {
      this.messageService.add(response);
      this.project = undefined;
      this.change();
    });
  }

  change() {
    this.changed.emit();
  }

}
