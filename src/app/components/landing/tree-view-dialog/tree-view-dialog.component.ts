import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import * as d3 from 'd3';
import {DependancyViewDialogComponent} from '../dependancy-view-dialog/dependancy-view-dialog.component';
declare function treeView(): any;



@Component({
  selector: 'app-tree-view-dialog',
  templateUrl: './tree-view-dialog.component.html',
  styleUrls: ['./tree-view-dialog.component.scss']
})
export class TreeViewDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TreeViewDialogComponent>, public dialog: MatDialog) { }

  onCloseClick() {
    this.dialogRef.close();
  }
  openDialogDependancy() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(DependancyViewDialogComponent, {
      height: '621px',
    width: '1144px',
    });
    dialogRef.afterClosed().subscribe(result => {
          // console.log(`Dialog result: ${result}`);
        });
  }
  ngOnInit() {
    treeView();
  }


}
