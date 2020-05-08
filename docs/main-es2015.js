(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "./src/app/pages/contact-page/contact-page.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "./src/app/pages/contact-details/contact-details.component.ts");
/* harmony import */ var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact-edit/contact-edit.component */ "./src/app/pages/contact-edit/contact-edit.component.ts");
/* harmony import */ var _pages_statistics_page_statistics_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/statistics-page/statistics-page.component */ "./src/app/pages/statistics-page/statistics-page.component.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _services_auth_guard_service_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-guard-service/auth-guard-service.service */ "./src/app/services/auth-guard-service/auth-guard-service.service.ts");











const routes = [
    { path: 'signup', component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__["SignupPageComponent"] },
    { path: 'contact', component: _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_2__["ContactPageComponent"], canActivate: [_services_auth_guard_service_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'contact/edit/:id', component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_5__["ContactEditComponent"], canActivate: [_services_auth_guard_service_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'contact/edit', component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_5__["ContactEditComponent"], canActivate: [_services_auth_guard_service_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'contact/:id', component: _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailsComponent"], canActivate: [_services_auth_guard_service_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'statistics', component: _pages_statistics_page_statistics_page_component__WEBPACK_IMPORTED_MODULE_6__["StatisticsPageComponent"], canActivate: [_services_auth_guard_service_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'home', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"], canActivate: [_services_auth_guard_service_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cmps_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmps/nav-bar/nav-bar.component */ "./src/app/cmps/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'mister-bitcoin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "contact-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cmps_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cmps_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmps/nav-bar/nav-bar.component */ "./src/app/cmps/nav-bar/nav-bar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "./src/app/pages/contact-page/contact-page.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cmps/contact-preview/contact-preview.component */ "./src/app/cmps/contact-preview/contact-preview.component.ts");
/* harmony import */ var _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cmps/contact-list/contact-list.component */ "./src/app/cmps/contact-list/contact-list.component.ts");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "./src/app/pages/contact-details/contact-details.component.ts");
/* harmony import */ var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/contact-edit/contact-edit.component */ "./src/app/pages/contact-edit/contact-edit.component.ts");
/* harmony import */ var _pages_statistics_page_statistics_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/statistics-page/statistics-page.component */ "./src/app/pages/statistics-page/statistics-page.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
/* harmony import */ var _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cmps/chart/chart.component */ "./src/app/cmps/chart/chart.component.ts");
/* harmony import */ var _cmps_filter_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cmps/filter/filter.component */ "./src/app/cmps/filter/filter.component.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _cmps_bit_transfer_bit_transfer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cmps/bit-transfer/bit-transfer.component */ "./src/app/cmps/bit-transfer/bit-transfer.component.ts");
/* harmony import */ var _cmps_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cmps/transactions-list/transactions-list.component */ "./src/app/cmps/transactions-list/transactions-list.component.ts");
/* harmony import */ var _cmps_transaction_preview_transaction_preview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cmps/transaction-preview/transaction-preview.component */ "./src/app/cmps/transaction-preview/transaction-preview.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _directives_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/forbidden-name.directive */ "./src/app/directives/forbidden-name.directive.ts");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_13__["GoogleChartsModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _cmps_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"],
        _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
        _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_8__["ContactPreviewComponent"],
        _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_9__["ContactListComponent"],
        _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_10__["ContactDetailsComponent"],
        _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_11__["ContactEditComponent"],
        _pages_statistics_page_statistics_page_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsPageComponent"],
        _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_14__["ChartComponent"],
        _cmps_filter_filter_component__WEBPACK_IMPORTED_MODULE_15__["FilterComponent"],
        _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_16__["SignupPageComponent"],
        _cmps_bit_transfer_bit_transfer_component__WEBPACK_IMPORTED_MODULE_17__["BitTransferComponent"],
        _cmps_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_18__["TransactionsListComponent"],
        _cmps_transaction_preview_transaction_preview_component__WEBPACK_IMPORTED_MODULE_19__["TransactionPreviewComponent"],
        _directives_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_21__["ForbiddenValidatorDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_13__["GoogleChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _cmps_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"],
                    _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                    _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_8__["ContactPreviewComponent"],
                    _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_9__["ContactListComponent"],
                    _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_10__["ContactDetailsComponent"],
                    _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_11__["ContactEditComponent"],
                    _pages_statistics_page_statistics_page_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsPageComponent"],
                    _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_14__["ChartComponent"],
                    _cmps_filter_filter_component__WEBPACK_IMPORTED_MODULE_15__["FilterComponent"],
                    _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_16__["SignupPageComponent"],
                    _cmps_bit_transfer_bit_transfer_component__WEBPACK_IMPORTED_MODULE_17__["BitTransferComponent"],
                    _cmps_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_18__["TransactionsListComponent"],
                    _cmps_transaction_preview_transaction_preview_component__WEBPACK_IMPORTED_MODULE_19__["TransactionPreviewComponent"],
                    _directives_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_21__["ForbiddenValidatorDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_13__["GoogleChartsModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cmps/bit-transfer/bit-transfer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cmps/bit-transfer/bit-transfer.component.ts ***!
  \*************************************************************/
/*! exports provided: BitTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitTransferComponent", function() { return BitTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service/user-service.service */ "./src/app/services/user-service/user-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function BitTransferComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not enough money! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BitTransferComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BitTransferComponent_div_10_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.bitTransferForm.get("amount").errors.userDoesntHaveEnoughMoney);
} }
class BitTransferComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        debugger;
        this.bitTransferForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [], [this.userDoesntHaveEnoughMoney]),
        }, { validators: [], asyncValidators: [] });
    }
    onSubmit(value) {
        debugger;
        this.userService.addMove(this.contact, this.amount);
        //do not enable any transfer if user doesn't have enough money!
        //make it appear with validation!
    }
    userDoesntHaveEnoughMoney(control) {
        debugger;
        //check if the current user has enough money and return a new observable with the answer
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observable) => {
            if ((this.userCoins - this.amount > 0) && (this.amount > 0)) {
                observable.next({ 'amount': true });
            }
            else {
                observable.next(null);
            }
        });
    }
}
BitTransferComponent.ɵfac = function BitTransferComponent_Factory(t) { return new (t || BitTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
BitTransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BitTransferComponent, selectors: [["bit-transfer"]], inputs: { contact: "contact", userCoins: "userCoins" }, decls: 11, vars: 4, consts: [[1, "transaction-cmp-container"], [1, "transaction-contact"], [1, "transaction-form-container"], [1, "transfer-form", 3, "formGroup", "ngSubmit"], ["for", "amount"], ["type", "number", "name", "amount", "formControlName", "amount", 3, "ngModel", "ngModelChange"], [1, "btn", 3, "click"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function BitTransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BitTransferComponent_Template_form_ngSubmit_4_listener($event) { return ctx.onSubmit(ctx.bitTransferForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BitTransferComponent_Template_input_ngModelChange_7_listener($event) { return ctx.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BitTransferComponent_Template_button_click_8_listener($event) { return ctx.onSubmit(ctx.bitTransferForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BitTransferComponent_div_10_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Transfer Bit to ", ctx.contact.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.bitTransferForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bitTransferForm.get("amount").invalid && (ctx.bitTransferForm.get("amount").dirty || ctx.bitTransferForm.get("amount").touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".transaction-contact[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.transaction-form-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9iaXQtdHJhbnNmZXIvQzpcXFVzZXJzXFx5YW5pclxcRGVza3RvcFxcbWlzdGVyYml0Y29pbiBmcm9tIGdpdGh1YlxcTWlzdGVyLWJpdGNvaW4vc3JjXFxhcHBcXGNtcHNcXGJpdC10cmFuc2ZlclxcYml0LXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbXBzL2JpdC10cmFuc2Zlci9iaXQtdHJhbnNmZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7VUFBQSxxQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY21wcy9iaXQtdHJhbnNmZXIvYml0LXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zYWN0aW9uLWNvbnRhY3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcbiIsIi50cmFuc2FjdGlvbi1jb250YWN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BitTransferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bit-transfer',
                templateUrl: './bit-transfer.component.html',
                styleUrls: ['./bit-transfer.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userCoins: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cmps/chart/chart.component.ts":
/*!***********************************************!*\
  !*** ./src/app/cmps/chart/chart.component.ts ***!
  \***********************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");



class ChartComponent {
    constructor() {
    }
    ngOnChanges(changes) {
        const newData = changes.chart.currentValue.data.map(item => {
            return [item.x, item.y];
        });
        this.chart.data = newData;
        this.myOptions = {
            //graph animation:
            animation: {
                duration: 1000,
                easing: 'ease-int-out',
                startup: true
            },
            width: 550,
            height: 350,
            colors: ['#ed4d6e'],
            curveType: 'function',
            backgroundColor: 'transparent',
            // chartArea: { width: '65%'},
            titleTextStyle: {
                color: 'white',
                fontSize: 16,
                bold: false,
                italic: false
            },
            hAxis: { textStyle: { color: 'white' } },
            vAxis: { textStyle: { color: 'white' } },
            legend: { textStyle: { color: 'white' } },
        };
    }
    ngOnInit() {
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], inputs: { chart: "chart" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 5, consts: [[3, "title", "type", "data", "columnNames", "options"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "google-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.chart.title)("type", ctx.chart.type)("data", ctx.chart.data)("columnNames", ctx.chart.columnNames)("options", ctx.myOptions);
    } }, directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart',
                templateUrl: './chart.component.html',
                styleUrls: ['./chart.component.scss']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cmps/contact-list/contact-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cmps/contact-list/contact-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-preview/contact-preview.component */ "./src/app/cmps/contact-preview/contact-preview.component.ts");




function ContactListComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "contact-preview", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", contact_r7);
} }
class ContactListComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["contact-list"]], inputs: { contacts: "contacts" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "contact"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactListComponent_p_0_Template, 2, 1, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_2__["ContactPreviewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvY29udGFjdC1saXN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-list',
                templateUrl: './contact-list.component.html',
                styleUrls: ['./contact-list.component.scss']
            }]
    }], function () { return []; }, { contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cmps/contact-preview/contact-preview.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cmps/contact-preview/contact-preview.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPreviewComponent", function() { return ContactPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ContactPreviewComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    contactClick() {
        this.router.navigate(['/contact', this.contact._id]);
    }
}
ContactPreviewComponent.ɵfac = function ContactPreviewComponent_Factory(t) { return new (t || ContactPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ContactPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPreviewComponent, selectors: [["contact-preview"]], inputs: { contact: "contact" }, decls: 3, vars: 1, consts: [[1, "contact-preview-container", 3, "click"], ["src", "https://res.cloudinary.com/due4sgv19/image/upload/v1582009348/bsal7g8oifemvty90xsu.png", 1, "user-img"]], template: function ContactPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPreviewComponent_Template_div_click_0_listener($event) { return ctx.contactClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contact.name, " ");
    } }, styles: [".contact-preview-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 15px;\n  margin-bottom: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n.contact-preview-container[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.contact-preview-container[_ngcontent-%COMP%]:hover {\n  color: orangered;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9jb250YWN0LXByZXZpZXcvQzpcXFVzZXJzXFx5YW5pclxcRGVza3RvcFxcbWlzdGVyYml0Y29pbiBmcm9tIGdpdGh1YlxcTWlzdGVyLWJpdGNvaW4vc3JjXFxhcHBcXGNtcHNcXGNvbnRhY3QtcHJldmlld1xcY29udGFjdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbXBzL2NvbnRhY3QtcHJldmlldy9jb250YWN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSw4QkFBQTtFQUFBLDhCQUFBO1VBQUEsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDRUo7QURDQTtFQUNFLGdCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jbXBzL2NvbnRhY3QtcHJldmlldy9jb250YWN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAudXNlci1pbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbi5jb250YWN0LXByZXZpZXctY29udGFpbmVyOmhvdmVyIHtcclxuICBjb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcbiIsIi5jb250YWN0LXByZXZpZXctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFjdC1wcmV2aWV3LWNvbnRhaW5lciAudXNlci1pbWcge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29udGFjdC1wcmV2aWV3LWNvbnRhaW5lcjpob3ZlciB7XG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-preview',
                templateUrl: './contact-preview.component.html',
                styleUrls: ['./contact-preview.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cmps/filter/filter.component.ts":
/*!*************************************************!*\
  !*** ./src/app/cmps/filter/filter.component.ts ***!
  \*************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterComponent {
    constructor() {
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onFilterChange(filterBy) {
        this.onFilter.emit(filterBy);
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], outputs: { onFilter: "onFilter" }, decls: 1, vars: 0, consts: [["placeholder", "Search Contacts", 1, "search-contacts", 3, "keyup"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FilterComponent_Template_input_keyup_0_listener($event) { return ctx.onFilterChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".search-contacts[_ngcontent-%COMP%] {\n  height: 20px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9maWx0ZXIvQzpcXFVzZXJzXFx5YW5pclxcRGVza3RvcFxcbWlzdGVyYml0Y29pbiBmcm9tIGdpdGh1YlxcTWlzdGVyLWJpdGNvaW4vc3JjXFxhcHBcXGNtcHNcXGZpbHRlclxcZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbXBzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY29udGFjdHMge1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuIiwiLnNlYXJjaC1jb250YWN0cyB7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.scss']
            }]
    }], function () { return []; }, { onFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/cmps/nav-bar/nav-bar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/cmps/nav-bar/nav-bar.component.ts ***!
  \***************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavBarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["contact-nav-bar"]], decls: 7, vars: 0, consts: [[1, "main-nav"], ["exact", "", "routerLink", "/home", "routerLinkActive", "selected", 1, "main-nav-item"], ["src", "assets/icons/home2.png", "alt", "Home", "width", "24px", "height", "24px"], ["routerLink", "/contact", "routerLinkActive", "selected", 1, "main-nav-item"], ["src", "assets/icons/phone-book.png", "alt", "Contacts", "width", "24px", "height", "24px"], ["routerLink", "/statistics", "routerLinkActive", "selected", 1, "main-nav-item"], ["src", "assets/icons/pie-chart (1).png", "alt", "Statistics", "width", "24px", "height", "24px"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".main-nav[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  padding: 8px 20px;\n  border-bottom: 1px solid #ddbf6f;\n}\n\n.main-nav-item[_ngcontent-%COMP%] {\n  -webkit-transition: box-shadow 0.1s ease-in-out;\n  transition: box-shadow 0.1s ease-in-out;\n  border-radius: 4px;\n  width: 30px;\n  height: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.main-nav-item.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  background-color: #7fc7ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9uYXYtYmFyL0M6XFxVc2Vyc1xceWFuaXJcXERlc2t0b3BcXG1pc3RlcmJpdGNvaW4gZnJvbSBnaXRodWJcXE1pc3Rlci1iaXRjb2luL3NyY1xcYXBwXFxjbXBzXFxuYXYtYmFyXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbXBzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVFO0VBQ0UsK0NBQUE7RUFBQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY21wcy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkYmY2ZjtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tbmF2LWl0ZW0ge1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubWFpbi1uYXYtaXRlbS5zZWxlY3RlZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmM3ZmY7XHJcbiAgfVxyXG4iLCIubWFpbi1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRiZjZmO1xufVxuXG4ubWFpbi1uYXYtaXRlbSB7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4tbmF2LWl0ZW0uc2VsZWN0ZWQge1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmYzdmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/cmps/transaction-preview/transaction-preview.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/cmps/transaction-preview/transaction-preview.component.ts ***!
  \***************************************************************************/
/*! exports provided: TransactionPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPreviewComponent", function() { return TransactionPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TransactionPreviewComponent {
    constructor() {
    }
    ngOnInit() {
        this.date = new Date(this.move.at).toLocaleDateString() + ' ' + new Date(this.move.at).toLocaleTimeString();
    }
}
TransactionPreviewComponent.ɵfac = function TransactionPreviewComponent_Factory(t) { return new (t || TransactionPreviewComponent)(); };
TransactionPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionPreviewComponent, selectors: [["transaction-preview"]], inputs: { move: "move" }, decls: 7, vars: 3, consts: [[1, "transaction-preview"]], template: function TransactionPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("To: ", ctx.move.to, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("At: ", ctx.date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Amount: ", ctx.move.amount, "");
    } }, styles: [".transaction-preview[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 2px;\n  text-align: center;\n  border-bottom: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy90cmFuc2FjdGlvbi1wcmV2aWV3L0M6XFxVc2Vyc1xceWFuaXJcXERlc2t0b3BcXG1pc3RlcmJpdGNvaW4gZnJvbSBnaXRodWJcXE1pc3Rlci1iaXRjb2luL3NyY1xcYXBwXFxjbXBzXFx0cmFuc2FjdGlvbi1wcmV2aWV3XFx0cmFuc2FjdGlvbi1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbXBzL3RyYW5zYWN0aW9uLXByZXZpZXcvdHJhbnNhY3Rpb24tcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvdHJhbnNhY3Rpb24tcHJldmlldy90cmFuc2FjdGlvbi1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zYWN0aW9uLXByZXZpZXcge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuIiwiLnRyYW5zYWN0aW9uLXByZXZpZXcge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transaction-preview',
                templateUrl: './transaction-preview.component.html',
                styleUrls: ['./transaction-preview.component.scss']
            }]
    }], function () { return []; }, { move: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cmps/transactions-list/transactions-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cmps/transactions-list/transactions-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: TransactionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsListComponent", function() { return TransactionsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _transaction_preview_transaction_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transaction-preview/transaction-preview.component */ "./src/app/cmps/transaction-preview/transaction-preview.component.ts");




function TransactionsListComponent_div_0_div_4_transaction_preview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "transaction-preview", 6);
} if (rf & 2) {
    const move_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("move", move_r12);
} }
function TransactionsListComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransactionsListComponent_div_0_div_4_transaction_preview_1_Template, 1, 1, "transaction-preview", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r13 < ctx_r11.numOfTransactionToDisplay);
} }
function TransactionsListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TransactionsListComponent_div_0_div_4_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.title, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.moves);
} }
class TransactionsListComponent {
    constructor() {
        this.moves = [];
        this.title = 'Your last 3 Transactions';
        this.numOfTransactionToDisplay = 3;
    }
    ngOnInit() {
        if (this.title !== 'Your last 3 Transactions') {
            this.numOfTransactionToDisplay = this.moves.length;
        }
    }
}
TransactionsListComponent.ɵfac = function TransactionsListComponent_Factory(t) { return new (t || TransactionsListComponent)(); };
TransactionsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionsListComponent, selectors: [["transactions-list"]], inputs: { moves: "moves", title: "title" }, decls: 1, vars: 1, consts: [["class", "transaction-list-container", 4, "ngIf"], [1, "transaction-list-container"], [1, "transaction-title-container"], ["class", "transaction-preview-container", 4, "ngFor", "ngForOf"], [1, "transaction-preview-container"], [3, "move", 4, "ngIf"], [3, "move"]], template: function TransactionsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TransactionsListComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moves.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _transaction_preview_transaction_preview_component__WEBPACK_IMPORTED_MODULE_2__["TransactionPreviewComponent"]], styles: [".transaction-list-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 20px;\n}\n.transaction-list-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy90cmFuc2FjdGlvbnMtbGlzdC9DOlxcVXNlcnNcXHlhbmlyXFxEZXNrdG9wXFxtaXN0ZXJiaXRjb2luIGZyb20gZ2l0aHViXFxNaXN0ZXItYml0Y29pbi9zcmNcXGFwcFxcY21wc1xcdHJhbnNhY3Rpb25zLWxpc3RcXHRyYW5zYWN0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbXBzL3RyYW5zYWN0aW9ucy1saXN0L3RyYW5zYWN0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDWkY7QURhRTtFQUNFLDBCQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9jbXBzL3RyYW5zYWN0aW9ucy1saXN0L3RyYW5zYWN0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnRyYW5zYWN0aW9uLWxpc3QtY29udGFpbmVyIHtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNDU0NjtcclxuLy8gICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4vLyAgIHAge1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4udHJhbnNhY3Rpb24tbGlzdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuIiwiLnRyYW5zYWN0aW9uLWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi50cmFuc2FjdGlvbi1saXN0LWNvbnRhaW5lciBwIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transactions-list',
                templateUrl: './transactions-list.component.html',
                styleUrls: ['./transactions-list.component.scss']
            }]
    }], function () { return []; }, { moves: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/directives/forbidden-name.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/forbidden-name.directive.ts ***!
  \********************************************************/
/*! exports provided: forbiddenNameValidator, ForbiddenValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenValidatorDirective", function() { return ForbiddenValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/** A hero's name can't match the given regular expression */
function forbiddenNameValidator(nameRe) {
    return (control) => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}
class ForbiddenValidatorDirective {
    validate(control) {
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
            : null;
    }
}
ForbiddenValidatorDirective.ɵfac = function ForbiddenValidatorDirective_Factory(t) { return new (t || ForbiddenValidatorDirective)(); };
ForbiddenValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ForbiddenValidatorDirective, selectors: [["", "ForbiddenName", ""]], inputs: { forbiddenName: ["ForbiddenName", "forbiddenName"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], useExisting: ForbiddenValidatorDirective, multi: true }])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ForbiddenValidatorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[ForbiddenName]',
                providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], useExisting: ForbiddenValidatorDirective, multi: true }]
            }]
    }], null, { forbiddenName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['ForbiddenName']
        }] }); })();


/***/ }),

/***/ "./src/app/models/chart.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/chart.model.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartModel; });
class ChartModel {
    constructor(title, type, data, columnNames) {
        this.title = title;
        this.type = type;
        this.data = data;
        this.columnNames = columnNames;
    }
}


/***/ }),

/***/ "./src/app/models/contact.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/contact.model.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactModel; });
class ContactModel {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this._id = null;
    }
    setId() {
        this._id = this._makeId();
    }
    _makeId(length = 10) {
        let txt = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return txt;
    }
}


/***/ }),

/***/ "./src/app/pages/contact-details/contact-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/contact-details/contact-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contact-service/contact-service */ "./src/app/services/contact-service/contact-service.ts");
/* harmony import */ var src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service/user-service.service */ "./src/app/services/user-service/user-service.service.ts");
/* harmony import */ var _cmps_bit_transfer_bit_transfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cmps/bit-transfer/bit-transfer.component */ "./src/app/cmps/bit-transfer/bit-transfer.component.ts");
/* harmony import */ var _cmps_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/transactions-list/transactions-list.component */ "./src/app/cmps/transactions-list/transactions-list.component.ts");







class ContactDetailsComponent {
    constructor(route, contactService, router, userService) {
        this.route = route;
        this.contactService = contactService;
        this.router = router;
        this.userService = userService;
        this.title = 'Your recent transactions';
    }
    ngOnInit() {
        //on every change on the id in the url - re-render the details page
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            this.contactSubscriber = this.contactService.getContactById(id).subscribe(contact => {
                this.contact = contact;
            });
            this.userSubscriber = this.userService.user$.subscribe(user => {
                this.user = user;
                this.moves = this.user.moves.filter(move => {
                    return move.toId === this.contact._id;
                });
            });
        });
    }
    ngOnDestroy() {
        this.contactSubscriber.unsubscribe();
        this.userSubscriber.unsubscribe();
    }
    goBack() {
        this.router.navigate(['/contact']);
    }
    editContact() {
        this.router.navigate(['/contact/edit', this.contact._id]);
    }
}
ContactDetailsComponent.ɵfac = function ContactDetailsComponent_Factory(t) { return new (t || ContactDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
ContactDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactDetailsComponent, selectors: [["contact-details"]], decls: 16, vars: 7, consts: [[1, "contact-details-top-container"], [1, "contact-details-container"], [1, "contact-details-buttons"], [1, "btn", 3, "click"], [1, "transactions-container"], [3, "contact", "userCoins"], [3, "moves", "title"]], template: function ContactDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDetailsComponent_Template_button_click_9_listener($event) { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDetailsComponent_Template_button_click_11_listener($event) { return ctx.editContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "bit-transfer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "transactions-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", ctx.contact)("userCoins", ctx.user.coins);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moves", ctx.moves)("title", ctx.title);
    } }, directives: [_cmps_bit_transfer_bit_transfer_component__WEBPACK_IMPORTED_MODULE_4__["BitTransferComponent"], _cmps_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_5__["TransactionsListComponent"]], styles: [".contact-details-container[_ngcontent-%COMP%] {\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 20px;\n}\n.contact-details-container[_ngcontent-%COMP%]   .contact-details-buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 10px;\n}\n.transactions-container[_ngcontent-%COMP%] {\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #4e4546;\n  border-radius: 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 360px;\n  margin: 0 auto;\n}\n.contact-details-top-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 91vh;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1kZXRhaWxzL0M6XFxVc2Vyc1xceWFuaXJcXERlc2t0b3BcXG1pc3RlcmJpdGNvaW4gZnJvbSBnaXRodWJcXE1pc3Rlci1iaXRjb2luL3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdC1kZXRhaWxzXFxjb250YWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtZGV0YWlscy9jb250YWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0FDRUo7QURFQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0LWRldGFpbHMvY29udGFjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtZGV0YWlscy1jb250YWluZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIC5jb250YWN0LWRldGFpbHMtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbnMtY29udGFpbmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0NTQ2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAzNjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNvbnRhY3QtZGV0YWlscy10b3AtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiA5MXZoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59IiwiLmNvbnRhY3QtZGV0YWlscy1jb250YWluZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29udGFjdC1kZXRhaWxzLWNvbnRhaW5lciAuY29udGFjdC1kZXRhaWxzLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udHJhbnNhY3Rpb25zLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0NTQ2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMzYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFjdC1kZXRhaWxzLXRvcC1jb250YWluZXIge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogOTF2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-details',
                templateUrl: './contact-details.component.html',
                styleUrls: ['./contact-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/contact-edit/contact-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-edit/contact-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contact-service/contact-service */ "./src/app/services/contact-service/contact-service.ts");




class ContactEditComponent {
    constructor(route, contactService, router) {
        this.route = route;
        this.contactService = contactService;
        this.router = router;
    }
    ngOnInit() {
        this.editableContact = this.contactService.getEmptyContact();
        this.paramSubscriber = this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            if (id) {
                //edit mode:
                this.contactSubscriber = this.contactService.getContactById(id).subscribe(contact => {
                    this.editableContact.name = contact.name;
                    this.editableContact.email = contact.email;
                    this.editableContact.phone = contact.phone;
                    this.editableContact._id = contact._id;
                });
            }
        });
    }
    ngOnDestroy() {
        var _a;
        this.paramSubscriber.unsubscribe();
        (_a = this.contactSubscriber) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    goBack() {
        if (this.editableContact._id) {
            this.router.navigate(['/contact', this.editableContact._id]);
        }
        else {
            this.router.navigate(['/contact']);
        }
    }
    saveContact() {
        //any service use shall be done using subscribe. the navigate shall happen only after the service has finished its job!
        this.contactService.saveContact(this.editableContact);
        this.router.navigate(['contact']);
    }
    delete() {
        //show the delete button only on edit mode!
        this.contactService.deleteContact(this.editableContact._id);
        this.router.navigate(['contact']);
    }
    inputChange(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.editableContact[field] = value;
    }
}
ContactEditComponent.ɵfac = function ContactEditComponent_Factory(t) { return new (t || ContactEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ContactEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactEditComponent, selectors: [["contact-edit"]], decls: 21, vars: 3, consts: [[1, "contact-form"], ["for", "name"], ["name", "name", "type", "text", 3, "value", "keyup"], ["for", "email"], ["name", "email", "type", "text", 3, "value", "keyup"], ["for", "phone"], ["name", "phone", "type", "text", 3, "value", "keyup"], [1, "contact-edit-buttons"], [1, "btn", 3, "click"]], template: function ContactEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContactEditComponent_Template_input_keyup_5_listener($event) { return ctx.inputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContactEditComponent_Template_input_keyup_9_listener($event) { return ctx.inputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContactEditComponent_Template_input_keyup_13_listener($event) { return ctx.inputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactEditComponent_Template_button_click_15_listener($event) { return ctx.saveContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactEditComponent_Template_button_click_17_listener($event) { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactEditComponent_Template_button_click_19_listener($event) { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.editableContact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.editableContact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.editableContact.phone);
    } }, styles: [".contact-form[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 20px;\n}\n.contact-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  -webkit-box-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.contact-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-bottom: 10px;\n}\n.contact-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.contact-edit-buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1lZGl0L0M6XFxVc2Vyc1xceWFuaXJcXERlc2t0b3BcXG1pc3RlcmJpdGNvaW4gZnJvbSBnaXRodWJcXE1pc3Rlci1iaXRjb2luL3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdC1lZGl0XFxjb250YWN0LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtZWRpdC9jb250YWN0LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREFFO0VBQ0Usc0JBQUE7VUFBQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0VKO0FEREk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNHTjtBREZNO0VBQ0ksaUJBQUE7QUNJVjtBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC1lZGl0L2NvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGl2IHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmNvbnRhY3QtZWRpdC1idXR0b25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIiwiLmNvbnRhY3QtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGFjdC1mb3JtIGRpdiB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWN0LWZvcm0gZGl2IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFjdC1mb3JtIGRpdiBkaXYgbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRhY3QtZWRpdC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-edit',
                templateUrl: './contact-edit.component.html',
                styleUrls: ['./contact-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contact-service/contact-service */ "./src/app/services/contact-service/contact-service.ts");
/* harmony import */ var _cmps_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmps/filter/filter.component */ "./src/app/cmps/filter/filter.component.ts");
/* harmony import */ var _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cmps/contact-list/contact-list.component */ "./src/app/cmps/contact-list/contact-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function () { return ["/contact/edit"]; };
class ContactPageComponent {
    constructor(contactService) {
        this.contactService = contactService;
    }
    ngOnInit() {
        //when this page loads
        //call the contactService to get the contacts from the mocked server
        //then, subscribe to any changes made in the data to re-render the list on every change
        //this approach requires use of ngOnDestroy to unsubscribe !
        // this.contactService.loadContacts();
        // this.contactService.contacts$.subscribe((contacts) => {
        //   this.contacts = contacts
        // })
        //different approach (and more convenient)
        this.contactService.loadContacts(null);
        this.contacts$ = this.contactService.contacts$;
    }
    onFilter(filterBy) {
        this.contactService.loadContacts(filterBy);
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["contact-page"]], decls: 10, vars: 5, consts: [[1, "contact-page-container"], [1, "filter-and-add-contact-container"], [1, "filter-container"], [3, "onFilter"], [1, "contacts-list-container"], [3, "contacts"], [1, "add-contact-container"], [3, "routerLink"], ["src", "../../../assets/add-group.png", 1, "create-contact"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFilter", function ContactPageComponent_Template_app_filter_onFilter_3_listener($event) { return ctx.onFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "contact-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.contacts$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_cmps_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"], _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_3__["ContactListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".contact-page-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n          flex-direction: column-reverse;\n}\n.contact-page-container[_ngcontent-%COMP%]   .filter-and-add-contact-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 20px;\n  height: 95vw;\n}\n.contact-page-container[_ngcontent-%COMP%]   .add-contact-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.contact-page-container[_ngcontent-%COMP%]   .add-contact-container[_ngcontent-%COMP%]   .create-contact[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 20px;\n  width: 35px;\n  text-align: center;\n  cursor: pointer;\n}\n.filter-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.contacts-list-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow-y: scroll;\n  height: 66vh;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1wYWdlL0M6XFxVc2Vyc1xceWFuaXJcXERlc2t0b3BcXG1pc3RlcmJpdGNvaW4gZnJvbSBnaXRodWJcXE1pc3Rlci1iaXRjb2luL3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdC1wYWdlXFxjb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDhCQUFBO1VBQUEsOEJBQUE7QUNDRjtBREFFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRUo7QURBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNFSjtBRERJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dOO0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtcGFnZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIC5maWx0ZXItYW5kLWFkZC1jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDk1dnc7XHJcbiAgfVxyXG4gIC5hZGQtY29udGFjdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmNyZWF0ZS1jb250YWN0IHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFjdHMtbGlzdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGhlaWdodDogNjZ2aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufSIsIi5jb250YWN0LXBhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuLmNvbnRhY3QtcGFnZS1jb250YWluZXIgLmZpbHRlci1hbmQtYWRkLWNvbnRhY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA5NXZ3O1xufVxuLmNvbnRhY3QtcGFnZS1jb250YWluZXIgLmFkZC1jb250YWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhY3QtcGFnZS1jb250YWluZXIgLmFkZC1jb250YWN0LWNvbnRhaW5lciAuY3JlYXRlLWNvbnRhY3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweDtcbiAgd2lkdGg6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsdGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdHMtbGlzdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDY2dmg7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-page',
                templateUrl: './contact-page.component.html',
                styleUrls: ['./contact-page.component.scss']
            }]
    }], function () { return [{ type: _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-service/user-service.service */ "./src/app/services/user-service/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_bitcoin_service_bitcoin_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bitcoin-service/bitcoin-service.service */ "./src/app/services/bitcoin-service/bitcoin-service.service.ts");
/* harmony import */ var _cmps_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cmps/transactions-list/transactions-list.component */ "./src/app/cmps/transactions-list/transactions-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







class HomePageComponent {
    constructor(userService, route, bitcoinService) {
        this.userService = userService;
        this.route = route;
        this.bitcoinService = bitcoinService;
    }
    ngOnInit() {
        this.userSubscriber = this.userService.user$.subscribe(user => {
            this.user = user;
            this.coins$ = this.bitcoinService.getBitCoinRate(this.user.coins);
        });
    }
    ngOnDestroy() {
        this.userSubscriber.unsubscribe();
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bitcoin_service_bitcoin_service_service__WEBPACK_IMPORTED_MODULE_3__["BitcoinService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["home-page"]], decls: 10, vars: 6, consts: [[1, "home-page-top-container"], [1, "home-container"], [1, "greeting"], [3, "moves"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "transactions-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx.user.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Coins: ", ctx.user.coins, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.coins$), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moves", ctx.user.moves);
    } }, directives: [_cmps_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_4__["TransactionsListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".home-container[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  font-family: Oxygen, \"sans-serif\";\n}\n.home-container[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bolder;\n}\n.home-page-top-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 91vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL0M6XFxVc2Vyc1xceWFuaXJcXERlc2t0b3BcXG1pc3RlcmJpdGNvaW4gZnJvbSBnaXRodWJcXE1pc3Rlci1iaXRjb2luL3NyY1xcYXBwXFxwYWdlc1xcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDRUo7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRhaW5lciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogT3h5Z2VuLCBcInNhbnMtc2VyaWZcIjtcclxuICAuZ3JlZXRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmhvbWUtcGFnZS10b3AtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiA5MXZoO1xyXG59XHJcbiIsIi5ob21lLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogT3h5Z2VuLCBcInNhbnMtc2VyaWZcIjtcbn1cbi5ob21lLWNvbnRhaW5lciAuZ3JlZXRpbmcge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmhvbWUtcGFnZS10b3AtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDkxdmg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_bitcoin_service_bitcoin_service_service__WEBPACK_IMPORTED_MODULE_3__["BitcoinService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
  \************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_directives_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directives/forbidden-name.directive */ "./src/app/directives/forbidden-name.directive.ts");
/* harmony import */ var src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service/user-service.service */ "./src/app/services/user-service/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function SignupPageComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupPageComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupPageComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Forbidden name entered! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupPageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupPageComponent_div_12_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupPageComponent_div_12_div_2_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupPageComponent_div_12_div_3_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userNameForm.get("name").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userNameForm.get("name").errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userNameForm.get("name").errors.forbiddenName);
} }
class SignupPageComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.userNameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                Object(src_app_directives_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_2__["forbiddenNameValidator"])(/\d/),
            ]),
        }, { validators: [], asyncValidators: [] });
    }
    onSubmit(value) {
        this.userService.signup(value.name);
        this.user$ = this.userService.user$;
        if (this.user$) {
            this.userNameForm.patchValue({
                name: '',
            });
            this.router.navigate(['home']);
        }
    }
}
SignupPageComponent.ɵfac = function SignupPageComponent_Factory(t) { return new (t || SignupPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SignupPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupPageComponent, selectors: [["app-signup-page"]], decls: 13, vars: 2, consts: [[1, "signup-container"], [1, "signup-text"], ["src", "https://res.cloudinary.com/due4sgv19/image/upload/v1581945841/q5qtcinyonpb7ggzlra9.png", 1, "signup-img"], [1, "form__group", "field"], [1, "signup-form-and-button"], [1, "signup-form", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Name", "formControlName", "name", "name", "signup", "required", "", "minlength", "2", 1, "form__field"], ["for", "name", 1, "form__label"], [1, "btn", 3, "click"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function SignupPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bit-Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupPageComponent_Template_form_ngSubmit_6_listener($event) { return ctx.onSubmit(ctx.userNameForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupPageComponent_Template_button_click_10_listener($event) { return ctx.onSubmit(ctx.userNameForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignupPageComponent_div_12_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userNameForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userNameForm.get("name").invalid && (ctx.userNameForm.get("name").dirty || ctx.userNameForm.get("name").touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".form__group[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 15px 0 0;\n  margin-top: 10px;\n  width: 50%;\n}\n\n.form__field[_ngcontent-%COMP%] {\n  font-family: inherit;\n  width: 100%;\n  border: 0;\n  border-bottom: 2px solid #9b9b9b;\n  outline: 0;\n  font-size: 1.3rem;\n  color: #fff;\n  padding: 7px 0;\n  background: transparent;\n  -webkit-transition: border-color 0.2s;\n  transition: border-color 0.2s;\n}\n\n.form__field[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form__field[_ngcontent-%COMP%]::-moz-placeholder {\n  color: transparent;\n}\n\n.form__field[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form__field[_ngcontent-%COMP%]::placeholder {\n  color: transparent;\n}\n\n.form__field[_ngcontent-%COMP%]:placeholder-shown    ~ .form__label[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  cursor: text;\n  top: 20px;\n}\n\n.form__label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #9b9b9b;\n}\n\n.form__field[_ngcontent-%COMP%]:focus {\n  padding-bottom: 6px;\n  font-weight: 700;\n  border-width: 3px;\n  -webkit-border-image: -webkit-gradient(linear, left top, right top, from(#f9ca69), to(#dd5415));\n  -webkit-border-image: linear-gradient(to right, #f9ca69, #dd5415);\n       -o-border-image: linear-gradient(to right, #f9ca69, #dd5415);\n          border-image: -webkit-gradient(linear, left top, right top, from(#f9ca69), to(#dd5415));\n          border-image: linear-gradient(to right, #f9ca69, #dd5415);\n  border-image-slice: 1;\n}\n\n.form__field[_ngcontent-%COMP%]:focus    ~ .form__label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #f9ca69;\n  font-weight: 700;\n}\n\n\n\n.form__field[_ngcontent-%COMP%]:required, .form__field[_ngcontent-%COMP%]:invalid {\n  box-shadow: none;\n}\n\n.signup-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.signup-container[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%] {\n  font-family: Audiowide, \"sans-serif\";\n  font-size: 1.8rem;\n}\n\n.signup-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.signup-container[_ngcontent-%COMP%]   .form__group[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.signup-container[_ngcontent-%COMP%]   .form__group[_ngcontent-%COMP%]   .signup-form-and-button[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.signup-container[_ngcontent-%COMP%]   .form__group[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  align-self: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwLXBhZ2UvQzpcXFVzZXJzXFx5YW5pclxcRGVza3RvcFxcbWlzdGVyYml0Y29pbiBmcm9tIGdpdGh1YlxcTWlzdGVyLWJpdGNvaW4vc3JjXFxhcHBcXHBhZ2VzXFxzaWdudXAtcGFnZVxcc2lnbnVwLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0hGOztBRE1BO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FoQk07RUFpQk4sY0FBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBQ0hGOztBREtFO0VBQ0Usa0JBQUE7QUNISjs7QURFRTtFQUNFLGtCQUFBO0FDSEo7O0FERUU7RUFDRSxrQkFBQTtBQ0hKOztBREVFO0VBQ0Usa0JBQUE7QUNISjs7QURNRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNKSjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBckNLO0FDZ0NQOztBRFFBO0VBVUUsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0ZBQUE7RUFBQSxpRUFBQTtPQUFBLDREQUFBO1VBQUEsdUZBQUE7VUFBQSx5REFBQTtFQUNBLHFCQUFBO0FDZEY7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQWxETTtFQW1ETixnQkFBQTtBQ0NKOztBRE9BLGdCQUFBOztBQUVFO0VBRUUsZ0JBQUE7QUNOSjs7QURVQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNQRjs7QURRRTtFQUNFLG9DQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRRTtFQUNFLFlBQUE7QUNOSjs7QURRRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDTko7O0FET0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNMTjs7QURPSTtFQUNFLGVBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnk6ICNmOWNhNjk7XHJcbiRzZWNvbmRhcnk6ICNkZDU0MTU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGdyYXk6ICM5YjliOWI7XHJcbi5mb3JtX19ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDE1cHggMCAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmZvcm1fX2ZpZWxkIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRncmF5O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBwYWRkaW5nOiA3cHggMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgJjpwbGFjZWhvbGRlci1zaG93biB+IC5mb3JtX19sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGN1cnNvcjogdGV4dDtcclxuICAgIHRvcDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtX19sYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogJGdyYXk7XHJcbn1cclxuXHJcbi5mb3JtX19maWVsZDpmb2N1cyB7XHJcbiAgfiAuZm9ybV9fbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkcHJpbWFyeSwgJHNlY29uZGFyeSk7XHJcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xyXG59XHJcbi8qIHJlc2V0IGlucHV0ICovXHJcbi5mb3JtX19maWVsZCB7XHJcbiAgJjpyZXF1aXJlZCxcclxuICAmOmludmFsaWQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWdudXAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuc2lnbnVwLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IEF1ZGlvd2lkZSwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgLmZvcm1fX2dyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgLnNpZ251cC1mb3JtLWFuZC1idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0IHtcclxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZm9ybV9fZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1cHggMCAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4uZm9ybV9fZmllbGQge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5YjliOWI7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbn1cbi5mb3JtX19maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybV9fZmllbGQ6cGxhY2Vob2xkZXItc2hvd24gfiAuZm9ybV9fbGFiZWwge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY3Vyc29yOiB0ZXh0O1xuICB0b3A6IDIwcHg7XG59XG5cbi5mb3JtX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzliOWI5Yjtcbn1cblxuLmZvcm1fX2ZpZWxkOmZvY3VzIHtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjljYTY5LCAjZGQ1NDE1KTtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuLmZvcm1fX2ZpZWxkOmZvY3VzIH4gLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjZjljYTY5O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4vKiByZXNldCBpbnB1dCAqL1xuLmZvcm1fX2ZpZWxkOnJlcXVpcmVkLCAuZm9ybV9fZmllbGQ6aW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zaWdudXAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaWdudXAtY29udGFpbmVyIC5zaWdudXAtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBBdWRpb3dpZGUsIFwic2Fucy1zZXJpZlwiO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbi5zaWdudXAtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5zaWdudXAtY29udGFpbmVyIC5mb3JtX19ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uc2lnbnVwLWNvbnRhaW5lciAuZm9ybV9fZ3JvdXAgLnNpZ251cC1mb3JtLWFuZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNpZ251cC1jb250YWluZXIgLmZvcm1fX2dyb3VwIC5hbGVydCB7XG4gIGFsaWduLXNlbGY6IGVuZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup-page',
                templateUrl: './signup-page.component.html',
                styleUrls: ['./signup-page.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/statistics-page/statistics-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/statistics-page/statistics-page.component.ts ***!
  \********************************************************************/
/*! exports provided: StatisticsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageComponent", function() { return StatisticsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_bitcoin_service_bitcoin_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/bitcoin-service/bitcoin-service.service */ "./src/app/services/bitcoin-service/bitcoin-service.service.ts");
/* harmony import */ var src_app_services_chart_service_chart_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chart-service/chart-service.service */ "./src/app/services/chart-service/chart-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cmps/chart/chart.component */ "./src/app/cmps/chart/chart.component.ts");






function StatisticsPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx_r0.chart1);
} }
function StatisticsPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx_r1.chart2);
} }
class StatisticsPageComponent {
    constructor(bitcoinService, chartService) {
        this.bitcoinService = bitcoinService;
        this.chartService = chartService;
    }
    ngOnInit() {
        this.rateSubscriber = this.bitcoinService.getBitCoinRate(1).subscribe(rate => {
            this.rate = rate;
        });
        this.chart1Subscriber = this.bitcoinService.getMarketPrice().subscribe(data => {
            this.chart1 = this.chartService.createChart(data.name, 'LineChart', data.values, ['Date', 'Price']);
        });
        this.chart2Subscriber = this.bitcoinService.getConfirmedTransactions().subscribe(data => {
            this.chart2 = this.chartService.createChart(data.name, 'LineChart', data.values, ['Date', 'Daily Transactions']);
        });
    }
    ngOnDestroy() {
        this.rateSubscriber.unsubscribe();
        this.chart1Subscriber.unsubscribe();
        this.chart2Subscriber.unsubscribe();
    }
}
StatisticsPageComponent.ɵfac = function StatisticsPageComponent_Factory(t) { return new (t || StatisticsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bitcoin_service_bitcoin_service_service__WEBPACK_IMPORTED_MODULE_1__["BitcoinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chart_service_chart_service_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"])); };
StatisticsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsPageComponent, selectors: [["statistics-page"]], decls: 5, vars: 3, consts: [[1, "statistics-container"], [4, "ngIf"], [3, "chart"]], template: function StatisticsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StatisticsPageComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StatisticsPageComponent_div_4_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current BTC rate: $", (1 / ctx.rate).toPrecision(8), " US ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chart2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"]], styles: [".statistics-container[_ngcontent-%COMP%] {\n  font-family: Oxygen, \"sans-serif\";\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  overflow-y: scroll;\n  height: 91vh;\n}\n.statistics-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhdGlzdGljcy1wYWdlL0M6XFxVc2Vyc1xceWFuaXJcXERlc2t0b3BcXG1pc3RlcmJpdGNvaW4gZnJvbSBnaXRodWJcXE1pc3Rlci1iaXRjb2luL3NyY1xcYXBwXFxwYWdlc1xcc3RhdGlzdGljcy1wYWdlXFxzdGF0aXN0aWNzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YXRpc3RpY3MtcGFnZS9zdGF0aXN0aWNzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhdGlzdGljcy1wYWdlL3N0YXRpc3RpY3MtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0aXN0aWNzLWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6IE94eWdlbiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGhlaWdodDogOTF2aDtcclxuICBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbiIsIi5zdGF0aXN0aWNzLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBPeHlnZW4sIFwic2Fucy1zZXJpZlwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogOTF2aDtcbn1cbi5zdGF0aXN0aWNzLWNvbnRhaW5lciBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'statistics-page',
                templateUrl: './statistics-page.component.html',
                styleUrls: ['./statistics-page.component.scss']
            }]
    }], function () { return [{ type: src_app_services_bitcoin_service_bitcoin_service_service__WEBPACK_IMPORTED_MODULE_1__["BitcoinService"] }, { type: src_app_services_chart_service_chart_service_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard-service/auth-guard-service.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/auth-guard-service/auth-guard-service.service.ts ***!
  \***************************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service_user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-service/user-service.service */ "./src/app/services/user-service/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['signup']);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _user_service_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/bitcoin-service/bitcoin-service.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/bitcoin-service/bitcoin-service.service.ts ***!
  \*********************************************************************/
/*! exports provided: BitcoinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinService", function() { return BitcoinService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class BitcoinService {
    constructor(http) {
        this.http = http;
    }
    getBitCoinRate(coins) {
        return this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
    }
    getMarketPrice() {
        return this.http.get(`https://api.blockchain.info/charts/market-price?timespan=1week&format=json&cors=true`);
    }
    getConfirmedTransactions() {
        return this.http.get(`https://api.blockchain.info/charts/n-transactions?timespan=1week&format=json&cors=true`);
    }
}
BitcoinService.ɵfac = function BitcoinService_Factory(t) { return new (t || BitcoinService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BitcoinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BitcoinService, factory: BitcoinService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BitcoinService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/chart-service/chart-service.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/chart-service/chart-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_chart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/chart.model */ "./src/app/models/chart.model.ts");



class ChartService {
    constructor() {
    }
    createChart(name, type, data, columnName) {
        data = data.map(line => {
            const date = new Date(line.x * 1000);
            let dateToDisplay = date.toDateString();
            return { x: dateToDisplay, y: line.y };
        });
        return new _models_chart_model__WEBPACK_IMPORTED_MODULE_1__["default"](name, type, data, columnName);
    }
}
ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(); };
ChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/contact-service/contact-service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/contact-service/contact-service.ts ***!
  \*************************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/contact.model */ "./src/app/models/contact.model.ts");
/* harmony import */ var _mock_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock/contacts */ "./src/app/services/mock/contacts.js");






class ContactService {
    constructor() {
        //mock the server - make it a private variable
        this._contacts = _mock_contacts__WEBPACK_IMPORTED_MODULE_3__["default"];
        //private behaviorSubject array of contacts:
        this._contacts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        //public observable of the privat var above
        this.contacts$ = this._contacts$.asObservable();
    }
    loadContacts(filterBy = null) {
        let contacts = this._contacts;
        if (filterBy) {
            contacts = this._filter(contacts, filterBy);
        }
        this._contacts$.next(this._sort(contacts));
    }
    getContactById(id) {
        //mock the server work
        const contact = this._contacts.find(contact => contact._id === id);
        //return an observable
        return contact ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(contact) : rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(`Contact id ${id} not found!`);
    }
    deleteContact(id) {
        //mock the server work
        this._contacts = this._contacts.filter(contact => contact._id !== id);
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._contacts);
    }
    saveContact(contact) {
        return contact._id ? this._updateContact(contact) : this._addContact(contact);
    }
    _updateContact(contact) {
        //mock the server work
        this._contacts = this._contacts.map(c => contact._id === c._id ? contact : c);
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._sort(this._contacts));
    }
    _addContact(contact) {
        //mock the server work
        const newContact = new _models_contact_model__WEBPACK_IMPORTED_MODULE_2__["default"](contact.name, contact.email, contact.phone);
        newContact.setId();
        this._contacts.push(newContact);
        this._contacts$.next(this._sort(this._contacts));
    }
    _sort(arr) {
        return arr.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
    getEmptyContact() {
        let newContact = new _models_contact_model__WEBPACK_IMPORTED_MODULE_2__["default"]('', '', '');
        delete newContact._id;
        return newContact;
    }
    _filter(contacts, term) {
        term = term.toLocaleLowerCase();
        return contacts.filter(contact => {
            return contact.name.toLocaleLowerCase().includes(term) ||
                contact.phone.toLocaleLowerCase().includes(term) ||
                contact.email.toLocaleLowerCase().includes(term);
        });
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/mock/contacts.js":
/*!*******************************************!*\
  !*** ./src/app/services/mock/contacts.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "_id": "5a56640269f443a5d64b32ca",
  "name": "Ochoa Hyde",
  "email": "ochoahyde@renovize.com",
  "phone": "+1 (968) 593-3824"
},
{
  "_id": "5a5664025f6ae9aa24a99fde", 
  "name": "Hallie Mclean",
  "email": "halliemclean@renovize.com",
  "phone": "+1 (948) 464-2888"
},
{
  "_id": "5a56640252d6acddd183d319", 
  "name": "Parsons Norris",
  "email": "parsonsnorris@renovize.com",
  "phone": "+1 (958) 502-3495"
},
{
  "_id": "5a566402ed1cf349f0b47b4d", 
  "name": "Rachel Lowe",
  "email": "rachellowe@renovize.com",
  "phone": "+1 (911) 475-2312"
},
{
  "_id": "5a566402abce24c6bfe4699d", 
  "name": "Dominique Soto",
  "email": "dominiquesoto@renovize.com",
  "phone": "+1 (807) 551-3258"
},
{
  "_id": "5a566402a6499c1d4da9220a", 
  "name": "Shana Pope",
  "email": "shanapope@renovize.com",
  "phone": "+1 (970) 527-3082"
},
{
  "_id": "5a566402f90ae30e97f990db", 
  "name": "Faulkner Flores",
  "email": "faulknerflores@renovize.com",
  "phone": "+1 (952) 501-2678"
},
{
  "_id": "5a5664027bae84ef280ffbdf", 
  "name": "Holder Bean",
  "email": "holderbean@renovize.com",
  "phone": "+1 (989) 503-2663"
},
{
  "_id": "5a566402e3b846c5f6aec652", 
  "name": "Rosanne Shelton",
  "email": "rosanneshelton@renovize.com",
  "phone": "+1 (968) 454-3851"
},
{
  "_id": "5a56640272c7dcdf59c3d411", 
  "name": "Pamela Nolan",
  "email": "pamelanolan@renovize.com",
  "phone": "+1 (986) 545-2166"
},
{
  "_id": "5a5664029a8dd82a6178b15f", 
  "name": "Roy Cantu",
  "email": "roycantu@renovize.com",
  "phone": "+1 (929) 571-2295"
},
{
  "_id": "5a5664028c096d08eeb13a8a", 
  "name": "Ollie Christian",
  "email": "olliechristian@renovize.com",
  "phone": "+1 (977) 419-3550"
},
{
  "_id": "5a5664026c53582bb9ebe9d1", 
  "name": "Nguyen Walls",
  "email": "nguyenwalls@renovize.com",
  "phone": "+1 (963) 471-3181"
},
{
  "_id": "5a56640298ab77236845b82b",
  "name": "Glenna Santana",
  "email": "glennasantana@renovize.com",
  "phone": "+1 (860) 467-2376"
},
{
  "_id": "5a56640208fba3e8ecb97305", 
  "name": "Malone Clark",
  "email": "maloneclark@renovize.com",
  "phone": "+1 (818) 565-2557"
},
{
  "_id": "5a566402abb3146207bc4ec5", 
  "name": "Floyd Rutledge",
  "email": "floydrutledge@renovize.com",
  "phone": "+1 (807) 597-3629"
},
{
  "_id": "5a56640298500fead8cb1ee5", 
  "name": "Grace James",
  "email": "gracejames@renovize.com",
  "phone": "+1 (959) 525-2529"
},
{
  "_id": "5a56640243427b8f8445231e", 
  "name": "Tanner Gates",
  "email": "tannergates@renovize.com",
  "phone": "+1 (978) 591-2291"
},
{
  "_id": "5a5664025c3abdad6f5e098c", 
  "name": "Lilly Conner",
  "email": "lillyconner@renovize.com",
  "phone": "+1 (842) 587-3812"
}]);

/***/ }),

/***/ "./src/app/services/storage-service/storage-service.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/storage-service/storage-service.service.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StorageServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StorageServiceService {
    constructor() {
    }
    saveToStorage(key, value) {
        var str = JSON.stringify(value);
        localStorage.setItem(key, str);
    }
    load(key) {
        var str = localStorage[key] || 'null';
        return JSON.parse(str);
    }
}
StorageServiceService.ɵfac = function StorageServiceService_Factory(t) { return new (t || StorageServiceService)(); };
StorageServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageServiceService, factory: StorageServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/user-service/user-service.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/user-service/user-service.service.ts ***!
  \***************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_service_storage_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage-service/storage-service.service */ "./src/app/services/storage-service/storage-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _utils_service_utils_sercice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils-service/utils-sercice.service */ "./src/app/services/utils-service/utils-sercice.service.ts");





class UserService {
    constructor(storageService, utilsService) {
        this.storageService = storageService;
        this.utilsService = utilsService;
        //private behaviorSubject array of contacts:
        this._user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        //public observable of the privat var above
        this.user$ = this._user$.asObservable();
    }
    signup(userName) {
        //this method gets a string representing a userName
        //the method will check if there is a user in the local storage
        //if there is a user in the local storage - return it
        //otherwise - set a new user with 100 coins and the userName which was entered and return it 
        let user = this.storageService.load('bitcoin-user');
        if (!user || user.name !== userName) {
            user = {};
            user.name = userName;
            user.coins = 100;
            user.moves = [];
            this.storageService.saveToStorage('bitcoin-user', user);
        }
        this._user = user;
        let sortedMoves = [...this._user.moves];
        sortedMoves = this.sortMoves(sortedMoves);
        this._user.moves = sortedMoves;
        this._user$.next(this._user);
    }
    addMove(contact, amount) {
        //moves an amount of coins from the current user to the given contact
        const newTransaction = {
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            amount
        };
        if (this._user.coins - amount >= 0 && amount !== 0) {
            this._user.coins -= amount;
            this._user.moves.push(newTransaction);
            let sortedMoves = [...this._user.moves];
            sortedMoves = this.sortMoves(sortedMoves);
            this._user.moves = sortedMoves;
            this.storageService.saveToStorage('bitcoin-user', this._user);
            this._user$.next(this._user);
        }
    }
    isAuthenticated() {
        const user = this._user$.getValue();
        return (user) ? true : false;
    }
    sortMoves(moves) {
        return moves.sort((move1, move2) => {
            if (move1.at < move2.at)
                return 1;
            else if (move1.at > move2.at)
                return -1;
            else
                return 0;
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service_storage_service_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_service_utils_sercice_service__WEBPACK_IMPORTED_MODULE_3__["default"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _storage_service_storage_service_service__WEBPACK_IMPORTED_MODULE_1__["default"] }, { type: _utils_service_utils_sercice_service__WEBPACK_IMPORTED_MODULE_3__["default"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/utils-service/utils-sercice.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/utils-service/utils-sercice.service.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UtilsSerciceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UtilsSerciceService {
    constructor() {
    }
    _makeId(length = 10) {
        let txt = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return txt;
    }
}
UtilsSerciceService.ɵfac = function UtilsSerciceService_Factory(t) { return new (t || UtilsSerciceService)(); };
UtilsSerciceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilsSerciceService, factory: UtilsSerciceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsSerciceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yanir\Desktop\misterbitcoin from github\Mister-bitcoin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map