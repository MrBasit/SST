import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPriorityViewPopUpComponent } from './assign-priority-view-pop-up.component';

describe('AssignPriorityViewPopUpComponent', () => {
  let component: AssignPriorityViewPopUpComponent;
  let fixture: ComponentFixture<AssignPriorityViewPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignPriorityViewPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPriorityViewPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
