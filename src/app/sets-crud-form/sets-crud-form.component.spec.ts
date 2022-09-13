import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsCrudFormComponent } from './sets-crud-form.component';

describe('SetsCrudFormComponent', () => {
  let component: SetsCrudFormComponent;
  let fixture: ComponentFixture<SetsCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetsCrudFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
