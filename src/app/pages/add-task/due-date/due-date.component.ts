import { Component } from '@angular/core';
import { MatDatepickerComponent } from './mat-datepicker/mat-datepicker.component';
import { FormsModule } from '@angular/forms';
import { TimepickerComponent } from './timepicker/timepicker.component';

@Component({
  selector: 'app-due-date',
  standalone: true,
  imports: [
    MatDatepickerComponent,
    TimepickerComponent,
    FormsModule
  ],
  templateUrl: './due-date.component.html',
  styleUrl: './due-date.component.scss'
})
export class DueDateComponent {
  startTime: string = "00:00"
  endTime: string = "18:30"

  setEndTime(e: string) {
    this.endTime = e
  }
  setStartTime(e: string) {
    this.startTime = e
  }

  setDueDate() {
    console.log(this.startTime, this.endTime)
  }

}
