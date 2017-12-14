import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AutoCompleteComponent } from '@syncfusion/ej2-ng-dropdowns'; 
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'my-app',
    //template: `<ej-autocomplete id="atcelement" [dataSource]='sportsData' [fields]='fields' [placeholder]='text' [query]='query' (open)="onOpen($event)" (close)="onClose($event)"></ej-autocomplete>`
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    closeResult: string;
    constructor(private modalService: NgbModal) { 
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
     // To fetch the available child elements in body
    let elements: Element[] = <NodeListOf<Element> & Element[]>document.querySelectorAll('body > *');
    let value: string[] = [];
    for (let i = 0; i < elements.length; i++) {
      var element = document.defaultView.getComputedStyle(elements[i], null);
      if (element.getPropertyValue('position') !== 'static') {
        value.push(element.getPropertyValue('z-index') || element.getPropertyValue('zIndex'));// fetching z-index values 
      }
    }
    // fetching maximum z-index value
    let index: string = Math.max.apply(Math, value);
    // setting z-index to calendar popup element
    args.popup.element.style.zIndex = index + 1;
      } 
    open(content: string) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}