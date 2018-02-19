import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'points'
})
export class PointsPipe implements PipeTransform {

  transform(value: number): string {
    const pt:number = Math.round(value * 100) / 100;
    return pt + " " + ((pt === 1)?"Punkt":"Punkte");
  }

}
