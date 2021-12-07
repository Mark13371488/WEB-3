(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_performers_performers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/performers/performers.component */ "./src/app/components/performers/performers.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");






//import {ProjectInProgressComponent} from "./components/projectinproress/projectinproress.component";
var routes = [
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] },
    { path: 'performers', component: _components_performers_performers_component__WEBPACK_IMPORTED_MODULE_4__["PerformersComponent"] },
    { path: 'customers', component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n    font-size: 1.2em;\n    margin-bottom: 0;\n}\nh2 {\n    font-size: 2em;\n    margin-top: 0;\n    padding-top: 0;\n}\nnav a {\n    padding: 5px 10px;\n    text-decoration: none;\n    margin-top: 10px;\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n}\nnav a:visited, a:link {\n    color: #334953;\n}\nnav a:hover {\n    color: #039be5;\n    background-color: #cfd8dc;\n}\nnav a.active {\n    color: #039be5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDIge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5uYXYgYSB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxubmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcbiAgICBjb2xvcjogIzMzNDk1Mztcbn1cbm5hdiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzAzOWJlNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxubmF2IGEuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAzOWJlNTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n      <app-messages></app-messages>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Lab4';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project-add/project-add.component */ "./src/app/components/project-add/project-add.component.ts");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/project-details/project-details.component */ "./src/app/components/project-details/project-details.component.ts");
/* harmony import */ var _components_performers_performers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/performers/performers.component */ "./src/app/components/performers/performers.component.ts");
/* harmony import */ var _components_performer_add_performer_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/performer-add/performer-add.component */ "./src/app/components/performer-add/performer-add.component.ts");
/* harmony import */ var _components_performer_details_performer_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/performer-details/performer-details.component */ "./src/app/components/performer-details/performer-details.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _components_customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/customer-add/customer-add.component */ "./src/app/components/customer-add/customer-add.component.ts");
/* harmony import */ var _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/customer-details/customer-details.component */ "./src/app/components/customer-details/customer-details.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                _components_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_10__["ProjectAddComponent"],
                _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_11__["ProjectDetailsComponent"],
                _components_performers_performers_component__WEBPACK_IMPORTED_MODULE_12__["PerformersComponent"],
                _components_performer_add_performer_add_component__WEBPACK_IMPORTED_MODULE_13__["PerformerAddComponent"],
                _components_performer_details_performer_details_component__WEBPACK_IMPORTED_MODULE_14__["PerformerDetailsComponent"],
                _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_15__["CustomerComponent"],
                _components_customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_16__["CustomerAddComponent"],
                _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_17__["CustomerDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/customer-add/customer-add.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/customer-add/customer-add.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXItYWRkL2N1c3RvbWVyLWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/customer-add/customer-add.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/customer-add/customer-add.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Customer</h3>\n<form>\n\n  <label for=\"customerId\">id:\n    <input #customerId type=\"number\" name=\"customerId\" required>\n  </label><br>\n\n  <label for=\"customerName\">name:\n    <input #customerName type=\"text\" name=\"customerName\" required>\n  </label><br>\n\n  <label for=\"customerBudget\">budget:\n    <input #customerBudget type=\"number\" name=\"customerBudget\" required>\n  </label><br>\n\n  <button (click)=\"addCustomer(customerId.value,customerName.value,customerBudget.value)\">Add</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/customer-add/customer-add.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/customer-add/customer-add.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddComponent", function() { return CustomerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Customer */ "./src/app/models/Customer.ts");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");





var CustomerAddComponent = /** @class */ (function () {
    function CustomerAddComponent(customersService, messageService) {
        this.customersService = customersService;
        this.messageService = messageService;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CustomerAddComponent.prototype.ngOnInit = function () {
    };
    CustomerAddComponent.prototype.addCustomer = function (id, name, budget) {
        var _this = this;
        var newCustomer = new _models_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](id, name, budget);
        this.customersService.addCustomer(newCustomer).subscribe(function (response) {
            _this.messageService.add(response);
            _this.change();
        });
    };
    CustomerAddComponent.prototype.change = function () {
        this.changed.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerAddComponent.prototype, "changed", void 0);
    CustomerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-add',
            template: __webpack_require__(/*! ./customer-add.component.html */ "./src/app/components/customer-add/customer-add.component.html"),
            styles: [__webpack_require__(/*! ./customer-add.component.css */ "./src/app/components/customer-add/customer-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"], _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], CustomerAddComponent);
    return CustomerAddComponent;
}());



/***/ }),

/***/ "./src/app/components/customer-details/customer-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/customer-details/customer-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXItZGV0YWlscy9jdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/customer-details/customer-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/customer-details/customer-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"customer\">\n  <h2>Customer details</h2>\n  <form>\n\n    <label for=\"customerId\">id:\n      <input #customerId type=\"number\" name=\"customerId\" required disabled value={{customer.id}}>\n    </label><br>\n\n    <label for=\"customerName\">name:\n      <input #customerName type=\"text\" name=\"customerName\" required disabled value={{customer.name}}>\n    </label><br>\n\n    <label for=\"customerBudget\">budget:\n      <input #customerBudget type=\"number\" name=\"customerBudget\" required value={{customer.budget}}>\n    </label><br>\n\n    <button (click)=\"editCustomer(customerId.value,customerName.value,customerBudget.value)\">Edit</button>\n    <button (click)=\"deleteCustomer(customer)\">Delete</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/customer-details/customer-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/customer-details/customer-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Customer */ "./src/app/models/Customer.ts");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");





var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(customersService, messageService) {
        this.customersService = customersService;
        this.messageService = messageService;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
    };
    CustomerDetailsComponent.prototype.editCustomer = function (id, name, budget) {
        var _this = this;
        var editedCustomer = new _models_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](id, name, budget);
        this.customersService.editCustomers(editedCustomer).subscribe(function (response) {
            _this.messageService.add(response);
            _this.customer = editedCustomer;
            _this.change();
        });
    };
    CustomerDetailsComponent.prototype.deleteCustomer = function (customer) {
        var _this = this;
        this.customersService.deleteCustomer(customer).subscribe(function (response) {
            _this.messageService.add(response);
            _this.customer = undefined;
            _this.change();
        });
    };
    CustomerDetailsComponent.prototype.change = function () {
        this.changed.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"])
    ], CustomerDetailsComponent.prototype, "customer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerDetailsComponent.prototype, "changed", void 0);
    CustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/components/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.css */ "./src/app/components/customer-details/customer-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/customer/customer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/customer/customer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-customer-add (changed)=\"getCustomers()\">\n\n</app-customer-add>\n<h2>Customers</h2>\n<ul class=\"customers\">\n  <li *ngFor=\"let customer of customers\" [class.selected]=\"customer === selectedCustomer\" (click)=\"onSelect(customer)\">\n    <span class=\"badge\">{{customer.id}}</span> {{customer.name}} {{customer.budget}}\n  </li>\n</ul>\n\n<app-customer-details [customer]=\"selectedCustomer\" (changed)=\"getCustomers()\">\n\n</app-customer-details>\n"

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");



var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(customersService) {
        this.customersService = customersService;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CustomerComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customersService.getCustomers().subscribe(function (customers) { return _this.customers = customers; });
    };
    CustomerComponent.prototype.onSelect = function (customer) {
        var _this = this;
        this.customersService.getCustomer(customer.id).subscribe(function (customer) { return _this.selectedCustomer = customer; });
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/components/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Agensy</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/customers\">Customers</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/performers\">Performers</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/projects\">Projects</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/projectsInProgress\">Projects In Progress</a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/performer-add/performer-add.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/performer-add/performer-add.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyZm9ybWVyLWFkZC9wZXJmb3JtZXItYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/performer-add/performer-add.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/performer-add/performer-add.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Performer</h3>\n<form>\n\n  <label for=\"performerId\">id:\n    <input #performerId type=\"number\" name=\"performerId\" required>\n  </label><br>\n\n  <label for=\"performerNumber\">number:\n    <input #performerNumber type=\"number\" name=\"performerNumber\" required>\n  </label><br>\n\n  <label for=\"performerExperience\">experience:\n    <input #performerExperience type=\"number\" name=\"performerExperience\" required>\n  </label><br>\n\n  <label for=\"performerWorkers\">workers:\n    <input #performerWorkers type=\"number\" name=\"performerWorkers\" required>\n  </label><br>\n\n  <button (click)=\"addPerformer(performerId.value,performerNumber.value,performerExperience.value,performerWorkers.value)\">Add</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/performer-add/performer-add.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/performer-add/performer-add.component.ts ***!
  \*********************************************************************/
/*! exports provided: PerformerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformerAddComponent", function() { return PerformerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Performer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Performer */ "./src/app/models/Performer.ts");
/* harmony import */ var _services_performers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/performers.service */ "./src/app/services/performers.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");





var PerformerAddComponent = /** @class */ (function () {
    function PerformerAddComponent(performersService, messageService) {
        this.performersService = performersService;
        this.messageService = messageService;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PerformerAddComponent.prototype.ngOnInit = function () {
    };
    PerformerAddComponent.prototype.addPerformer = function (id, number, experience, workers) {
        var _this = this;
        var newPerformer = new _models_Performer__WEBPACK_IMPORTED_MODULE_2__["Performer"](id, number, experience, workers);
        this.performersService.addPerformer(newPerformer).subscribe(function (response) {
            _this.messageService.add(response);
            _this.change();
        });
    };
    PerformerAddComponent.prototype.change = function () {
        this.changed.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PerformerAddComponent.prototype, "changed", void 0);
    PerformerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-performer-add',
            template: __webpack_require__(/*! ./performer-add.component.html */ "./src/app/components/performer-add/performer-add.component.html"),
            styles: [__webpack_require__(/*! ./performer-add.component.css */ "./src/app/components/performer-add/performer-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_performers_service__WEBPACK_IMPORTED_MODULE_3__["PerformersService"], _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], PerformerAddComponent);
    return PerformerAddComponent;
}());



/***/ }),

/***/ "./src/app/components/performer-details/performer-details.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/performer-details/performer-details.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyZm9ybWVyLWRldGFpbHMvcGVyZm9ybWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/performer-details/performer-details.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/performer-details/performer-details.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"performer\">\n  <h2>Performer details</h2>\n  <form>\n\n    <label for=\"performerId\">id:\n      <input #performerId type=\"number\" name=\"performerId\" required disabled value={{performer.id}}>\n    </label><br>\n\n    <label for=\"performerNumber\">number:\n      <input #performerNumber type=\"number\" name=\"performerNumber\" required disabled value={{performer.number}}>\n    </label><br>\n\n    <label for=\"performerExperience\">experience:\n      <input #performerExperience type=\"number\" name=\"performerExperience\" required value={{performer.experience}}>\n    </label><br>\n\n    <label for=\"performerWorkers\">workers:\n      <input #performerWorkers type=\"number\" name=\"performerWorkers\" required value={{performer.workers}}>\n    </label><br>\n\n    <button (click)=\"editPerformer(performerId.value,performerNumber.value,performerExperience.value,performerWorkers.value)\">Edit</button>\n    <button (click)=\"deletePerformer(performer)\">Delete</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/performer-details/performer-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/performer-details/performer-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PerformerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformerDetailsComponent", function() { return PerformerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Performer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Performer */ "./src/app/models/Performer.ts");
/* harmony import */ var _services_performers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/performers.service */ "./src/app/services/performers.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");





var PerformerDetailsComponent = /** @class */ (function () {
    function PerformerDetailsComponent(performersService, messageService) {
        this.performersService = performersService;
        this.messageService = messageService;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PerformerDetailsComponent.prototype.ngOnInit = function () {
    };
    PerformerDetailsComponent.prototype.editPerformer = function (id, number, experience, workers) {
        var _this = this;
        var editedPerformer = new _models_Performer__WEBPACK_IMPORTED_MODULE_2__["Performer"](id, number, experience, workers);
        this.performersService.editPerformers(editedPerformer).subscribe(function (response) {
            _this.messageService.add(response);
            _this.performer = editedPerformer;
            _this.change();
        });
    };
    PerformerDetailsComponent.prototype.deletePerformer = function (performer) {
        var _this = this;
        this.performersService.deletePerformer(performer).subscribe(function (response) {
            _this.messageService.add(response);
            _this.performer = undefined;
            _this.change();
        });
    };
    PerformerDetailsComponent.prototype.change = function () {
        this.changed.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Performer__WEBPACK_IMPORTED_MODULE_2__["Performer"])
    ], PerformerDetailsComponent.prototype, "performer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PerformerDetailsComponent.prototype, "changed", void 0);
    PerformerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-performer-details',
            template: __webpack_require__(/*! ./performer-details.component.html */ "./src/app/components/performer-details/performer-details.component.html"),
            styles: [__webpack_require__(/*! ./performer-details.component.css */ "./src/app/components/performer-details/performer-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_performers_service__WEBPACK_IMPORTED_MODULE_3__["PerformersService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], PerformerDetailsComponent);
    return PerformerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/performers/performers.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/performers/performers.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyZm9ybWVycy9wZXJmb3JtZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/performers/performers.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/performers/performers.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-performer-add (changed)=\"getPerformers()\">\n\n</app-performer-add>\n<h2>Performers</h2>\n<ul class=\"performers\">\n  <li *ngFor=\"let performer of performers\" [class.selected]=\"performer === selectedPerformer\" (click)=\"onSelect(performer)\">\n    <span class=\"badge\">{{performer.id}}</span> {{performer.number}} {{performer.experience}} {{performer.workers}}\n  </li>\n</ul>\n\n<app-performer-details [performer]=\"selectedPerformer\" (changed)=\"getPerformers()\">\n\n</app-performer-details>\n"

/***/ }),

/***/ "./src/app/components/performers/performers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/performers/performers.component.ts ***!
  \***************************************************************/
/*! exports provided: PerformersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformersComponent", function() { return PerformersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_performers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/performers.service */ "./src/app/services/performers.service.ts");



var PerformersComponent = /** @class */ (function () {
    function PerformersComponent(performersService) {
        this.performersService = performersService;
    }
    PerformersComponent.prototype.ngOnInit = function () {
        this.getPerformers();
    };
    PerformersComponent.prototype.getPerformers = function () {
        var _this = this;
        this.performersService.getPerformers().subscribe(function (performers) { return _this.performers = performers; });
    };
    PerformersComponent.prototype.onSelect = function (performer) {
        var _this = this;
        this.performersService.getPerformer(performer.id).subscribe(function (performer) { return _this.selectedPerformer = performer; });
    };
    PerformersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-performers',
            template: __webpack_require__(/*! ./performers.component.html */ "./src/app/components/performers/performers.component.html"),
            styles: [__webpack_require__(/*! ./performers.component.css */ "./src/app/components/performers/performers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_performers_service__WEBPACK_IMPORTED_MODULE_2__["PerformersService"]])
    ], PerformersComponent);
    return PerformersComponent;
}());



/***/ }),

/***/ "./src/app/components/project-add/project-add.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/project-add/project-add.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1hZGQvcHJvamVjdC1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project-add/project-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-add/project-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Project</h3>\n<form>\n\n  <label for=\"projectId\">id:\n    <input #projectId type=\"number\" name=\"projectId\" required>\n  </label><br>\n\n  <label for=\"projectName\">name:\n    <input #projectName type=\"text\" name=\"projectName\" required>\n  </label><br>\n\n  <label for=\"projectDescription\">description:\n    <input #projectDescription type=\"text\" name=\"projectDescription\" required>\n  </label><br>\n\n  <label for=\"projectCustomer\">customer:\n    <input #projectCustomer type=\"text\" name=\"projectCustomer\" required>\n  </label><br>\n\n  <label for=\"projectSkill\">skill:\n    <input #projectSkill type=\"number\" name=\"projectSkill\" required>\n  </label><br>\n\n  <button (click)=\"addProject(projectId.value,projectName.value,projectDescription.value,projectCustomer.value,projectSkill.value)\">Add</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/project-add/project-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/project-add/project-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAddComponent", function() { return ProjectAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Project */ "./src/app/models/Project.ts");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");





var ProjectAddComponent = /** @class */ (function () {
    function ProjectAddComponent(projectsService, messageService) {
        this.projectsService = projectsService;
        this.messageService = messageService;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProjectAddComponent.prototype.ngOnInit = function () {
    };
    ProjectAddComponent.prototype.addProject = function (id, name, description, customer, skill) {
        var _this = this;
        var newProject = new _models_Project__WEBPACK_IMPORTED_MODULE_2__["Project"](id, name, description, customer, skill);
        this.projectsService.addProject(newProject).subscribe(function (response) {
            _this.messageService.add(response);
            _this.change();
        });
    };
    ProjectAddComponent.prototype.change = function () {
        this.changed.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectAddComponent.prototype, "changed", void 0);
    ProjectAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-add',
            template: __webpack_require__(/*! ./project-add.component.html */ "./src/app/components/project-add/project-add.component.html"),
            styles: [__webpack_require__(/*! ./project-add.component.css */ "./src/app/components/project-add/project-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"], _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], ProjectAddComponent);
    return ProjectAddComponent;
}());



/***/ }),

/***/ "./src/app/components/project-details/project-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\">\n  <h2>Project details</h2>\n  <form>\n\n    <label for=\"projectId\">id:\n      <input #projectId type=\"number\" name=\"projectId\" required disabled value={{project.id}}>\n    </label><br>\n\n    <label for=\"projectName\">name:\n      <input #projectName type=\"text\" name=\"projectName\" required value={{project.name}}>\n    </label><br>\n\n    <label for=\"projectDescription\">description:\n      <input #projectDescription type=\"text\" name=\"projectDescription\" required disabled value={{project.Description}}>\n    </label><br>\n\n    <label for=\"projectCustomer\">customer:\n      <input #projectCustomer type=\"text\" name=\"projectCustomer\" required value={{project.customer}}>\n    </label><br>\n\n    <label for=\"projectSkill\">skill:\n      <input #projectSkill type=\"number\" name=\"projectSkill\" required value={{project.skill}}>\n    </label><br>\n\n    <button (click)=\"editProject(projectId.value,projectName.value,projectDescription.value,projectCustomer.value,projectSkill.value)\">Edit</button>\n    <button (click)=\"deleteProject(project)\">Delete</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Project */ "./src/app/models/Project.ts");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");





var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(projectsService, messageService) {
        this.projectsService = projectsService;
        this.messageService = messageService;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
    };
    ProjectDetailsComponent.prototype.editProject = function (id, name, description, customer, skill) {
        var _this = this;
        var editedProject = new _models_Project__WEBPACK_IMPORTED_MODULE_2__["Project"](id, name, description, customer, skill);
        this.projectsService.editProjects(editedProject).subscribe(function (response) {
            _this.messageService.add(response);
            _this.project = editedProject;
            _this.change();
        });
    };
    ProjectDetailsComponent.prototype.deleteProject = function (project) {
        var _this = this;
        this.projectsService.deleteProject(project).subscribe(function (response) {
            _this.messageService.add(response);
            _this.project = undefined;
            _this.change();
        });
    };
    ProjectDetailsComponent.prototype.change = function () {
        this.changed.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Project__WEBPACK_IMPORTED_MODULE_2__["Project"])
    ], ProjectDetailsComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectDetailsComponent.prototype, "changed", void 0);
    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/components/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.css */ "./src/app/components/project-details/project-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-project-add (changed)=\"getProjects()\">\n\n</app-project-add>\n<h2>Projects</h2>\n<ul class=\"projects\">\n  <li *ngFor=\"let project of projects\" [class.selected]=\"project === selectedProject\" (click)=\"onSelect(project)\">\n    <span class=\"badge\">{{project.id}}</span> {{project.name}} {{project.description}} {{project.customer}} {{project.skill}}\n  </li>\n</ul>\n\n<app-project-details [project]=\"selectedProject\" (changed)=\"getProjects()\">\n\n</app-project-details>\n"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectsService) {
        this.projectsService = projectsService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectsService.getProjects().subscribe(function (projects) { return _this.projects = projects; });
    };
    ProjectsComponent.prototype.onSelect = function (project) {
        var _this = this;
        this.projectsService.getProject(project.id).subscribe(function (project) { return _this.selectedProject = project; });
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/models/Customer.ts":
/*!************************************!*\
  !*** ./src/app/models/Customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(id, name, budget) {
        this.id = id;
        this.name = name;
        this.budget = budget;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/models/Performer.ts":
/*!*************************************!*\
  !*** ./src/app/models/Performer.ts ***!
  \*************************************/
/*! exports provided: Performer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Performer", function() { return Performer; });
var Performer = /** @class */ (function () {
    function Performer(id, number, experience, workers) {
        this.id = id;
        this.number = number;
        this.experience = experience;
        this.workers = workers;
    }
    return Performer;
}());



/***/ }),

/***/ "./src/app/models/Project.ts":
/*!***********************************!*\
  !*** ./src/app/models/Project.ts ***!
  \***********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(id, name, description, customer, skill) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.customer = customer;
        this.skill = skill;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/services/customers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/customers.service.ts ***!
  \***********************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CustomersService = /** @class */ (function () {
    function CustomersService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.customersUrl = "http://localhost:3000/customers";
    }
    CustomersService.prototype.getCustomers = function () {
        this.log("Fetch all customers");
        return this.http.get(this.customersUrl);
    };
    CustomersService.prototype.getCustomer = function (id) {
        this.log("Fetch customer with id " + id);
        return this.http.get(this.customersUrl + "/" + id);
    };
    CustomersService.prototype.addCustomer = function (customer) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Content-Type', ['application/json']);
        this.log("Add customer with id " + customer.id);
        return this.http.post("" + this.customersUrl, customer, { headers: headers, responseType: 'text' });
    };
    CustomersService.prototype.editCustomers = function (customer) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Content-Type', ['application/json']);
        this.log("Edit customer with id " + customer.id);
        return this.http.put("" + this.customersUrl, customer, { headers: headers, responseType: 'text' });
    };
    CustomersService.prototype.deleteCustomer = function (customer) {
        this.log("Delete customer with id " + customer.id);
        return this.http.delete(this.customersUrl + "/" + customer.id, { responseType: "text" });
    };
    CustomersService.prototype.log = function (message) {
        this.messageService.add("CustomersService: " + message);
    };
    CustomersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/performers.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/performers.service.ts ***!
  \************************************************/
/*! exports provided: PerformersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformersService", function() { return PerformersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PerformersService = /** @class */ (function () {
    function PerformersService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.performersUrl = "http://localhost:3000/performers";
    }
    PerformersService.prototype.getPerformers = function () {
        this.log("Fetch all performers");
        return this.http.get(this.performersUrl);
    };
    PerformersService.prototype.getPerformer = function (id) {
        this.log("Fetch performer with id " + id);
        return this.http.get(this.performersUrl + "/" + id);
    };
    PerformersService.prototype.addPerformer = function (performer) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Content-Type', ['application/json']);
        this.log("Add performer with id " + performer.id);
        return this.http.post("" + this.performersUrl, performer, { headers: headers, responseType: 'text' });
    };
    PerformersService.prototype.editPerformers = function (performer) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Content-Type', ['application/json']);
        this.log("Edit performer with id " + performer.id);
        return this.http.put("" + this.performersUrl, performer, { headers: headers, responseType: 'text' });
    };
    PerformersService.prototype.deletePerformer = function (performer) {
        this.log("Delete performer with id " + performer.id);
        return this.http.delete(this.performersUrl + "/" + performer.id, { responseType: "text" });
    };
    PerformersService.prototype.log = function (message) {
        this.messageService.add("PerformersService: " + message);
    };
    PerformersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], PerformersService);
    return PerformersService;
}());



/***/ }),

/***/ "./src/app/services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ProjectsService = /** @class */ (function () {
    function ProjectsService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.projectsUrl = "http://localhost:3000/projects";
    }
    ProjectsService.prototype.getProjects = function () {
        this.log("Fetch all projects");
        return this.http.get(this.projectsUrl);
    };
    ProjectsService.prototype.getProject = function (id) {
        this.log("Fetch project with id " + id);
        return this.http.get(this.projectsUrl + "/" + id);
    };
    ProjectsService.prototype.addProject = function (project) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Content-Type', ['application/json']);
        this.log("Add project with id " + project.id);
        return this.http.post("" + this.projectsUrl, project, { headers: headers, responseType: 'text' });
    };
    ProjectsService.prototype.editProjects = function (project) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Content-Type', ['application/json']);
        this.log("Edit project with id " + project.id);
        return this.http.put("" + this.projectsUrl, project, { headers: headers, responseType: 'text' });
    };
    ProjectsService.prototype.deleteProject = function (project) {
        this.log("Delete project with id " + project.id);
        return this.http.delete(this.projectsUrl + "/" + project.id, { responseType: "text" });
    };
    ProjectsService.prototype.log = function (message) {
        this.messageService.add("ProjectsService: " + message);
    };
    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dimar\Desktop\Lab_web-master\lab4 web\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map