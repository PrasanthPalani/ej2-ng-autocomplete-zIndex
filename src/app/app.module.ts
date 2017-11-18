import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import the DropDownListModule for the DropDownList component
import { AppComponent }  from './app.component';
import { AutoCompleteComponent } from '@syncfusion/ej2-ng-dropdowns';

@NgModule({
  //declaration of ej2-ng-dropdowns module into NgModule
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AutoCompleteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
