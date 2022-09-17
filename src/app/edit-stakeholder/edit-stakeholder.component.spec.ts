import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStakeholderComponent } from './edit-stakeholder.component';

describe('EditStakeholderComponent', () => {
  let component: EditStakeholderComponent;
  let fixture: ComponentFixture<EditStakeholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStakeholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStakeholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
