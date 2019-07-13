import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TreeViewDialogComponent} from '../tree-view-dialog/tree-view-dialog.component';
import {DependancyViewDialogComponent} from '../dependancy-view-dialog/dependancy-view-dialog.component';
import {ApiService} from '../api.service';




@Component({
  selector: 'app-feature-details',
  templateUrl: './feature-details.component.html',
  styleUrls: ['./feature-details.component.scss']
})

export class FeatureDetailsComponent implements OnInit {
 animal: string;
 name: string;
 featureObj  =[];
  constructor(public dialog: MatDialog,private api : ApiService) { }
  openDialogTree() {
  const dialogRef = this.dialog.open(TreeViewDialogComponent, {
    height: '700px',
  width: '1144px',
  });
  dialogRef.afterClosed().subscribe(result => {
        // console.log(`Dialog result: ${result}`);
      });
  }
  openDialogDependancy() {
    const dialogRef = this.dialog.open(DependancyViewDialogComponent, {
      height: '700px',
    width: '1144px',
    });
    dialogRef.afterClosed().subscribe(result => {
          // console.log(`Dialog result: ${result}`);
        });
  }



 ngOnInit() {

  this.api.currentFeature.subscribe(res =>{
    let selectedFeature = res;
  // console.log(this.features);
 this.api.getFilteredFeatureData().subscribe(res =>{
   console.log(res);
  this.featureObj = res.filter(data =>{
    return( data.name === selectedFeature);
   });
   console.log(this.featureObj);
 });
  })
  }



}
