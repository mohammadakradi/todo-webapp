import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepperComponent } from './pages/intro/components/stepper/stepper.component';
import { StepperControllerComponent } from './pages/intro/components/stepper-controller/stepper-controller.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StepperComponent,
    StepperControllerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './shared/directives/directives.scss']
})
export class AppComponent {
  activeStep: number = 0;
  title = 'todo-list-telegram';
}
