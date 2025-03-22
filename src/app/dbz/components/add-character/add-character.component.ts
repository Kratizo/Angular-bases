import { Component } from '@angular/core';
import { Character } from '../../interface/character.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  public Character: Character = {
    name: '',
    power: 0,

  }



}
