import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependancyViewDialogComponent } from './dependancy-view-dialog.component';

describe('DependancyViewDialogComponent', () => {
  let component: DependancyViewDialogComponent;
  let fixture: ComponentFixture<DependancyViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependancyViewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependancyViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
