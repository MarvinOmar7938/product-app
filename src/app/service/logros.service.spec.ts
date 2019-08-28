import { TestBed } from '@angular/core/testing';

import { Logros.ServiceService } from './logros.service';

describe('Logros.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Logros.ServiceService = TestBed.get(Logros.ServiceService);
    expect(service).toBeTruthy();
  });
});
