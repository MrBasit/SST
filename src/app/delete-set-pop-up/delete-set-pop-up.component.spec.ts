import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSetPopUpComponent } from './delete-set-pop-up.component';

describe('DeleteSetPopUpComponent', () => {
  let component: DeleteSetPopUpComponent;
  let fixture: ComponentFixture<DeleteSetPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSetPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSetPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
