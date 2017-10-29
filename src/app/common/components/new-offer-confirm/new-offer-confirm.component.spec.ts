import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOfferConfirmComponent } from './new-offer-confirm.component';

describe('NewOfferConfirmComponent', () => {
  let component: NewOfferConfirmComponent;
  let fixture: ComponentFixture<NewOfferConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOfferConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOfferConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
