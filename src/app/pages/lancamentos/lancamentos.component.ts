import { Component, OnInit } from '@angular/core';
import { LancamentosService } from 'src/app/services/lancamentos/lancamentos.service';
import { BaseLancamentos } from 'src/app/interfaces/base-lancamentos.interface';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {

  constructor(
    public lancamentosService: LancamentosService
  ) { }

  public lancamentosData: BaseLancamentos;

  ngOnInit() {
    this.lancamentosService
      .getLancamentos()
      .subscribe((data: BaseLancamentos) => this.lancamentosData = data)
  }

}
