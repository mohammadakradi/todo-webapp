import { Component } from '@angular/core';
import { TimepickerComponent } from '../../shared/components/timepicker/timepicker.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TimepickerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
