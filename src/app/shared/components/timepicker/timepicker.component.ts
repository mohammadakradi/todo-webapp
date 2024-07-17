import { Component, EventEmitter, Output } from '@angular/core';
import { DisplayTimePipe } from '../../pipes/display-time.pipe';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  imports: [
    DisplayTimePipe
  ],
  templateUrl: './timepicker.component.html',
  styleUrl: './timepicker.component.scss',
})
export class TimepickerComponent {
  @Output() selectedTime = new EventEmitter<{ hour: number, minute: number, dayShift: string }>();
  hours: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  initialY: number = 0;
  selectedHour: number = 6;
  selectedHourIndex: number = this.hours.indexOf(this.selectedHour);
  minutes: number[] = Array.from({ length: 13 }, (_, i) => i * 5);
  selectedMinute: number = 30;
  selectedMinuteIndex: number = this.minutes.indexOf(this.selectedMinute);
  dayShifts: string[] = ["AM", "PM"]
  selectedDayShift: string = "PM"

  onChange(hour: any) {
    console.log(hour)
  }
  onChangeHour(hour: any) {
    console.log(hour)
  }

  onTouchStart(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.initialY = event.touches[0].clientY;
  }

  onTouchEnd(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();
    const finalY = event.changedTouches[0].clientY;
    const deltaY = this.initialY - finalY > 0 ? 1 : -1;

    if (this.selectedHour + deltaY < 1) {
      this.selectedHour = 12
    } else if (this.selectedHour + deltaY > 12) {
      this.selectedHour = 1
    } else {
      this.selectedHour += deltaY
    }
    this.selectedHourIndex = this.hours.indexOf(this.selectedHour)
    this.selectedTime.emit({ hour: this.selectedHour, minute: this.selectedMinute, dayShift: this.selectedDayShift })
  }

  onTouchStartMinute(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.initialY = event.touches[0].clientY;
  }

  onTouchEndMinute(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();
    const finalY = event.changedTouches[0].clientY;
    const deltaY = this.initialY - finalY > 0 ? 5 : -5;

    if (this.selectedMinute + deltaY < 0) {
      this.selectedMinute = 55
    } else if (this.selectedMinute + deltaY > 55) {
      this.selectedMinute = 0
    } else {
      this.selectedMinute += deltaY
    }
    this.selectedMinuteIndex = this.minutes.indexOf(this.selectedMinute)
    this.selectedTime.emit({ hour: this.selectedHour, minute: this.selectedMinute, dayShift: this.selectedDayShift })
  }

  onTouchStartDayShift(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.initialY = event.touches[0].clientY;
  }

  onTouchEndDayShift(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();
    const finalY = event.changedTouches[0].clientY;
    const deltaY = this.initialY - finalY > 0 ? 1 : -1;

    if (this.selectedDayShift == "AM" && deltaY == 1) {
      this.selectedDayShift = "PM"
    } else if (this.selectedDayShift == "PM" && deltaY == -1) {
      this.selectedDayShift = "AM"
    }
    this.selectedTime.emit({ hour: this.selectedHour, minute: this.selectedMinute, dayShift: this.selectedDayShift })
  }
}
