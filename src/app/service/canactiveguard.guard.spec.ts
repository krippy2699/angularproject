import { TestBed } from '@angular/core/testing';

import { CanactiveguardGuard } from './canactiveguard.guard';

describe('CanactiveguardGuard', () => {
  let guard: CanactiveguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanactiveguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
