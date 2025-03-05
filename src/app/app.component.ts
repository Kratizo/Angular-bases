import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  standalone: false
})
export class AppComponent {

  public title: string  = 'La aplicacion de angular';
  public counter: number  = 100;

  increaseByone (value: number): void{

    this.counter += value;

}

Reset (): void{

  this.counter = 100;

}
}




