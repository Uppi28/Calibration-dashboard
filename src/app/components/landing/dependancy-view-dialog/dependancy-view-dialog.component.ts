import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TreeViewDialogComponent} from '../tree-view-dialog/tree-view-dialog.component';
declare function dependancyView(): any;
@Component({
  selector: 'app-dependancy-view-dialog',
  templateUrl: './dependancy-view-dialog.component.html',
  styleUrls: ['./dependancy-view-dialog.component.scss']
})
export class DependancyViewDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DependancyViewDialogComponent>, public dialog: MatDialog) { }

  onCloseClick() {
    this.dialogRef.close();
  }
  openDialogTree() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(TreeViewDialogComponent, {
      height: '621px',
    width: '1144px',
    });
    dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
    }
  ngOnInit() {
    dependancyView();
  }


}
