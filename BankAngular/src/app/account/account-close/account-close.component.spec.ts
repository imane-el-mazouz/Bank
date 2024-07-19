import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCloseComponent } from './account-close.component';

describe('AccountCloseComponent', () => {
  let component: AccountCloseComponent;
  let fixture: ComponentFixture<AccountCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountCloseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
