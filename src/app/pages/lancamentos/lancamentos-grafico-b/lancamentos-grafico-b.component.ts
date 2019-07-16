import { Component, OnInit, Input } from '@angular/core';
import { BaseLancamentos } from 'src/app/interfaces/base-lancamentos.interface';
import { Subject } from 'rxjs';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { itemControleLancamento } from 'src/app/interfaces/item-controle-lancamento.interface';

@Component({
  selector: 'app-lancamentos-grafico-b',
  templateUrl: './lancamentos-grafico-b.component.html',
  styleUrls: ['./lancamentos-grafico-b.component.scss']
})
export class LancamentosGraficoBComponent implements OnInit {
  @Input() lancamentosData : Subject<BaseLancamentos>;
  public enableChart: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
    }
  };

  public barChartLabels: string[] = [];
  public barChartData: ChartDataSets[] = [{ data: [], label: 'Pagamentos por Ano' }]
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartColors = [
    {
      backgroundColor: '#3F51B5',
    },
  ];

  public anos: string[] = [];
  public itemsPorAno = {};

  constructor() { }

  ngOnInit() {
    this.lancamentosData.subscribe((data: BaseLancamentos) => {
        this.configGrafico(data);
    });
  }

  configGrafico(data: BaseLancamentos) {
    // obtem anos
    this.anos = data.listaControleLancamento
      .map((item: itemControleLancamento) => {
        return item.dataEfetivaLancamento.split('/')[2];
      });
    this.anos = [...new Set(this.anos)]
    this.barChartLabels = this.anos;

    // seta dados
    this.anos.forEach((elem) => {
      this.itemsPorAno[elem] = data.listaControleLancamento
        .filter((item: itemControleLancamento) => {
          return item.dataEfetivaLancamento.match(elem)
        });

      this.barChartData[0].data.push(this.itemsPorAno[elem].length);
    });

    this.enableChart = true;
  }

}
