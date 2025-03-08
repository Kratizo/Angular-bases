import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';




@NgModule({
  declarations: [
    DbzComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
   DbzComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
