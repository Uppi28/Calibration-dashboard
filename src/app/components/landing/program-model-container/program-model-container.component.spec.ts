import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramModelContainerComponent } from './program-model-container.component';

describe('ProgramModelContainerComponent', () => {
  let component: ProgramModelContainerComponent;
  let fixture: ComponentFixture<ProgramModelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramModelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramModelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
