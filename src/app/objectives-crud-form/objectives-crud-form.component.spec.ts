import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivesCrudFormComponent } from './objectives-crud-form.component';

describe('ObjectivesCrudFormComponent', () => {
  let component: ObjectivesCrudFormComponent;
  let fixture: ComponentFixture<ObjectivesCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectivesCrudFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectivesCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
