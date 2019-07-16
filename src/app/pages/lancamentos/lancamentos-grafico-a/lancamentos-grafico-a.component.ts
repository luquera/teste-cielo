import { Component, OnInit, Input } from '@angular/core';
import { BaseLancamentos } from 'src/app/interfaces/base-lancamentos.interface';
import { Subject } from 'rxjs';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { itemControleLancamento } from 'src/app/interfaces/item-controle-lancamento.interface';

@Component({
  selector: 'app-lancamentos-grafico-a',
  templateUrl: './lancamentos-grafico-a.component.html',
  styleUrls: ['./lancamentos-grafico-a.component.scss']
})
export class LancamentosGraficoAComponent implements OnInit {
  @Input() lancamentosData : Subject<BaseLancamentos>;
  public enableChart: boolean = false;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: String[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['#3F51B5', '#E91E63'],
    },
  ];

  public situacoes: string[] = [];
  public itemsPorSituacao = {};

  constructor() { }

  ngOnInit() {
    this.lancamentosData.subscribe((data: BaseLancamentos) => {
        this.configGrafico(data);
    });
  }

  configGrafico(data: BaseLancamentos) {
    // obtem situacoes
    this.situacoes = data.listaControleLancamento
      .map((item: itemControleLancamento) => {
        return item.lancamentoContaCorrenteCliente.nomeSituacaoRemessa;
      });
    this.situacoes = [...new Set(this.situacoes)]
    this.pieChartLabels = this.situacoes;

    // seta dados
    this.situacoes.forEach((elem) => {
      this.itemsPorSituacao[elem] = data.listaControleLancamento
        .filter((item: itemControleLancamento) => {
          return item.lancamentoContaCorrenteCliente.nomeSituacaoRemessa === elem
        });

      this.pieChartData.push(this.itemsPorSituacao[elem].length);
    });

    this.enableChart = true;
  }

  

}
