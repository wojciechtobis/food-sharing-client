import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderConfirmComponent } from './new-order-confirm.component';

describe('NewOrderConfirmComponent', () => {
  let component: NewOrderConfirmComponent;
  let fixture: ComponentFixture<NewOrderConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
