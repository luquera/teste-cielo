import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Subject, Observable } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { BaseLancamentos } from 'src/app/interfaces/base-lancamentos.interface';
import { itemControleLancamento } from 'src/app/interfaces/item-controle-lancamento.interface';

const TABLE_HEADERS: string[] = [
  'Data do lançamento', 
  'Descrição', 
  'Número', 
  'Situação', 
  'Data de confirmação', 
  'Dados bancários', 
  'Valor final'
];

@Component({
  selector: 'app-lancamentos-tabela',
  templateUrl: './lancamentos-tabela.component.html',
  styleUrls: ['./lancamentos-tabela.component.scss']
})
export class LancamentosTabelaComponent implements OnInit { 
  @Input() lancamentosData : Subject<BaseLancamentos>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public displayedColumns: string[] = TABLE_HEADERS;
  public dataSource: Subject<MatTableDataSource<Object>> = new Subject();

  constructor(
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit() {
    this.lancamentosData.subscribe((data: BaseLancamentos) => {
        this.formatarLancamentosTabela(data);
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
}
