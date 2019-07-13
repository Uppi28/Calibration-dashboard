import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { element } from 'protractor';
@Component({
  selector: 'app-ecu-details',
  templateUrl: './ecu-details.component.html',
  styleUrls: ['./ecu-details.component.scss']
})
export class EcuDetailsComponent implements OnInit {
public filteredObj = [];
public ecuDetails =[];
public ecuDetailedData =[];
public newArray =[];
public newOne =[];
public secondOne =[];
public showData = false;
  constructor(private api:ApiService) { }
  openData(){
    this.showData=!this.showData;
  }


 ngOnInit() {
    this.api.currentEcu.subscribe(res =>{
      // console.log(res);
      let subsysData =[];
      let newData: any;
      let ecuName = res;
      // this.ecuDetailedData =[];
      this.api.getFilteredSubsystem().subscribe(res =>{
        console.log(res);
      subsysData= res.filter(res =>{
       
          return (res.name === ecuName);
  });
  console.log(subsysData);

    this.filteredObj = subsysData.map(element =>{
      let obj = {
        name : '',
        hardwareVersion : '',
        softwareVersion :'',
        calParts: ''
      };

      obj.name = element.name,
      obj.hardwareVersion = element.hardwareVersion,
      obj.softwareVersion = element.softwareVersion,
     obj.calParts = element.calParts
      return obj;
    });
    this.ecuDetails.push(this.filteredObj);
    console.log(this.ecuDetails);
 
  });
 
  this.ecuDetails.forEach(res =>
  {console.log(res);
this.ecuDetailedData =res;
console.log(this.ecuDetailedData);
  });
  // if(this.ecuDetailedData.length)
  this.ecuDetailedData.map(res =>{
    console.log(res.calParts);
  
    this.newArray = res.calParts;
    // if(newArray.length >= 2){
     this.newOne =this.newArray.slice(2);
    console.log(this.newOne);
    this.secondOne = this.newArray.splice(0,2);
    console.log(this.secondOne);
    // }
    
  })

  });
  this.api.currentMessage.subscribe(res =>{
    this.ecuDetailedData = [];
  })
 
 }
 }


