import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainFormComponent } from './admin-main-form.component';

describe('AdminMainFormComponent', () => {
  let component: AdminMainFormComponent;
  let fixture: ComponentFixture<AdminMainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMainFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
