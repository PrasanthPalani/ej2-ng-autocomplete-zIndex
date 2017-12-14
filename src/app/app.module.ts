import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AppComponent } from './app.component';
import { AutoCompleteModule } from '@syncfusion/ej2-ng-dropdowns';


/**
 * Module
 */

@NgModule({
  imports: [BrowserModule, FormsModule, AutoCompleteModule, ReactiveFormsModule, JsonpModule, NgbModule.forRoot()], 
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }