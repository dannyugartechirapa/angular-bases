import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'

})
export class CounterComponent {
  public counter:number=10;

  increasBy(value:number):void{
    this.counter+=value;
  }
  restablecer(value:number):void{
  this.counter=value;
  }
}
