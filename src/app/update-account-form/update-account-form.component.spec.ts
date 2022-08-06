import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountFormComponent } from './update-account-form.component';

describe('UpdateAccountFormComponent', () => {
  let component: UpdateAccountFormComponent;
  let fixture: ComponentFixture<UpdateAccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccountFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
