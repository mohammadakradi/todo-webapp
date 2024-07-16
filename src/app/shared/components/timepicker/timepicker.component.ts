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
  initialY: number = 0;
  selectedHour: number = 6;
  selectedHourIndex: number = this.hours.indexOf(this.selectedHour);
  minutes: number[] = Array.from({ length: 13 }, (_, i) => i * 5);
  selectedMinute: number = 30;
  selectedMinuteIndex: number = this.minutes.indexOf(this.selectedMinute);

  // @HostListener('wheel', ['event'])
  // changeHour(e: any) {
  //   console.log(e)
  //   if (this.selectedHour + e.deltaY < 1) {
  //     this.selectedHour = 12
  //   } else if (this.selectedHour + e.deltaY > 12) {
  //     this.selectedHour = 1
  //   } else {
  //     this.selectedHour += e.deltaY
  //   }
  //   this.selectedHourIndex = this.hours.indexOf(this.selectedHour)
  // }
  onChange(hour: any) {
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

    // console.log('fdfdf', this.initialY, finalY, deltaY)
    // this.selectedHour += deltaY;
    if (this.selectedHour + deltaY < 1) {
      this.selectedHour = 12
    } else if (this.selectedHour + deltaY > 12) {
      this.selectedHour = 1
    } else {
      this.selectedHour += deltaY
    }
    this.selectedHourIndex = this.hours.indexOf(this.selectedHour)
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

    // console.log('fdfdf', this.initialY, finalY, deltaY)
    // this.selectedHour += deltaY;
    if (this.selectedMinute + deltaY < 0) {
      this.selectedMinute = 55
    } else if (this.selectedMinute + deltaY > 55) {
      this.selectedMinute = 0
    } else {
      this.selectedMinute += deltaY
    }
    this.selectedMinuteIndex = this.minutes.indexOf(this.selectedMinute)
  }
}
