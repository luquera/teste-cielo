import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { LancamentosService } from 'src/app/services/lancamentos/lancamentos.service';
import { BaseLancamentos } from 'src/app/interfaces/base-lancamentos.interface';
import { MatGridList } from '@angular/material/grid-list';
import { MediaChange, MediaObserver  } from '@angular/flex-layout';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements AfterViewInit  {

  constructor(
    public lancamentosService: LancamentosService,
    private mediaObserver: MediaObserver 
  ) { }

  @ViewChild('grid', { static: true }) grid: MatGridList;
  cols: Subject<any> = new Subject();

  public lancamentosData: BaseLancamentos;

  ngAfterViewInit() {
    this.obterLancamentos();
    this.mediaObserverFlexLayout();
  }

  obterLancamentos() {
    this.lancamentosService
      .getLancamentos()
      .subscribe((data: BaseLancamentos) => this.lancamentosData = data);
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
      }
    );
  }

}
