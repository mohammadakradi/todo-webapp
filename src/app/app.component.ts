import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { StepperComponent } from './pages/intro/components/stepper/stepper.component';
import { StepperControllerComponent } from './pages/intro/components/stepper-controller/stepper-controller.component';
import { AppControllerComponent } from './shared/components/app-controller/app-controller.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StepperComponent,
    StepperControllerComponent,
    AppControllerComponent,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './shared/directives/directives.scss']
})
export class AppComponent {
  activeStep: number = 0;
  title = 'todo-list-telegram';
  isIntro: boolean = true;
  private router = inject(Router)
  private matIconRegistery = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  constructor() {
    this.matIconRegistery.addSvgIcon(
      "profile",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/profile.svg")
    );
  }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url !== "/intro") {
          this.isIntro = false
        }
      }
    });
  }

}
