import { TestBed } from '@angular/core/testing';

import { ViewCarService } from './view-car.service';

describe('ViewCarService', () => {
  let service: ViewCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
