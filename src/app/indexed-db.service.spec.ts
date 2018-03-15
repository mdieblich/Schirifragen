import { TestBed, inject } from '@angular/core/testing';

import { IndexedDbserviceService } from './indexed-dbservice.service';

describe('IndexedDbserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexedDbserviceService]
    });
  });

  it('should be created', inject([IndexedDbserviceService], (service: IndexedDbserviceService) => {
    expect(service).toBeTruthy();
  }));
});
