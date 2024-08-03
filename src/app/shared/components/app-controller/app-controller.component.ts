import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddTaskComponent } from '../../../pages/add-task/add-task.component';


@Component({
  selector: 'app-controller',
  standalone: true,
  imports: [],
  templateUrl: './app-controller.component.html',
  styleUrl: './app-controller.component.scss'
})
export class AppControllerComponent {

  constructor(
    private router: Router,
    private _bottomSheet: MatBottomSheet
  ) { }
  navigateURL(address: string) {
    this.router.navigateByUrl(address);
  }

  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }

  openAddTask() {
    this._bottomSheet.open(AddTaskComponent);
  }
}
