import { Component, OnInit } from '@angular/core';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperControllerComponent } from './components/stepper-controller/stepper-controller.component';
import { StepContentComponent } from './components/step-content/step-content.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    StepperComponent,
    StepperControllerComponent,
    StepContentComponent
  ],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  activeStep: number = 0;
  constructor() { }

  ngOnInit() {
  }

  updateActiveStep(e: number) {
    if (e == 4) {
      console.log("Start App ...")
    }
    this.activeStep = e;
  }

}
