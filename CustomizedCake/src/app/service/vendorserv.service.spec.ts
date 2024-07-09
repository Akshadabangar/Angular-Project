import { TestBed } from '@angular/core/testing';

import { VendorservService } from './vendorserv.service';

describe('VendorservService', () => {
  let service: VendorservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
