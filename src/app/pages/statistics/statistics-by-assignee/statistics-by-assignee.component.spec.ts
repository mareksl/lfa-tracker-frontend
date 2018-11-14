import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsByAssigneeComponent } from './statistics-by-assignee.component';

describe('StatisticsByAssigneeComponent', () => {
  let component: StatisticsByAssigneeComponent;
  let fixture: ComponentFixture<StatisticsByAssigneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsByAssigneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsByAssigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
