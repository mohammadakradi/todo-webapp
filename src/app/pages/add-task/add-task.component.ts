import { Component } from '@angular/core';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { DueDateComponent } from './components/due-date/due-date.component';
import { CategoryComponent } from './components/category/category.component';
import { Router } from '@angular/router';
import { ClickOutsideDirective } from '../../shared/directives/click-outside.directive';
import { DueDateModel, TaskItemModel, TaskModel } from './models/task-model';

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
  task: TaskModel = {
    taskItem: null,
    dueDate: null
  };
  constructor(
    private router: Router
  ) { }
  getTaskItem(taskItem: TaskItemModel) {
    this.task.taskItem = taskItem
    console.log(this.task)
    this.router.navigateByUrl('home');
  }

  onClickOutside() {
    console.log("CLICKED OUTSIDE")
    this.router.navigateByUrl('home');
  }

  addDueDate() {
    this.activeSetTaskStep = 'due-date'
  }

  closeAddTask() {
    this.router.navigateByUrl('home')
  }

  setDueDate(selectedDueDate: DueDateModel) {
    this.activeSetTaskStep = 'task-item'
    this.task.dueDate = selectedDueDate
  }

}
