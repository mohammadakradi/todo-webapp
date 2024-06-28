import { Component, OnInit } from '@angular/core';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperControllerComponent } from './components/stepper-controller/stepper-controller.component';
import { StepContentComponent } from './components/step-content/step-content.component';
import { IStepContent } from './models/stepper';
import { Router } from '@angular/router';

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
  stepContents: IStepContent[] = [
    {
      title: "Manage Your Tasks",
      subtitle: "Manage your daily tasks for free in To Do",
      image: "../../assets/images/Saly-26.svg"
    },
    {
      title: "Create Routines",
      subtitle: "Change your tasks to daily routines",
      image: "../../assets/images/Saly-19.svg"
    },
    {
      title: "Notify Yourself",
      subtitle: "Set calendar and alarms for your daily tasks",
      image: "../../assets/images/Saly-42.svg"
    },
    {
      title: "Share Your List",
      subtitle: "Share your to do list to stay on track",
      image: "../../assets/images/Saly-31.svg"
    },
    {
      title: "Welcome to ToDo",
      subtitle: "Get Things Done With ToDo",
      image: "../../assets/images/Saly-15.svg"
    },
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  updateActiveStep(activeStep: number) {
    if (activeStep === -1) {
      this.router.navigateByUrl('')
    }
    this.activeStep = activeStep;
  }

}
