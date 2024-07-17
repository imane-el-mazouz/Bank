import { TestBed } from '@angular/core/testing';

import { LoginComponentService } from './LoginComponent .service';

describe('LoginResponseService', () => {
  let service: LoginComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
