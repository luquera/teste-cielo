import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosComponent } from './lancamentos.component';



@NgModule({
  declarations: [
    LancamentosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LancamentosComponent
  ]
})
export class LancamentosModule { }
