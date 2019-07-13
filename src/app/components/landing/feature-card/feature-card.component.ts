import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { element } from 'protractor';
import { NgScrollbar } from 'ngx-scrollbar';
import { from } from 'rxjs';
@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})

export class FeatureCardComponent implements OnInit {
  // text = randomText;


  shown: 'native' | 'hover' | 'always' = 'native';

  constructor(private api: ApiService) { }
  ecus = [];
  subSystems = [];
  features = [];
  featureData = [];
  featureNames = [];


  getName(name) {
    // console.log(name);
    this.api.getFeatureName(name);

  }
  ngOnInit() {


  }
}
