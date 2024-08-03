import { Component, EventEmitter, Output } from '@angular/core';
import { MatDatepickerComponent } from './components/mat-datepicker/mat-datepicker.component';
import { FormsModule } from '@angular/forms';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { DueDateModel } from '../../models/task-model';
import { TaskDataService } from '../../services/task-data.service';
import { cloneDeep } from 'lodash';

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
  @Output() dueDataSelected = new EventEmitter<void>();
  tmpDueDate: DueDateModel;

  constructor(private taskDataService: TaskDataService) {
    const currentDueDate = this.taskDataService.getTaskData().dueDate;
    this.tmpDueDate = cloneDeep(currentDueDate) || { startTime: '00:00', endTime: '18:30', selectedDate: null };
  }

  setDueDate() {
    this.taskDataService.updateDueDate(this.tmpDueDate);
    this.dueDataSelected.emit()
  }

}
