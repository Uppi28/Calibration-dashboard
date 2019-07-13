import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-subsystem-card',
  templateUrl: './subsystem-card.component.html',
  styleUrls: ['./subsystem-card.component.scss']
})
export class SubsystemCardComponent implements OnInit {
  
  ecus = [];
  public subSystems = [];
  constructor(private api: ApiService, 
    private landingService:LandingService
  ) { }
  getSubsystemName(event) {
    // console.log(name);
    let selectedName = event
    this.api.getSubsystemName(selectedName);
  }

  ngOnInit() {
    

  }
}
