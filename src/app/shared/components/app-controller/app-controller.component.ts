import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { ActivatedRoute, Router } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AddTaskComponent } from '../../../pages/add-task/add-task.component';


@Component({
  selector: 'app-controller',
  standalone: true,
  imports: [MatIconModule],
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
