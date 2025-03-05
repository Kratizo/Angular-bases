import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './page/main-page.component';




@NgModule({
  declarations: [
    DbzComponent
  ],
  exports: [
   DbzComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
