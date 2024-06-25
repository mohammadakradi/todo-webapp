import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
import { IStepContent } from '../../models/stepper';

@Component({
  selector: 'app-stepper-controller',
  standalone: true,
  imports: [
    StepperComponent,
  ],
  templateUrl: './stepper-controller.component.html',
  styleUrls: ['./stepper-controller.component.scss']
})
export class StepperControllerComponent {
  @Input({ required: true }) activeStep!: number;
  @Input() stepContents: IStepContent[] = [];

  @Output() changeStep: EventEmitter<number> = new EventEmitter<number>();

  updateActiveStep(target: 'next' | 'back') {
    switch (target) {
      case "back":
        this.activeStep > 0 ? this.activeStep = this.activeStep - 1 : this.activeStep = this.activeStep;
        break;
      case "next":
        this.activeStep < 4 ? this.activeStep = this.activeStep + 1 : this.activeStep = this.activeStep;
        break;
    }

    this.changeStep.emit(this.activeStep)
  }

  startApp() {
    this.changeStep.emit(4)
  }

}
