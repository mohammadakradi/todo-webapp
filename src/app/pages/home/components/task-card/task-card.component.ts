import { Component, Input } from '@angular/core';
import { TaskModel } from '../../../add-task/models/task-model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task!: TaskModel;
}
