import { Component } from '@angular/core';
import { TaskModel } from '../add-task/models/task-model';
import { TasksService } from '../../shared/services/tasks.service';
import { Subscription } from 'rxjs';
import { TaskCardComponent } from './components/task-card/task-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TaskCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  taskList: TaskModel[] = [];
  getData = new Subscription();

  constructor(
    private taskService: TasksService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData = this.taskService.getTaskList().subscribe(res => {
      this.taskList = res
      console.log(this.taskList)
    })
  }
}
