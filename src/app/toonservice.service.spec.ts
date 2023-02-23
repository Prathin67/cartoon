import { TestBed } from '@angular/core/testing';

import { ToonserviceService } from './toonservice.service';

describe('ToonserviceService', () => {
  let service: ToonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
