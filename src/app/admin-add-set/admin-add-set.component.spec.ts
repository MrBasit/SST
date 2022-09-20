import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSetComponent } from './admin-add-set.component';

describe('AdminAddSetComponent', () => {
  let component: AdminAddSetComponent;
  let fixture: ComponentFixture<AdminAddSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
