import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public deltedhero?:String;
  public Heroes:String[]=['Spiderman','Iroman','Hulk','Thor'];

  removeLastHero():void{
    this.deltedhero=this.Heroes.pop();

  }
}
