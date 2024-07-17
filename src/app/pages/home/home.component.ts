import { Component, Input } from '@angular/core';
import { TimepickerComponent } from '../../shared/components/timepicker/timepicker.component';
import { PickerComponent } from '../../shared/components/picker/picker.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TimepickerComponent,
    PickerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  optionGroups = {
    Hour: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    Minute: ['00', '10', '20', '30', '40', '50']
  };
  valueGroups = {
    Hour: '12',
    Minute: '30'
  };

  handleOnChange(event: any): void {
    console.log(`${event.name} changed to ${event.value}`);
  }
}
