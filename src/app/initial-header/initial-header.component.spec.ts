import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialHeaderComponent } from './initial-header.component';

describe('InitialHeaderComponent', () => {
  let component: InitialHeaderComponent;
  let fixture: ComponentFixture<InitialHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
