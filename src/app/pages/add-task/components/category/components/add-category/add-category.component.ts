import { Component } from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { CategoryModel } from '../../models/category-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    CategoryItemComponent,
    FormsModule
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  name: string = '';
  background: string = '#9E9E9E';
  iconColor: string = '#ddd';

  addCategory() {
    const addCategoryItem: CategoryModel = {
      id: -1,
      name: this.name,
      background: this.background,
      icon: 'icon-add-category',
      iconColor: this.iconColor
    }


  }
}
