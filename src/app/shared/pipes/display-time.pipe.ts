import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayTime',
  standalone: true
})
export class DisplayTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value === 0) {
      return "00"
    } else {
      return value.toString()
    }
  }

}
