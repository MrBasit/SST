import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetViewComponentPopUpComponent } from './set-view-component-pop-up.component';

describe('SetViewComponentPopUpComponent', () => {
  let component: SetViewComponentPopUpComponent;
  let fixture: ComponentFixture<SetViewComponentPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetViewComponentPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetViewComponentPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
