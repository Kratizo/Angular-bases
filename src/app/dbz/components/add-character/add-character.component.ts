import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interface/character.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public Character: Character = {
    name: '',
    power: 0,

  }

  emitCharacter () {
    console.log(this.Character)

    if(this.Character.name.length === 0) return

    this.onNewCharacter.emit(this.Character)

    this.Character.name;
    this.Character.power
  }



}
