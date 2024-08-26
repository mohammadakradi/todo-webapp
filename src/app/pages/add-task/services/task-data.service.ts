import { Injectable } from '@angular/core';
import { AddTaskComponent } from '../add-task.component';
import { BehaviorSubject } from 'rxjs';
import { DueDateModel, TaskItemModel, TaskModel } from '../models/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  private taskData = new BehaviorSubject<TaskModel>({
    taskItem: null,
    dueDate: null,
    categories: null
  });

  taskData$ = this.taskData.asObservable();

  updateTaskItem(taskItem: TaskItemModel) {
    const currentData = this.taskData.value;
    this.taskData.next({ ...currentData, taskItem });
  }

  updateDueDate(dueDate: DueDateModel) {
    const currentData = this.taskData.value;
    this.taskData.next({ ...currentData, dueDate });
  }

  updateCategoryList(categories: number[]) {
    const currentData = this.taskData.value;
    this.taskData.next({ ...currentData, categories });
  }

  getTaskData(): TaskModel {
    return this.taskData.value;
  }

  clearTaskData() {
    this.taskData.next({ taskItem: null, dueDate: null, categories: null });
  }
}
