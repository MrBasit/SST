import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddStakeholderObjectiveComponent } from './admin-add-stakeholder-objective.component';

describe('AdminAddStakeholderObjectiveComponent', () => {
  let component: AdminAddStakeholderObjectiveComponent;
  let fixture: ComponentFixture<AdminAddStakeholderObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddStakeholderObjectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddStakeholderObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
