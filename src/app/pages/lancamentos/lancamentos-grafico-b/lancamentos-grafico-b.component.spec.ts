import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosGraficoBComponent } from './lancamentos-grafico-b.component';

describe('LancamentosGraficoBComponent', () => {
  let component: LancamentosGraficoBComponent;
  let fixture: ComponentFixture<LancamentosGraficoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentosGraficoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentosGraficoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
