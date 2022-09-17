import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveViewPopUpComponent } from './objective-view-pop-up.component';

describe('ObjectiveViewPopUpComponent', () => {
  let component: ObjectiveViewPopUpComponent;
  let fixture: ComponentFixture<ObjectiveViewPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveViewPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveViewPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
