import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-stepper-controller',
  standalone: true,
  imports: [
    StepperComponent,
  ],
  templateUrl: './stepper-controller.component.html',
  styleUrls: ['./stepper-controller.component.scss', '../../../../shared/directives/directives.scss']
})
export class StepperControllerComponent {
  @Input({ required: true }) activeStep!: number;

  @Output() changeStep: EventEmitter<number> = new EventEmitter<number>();

  updateActiveStep(target: 'next' | 'back') {
    switch (target) {
      case "back":
        this.activeStep > 0 ? this.activeStep = this.activeStep - 1 : this.activeStep = this.activeStep;
        break;
      case "next":
        this.activeStep < 3 ? this.activeStep = this.activeStep + 1 : this.activeStep = this.activeStep;
        break;
    }

    this.changeStep.emit(this.activeStep)
  }
}
