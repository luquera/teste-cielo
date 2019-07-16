import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { LancamentosComponent } from './lancamentos.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { LancamentosGraficoAComponent } from './lancamentos-grafico-a/lancamentos-grafico-a.component';
import { LancamentosGraficoBComponent } from './lancamentos-grafico-b/lancamentos-grafico-b.component';
import { LancamentosTabelaComponent } from './lancamentos-tabela/lancamentos-tabela.component';

@NgModule({
  declarations: [
    LancamentosComponent,
    LancamentosGraficoAComponent,
    LancamentosGraficoBComponent,
    LancamentosTabelaComponent
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
    MatSortModule,
    ChartsModule
  ],
  exports: [
    LancamentosComponent
  ],
  providers:[
    CurrencyPipe
  ]
})
export class LancamentosModule { }
