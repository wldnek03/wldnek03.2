import { TestBed } from '@angular/core/testing';

import { ServiceJiwooService } from './service-jiwoo.service';

describe('ServiceJiwooService', () => {
  let service: ServiceJiwooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceJiwooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
