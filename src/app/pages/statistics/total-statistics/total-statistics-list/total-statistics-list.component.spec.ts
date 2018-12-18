import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatisticsListComponent } from './total-statistics-list.component';

describe('TotalStatisticsListComponent', () => {
  let component: TotalStatisticsListComponent;
  let fixture: ComponentFixture<TotalStatisticsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalStatisticsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStatisticsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
