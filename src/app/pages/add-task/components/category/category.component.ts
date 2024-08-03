import { Component } from '@angular/core';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';

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

  setCategory() {

  }
}
