import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryUpdateComponent } from './beneficiary-update.component';

describe('BeneficiaryUpdateComponent', () => {
  let component: BeneficiaryUpdateComponent;
  let fixture: ComponentFixture<BeneficiaryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiaryUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeneficiaryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
