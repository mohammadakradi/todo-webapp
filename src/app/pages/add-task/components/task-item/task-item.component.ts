import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskItemModel } from '../../models/task-model';

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
export class TaskItemComponent {
  taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskDescription: new FormControl('')
  })
  showError: boolean = false
  @Output() taskItem = new EventEmitter<TaskItemModel>();
  @Output() dueDate = new EventEmitter<void>();

  addTask(e: Event) {
    e.stopPropagation()
    if (this.taskForm.invalid) {
      this.showError = true;
    } else {
      this.taskItem.emit({
        taskName: this.taskForm.value.taskName as string | null,
        taskDescription: this.taskForm.value.taskDescription as string | null
      });
      this.showError = false;
    }
  }
  addCategory(e: Event) {
    e.stopPropagation()
  }

  addDueDate(e: Event) {
    e.stopPropagation()
    this.dueDate.emit()
  }
}
