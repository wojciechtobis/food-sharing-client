import { TestBed, inject } from '@angular/core/testing';

import { NewOfferService } from './new-offer.service';

describe('NewOfferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewOfferService]
    });
  });

  it('should be created', inject([NewOfferService], (service: NewOfferService) => {
    expect(service).toBeTruthy();
  }));
});
