import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditObjectiveComponent } from './admin-edit-objective.component';

describe('AdminEditObjectiveComponent', () => {
  let component: AdminEditObjectiveComponent;
  let fixture: ComponentFixture<AdminEditObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditObjectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
