import { Component } from '@angular/core';
import { MatDatepickerComponent } from '../../../shared/components/mat-datepicker/mat-datepicker.component';

@Component({
  selector: 'app-due-date',
  standalone: true,
  imports: [
    MatDatepickerComponent
  ],
  templateUrl: './due-date.component.html',
  styleUrl: './due-date.component.scss'
})
export class DueDateComponent {

}
