import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsystemCardComponent } from './subsystem-card.component';

describe('SubsystemCardComponent', () => {
  let component: SubsystemCardComponent;
  let fixture: ComponentFixture<SubsystemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsystemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsystemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
