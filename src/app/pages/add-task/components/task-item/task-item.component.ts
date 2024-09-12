import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskItemModel, TaskModel } from '../../models/task-model';
import { TaskDataService } from '../../services/task-data.service';
import { StatusColor } from '../../../../shared/enums/status-color';

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
  taskData: TaskModel | null = null;
  dueDateIconColor: string = '';
  categoryColor: string = '';
  @Output() dueDate = new EventEmitter<void>();
  @Output() setCategory = new EventEmitter<void>();
  @Output() submitTask = new EventEmitter<void>();
  @Output() backBtnCall = new EventEmitter<void>();

  constructor(
    private taskDataService: TaskDataService
  ) {
    this.taskForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      taskDescription: new FormControl('')
    });
  }

  ngOnInit() {
    this.taskData = this.taskDataService.getTaskData();
    this.checkDueDateAndCategory();
    const taskItemData = this.taskData.taskItem;
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
  addTask() {
    if (this.taskForm.invalid) {
      this.showError = true;
    } else {
      this.submitTask.emit();
    }
  }
  checkDueDateAndCategory() {
    if (this.taskData?.dueDate) {
      this.dueDateIconColor = StatusColor.Selected;
    } else {
      this.dueDateIconColor = '';
    }
    if (this.taskData?.categories) {
      this.categoryColor = StatusColor.Selected;
    } else {
      this.categoryColor = '';
    }
  }
}
