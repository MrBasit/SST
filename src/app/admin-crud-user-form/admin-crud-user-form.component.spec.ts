import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrudUserFormComponent } from './admin-crud-user-form.component';

describe('AdminCrudUserFormComponent', () => {
  let component: AdminCrudUserFormComponent;
  let fixture: ComponentFixture<AdminCrudUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCrudUserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCrudUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
