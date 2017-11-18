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
var ej2_data_1 = require("@syncfusion/ej2-data");
var AppComponent = (function () {
    function AppComponent() {
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
        document.querySelector('#overlay').classList.add('modal-backdrop', 'fade', 'in');
        var elements = document.querySelectorAll('body > *');
        var value = [];
        for (var i = 0; i < elements.length; i++) {
            var element = document.defaultView.getComputedStyle(elements[i], null);
            if (element.getPropertyValue('position') !== 'static') {
                // fetching z-index values 
                value.push(element.getPropertyValue('z-index') || element.getPropertyValue('zIndex'));
            }
        }
        // fetching maximum z-index value
        var index = Math.max.apply(Math, value);
        // setting z-index of autocomplete
        args.popup.element.style.zIndex = index + 1;
    };
    // bind the open event handler
    AppComponent.prototype.onClose = function (args) {
        document.querySelector('#overlay').classList.remove('modal-backdrop', 'fade', 'in');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<ej-autocomplete id=\"atcelement\" [dataSource]='sportsData' [fields]='fields' [placeholder]='text' [query]='query' (open)=\"onOpen($event)\" (close)=\"onClose($event)\"></ej-autocomplete>"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map