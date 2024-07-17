import { Component } from '@angular/core';
import { MatDatepickerComponent } from '../../shared/components/mat-datepicker/mat-datepicker.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDatepickerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
