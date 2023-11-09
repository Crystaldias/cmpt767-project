import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizationsContainerComponent } from './hospitalizations-container.component';

describe('HospitalizationsContainerComponent', () => {
  let component: HospitalizationsContainerComponent;
  let fixture: ComponentFixture<HospitalizationsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalizationsContainerComponent]
    });
    fixture = TestBed.createComponent(HospitalizationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
