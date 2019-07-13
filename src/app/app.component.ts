import { Component } from '@angular/core';
import {ProgramModelContainerComponent} from './components/landing/program-model-container/program-model-container.component';
import { ApiService } from "./components/landing/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gm-tool-ui';
  constructor(public apiService : ApiService){}
  ngOnInit(){
       
    // this.apiService.programSelectionEmitter.subscribe(res => {
    //   console.log('hhuhu');
   
   
    // this.api.filterPrograms().subscribe(res => {
      //   console.log(res);
      // });
    // })
  }
}
