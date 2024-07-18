import { Component } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { DueDateComponent } from './due-date/due-date.component';
import { CategoryComponent } from './category/category.component';
import { Router } from '@angular/router';
import { ClickOutsideDirective } from '../../shared/directives/click-outside.directive';

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
  constructor(
    private router: Router
  ) { }
  getTaskItem(taskItem: { name: string, description: string }) {
    console.log(taskItem)
    this.router.navigateByUrl('home')
  }

  onClickOutside() {
    console.log('Clicked outside of add-task-container');
    this.router.navigateByUrl('home')
  }

  addDueDate() {
    this.activeSetTaskStep = 'due-date'
  }

}
