import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsAdvancedSearchComponent } from './funds-advanced-search.component';

describe('FundsAdvancedSearchComponent', () => {
  let component: FundsAdvancedSearchComponent;
  let fixture: ComponentFixture<FundsAdvancedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsAdvancedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
