import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuCardComponent } from './ecu-card.component';

describe('EcuCardComponent', () => {
  let component: EcuCardComponent;
  let fixture: ComponentFixture<EcuCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcuCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
