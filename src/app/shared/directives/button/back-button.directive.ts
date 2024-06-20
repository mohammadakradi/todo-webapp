import { Directive } from '@angular/core';

@Directive({
  selector: '[appBackButton]',
  standalone: true
})
export class BackButtonDirective {

  constructor() { }

}
