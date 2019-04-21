/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidarService } from './validar.service';

describe('ValidarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidarService]
    });
  });

  it('should ...', inject([ValidarService], (service: ValidarService) => {
    expect(service).toBeTruthy();
  }));
});
