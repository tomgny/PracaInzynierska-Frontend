import { TestBed } from '@angular/core/testing';

import { MainBoardService } from '../../services/main-board.service';

describe('MainBoardService', () => {
  let service: MainBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
