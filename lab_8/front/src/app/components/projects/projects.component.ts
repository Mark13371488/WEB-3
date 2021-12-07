import { Component, OnInit } from '@angular/core';
import { ProjectsService } from "../../services/projects.service";
import { Project } from '../../models/Project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  selectedProject: Project;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(projects => this.projects = projects);
  }

  onSelect(project: Project) {
    this.projectsService.getProject(project.id).subscribe(project => this.selectedProject = project);
  }

}
