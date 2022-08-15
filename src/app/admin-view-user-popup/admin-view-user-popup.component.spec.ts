import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewUserPopupComponent } from './admin-view-user-popup.component';

describe('AdminViewUserPopupComponent', () => {
  let component: AdminViewUserPopupComponent;
  let fixture: ComponentFixture<AdminViewUserPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewUserPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewUserPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
