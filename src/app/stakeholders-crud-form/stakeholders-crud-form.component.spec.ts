import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholdersCrudFormComponent } from './stakeholders-crud-form.component';

describe('StakeholdersCrudFormComponent', () => {
  let component: StakeholdersCrudFormComponent;
  let fixture: ComponentFixture<StakeholdersCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholdersCrudFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholdersCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
