import { Injectable } from '@angular/core';
import { Performer } from '../models/Performer';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PerformersService {

  private performersUrl = `http://localhost:3000/performers`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getPerformers(): Observable<Performer[]> {
    this.log(`Fetch all performers`);
    return this.http.get<Performer[]>(this.performersUrl);
  }

  getPerformer(id: number): Observable<Performer> {
    this.log(`Fetch performer with id ${id}`);
    return this.http.get<Performer>(`${this.performersUrl}/${id}`);
  }

  addPerformer(performer: Performer): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Add performer with id ${performer.id}`);
    return this.http.post(`${this.performersUrl}`, performer, {headers: headers, responseType: 'text'});
  }

  editPerformers(performer: Performer): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Edit performer with id ${performer.id}`);
    return this.http.put(`${this.performersUrl}`, performer, {headers: headers, responseType: 'text'});
  }

  deletePerformer(performer: Performer): Observable<string> {
    this.log(`Delete performer with id ${performer.id}`);
    return this.http.delete(`${this.performersUrl}/${performer.id}`, {responseType: "text"});
  }

  private log(message) {
    this.messageService.add(`PerformersService: ${message}`);
  }
}
