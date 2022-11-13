import { TestBed } from '@angular/core/testing';

import { StateModalWindowService } from './state-modal-window.service';

describe('StateModalWindowService', () => {
  let service: StateModalWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateModalWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
