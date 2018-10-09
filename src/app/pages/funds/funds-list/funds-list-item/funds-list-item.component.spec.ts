import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsListItemComponent } from './funds-list-item.component';

describe('FundsListItemComponent', () => {
  let component: FundsListItemComponent;
  let fixture: ComponentFixture<FundsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
