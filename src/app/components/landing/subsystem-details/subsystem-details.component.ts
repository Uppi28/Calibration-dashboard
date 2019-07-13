import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-subsystem-details',
  templateUrl: './subsystem-details.component.html',
  styleUrls: ['./subsystem-details.component.scss']
})
export class SubsystemDetailsComponent implements OnInit {
public featureNames =[];
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.currentSubsystem.subscribe(res =>{
 
      let selectedSubName =res;
      console.log(selectedSubName);
    
    this.api.sendFilteredSubdata().subscribe(res =>{
      console.log(res);
      res.map(res=>{
        console.log(res);
      // this.featureData =[];
      this.featureNames=   res.subSystem.filter(res =>{
          // console.log(element);
         
          
            return (res.name === selectedSubName)
       
        
        });
        console.log(this.featureNames);
      });
    });
  });
  this.api.currentMessage.subscribe(res =>{
    this.featureNames = [];
  }) 
  }

}
