"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ej2_data_1 = require("@syncfusion/ej2-data");
var AppComponent = (function () {
    function AppComponent(modalService) {
        this.modalService = modalService;
        //bind the DataManager instance to dataSource property
        this.sportsData = new ej2_data_1.DataManager({
            url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ej2_data_1.ODataV4Adaptor,
            crossDomain: true
        });
        // maps the appropriate column to fields property
        this.fields = { value: 'ContactName' };
        //bind the Query instance to query property
        this.query = new ej2_data_1.Query().select(['ContactName', 'CustomerID']);
        //set the placeholder to AutoComplete input
        this.text = "Find a customer";
    }
    // bind the open event handler
    AppComponent.prototype.onOpen = function (args) {
        debugger;
        // To fetch the available child elements in body
        var elements = document.querySelectorAll('body > *');
        var value = [];
        for (var i = 0; i < elements.length; i++) {
            var element = document.defaultView.getComputedStyle(elements[i], null);
            if (element.getPropertyValue('position') !== 'static') {
                value.push(element.getPropertyValue('z-index') || element.getPropertyValue('zIndex')); // fetching z-index values 
            }
        }
        // fetching maximum z-index value
        var index = Math.max.apply(Math, value);
        // setting z-index to calendar popup element
        args.popup.element.style.zIndex = index + 1;
    };
    AppComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AppComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template: `<ej-autocomplete id="atcelement" [dataSource]='sportsData' [fields]='fields' [placeholder]='text' [query]='query' (open)="onOpen($event)" (close)="onClose($event)"></ej-autocomplete>`
        templateUrl: 'app/app.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map