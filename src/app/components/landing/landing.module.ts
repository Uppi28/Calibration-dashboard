import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramModelContainerComponent } from './program-model-container/program-model-container.component';
import { EcuCardComponent } from './ecu-card/ecu-card.component';
import { SubsystemCardComponent } from './subsystem-card/subsystem-card.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import {MaterialModule} from '../../material/material.module';
import { EcuDetailsComponent } from './ecu-details/ecu-details.component';
import { FeatureDetailsComponent } from './feature-details/feature-details.component';
import {SubsystemDetailsComponent} from './subsystem-details/subsystem-details.component';
import { TreeViewDialogComponent } from './tree-view-dialog/tree-view-dialog.component';
import { DependancyViewDialogComponent } from './dependancy-view-dialog/dependancy-view-dialog.component';
import { FilterPipe } from './filter/filter.pipe';

import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';
@NgModule({
  declarations: [ProgramModelContainerComponent, EcuCardComponent,
    SubsystemCardComponent ,
    FeatureCardComponent, EcuDetailsComponent, FeatureDetailsComponent,
    SubsystemDetailsComponent,
    TreeViewDialogComponent,
    DependancyViewDialogComponent,
    FilterPipe

   ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [ ProgramModelContainerComponent,
     EcuCardComponent,
     SubsystemCardComponent,
     FeatureCardComponent,
     SubsystemDetailsComponent,
     FeatureDetailsComponent,
     EcuDetailsComponent
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [TreeViewDialogComponent, DependancyViewDialogComponent],
  providers: [FilterPipe]
})

export class LandingModule { }
