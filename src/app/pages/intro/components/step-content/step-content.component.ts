import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-content',
  standalone: true,
  imports: [],
  templateUrl: './step-content.component.html',
  styleUrl: './step-content.component.scss'
})
export class StepContentComponent {
  @Input() activeStep!: number;

}
