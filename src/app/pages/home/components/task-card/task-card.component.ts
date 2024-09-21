import { Component, Input } from '@angular/core';
import { TaskModel } from '../../../add-task/models/task-model';
import { MatChipsModule } from '@angular/material/chips';
import { CategoryModel } from '../../../add-task/components/category/models/category-model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    MatChipsModule
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task!: TaskModel;
  @Input() categoryList: CategoryModel[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.categoryList.find(category => category.id === this.task.categories[0])s
  }
}
