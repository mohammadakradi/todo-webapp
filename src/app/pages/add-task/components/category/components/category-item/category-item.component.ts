import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryModel } from '../../models/category-model';
import { Event } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent {
  @Input() categoryItem: CategoryModel | null = null;
  @Input() highlighted: boolean = false;
  @Output() onClick = new EventEmitter<CategoryModel | null>();
}
