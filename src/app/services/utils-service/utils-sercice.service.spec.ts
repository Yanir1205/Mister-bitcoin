import { TestBed } from '@angular/core/testing';

import { UtilsSerciceService } from './utils-sercice.service';

describe('UtilsSerciceService', () => {
  let service: UtilsSerciceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsSerciceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
