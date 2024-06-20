import { Component } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-stepper-controller',
  standalone: true,
  imports: [
    StepperComponent,
  ],
  templateUrl: './stepper-controller.component.html',
  styleUrl: './stepper-controller.component.scss'
})
export class StepperControllerComponent {

}
