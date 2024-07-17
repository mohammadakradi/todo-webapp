import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-picker-column',
  templateUrl: './picker-column.component.html',
  styleUrls: ['./picker-column.component.scss'],
  standalone: true
})
export class PickerColumnComponent implements OnInit, AfterViewInit {
  @Input() options: string[] = [];
  @Input() name!: string;
  @Input() value!: any;
  @Input() itemHeight!: number;
  @Input() columnHeight!: number;
  @Input() valueHour!: string;
  @Output() onChange = new EventEmitter<{ name: string, value: any }>();
  @Output() changeHour = new EventEmitter<string>();
  scrollerTranslate: number = 0;
  minTranslate: number = 0;
  maxTranslate: number = 0;
  isMoving: boolean = false;
  startTouchY: number = 0;
  startScrollerTranslate: number = 0;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.computeTranslate();
  }

  ngAfterViewInit(): void {
    this.scrollToCenter();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.computeTranslate();
    this.scrollToCenter();
  }

  computeTranslate(): void {
    let selectedIndex = this.options.indexOf(this.value);
    if (selectedIndex < 0) {
      console.warn(`Warning: "${this.name}" doesn't contain an option of "${this.value}".`);
      this.onValueSelected(this.options[0]);
      selectedIndex = 0;
    }
    this.scrollerTranslate = this.columnHeight / 2 - this.itemHeight / 2 - selectedIndex * this.itemHeight;
    this.minTranslate = this.columnHeight / 2 - this.itemHeight * this.options.length + this.itemHeight / 2;
    this.maxTranslate = this.columnHeight / 2 - this.itemHeight / 2;
  }

  onValueSelected(newValue: any): void {
    this.onChange.emit({ name: this.name, value: newValue });
    if (this.name === 'Hour') {
      this.changeHour.emit(newValue);
    }
  }

  handleTouchStart(event: TouchEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.startTouchY = event.targetTouches[0].pageY;
    this.startScrollerTranslate = this.scrollerTranslate;
  }

  handleTouchMove(event: TouchEvent): void {
    event.preventDefault();
    event.stopPropagation();
    event.preventDefault();
    const touchY = event.targetTouches[0].pageY;
    let nextScrollerTranslate = this.startScrollerTranslate + touchY - this.startTouchY;

    if (nextScrollerTranslate < this.minTranslate) {
      nextScrollerTranslate = this.minTranslate - Math.pow(this.minTranslate - nextScrollerTranslate, 0.8);
    } else if (nextScrollerTranslate > this.maxTranslate) {
      nextScrollerTranslate = this.maxTranslate + Math.pow(nextScrollerTranslate - this.maxTranslate, 0.8);
    }

    this.scrollerTranslate = nextScrollerTranslate;
    this.isMoving = true;
  }

  handleTouchEnd(event: TouchEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (!this.isMoving) {
      return;
    }
    this.isMoving = false;
    this.startTouchY = 0;
    this.startScrollerTranslate = 0;
    setTimeout(() => {
      this.postMove();
    }, 0);
  }

  postMove(): void {
    let activeIndex: number;
    if (this.scrollerTranslate > this.maxTranslate) {
      activeIndex = 0;
    } else if (this.scrollerTranslate < this.minTranslate) {
      activeIndex = this.options.length - 1;
    } else {
      activeIndex = -Math.floor((this.scrollerTranslate - this.maxTranslate) / this.itemHeight);
    }
    this.onValueSelected(this.options[activeIndex]);
  }

  scrollToCenter(): void {
    const initialScrollPosition = this.options.length * this.itemHeight;
    this.el.nativeElement.querySelector('.picker-scroller').scrollTop = initialScrollPosition;
  }

  handleScroll(event: WheelEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.name === 'Minute' && this.valueHour === '24') {
      return;
    }
    let deltaY: number;
    if (!!event.deltaY) {
      deltaY = event.deltaY;
    } else {
      deltaY = 0;
    }

    const newValue = this.scrollerTranslate - Math.round(deltaY);
    this.scrollerTranslate = Math.max(this.minTranslate, Math.min(this.maxTranslate, newValue));
    this.postWheel();
  }

  postWheel(): void {
    setTimeout(() => {
      if (Date.now() - (this.isMoving ? 250 : 0) < 250) {
        this.postWheel();
        return;
      }
      this.postMove();
    }, 250);
  }

  isCenter(index: number): boolean {
    return index === Math.floor(this.options.length / 2);
  }
}
