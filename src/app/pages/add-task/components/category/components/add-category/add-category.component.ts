import { Component } from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { CategoryModel } from '../../models/category-model';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    CategoryItemComponent
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  addCategoryBtn: CategoryModel;
  constructor() {
    this.addCategoryBtn = {
      categoryName: 'Add Category',
      categoryColor: '',
      categoryIcon: 'icon-add-category'
    }
  }
}
