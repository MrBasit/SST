import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignObjectivesComponent } from './assign-objectives.component';

describe('AssignObjectivesComponent', () => {
  let component: AssignObjectivesComponent;
  let fixture: ComponentFixture<AssignObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignObjectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
