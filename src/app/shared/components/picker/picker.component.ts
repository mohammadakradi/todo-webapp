import { Component, Input } from '@angular/core';
import { PickerColumnComponent } from './picker-column/picker-column.component';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss'],
  imports: [PickerColumnComponent],
  standalone: true
})
export class PickerComponent {
  @Input() optionGroups: { [key: string]: string[] } = {};
  @Input() valueGroups: { [key: string]: any } = {};
  @Input() itemHeight: number = 40;
  @Input() height: number = 200;
  valueHour: string = this.valueGroups ? this.valueGroups['Hour'] : '';

  onChange(name: string, value: any): void {
    this.valueGroups[name] = value;
  }

  changeHour(val: string): void {
    this.valueHour = val;
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

}
