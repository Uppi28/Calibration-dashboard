import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuDetailsComponent } from './ecu-details.component';

describe('EcuDetailsComponent', () => {
  let component: EcuDetailsComponent;
  let fixture: ComponentFixture<EcuDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcuDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
