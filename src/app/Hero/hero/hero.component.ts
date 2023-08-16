import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:String ='ironman';
  public age:number=45;

 get capitalizadName():String{
  return this.name.toUpperCase();
 }
 getHeroDescription():String{
  return this.name+"-"+this.age;
 }

changeHero():void{
  this.name="Spiderman";
}

changeAge():void{
  this.age=50;
}

reset(){
  this.name='ironman';
  this.age=45;
}

}
