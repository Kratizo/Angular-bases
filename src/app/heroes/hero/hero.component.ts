
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',

})
export class HeroComponent {
      public name: string = 'ironman';
      public age: number = 45

    get capitalzedName():string{
      return this.name.toUpperCase()
    }

    public getheroDescription():string {
      return `${this.name} - ${this.age}`
    }

      changeHero():void {
          this.name = 'Hulk'
      }

      changeAge(): void {
          this.age = 50
      }

      resetForm(){
        this.name = 'ironman';
        this.age = 45
      }
};


