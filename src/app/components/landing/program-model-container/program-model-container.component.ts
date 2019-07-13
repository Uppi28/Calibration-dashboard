import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import {LandingService} from '../landing.service';
import { FormControl , FormBuilder , FormGroup} from '@angular/forms';
// import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
// import{}


@Component({
  selector: 'app-program-model-container',
  templateUrl: './program-model-container.component.html',
  styleUrls: ['./program-model-container.component.scss']
})
export class ProgramModelContainerComponent implements OnInit {
  private data = [];
  myForm:FormGroup;
  public carDetails;
  public newData;
  public programId;
 public brandData=[];
  public filteredName ;
  public allProgramData =[];
  public matchedFilter;
  public yearData =[];
  public nodata :boolean =true;
  


  // public carDataEnable = false;
  constructor(private apiService: ApiService,
    private landingService:LandingService,
    private fb: FormBuilder
  ) {
    this.myForm= this.fb.group({
      programName:'',
      modelYear:''
    });
    this.landingService.getProgramNameList();
  }


  

 
  ngOnInit() {

    this.myForm.valueChanges.subscribe(value=>{
      console.log(value);
    })
    // this.fetchingData();
  
  // this.apiService.getCarDetails().subscribe(res => {
  //   console.log(res);
  //   this.brandData = res;
  // })

    // this.filter.setValue('T1XX');
    // this.apiService.getProgramI
  }

}
