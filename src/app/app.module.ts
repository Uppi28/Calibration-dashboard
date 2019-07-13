import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingModule } from './components/landing/landing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './components/landing/api.service';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports: [MaterialModule, BrowserAnimationsModule,
    FormsModule, NgScrollbarModule, ReactiveFormsModule]
})
export class AppModule { }
