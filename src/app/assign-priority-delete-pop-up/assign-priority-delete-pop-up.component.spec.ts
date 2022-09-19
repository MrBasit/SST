import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPriorityDeletePopUpComponent } from './assign-priority-delete-pop-up.component';

describe('AssignPriorityDeletePopUpComponent', () => {
  let component: AssignPriorityDeletePopUpComponent;
  let fixture: ComponentFixture<AssignPriorityDeletePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignPriorityDeletePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPriorityDeletePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
