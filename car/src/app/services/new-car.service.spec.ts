import { TestBed } from '@angular/core/testing';

import { NewCarService } from './new-car.service';

describe('NewCarService', () => {
  let service: NewCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
