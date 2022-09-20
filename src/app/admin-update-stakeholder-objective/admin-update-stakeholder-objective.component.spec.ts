import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateStakeholderObjectiveComponent } from './admin-update-stakeholder-objective.component';

describe('AdminUpdateStakeholderObjectiveComponent', () => {
  let component: AdminUpdateStakeholderObjectiveComponent;
  let fixture: ComponentFixture<AdminUpdateStakeholderObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateStakeholderObjectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateStakeholderObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
