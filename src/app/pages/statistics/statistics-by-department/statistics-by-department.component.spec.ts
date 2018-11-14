import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsByDepartmentComponent } from './statistics-by-department.component';

describe('StatisticsByDepartmentComponent', () => {
  let component: StatisticsByDepartmentComponent;
  let fixture: ComponentFixture<StatisticsByDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsByDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsByDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
