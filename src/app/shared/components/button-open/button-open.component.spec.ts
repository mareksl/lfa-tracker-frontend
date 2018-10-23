import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOpenComponent } from './button-open.component';

describe('ButtonOpenComponent', () => {
  let component: ButtonOpenComponent;
  let fixture: ComponentFixture<ButtonOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
