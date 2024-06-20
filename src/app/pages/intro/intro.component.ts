import { Component, OnInit } from '@angular/core';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperControllerComponent } from './components/stepper-controller/stepper-controller.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    StepperComponent,
    StepperControllerComponent
  ],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
