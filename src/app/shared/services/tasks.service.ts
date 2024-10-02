import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../../pages/add-task/models/task-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://127.0.0.1:8000/api/tasks/';
  constructor(private http: HttpClient) { }

  getTaskList(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.apiUrl);
  }

  getTaskById(id: number): Observable<TaskModel> {
    return this.http.get<TaskModel>(`${this.apiUrl}/${id}`);
  }

  createTask(task: TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(this.apiUrl, task);
  }
}
