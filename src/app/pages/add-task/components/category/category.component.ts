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
  showCreateCategory: boolean = false;
  categoryList: CategoryModel[] = [
    {
      id: 1,
      name: 'University',
      background: '#809CFF',
      icon: 'icon-studying',
      iconColor: '#0055A3'
    },
    {
      id: 2,
      name: 'Work',
      background: '#FFCC80',
      icon: 'icon-work',
      iconColor: '#A36200'
    },
    {
      id: 3,
      name: 'Sport',
      background: '#6E409A',
      icon: 'icon-sport',
      iconColor: '#422360'
    }
  ]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const addCategoryItem: CategoryModel = {
      id: -1,
      name: 'Add Category',
      background: '#9E9E9E',
      icon: 'icon-add-category',
      iconColor: '#4D4D4D'
    };
    this.categoryList.push(addCategoryItem);
  }
  handleCategory(category: CategoryModel | null) {
    if (category?.id === -1) {
      this.showCreateCategory = true
    }
  }

  setCategory() { }
}
