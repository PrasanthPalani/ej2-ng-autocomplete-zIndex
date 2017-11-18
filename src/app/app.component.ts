import { Component } from '@angular/core';
import { AutoCompleteComponent } from '@syncfusion/ej2-ng-dropdowns'; 
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'my-app',
    template: `<ej-autocomplete id="atcelement" [dataSource]='sportsData' [fields]='fields' [placeholder]='text' [query]='query' (open)="onOpen($event)" (close)="onClose($event)"></ej-autocomplete>`
})
export class AppComponent {
    constructor() { 
    }
    //bind the DataManager instance to dataSource property
    public sportsData: DataManager = new DataManager({
        url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    });
    // maps the appropriate column to fields property
    public fields: Object = { value: 'ContactName' };
    //bind the Query instance to query property
    public query: Query = new Query().select(['ContactName', 'CustomerID']);
    //set the placeholder to AutoComplete input
    public text: string = "Find a customer";
    // bind the open event handler
    onOpen(args: any) {debugger;
      document.querySelector('#overlay').classList.add('modal-backdrop', 'fade', 'in');
      let elements: Element[] = <NodeListOf<Element> & Element[]>document.querySelectorAll('body > *');
      let value: string[] =[];
      for (let i = 0; i < elements.length; i++) {
          var element = document.defaultView.getComputedStyle(elements[i], null);
          if (element.getPropertyValue('position') !== 'static') {
              // fetching z-index values 
              value.push(element.getPropertyValue('z-index') || element.getPropertyValue('zIndex'));
          }
      }
      // fetching maximum z-index value
      let index: string = Math.max.apply(Math, value);
      // setting z-index of autocomplete
      args.popup.element.style.zIndex = index + 1; 
      }
      
    // bind the open event handler
    onClose(args: any) {
       document.querySelector('#overlay').classList.remove('modal-backdrop', 'fade', 'in');
    }
}