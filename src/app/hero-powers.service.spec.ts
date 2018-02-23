import { TestBed, inject } from '@angular/core/testing';

import { HeroPowersService } from './hero-powers.service';

describe('HeroPowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroPowersService]
    });
  });

  it('should be created', inject([HeroPowersService], (service: HeroPowersService) => {
    expect(service).toBeTruthy();
  }));
});
