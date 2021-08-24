import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {HttpParams} from "@angular/common/http";
import {Todo} from "../models/todo.model";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private apiService: ApiService) { }

  getUserToDo(id: any): Observable<Todo[]>{
    return this.apiService.get('/workspace/'+ id + '/todo')
  }

  getToDo(id: any, toDoId: any): Observable<Todo>{
    return this.apiService.get('/workspace/'+ id + '/todo/' +  toDoId)
  }

  getUserToDoToday(id: any): Observable<Todo[]>{
    return this.apiService.get('/workspace/'+ id + '/today')
  }

  getUserToDoBySignificance(id: any, significance: string): Observable<Todo[]>{
    return this.apiService.get('/workspace/'+ id + '/' + significance)
  }

  createToDo(id: any, todo: Todo): Observable<Todo[]>{
    return this.apiService.post('/workspace/'+ id + '/todo')
  }

  updateToDo(id: any, toDoId: any, todo: Todo): Observable<Todo[]>{
    return this.apiService.put('/workspace/'+ id + '/todo' + toDoId)
  }

  deleteToDo(id: any, toDoId: any): Observable<any> {
    return this.apiService.delete('/workspace/' + id + '/todo' + toDoId);
  }

  deleteOldToDo(id: any): Observable<any> {
    return this.apiService.delete('/workspace/' + id + '/todo');
  }

}
