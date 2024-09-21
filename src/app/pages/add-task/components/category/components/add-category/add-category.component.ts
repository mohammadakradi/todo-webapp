import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { CategoryModel } from '../../models/category-model';
import { FormsModule } from '@angular/forms';
import { CategoryServiceService } from '../../services/category-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  @Output() onCreateCategory = new EventEmitter<void>();

  constructor(
    private cService: CategoryServiceService,
    private _snackBar: MatSnackBar
  ) { }

  addCategory() {
    const addCategoryItem: CategoryModel = {
      id: 0,
      name: this.name,
      background: this.background,
      icon: 'icon-add-category',
      iconColor: this.iconColor
    };

    this.cService.createCategory(addCategoryItem).subscribe(resp => {
      let message = 'New category created successfully ;)'
      this.openSnackBar(message, 'Yay');
      this.onCreateCategory.emit()
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3500 });
  }
}
