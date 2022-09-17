import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderDeletePopUpComponent } from './stakeholder-delete-pop-up.component';

describe('StakeholderDeletePopUpComponent', () => {
  let component: StakeholderDeletePopUpComponent;
  let fixture: ComponentFixture<StakeholderDeletePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderDeletePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderDeletePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
