import { TestBed } from '@angular/core/testing';

import { NgxScriptsLoaderService } from './ngx-scripts-loader.service';

describe('NgxScriptsLoaderService', () => {
  let service: NgxScriptsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxScriptsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
