import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditStakeholderComponent } from './admin-edit-stakeholder.component';

describe('AdminEditStakeholderComponent', () => {
  let component: AdminEditStakeholderComponent;
  let fixture: ComponentFixture<AdminEditStakeholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditStakeholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditStakeholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
