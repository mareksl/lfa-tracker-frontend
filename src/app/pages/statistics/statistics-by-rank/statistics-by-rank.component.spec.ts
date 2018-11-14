import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsByRankComponent } from './statistics-by-rank.component';

describe('StatisticsByRankComponent', () => {
  let component: StatisticsByRankComponent;
  let fixture: ComponentFixture<StatisticsByRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsByRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsByRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
