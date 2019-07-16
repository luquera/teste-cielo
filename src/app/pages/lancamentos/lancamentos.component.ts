import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { LancamentosService } from 'src/app/services/lancamentos/lancamentos.service';
import { BaseLancamentos } from 'src/app/interfaces/base-lancamentos.interface';
import { MatGridList } from '@angular/material/grid-list';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { itemControleLancamento } from 'src/app/interfaces/item-controle-lancamento.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements AfterViewInit  {

  constructor(
    public lancamentosService: LancamentosService,
    private mediaObserver: MediaObserver ,
    private currencyPipe: CurrencyPipe
  ) { }

  @ViewChild(MatGridList, { static: true }) grid: MatGridList;
  public cols: Subject<number> = new Subject();
  public lancamentosData: BaseLancamentos;
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public displayedColumns: string[] = ['Data do lançamento', 'Descrição', 'Número', 'Situação', 'Data de confirmação', 'Dados bancários', 'Valor final'];
  public dataSource: Subject<MatTableDataSource<Object>> = new Subject();

  ngAfterViewInit() {
    this.obterLancamentos();
    this.mediaObserverFlexLayout();
  }

  obterLancamentos() {
    this.lancamentosService
      .getLancamentos()
      .subscribe((data: BaseLancamentos) => {
        this.lancamentosData = data;
        this.formatarLancamentosTabela(this.lancamentosData);
      });
  }

  formatarLancamentosTabela(data: BaseLancamentos) { 
    const dataFormated = data.listaControleLancamento.map((item: itemControleLancamento) => {
      return { 
        'Data do lançamento': item.dataLancamentoContaCorrenteCliente, 
        'Descrição': item.descricaoGrupoPagamento, 
        'Número': item.numeroEvento, 
        'Situação': item.lancamentoContaCorrenteCliente.nomeSituacaoRemessa, 
        'Data de confirmação': item.dataEfetivaLancamento, 
        'Dados bancários': `${item.nomeBanco} 
                            Ag ${item.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroAgencia} 
                            CC ${parseInt(item.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroContaCorrente)}`, 
        'Valor final': this.currencyPipe.transform(item.valorLancamentoRemessa, 'BRL')
      }
    });
      
    const dataSrc = new MatTableDataSource(dataFormated); 
    dataSrc.sort = this.sort;

    this.dataSource.next(dataSrc);
  }

  mediaObserverFlexLayout() {
    this.mediaObserver
      .asObservable()
      .subscribe((changes: MediaChange[]) => {
        if (changes[0].mqAlias == 'xs') {
          this.cols.next(1);
          return;
        }
        this.cols.next(2);
      });
  }

}
