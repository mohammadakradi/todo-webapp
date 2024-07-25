import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './timepicker.component.html',
  styleUrl: './timepicker.component.scss'
})
export class TimepickerComponent {
  startTimeVal: string = "00:00"
  endTimeVal: string = "18:30"
  @Output() startTime = new EventEmitter<string>();
  @Output() endTime = new EventEmitter<string>();

  sendStartTime(e: string) {
    this.startTime.emit(e)
  }
  sendEndTime(e: string) {
    this.endTime.emit(e)
  }
}
