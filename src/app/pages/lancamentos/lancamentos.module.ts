import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { LancamentosComponent } from './lancamentos.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    LancamentosComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: LancamentosComponent }
    ]),
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    LancamentosComponent
  ],
  providers:[
    CurrencyPipe
  ]
})
export class LancamentosModule { }
