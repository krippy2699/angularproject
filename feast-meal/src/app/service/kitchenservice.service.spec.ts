import { TestBed } from '@angular/core/testing';

import { KitchenserviceService } from './kitchenservice.service';

describe('KitchenserviceService', () => {
  let service: KitchenserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitchenserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
