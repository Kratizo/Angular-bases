import { Component, Input } from '@angular/core';
import { Character } from '../../interface/character.interface';



@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    @Input()
    public characterList: Character[] = [{
      name: 'Trunks',
      power: 10
    }]


}
