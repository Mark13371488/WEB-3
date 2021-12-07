import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  private projectsUrl = `http://localhost:3000/projects`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getProjects(): Observable<Project[]> {
    this.log(`Fetch all projects`);
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getProject(id: number): Observable<Project> {
    this.log(`Fetch project with id ${id}`);
    return this.http.get<Project>(`${this.projectsUrl}/${id}`);
  }

  addProject(project: Project): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Add project with id ${project.id}`);
    return this.http.post(`${this.projectsUrl}`, project, {headers: headers, responseType: 'text'});
  }

  editProjects(project: Project): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Edit project with id ${project.id}`);
    return this.http.put(`${this.projectsUrl}`, project, {headers: headers, responseType: 'text'});
  }

  deleteProject(project: Project): Observable<string> {
    this.log(`Delete project with id ${project.id}`);
    return this.http.delete(`${this.projectsUrl}/${project.id}`, {responseType: "text"});
  }

  private log(message) {
    this.messageService.add(`ProjectsService: ${message}`);
  }
}
