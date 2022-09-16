import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderViewPopUpComponent } from './stakeholder-view-pop-up.component';

describe('StakeholderViewPopUpComponent', () => {
  let component: StakeholderViewPopUpComponent;
  let fixture: ComponentFixture<StakeholderViewPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderViewPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderViewPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
