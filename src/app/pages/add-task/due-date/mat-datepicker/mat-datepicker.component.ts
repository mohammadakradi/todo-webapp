import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-mat-datepicker',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule],
  templateUrl: './mat-datepicker.component.html',
  styleUrl: './mat-datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})
export class MatDatepickerComponent {
  selected = model<Date | null>(null);

}
