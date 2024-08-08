import { Component, Input } from '@angular/core';
import { CategoryModel } from '../../models/category-model';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent {
  @Input() categoryItem: CategoryModel | null = {
    categoryName: 'University',
    categoryColor: 'red',
    categoryIcon: 'icon-studying'
  };
}
