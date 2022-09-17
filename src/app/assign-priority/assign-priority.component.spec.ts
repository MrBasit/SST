import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPriorityComponent } from './assign-priority.component';

describe('AssignPriorityComponent', () => {
  let component: AssignPriorityComponent;
  let fixture: ComponentFixture<AssignPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
