import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { mainPageComponent } from './page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    mainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
   mainPageComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
