import { Component } from '@angular/core';
import { MatDatepickerComponent } from '../../../shared/components/mat-datepicker/mat-datepicker.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-due-date',
  standalone: true,
  imports: [
    MatDatepickerComponent,
    FormsModule
  ],
  templateUrl: './due-date.component.html',
  styleUrl: './due-date.component.scss'
})
export class DueDateComponent {
  startTime: string = '00:00';
  endTime: string = '18:30';

  setDueDate() {
    console.log(typeof this.startTime)
  }

}
