import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPieChartComponent } from './total-pie-chart.component';

describe('TotalPieChartComponent', () => {
  let component: TotalPieChartComponent;
  let fixture: ComponentFixture<TotalPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
