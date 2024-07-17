import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-controller',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './app-controller.component.html',
  styleUrl: './app-controller.component.scss'
})
export class AppControllerComponent {

  constructor(private router: Router) { }
  navigateURL(address: string) {
    this.router.navigate([address]);
  }

  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
