import { Component } from '@angular/core';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { DueDateComponent } from './components/due-date/due-date.component';
import { CategoryComponent } from './components/category/category.component';
import { ClickOutsideDirective } from '../../shared/directives/click-outside.directive';
import { TaskModel } from './models/task-model';
import { TaskDataService } from './services/task-data.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TasksService } from '../../shared/services/tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    TaskItemComponent,
    DueDateComponent,
    CategoryComponent,
    ClickOutsideDirective
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  activeSetTaskStep: string = 'task-item';
  taskData: TaskModel | null = null;
  createTask = new Subscription();
  constructor(
    private taskDataService: TaskDataService,
    private _bottomSheetRef: MatBottomSheetRef<AddTaskComponent>,
    private taskService: TasksService
  ) {
  }
  closeAddTask(event?: MouseEvent) {
    event?.preventDefault();
    this.taskDataService.clearTaskData();
    this._bottomSheetRef.dismiss();
  }

  submitTask() {
    this.taskData = this.taskDataService.getTaskData();
    this.createTask = this.taskService.createTask(this.taskData).subscribe(res => {
      this._bottomSheetRef.dismiss();
      this._bottomSheetRef.afterDismissed().subscribe(() => {
        this.taskDataService.clearTaskData();
      })
    })
  }
}
