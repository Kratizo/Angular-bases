
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {

  public heroNames: string[]
    = ['Spiderman', 'ironman', 'hulk', 'she hulk', 'Thor']
  public deleteHero?: string ;

  removeLashero(): void {
     this.deleteHero = this.heroNames.pop()
  }
}
