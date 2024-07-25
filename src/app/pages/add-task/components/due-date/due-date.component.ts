import { Component, EventEmitter, Output } from '@angular/core';
import { MatDatepickerComponent } from './components/mat-datepicker/mat-datepicker.component';
import { FormsModule } from '@angular/forms';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { DueDateModel } from '../../models/task-model';

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
  @Output() selectedDueDate = new EventEmitter<DueDateModel>();
  dueDate: DueDateModel = {
    startTime: "00:00",
    endTime: "18:30",
    selectedDate: null
  };

  setEndTime(e: string) {
    this.dueDate.endTime = e
  }
  setStartTime(e: string) {
    this.dueDate.startTime = e
  }

  setDueDate(e: Event) {
    e.stopPropagation()
    this.selectedDueDate.emit(this.dueDate)
  }

}
