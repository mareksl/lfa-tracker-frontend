import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsPaginationComponent } from './funds-pagination.component';

describe('FundsPaginationComponent', () => {
  let component: FundsPaginationComponent;
  let fixture: ComponentFixture<FundsPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
