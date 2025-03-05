import { NgModule } from "@angular/core";
import { counterComponent } from './counter/counter.component';




@NgModule({

  imports: [
    counterComponent
  ],
  exports: [
    counterComponent
  ]
})

export class CounterModule {}
