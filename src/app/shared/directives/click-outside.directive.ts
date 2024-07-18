import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  private listening: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.listening = true;
    }, 100);  // Adjust the delay time as necessary
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    if (!this.listening) return;
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }

}
