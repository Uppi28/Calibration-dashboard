import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
declare var require: any;
var jsn = require('./dummy.json');
// import * as data from '../../../assets/'
import { ProgramName } from './class'
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  public url = '../../assets/dummy.json';
  public programId;
  jsonData = jsn;
  // public id;
  filterProgramName = [];
  filterModelYear = [];
  selectedProgramObject: any = {};
  selectedModelYear: string;
  selectedProgramName: string;
  ecuList = [];
  subSystemList = [];
  featureList = [];
  constructor() {
  }
  getProgramNameList() {
    this.filterProgramName = this.jsonData.map(item => {
            return item.programName;
    });
  }
  getModelYearList(programName: string) {
    this.selectedProgramName = programName;
    let tempList = this.jsonData.filter(item => item.programName === programName);
    this.filterModelYear = tempList.map(item => item.modelYear)
  }
  getSelectedProgram(modelYear) {
    console.log('programName' , modelYear);
    this.selectedProgramObject = this.jsonData.filter(item => {
      return item.programName === this.selectedProgramName && item.modelYear === modelYear
    })[0];
    // console.log('selected program object', this.selectedProgramObject)
    this.getECUList(null);
    this.getSubSystemList(null);
  }
  getECUList(ecuName: string) {
    if (!ecuName) {
      this.ecuList = this.selectedProgramObject.ecu.map(ecu => {
        return { name: ecu.name, version: ecu.version ,  };
      });
    }else {
      this.ecuList = this.selectedProgramObject.ecu.filter(ecu=>ecu.name===ecuName).map(ecu => {
        return { name: ecu.name, version: ecu.version  };
      });
    }
  }

  getSubSystemList(subSystemName:string){
    console.log("slel=>>>", subSystemName);
    if(subSystemName){
      this.subSystemList=[];
       this.selectedProgramObject.ecu.filter(element => {
        if(subSystemName===element.name)
        this.subSystemList.push(
          {
            name:element.name,
            isDisabled:element.isDisabled,
            features:element.features
          }
          );
      });
    }
    else{
      this.selectedProgramObject.ecu.forEach(element => {   
        console.log(element)
        this.subSystemList.push(
          {
            name:element.name,
            isDisabled:element.isDisabled,
            features:element.features
          }
          );
      });
      console.log(this.subSystemList);
    }
  }




}

