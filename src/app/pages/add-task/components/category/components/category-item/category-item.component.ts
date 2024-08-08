import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryModel } from '../../models/category-model';
import { Event } from '@angular/router';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent {
  @Input() categoryItem: CategoryModel | null = null;
  @Output() onClick = new EventEmitter<CategoryModel | null>();
}
