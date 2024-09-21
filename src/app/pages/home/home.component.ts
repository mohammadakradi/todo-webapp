import { Component } from '@angular/core';
import { TaskModel } from '../add-task/models/task-model';
import { TasksService } from '../../shared/services/tasks.service';
import { Subscription } from 'rxjs';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { CategoryServiceService } from '../add-task/components/category/services/category-service.service';
import { CategoryModel } from '../add-task/components/category/models/category-model';

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
  categoryList: CategoryModel[] = [];

  constructor(
    private taskService: TasksService,
    private categoryService: CategoryServiceService,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData = this.taskService.getTaskList().subscribe(res => {
      this.taskList = res
    })
    let getCategories = this.categoryService.getCategories().subscribe(resp => {
      this.categoryList = resp;
    });
  }
}
