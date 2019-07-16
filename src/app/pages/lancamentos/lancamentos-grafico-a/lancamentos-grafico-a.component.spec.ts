import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosGraficoAComponent } from './lancamentos-grafico-a.component';

describe('LancamentosGraficoAComponent', () => {
  let component: LancamentosGraficoAComponent;
  let fixture: ComponentFixture<LancamentosGraficoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentosGraficoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentosGraficoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
