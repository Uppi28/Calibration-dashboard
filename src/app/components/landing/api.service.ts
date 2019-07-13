import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable ,of, Subject } from 'rxjs';
declare var require:any;
var jsn = require('./dummy.json')
// import * as data from '../../../assets/'
import { ProgramName } from './class'
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = '../../assets/dummy.json';
  public programId ;
  // public id;
  public jsonData = [];
  public selectedProgramName ;
  public selectedFeatureName;
  public programNames;
  public filteredName;
  public selectedEcuName;
  public programModel;
  public newData=[];
  public selectedSubsystemName;
  public getFilterdObject =[];
  public filteredEcuName =[];
  public featureDetailsData =[];
  public features =[];
  public ecus = [];
  // public programNames = ['T1XX','T2XX','T3']

  constructor(private http: HttpClient) {
   }

   
getData() {
  // let data = '/assets/dummy.json'
  // console.log(jsn);
  this.jsonData = jsn;
  // console.log(this.jsonData);
  return this.jsonData

}
getProgramData(): Observable<any> {
 let data:any = this.getData();
//  let programName = new ProgramName();
//  programName.name = '';
//  programName.id = '';
 this.programNames = data.map(res=>{
    return res.programName
 })
 return of(this.programNames)
}
getModelYearData(): Observable<any> {
  let data:any = this.getData();
 //  let programName = new ProgramName();
 //  programName.name = '';
 //  programName.id = '';
  this.programModel = data.map(res=>{
     return res.modelYear
  })
  return of(this.programModel)
 }
// public programSelectionEmitter = new Subject();
private messageSource = new BehaviorSubject('default message');
currentMessage = this.messageSource.asObservable();
private ecuName = new BehaviorSubject('BCM');
currentEcu = this.ecuName.asObservable();
private subSysName = new BehaviorSubject('Exterior Lighting');
currentSubsystem = this.subSysName.asObservable();
private featureName = new BehaviorSubject('');
currentFeature = this.featureName.asObservable();
getProgramDetails(name)  {
  this.selectedProgramName = name;
  // console.log('h');
  this.messageSource.next(this.selectedProgramName);
 
  
  
}
getFeatureName(name){
this.selectedFeatureName = name;
this.featureName.next(this.selectedFeatureName);
}
getSubsystemName(name){
  this.selectedSubsystemName =name;
  this.subSysName.next(this.selectedSubsystemName);
  console.log(name);
 }

getFilteredSubsystem():Observable<any>{
  this.filteredName.forEach(res =>{
    this.newData = res.ecu;
     console.log(this.newData);
      })
      return of(this.newData);
}


filterPrograms():Observable<any>{
  this.filteredName= this.getData().filter(res =>{
    console.log(res.programName);
return (res.programName === this.selectedProgramName);

 })
 console.log(this.filteredName);
 return of(this.filteredName);

}
getECUData(name){
this.selectedEcuName = name;
console.log(this.selectedEcuName);
this.ecuName.next(this.selectedEcuName)
}
getFilteredSubdata(data){
console.log(data);
this.getFilterdObject = data;
}
sendFilteredSubdata():Observable<any>{
 
  return of(this.getFilterdObject);
}
getFilteredEcuNameData(name){
this.filteredEcuName = name;
console.log(this.filteredEcuName);
}
getFilteredFeatureData() :Observable<any>{
this.filterPrograms().forEach(res =>{
  console.log(res);
  this.features =[];
  this.ecus = res;


  if(this.ecus.length > 0)
  this.ecus[0].ecu.forEach(element => {
    // console.log(element);
    
    element.subSystem.map(sub => {

      let objs = sub.features.map(res => {
        // res.calPartsFeatures.map(res=>{
        //   console.log(res);
          
        // })
        console.log(res);
          let obj = {
        name :'',
        isDisabled:false,
        calPartsFeatures:[]
      }
      console.log(res);
      obj.name  = res.name;
      obj.isDisabled = res.isDisabled,
      obj.calPartsFeatures = res.calPartsFeatures
      // obj.calPartsFeatures = res.calPartsFeatures
        return obj;
      })
      this.features.push(...objs)
    });
   
  });

  // console.log(this.features[0]);

})
return of(this.features);
}
}