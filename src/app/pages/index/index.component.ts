import { Component } from '@angular/core';
import { AppControllerComponent } from '../../shared/components/app-controller/app-controller.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    AppControllerComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
