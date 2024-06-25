import { AfterViewInit, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IStepContent } from '../../models/stepper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() activeStep!: number;
  @Input() stepContents: IStepContent[] = [];

  constructor() { }

}
