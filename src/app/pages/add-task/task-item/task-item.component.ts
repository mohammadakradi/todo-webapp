import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  taskName: string = "";
  taskDescription: string = ""
  @Output() taskItem = new EventEmitter<{ name: string, description: string }>();
  @Output() dueDate = new EventEmitter<void>();

  addTask(e: Event) {
    e.stopPropagation()
    this.taskItem.emit({ name: this.taskName, description: this.taskDescription })
  }
  addCategory(e: Event) {
    e.stopPropagation()
  }

  addDueDate(e: Event) {
    e.stopPropagation()
    this.dueDate.emit()
  }
}
