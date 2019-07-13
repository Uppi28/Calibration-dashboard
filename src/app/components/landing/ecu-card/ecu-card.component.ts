import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { LandingService } from '../landing.service';
// import {ProgramModelContainerComponent} from '../program-model-container/program-model-container.component';


@Component({
  selector: 'app-ecu-card',
  templateUrl: './ecu-card.component.html',
  styleUrls: ['./ecu-card.component.scss'],
  providers: []
})
export class EcuCardComponent implements OnInit {

  private data = [];
  // text = randomText;

  // selectedOptions: string[] = ['BCM'];
  itemFilter: any = { text: '' };
  newData;
  nameData;
  newArray;
  names;
  id;
  i;
  ecus = [];
  allEcus = [];
  ecuNames = [];
  isselected = false;
  constructor(private api: ApiService , 
    private landingService:LandingService
  ) {

  }
  getEcuName(event) {
    // console.log(event);
    this.api.getECUData(event);

  }

  ngOnInit() {
    // console.log('changs');
      }

}
