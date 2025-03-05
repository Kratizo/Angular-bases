import { Component } from "@angular/core";


@Component ({
  selector: 'app-counter',
  standalone: true,
  template: `
<hr>
      <h3>
        counter: {{counter}}
      </h3>

      <button (click)="increaseByone(1)">1+</button>
      <button (click)="Reset()">Reset</button>
      <button (click)="increaseByone(-1)">1-</button>
      <hr>

  <h1>Hola counter</h1>`
})

export class counterComponent {
  public title: string  = 'La aplicacion de angular';
  public counter: number  = 100;

  increaseByone (value: number): void{

    this.counter += value;

}

Reset (): void{

  this.counter = 100;

}
}


