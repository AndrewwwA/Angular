import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../MockTasks';
import { Task } from '../TaskInterface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
  constructor() {}
}
