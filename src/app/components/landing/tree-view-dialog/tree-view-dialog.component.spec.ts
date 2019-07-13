import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewDialogComponent } from './tree-view-dialog.component';

describe('TreeViewDialogComponent', () => {
  let component: TreeViewDialogComponent;
  let fixture: ComponentFixture<TreeViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
