import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskItemModel, TaskModel } from '../../models/task-model';
import { TaskDataService } from '../../services/task-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {
  taskForm: FormGroup;
  showError: boolean = false;
  taskData: TaskModel;
  @Output() dueDate = new EventEmitter<void>();

  constructor(
    private router: Router,
    private taskDataService: TaskDataService
  ) {
    this.taskForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      taskDescription: new FormControl('')
    });
    this.taskData = this.taskDataService.getTaskData();
  }

  ngOnInit() {
    const taskItemData = this.taskDataService.getTaskData().taskItem;
    if (taskItemData) {
      this.taskForm.patchValue(taskItemData);
    }

    this.taskForm.valueChanges.subscribe(values => {
      const taskItem: TaskItemModel = {
        taskName: values.taskName,
        taskDescription: values.taskDescription
      };
      this.taskDataService.updateTaskItem(taskItem);
    });
  }
  addTask(e: Event) {
    e.stopPropagation();
    if (this.taskForm.invalid) {
      this.showError = true;
    } else {
      const taskItem: TaskItemModel = {
        taskName: this.taskForm.value.taskName as string,
        taskDescription: this.taskForm.value.taskDescription as string
      };
      this.taskDataService.updateTaskItem(taskItem);
      this.showError = false;
    }
    this.router.navigateByUrl('home');
  }
  addCategory(e: Event) {
    e.stopPropagation()
  }

  addDueDate(e: Event) {
    e.stopPropagation()
    this.dueDate.emit()
  }
}
