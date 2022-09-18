import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPriorityUpdateComponent } from './assign-priority-update.component';

describe('AssignPriorityUpdateComponent', () => {
  let component: AssignPriorityUpdateComponent;
  let fixture: ComponentFixture<AssignPriorityUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignPriorityUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPriorityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
