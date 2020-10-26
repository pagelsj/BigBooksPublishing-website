import { TestBed } from '@angular/core/testing';

import { CreateBookService } from './create-book.service';

describe('CreateBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateBookService = TestBed.get(CreateBookService);
    expect(service).toBeTruthy();
  });
});
