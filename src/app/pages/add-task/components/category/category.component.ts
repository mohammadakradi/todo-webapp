import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryModel } from './models/category-model';
import { CategoryServiceService } from './services/category-service.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TaskDataService } from '../../services/task-data.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    CategoryItemComponent,
    AddCategoryComponent
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  showCreateCategory: boolean = false;
  categoryList: CategoryModel[] = [];
  selectedCategories: number[];
  @Output() categoriesSelected = new EventEmitter<void>();

  constructor(
    private categoryService: CategoryServiceService,
    private taskDataService: TaskDataService,
  ) {
    this.selectedCategories = this.taskDataService.getTaskData().categories || [];
  }
  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    let getData = new Subscription;
    const addCategoryItem: CategoryModel = {
      id: -1,
      name: 'Add Category',
      background: '#9E9E9E',
      icon: 'icon-add-category',
      iconColor: '#4D4D4D'
    };
    getData = this.categoryService.getCategories().subscribe(resp => {
      this.categoryList = resp;
      this.categoryList.push(addCategoryItem);
    });
  }
  handleCategory(category: CategoryModel | null) {
    if (category?.id === -1) {
      this.showCreateCategory = true
    } else if (category) {
      const index = this.selectedCategories.findIndex(id => id === category.id)
      if (index === -1) {
        this.selectedCategories.push(category.id)
      } else {
        this.selectedCategories = this.selectedCategories.filter(id => id != category.id)
      }
    }
  }

  setCategory() {
    this.taskDataService.updateCategoryList(this.selectedCategories);
    this.categoriesSelected.emit();
  }
}
