import { Component } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { DueDateComponent } from './due-date/due-date.component';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    TaskItemComponent,
    DueDateComponent,
    CategoryComponent
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  getTaskItem(taskItem: { name: string, description: string }) {
    console.log(taskItem)
  }

}
