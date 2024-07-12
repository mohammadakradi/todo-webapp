import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  imports: [],
  templateUrl: './timepicker.component.html',
  styleUrl: './timepicker.component.scss'
})
export class TimepickerComponent {
  hours: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  selectedHour: number = 6;
  selectedHourIndex: number = this.hours.indexOf(this.selectedHour)
  @HostListener('wheel', ['event'])
  changeHour(e: any) {
    console.log(e)
    if (this.selectedHour + e.deltaY < 1) {
      this.selectedHour = 12
    } else if (this.selectedHour + e.deltaY > 12) {
      this.selectedHour = 1
    } else {
      this.selectedHour += e.deltaY
    }
    this.selectedHourIndex = this.hours.indexOf(this.selectedHour)
  }
  onChange(hour: any) {
    console.log(hour)
  }
}
