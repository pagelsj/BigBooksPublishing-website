import { TestBed } from '@angular/core/testing';

import { UpdateBookService } from './update-book.service';

describe('UpdateBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateBookService = TestBed.get(UpdateBookService);
    expect(service).toBeTruthy();
  });
});
