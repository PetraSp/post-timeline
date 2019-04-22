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
/* harmony import */ var _containers_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/timeline/timeline.component */ "./src/app/containers/timeline/timeline.component.ts");
/* harmony import */ var _containers_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/employee-list/employee-list.component */ "./src/app/containers/employee-list/employee-list.component.ts");





var routes = [
    {
        path: '',
        component: _containers_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"]
    },
    {
        path: 'admin',
        component: _containers_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'post-timeline';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _containers_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/timeline/timeline.component */ "./src/app/containers/timeline/timeline.component.ts");
/* harmony import */ var _containers_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/employee-list/employee-list.component */ "./src/app/containers/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _components_edit_dialog_data_edit_dialog_data_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-dialog-data/edit-dialog-data.component */ "./src/app/components/edit-dialog-data/edit-dialog-data.component.ts");
/* harmony import */ var _components_add_employee_form_add_employee_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-employee-form/add-employee-form.component */ "./src/app/components/add-employee-form/add-employee-form.component.ts");
/* harmony import */ var _components_add_post_form_add_post_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-post-form/add-post-form.component */ "./src/app/components/add-post-form/add-post-form.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [_containers_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeListComponent"], _components_edit_dialog_data_edit_dialog_data_component__WEBPACK_IMPORTED_MODULE_12__["EditDialogDataComponent"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"],
                _containers_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeListComponent"],
                _containers_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__["TimelineComponent"],
                _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeComponent"],
                _components_edit_dialog_data_edit_dialog_data_component__WEBPACK_IMPORTED_MODULE_12__["EditDialogDataComponent"],
                _components_add_employee_form_add_employee_form_component__WEBPACK_IMPORTED_MODULE_13__["AddEmployeeFormComponent"],
                _components_add_post_form_add_post_form_component__WEBPACK_IMPORTED_MODULE_14__["AddPostFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-employee-form/add-employee-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/add-employee-form/add-employee-form.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-add-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 30px;\n}\n\n.employee-field {\n    min-height: 80px;\n    min-width: 80px;\n}\n\n.employee-data-wrapper {\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n@media screen and (min-width: 720px) {\n    .employee-add-form {\n        justify-content: center;\n        max-width: 840px;\n        flex-wrap: wrap;\n        flex-direction: row;\n    }\n\n    .employee-data-wrapper {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .employee-field {\n        min-width: 150px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtZW1wbG95ZWUtZm9ybS9hZGQtZW1wbG95ZWUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1lbXBsb3llZS1mb3JtL2FkZC1lbXBsb3llZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUtYWRkLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5lbXBsb3llZS1maWVsZCB7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG59XG5cbi5lbXBsb3llZS1kYXRhLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAgIC5lbXBsb3llZS1hZGQtZm9ybSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXgtd2lkdGg6IDg0MHB4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuXG4gICAgLmVtcGxveWVlLWRhdGEtd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAuZW1wbG95ZWUtZmllbGQge1xuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-employee-form/add-employee-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/add-employee-form/add-employee-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"employee-add-form\" novalidate [formGroup]=\"employeeAdd\" (ngSubmit)=\"onClickAddBtn()\">\n  <div class=\"employee-data-wrapper\">\n    <mat-form-field class=\"employee-field\" floatLabel>\n      <input matInput placeholder=\"Username\" type=\"text\" formControlName=\"username\" [errorStateMatcher]=\"confirmValidMatcher\" />\n      <mat-error>{{errors.username}}</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"employee-field\" floatLabel>\n      <input matInput placeholder=\"Phone\" type=\"phone\" formControlName=\"phone\" [errorStateMatcher]=\"confirmValidMatcher\" />\n      <mat-error>{{errors.phone}}</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"employee-field\" floatLabel>\n      <input matInput placeholder=\"Role\" type=\"text\" formControlName=\"role\" [errorStateMatcher]=\"confirmValidMatcher\" />\n      <mat-error>{{errors.role}}</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"employee-field\" floatLabel>\n      <input matInput placeholder=\"Name\" type=\"text\" formControlName=\"name\" [errorStateMatcher]=\"confirmValidMatcher\" />\n      <mat-error>{{errors.name}}</mat-error>\n    </mat-form-field>\n  </div>\n  <button mat-raised-button [disabled]='!employeeAdd.valid' class=\"employee-add-btn\" color=\"primary\" type=\"submit\">Add</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/add-employee-form/add-employee-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/add-employee-form/add-employee-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddEmployeeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeFormComponent", function() { return AddEmployeeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _validators_phone_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/phone.validator */ "./src/app/validators/phone.validator.ts");





var AddEmployeeFormComponent = /** @class */ (function () {
    function AddEmployeeFormComponent(fb) {
        this.fb = fb;
        this.addEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.confirmValidMatcher = new _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]();
        this.errors = {
            username: 'Username is required and must not contain special characters',
            phone: 'This phone is invalid',
            role: 'Role is required',
            name: 'Name is required',
        };
    }
    AddEmployeeFormComponent.prototype.ngOnInit = function () {
        this.initEmployeeAddForm();
    };
    AddEmployeeFormComponent.prototype.onClickAddBtn = function () {
        this.addEmployee.emit(this.employeeAdd.value);
    };
    AddEmployeeFormComponent.prototype.initEmployeeAddForm = function () {
        var phoneList = this.employees.map(function (employee) { return employee.phone; });
        this.employeeAdd = this.fb.group({
            username: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[\\w-_]+')
                ]
            ],
            phone: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'),
                    Object(_validators_phone_validator__WEBPACK_IMPORTED_MODULE_4__["uniquePhone"])(phoneList)
                ]
            ],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AddEmployeeFormComponent.prototype, "employees", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddEmployeeFormComponent.prototype, "addEmployee", void 0);
    AddEmployeeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-employee-form',
            template: __webpack_require__(/*! ./add-employee-form.component.html */ "./src/app/components/add-employee-form/add-employee-form.component.html"),
            styles: [__webpack_require__(/*! ./add-employee-form.component.css */ "./src/app/components/add-employee-form/add-employee-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddEmployeeFormComponent);
    return AddEmployeeFormComponent;
}());



/***/ }),

/***/ "./src/app/components/add-post-form/add-post-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/add-post-form/add-post-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-add-form {\n    display: flex;\n    min-width: 600px;\n    flex-direction: column;\n    justify-content: center;\n    margin: 30px 0;\n}\n\n.post-field {\n    margin: 10px 0;\n}\n\n.post-add-btn {\n    margin-top: 20px;\n}\n\n@media screen and (max-width: 320px) {\n    .post-add-form {\n        min-width: 95%;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcG9zdC1mb3JtL2FkZC1wb3N0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtcG9zdC1mb3JtL2FkZC1wb3N0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWFkZC1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogNjAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDMwcHggMDtcbn1cblxuLnBvc3QtZmllbGQge1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4ucG9zdC1hZGQtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgIC5wb3N0LWFkZC1mb3JtIHtcbiAgICAgICAgbWluLXdpZHRoOiA5NSU7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/add-post-form/add-post-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-post-form/add-post-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"post-add-form\" novalidate [formGroup]=\"postAdd\" (ngSubmit)=\"onClickAddBtn()\">\n  <mat-form-field class=\"post-field\" floatLabel>\n    <input matInput placeholder=\"Employee\" type=\"text\" formControlName=\"employee\" [errorStateMatcher]=\"confirmValidPMatcher\" />\n    <mat-error>{{errors.employee}}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"post-field\" floatLabel>\n    <textarea matInput placeholder=\"Message\" type=\"text\" formControlName=\"message\" [errorStateMatcher]=\"confirmValidPMatcher\">Message</textarea>\n    <mat-error>{{errors.message}}</mat-error>\n  </mat-form-field>\n  <button mat-raised-button [disabled]='!postAdd.valid' class=\"post-add-btn\" color=\"primary\" type=\"submit\">Create</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/add-post-form/add-post-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-post-form/add-post-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddPostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostFormComponent", function() { return AddPostFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");




var AddPostFormComponent = /** @class */ (function () {
    function AddPostFormComponent(fb) {
        this.fb = fb;
        this.addPost = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.confirmValidPMatcher = new _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]();
        this.errors = {
            employee: 'Employee is required',
            message: 'Message is required'
        };
    }
    AddPostFormComponent.prototype.ngOnInit = function () {
        this.initPostAddForm();
    };
    AddPostFormComponent.prototype.onClickAddBtn = function () {
        this.addPost.emit(this.postAdd.value);
    };
    AddPostFormComponent.prototype.initPostAddForm = function () {
        this.postAdd = this.fb.group({
            employee: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            ],
            message: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            ]
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AddPostFormComponent.prototype, "employees", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddPostFormComponent.prototype, "addPost", void 0);
    AddPostFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-post-form',
            template: __webpack_require__(/*! ./add-post-form.component.html */ "./src/app/components/add-post-form/add-post-form.component.html"),
            styles: [__webpack_require__(/*! ./add-post-form.component.css */ "./src/app/components/add-post-form/add-post-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddPostFormComponent);
    return AddPostFormComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-dialog-data/edit-dialog-data.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/edit-dialog-data/edit-dialog-data.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-field {\n    min-height: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWRpYWxvZy1kYXRhL2VkaXQtZGlhbG9nLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1kaWFsb2ctZGF0YS9lZGl0LWRpYWxvZy1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUtZmllbGQge1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/edit-dialog-data/edit-dialog-data.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edit-dialog-data/edit-dialog-data.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit</h2>\n<form class=\"employee-detail-form\" novalidate [formGroup]=\"employeeDetail\">\n  <mat-form-field class=\"employee-field\" floatLabel>\n    <input matInput placeholder=\"Username\" type=\"text\" formControlName=\"username\" [errorStateMatcher]=\"confirmValidMatcher\" />\n    <mat-error>{{errors.username}}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"employee-field\" floatLabel>\n    <input matInput placeholder=\"Phone\" type=\"phone\" formControlName=\"phone\" [errorStateMatcher]=\"confirmValidMatcher\" />\n    <mat-error>{{errors.phone}}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"employee-field\" floatLabel>\n    <input matInput placeholder=\"Role\" type=\"text\" formControlName=\"role\" [errorStateMatcher]=\"confirmValidMatcher\" />\n    <mat-error>{{errors.role}}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"employee-field\" floatLabel>\n    <input matInput placeholder=\"Name\" type=\"text\" formControlName=\"name\" [errorStateMatcher]=\"confirmValidMatcher\" />\n    <mat-error>{{errors.name}}</mat-error>\n  </mat-form-field>\n  <button [disabled]='!employeeDetail.valid' class=\"edit-form__button\" color=\"primary\" type=\"submit\" mat-raised-button (click)=\"save()\">\n    Save\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/edit-dialog-data/edit-dialog-data.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/edit-dialog-data/edit-dialog-data.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditDialogDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogDataComponent", function() { return EditDialogDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _validators_phone_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validators/phone.validator */ "./src/app/validators/phone.validator.ts");






var EditDialogDataComponent = /** @class */ (function () {
    function EditDialogDataComponent(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.confirmValidMatcher = new _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]();
        this.errors = {
            username: 'Username is required and must not contain special characters',
            phone: 'This phone is invalid',
            role: 'Role is required',
            name: 'Name is required',
        };
    }
    EditDialogDataComponent.prototype.ngOnInit = function () {
        this.initEmployeeDetailForm();
    };
    EditDialogDataComponent.prototype.save = function () {
        this.dialogRef.close(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: this.data.employee.id }, this.employeeDetail.value));
    };
    EditDialogDataComponent.prototype.initEmployeeDetailForm = function () {
        var phoneList = this.data.phoneList;
        var _a = this.data.employee, username = _a.username, phone = _a.phone, role = _a.role, name = _a.name;
        this.employeeDetail = this.fb.group({
            username: [
                username,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[\\w-_]+')
                ]
            ],
            phone: [
                phone,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'),
                    Object(_validators_phone_validator__WEBPACK_IMPORTED_MODULE_5__["uniquePhone"])(phoneList)
                ]
            ],
            role: [role, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EditDialogDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-dialog-data',
            template: __webpack_require__(/*! ./edit-dialog-data.component.html */ "./src/app/components/edit-dialog-data/edit-dialog-data.component.html"),
            styles: [__webpack_require__(/*! ./edit-dialog-data.component.css */ "./src/app/components/edit-dialog-data/edit-dialog-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditDialogDataComponent);
    return EditDialogDataComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/employee.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/employee/employee.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n  min-width: 150px;\n  padding: 15px 0px 15px 20px;\n  margin: 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\ntd:first-of-type {\n  min-width: 20px;\n}\n\n.employee-item {\n  display: flex;\n  flex-direction: column;\n}\n\n.employee-data {\n  display: flex;\n}\n\n.employee-actions {\n  display: flex;\n  min-width: 60px;\n  padding: 0;\n}\n\n.action-icon {\n  margin-left: 10px;\n}\n\n.delete-icon {\n   color: #be0000;\n }\n\n@media screen and (min-width: 720px) {\n  .employee-item {\n    flex-direction: row;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7R0FDRyxjQUFjO0NBQ2hCOztBQUVEO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogMTVweCAwcHggMTVweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG50ZDpmaXJzdC1vZi10eXBlIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xufVxuXG4uZW1wbG95ZWUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5lbXBsb3llZS1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmVtcGxveWVlLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hY3Rpb24taWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGVsZXRlLWljb24ge1xuICAgY29sb3I6ICNiZTAwMDA7XG4gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuZW1wbG95ZWUtaXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/employee/employee.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/employee/employee.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tr class=\"employee-item\">\n  <div class=\"employee-data\">\n    <td *ngFor=\"let key of keys\">\n      {{data[key]}}\n    </td>\n  </div>\n  <div class=\"employee-actions\">\n    <button\n      class=\"action-icon\"\n      mat-icon-button\n      (click)=\"onClickDeleteBtn(data.id)\"\n    >\n      <mat-icon class=\"delete-icon\">delete</mat-icon>\n    </button>\n    <button\n      class=\"action-icon\"\n      mat-icon-button\n      (click)=\"onClickRow(data.id)\"\n    >\n      <mat-icon>edit</mat-icon>\n    </button>\n  </div>\n</tr>\n"

/***/ }),

/***/ "./src/app/components/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
        this.showModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.keys = Object.keys(this.data);
    };
    EmployeeComponent.prototype.onClickRow = function (id) {
        this.showModal.emit(id);
    };
    EmployeeComponent.prototype.onClickDeleteBtn = function (event) {
        this.deleteEmployee.emit(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], EmployeeComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], EmployeeComponent.prototype, "showModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], EmployeeComponent.prototype, "deleteEmployee", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/components/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/components/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/post/post.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  post works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/containers/employee-list/employee-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/containers/employee-list/employee-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-list {\n  max-width: 840px;\n  margin: 0 auto;\n}\n\ntable {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  border-spacing: 0;\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\n}\n\nth {\n  padding: 20px 0 20px 20px;\n  text-align: left;\n  min-width: 150px;\n}\n\nth:first-of-type {\n  min-width: 20px;\n}\n\n@media screen and (max-width: 720px) {\n  .employee-list {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlHQUF5RztBQUMzRzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcGxveWVlLWxpc3Qge1xuICBtYXgtd2lkdGg6IDg0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxudGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKTtcbn1cblxudGgge1xuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG50aDpmaXJzdC1vZi10eXBlIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuZW1wbG95ZWUtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/containers/employee-list/employee-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/containers/employee-list/employee-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"employee-list\">\n  <div class=\"employee-add\">\n    <app-add-employee-form [employees]='employees' (addEmployee)='onAddEmployee($event)'></app-add-employee-form>\n  </div>\n  <table>\n    <tr>\n      <th *ngFor=\"let field of fields\">\n        {{field}}\n      </th>\n    </tr>\n    <app-employee\n      *ngFor=\"let employee of employees\"\n      (deleteEmployee)='onDeleteEmployee($event)'\n      (editEmployee)='onEditEmployee($event)'\n      (showModal)='onShowModal($event)'\n      [data]='employee'\n    >\n    </app-employee>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/containers/employee-list/employee-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/containers/employee-list/employee-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_edit_dialog_data_edit_dialog_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/edit-dialog-data/edit-dialog-data.component */ "./src/app/components/edit-dialog-data/edit-dialog-data.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var employees = [
    { id: 1, username: 'mathilde', phone: '992312312', role: 'CEO', name: 'Mathilde Saylors' },
    { id: 2, username: 'alia', phone: '986733445', role: 'Designer', name: 'Alia Ginder' },
    { id: 3, username: 'freeman', phone: '971232343', role: 'Developer', name: 'Freeman Litten' },
    { id: 4, username: 'piedad', phone: '992362345', role: 'Sales', name: 'Piedad Dewald' },
    { id: 5, username: 'beau', phone: '912342303', role: 'PR', name: 'Beau Siegel' },
];
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(dialog) {
        this.dialog = dialog;
        this.fields = ['ID', 'USERNAME', 'PHONE', 'ROLE', 'NAME'];
        this.employees = employees;
    }
    EmployeeListComponent.prototype.ngOnInit = function () { };
    EmployeeListComponent.prototype.onAddEmployee = function (employee) {
        this.employees = this.employees.concat([
            tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: this.employees.length > 0
                    ? this.employees[this.employees.length - 1].id + 1
                    : 1 }, employee)
        ]);
    };
    EmployeeListComponent.prototype.onDeleteEmployee = function (employeeId) {
        var filteredEmployees = this.employees
            .filter(function (employee) { return employee.id !== Number(employeeId); });
        this.employees = filteredEmployees;
    };
    EmployeeListComponent.prototype.onEditEmployee = function (updatedEmployee) {
        var prevEmployees = this.employees;
        this.employees = prevEmployees.filter(function (prevEmployee) { return prevEmployee.id !== Number(updatedEmployee.id); }).concat([
            updatedEmployee
        ]).sort(function (employeeA, employeeB) { return (employeeA.id - employeeB.id); });
    };
    EmployeeListComponent.prototype.onShowModal = function (employeeId) {
        var _this = this;
        var employeeSel = employees.filter(function (employee) { return employee.id === Number(employeeId); })[0];
        var employeeSelId = employeeSel.id;
        var dialogRef = this.dialog.open(_components_edit_dialog_data_edit_dialog_data_component__WEBPACK_IMPORTED_MODULE_2__["EditDialogDataComponent"], {
            width: '230px',
            data: {
                employee: employeeSel,
                phoneList: employees
                    .filter(function (employee) { return employee.id !== Number(employeeSelId); })
                    .map(function (employee) { return employee.phone; })
            }
        });
        dialogRef.afterClosed().subscribe(function (data) { return (!!data && _this.onEditEmployee(data)); });
    };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/containers/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/containers/employee-list/employee-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/containers/timeline/timeline.component.css":
/*!************************************************************!*\
  !*** ./src/app/containers/timeline/timeline.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline-container {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVsaW5lLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/timeline/timeline.component.html":
/*!*************************************************************!*\
  !*** ./src/app/containers/timeline/timeline.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timeline-container\">\n    <app-add-post-form></app-add-post-form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/containers/timeline/timeline.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/containers/timeline/timeline.component.ts ***!
  \***********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/containers/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/containers/timeline/timeline.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/validators/phone.validator.ts":
/*!***********************************************!*\
  !*** ./src/app/validators/phone.validator.ts ***!
  \***********************************************/
/*! exports provided: uniquePhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniquePhone", function() { return uniquePhone; });
var uniquePhone = function (list) {
    return function (control) {
        if (list.includes(control.value)) {
            return {
                phone: { valid: false }
            };
        }
        return null;
    };
};


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

module.exports = __webpack_require__(/*! /Users/petra/Desktop/timeline/post-timeline/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map