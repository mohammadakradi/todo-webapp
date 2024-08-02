import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { DueDateComponent } from './components/due-date/due-date.component';
import { CategoryComponent } from './components/category/category.component';
import { Router } from '@angular/router';
import { ClickOutsideDirective } from '../../shared/directives/click-outside.directive';
import { DueDateModel, TaskModel } from './models/task-model';
import { TaskDataService } from './services/task-data.service';
import { TaskData } from 'zone.js/lib/zone-impl';

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
    private router: Router,
    private taskDataService: TaskDataService
  ) {
  }

  onClickOutside() {
    this.closeAddTask();
  }

  addDueDate() {
    this.activeSetTaskStep = 'due-date'
  }

  closeAddTask() {
    this.router.navigateByUrl('home')
  }

  setDueDate(selectedDueDate: DueDateModel) {
    this.activeSetTaskStep = 'task-item'
    this.taskDataService.updateDueDate(selectedDueDate);
  }

  previousStep(e: Event) {
    e.stopPropagation()
    this.activeSetTaskStep = 'task-item'
  }

}
