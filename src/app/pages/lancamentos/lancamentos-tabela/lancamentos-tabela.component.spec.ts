import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosTabelaComponent } from './lancamentos-tabela.component';

describe('LancamentosTabelaComponent', () => {
  let component: LancamentosTabelaComponent;
  let fixture: ComponentFixture<LancamentosTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentosTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentosTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
