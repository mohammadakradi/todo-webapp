import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperControllerComponent } from './stepper-controller.component';

describe('StepperControllerComponent', () => {
  let component: StepperControllerComponent;
  let fixture: ComponentFixture<StepperControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
