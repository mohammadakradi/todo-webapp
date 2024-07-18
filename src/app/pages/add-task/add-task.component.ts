import { Component } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { DueDateComponent } from './due-date/due-date.component';
import { CategoryComponent } from './category/category.component';
import { Router } from '@angular/router';

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
  constructor(
    private router: Router
  ) { }
  getTaskItem(taskItem: { name: string, description: string }) {
    console.log(taskItem)
    this.router.navigateByUrl('home')
  }

}
