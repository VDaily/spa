import { TestBed } from '@angular/core/testing';

import { SocialItemsService } from './social-items.service';

describe('SocialItemsService', () => {
  let service: SocialItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
