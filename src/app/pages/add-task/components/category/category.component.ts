import { Component } from '@angular/core';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryModel } from './models/category-model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CategoryItemComponent,
    AddCategoryComponent
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  categoryList: CategoryModel[] = [
    {
      categoryName: 'University',
      categoryColor: '#809CFF',
      categoryIcon: 'icon-studying'
    },
    {
      categoryName: 'Work',
      categoryColor: '#FFCC80',
      categoryIcon: 'icon-work'
    },
    {
      categoryName: 'Sport',
      categoryColor: '#6E409A',
      categoryIcon: 'icon-sport'
    }
  ]
  setCategory() {

  }
}
