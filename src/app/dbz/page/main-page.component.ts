import { Character } from './../interface/character.interface';
import { Component  } from '@angular/core';

@Component({
  selector: 'app-component-Dbz',
  templateUrl: 'main-page.component.html',
  standalone: false,

})

export class mainPageComponent {


    public charcters: Character[] = [{
      name: 'Krillin',
      power: 1000
    },{
      name: 'Goku',
      power: 9500
    },{
      name: 'Vegeta',
      power: 7500
    }
  ];


}
