import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { StepperComponent } from './pages/intro/components/stepper/stepper.component';
import { StepperControllerComponent } from './pages/intro/components/stepper-controller/stepper-controller.component';
import { AppControllerComponent } from './shared/components/app-controller/app-controller.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StepperComponent,
    StepperControllerComponent,
    AppControllerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './shared/directives/directives.scss']
})
export class AppComponent {
  activeStep: number = 0;
  title = 'todo-list-telegram';
  isIntro: boolean = true;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        if (event.url !== "/intro") {
          this.isIntro = false
        }
      }
    });
  }

}
