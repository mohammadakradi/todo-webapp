import { Component, Input, OnInit } from '@angular/core';
import { IStepper } from '../../models/stepper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input() activeStep!: number;
  @Input() stepps: IStepper[] = [
    {
      title: 'Step 1',
    },
    {
      title: 'Step 2',
    },
    {
      title: 'Step 3',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
