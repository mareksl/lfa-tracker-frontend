import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsByUniverseComponent } from './statistics-by-universe.component';

describe('StatisticsByUniverseComponent', () => {
  let component: StatisticsByUniverseComponent;
  let fixture: ComponentFixture<StatisticsByUniverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsByUniverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsByUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
