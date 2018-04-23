import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyAlertComponent } from './emergency-alert.component';

describe('EmergencyAlertComponent', () => {
  let component: EmergencyAlertComponent;
  let fixture: ComponentFixture<EmergencyAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
