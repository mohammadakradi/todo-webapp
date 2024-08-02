import { Component, EventEmitter, model, Output } from '@angular/core';
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
  startTime = model<string>("00:00");
  endTime = model<string>("18:30");
}
