import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCheckupComponent } from './self-checkup.component';

describe('SelfCheckupComponent', () => {
  let component: SelfCheckupComponent;
  let fixture: ComponentFixture<SelfCheckupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCheckupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
