import { TestBed } from '@angular/core/testing';

import { RecosService } from './recos.service';

describe('RecosService', () => {
  let service: RecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
