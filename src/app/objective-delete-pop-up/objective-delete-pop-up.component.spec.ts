import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveDeletePopUpComponent } from './objective-delete-pop-up.component';

describe('ObjectiveDeletePopUpComponent', () => {
  let component: ObjectiveDeletePopUpComponent;
  let fixture: ComponentFixture<ObjectiveDeletePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveDeletePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveDeletePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
