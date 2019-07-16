import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosComponent } from './lancamentos.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { LancamentosRoutingModule } from './lancamentos-routing.module';


@NgModule({
  declarations: [
    LancamentosComponent
  ],
  imports: [
    LancamentosRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
    LancamentosComponent
  ]
})
export class LancamentosModule { }
