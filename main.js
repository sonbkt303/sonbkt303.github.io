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

/***/ "./src/app/app-routing.model.ts":
/*!**************************************!*\
  !*** ./src/app/app-routing.model.ts ***!
  \**************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/contact-detail/contact-detail.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    // { path: '', component: AppComponent },
    { path: '', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], pathMatch: 'full' },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: 'detail', component: _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_3__["ContactDetailComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            declarations: [
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"],
                _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_3__["ContactDetailComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n\n<head>\n<!-- Required meta tags -->\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\n  <!-- Bootstrap CSS -->\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\"\n  crossorigin=\"anonymous\">\n\n\n</head>\n\n<body>\n\n  <!-- <app-joke-list></app-joke-list> -->\n  <h2>Angular 5</h2>\n\n  <!-- <app-user-form></app-user-form> -->\n\n  <!-- <app-struct></app-struct> -->\n\n  <!-- <app-words></app-words> -->\n\n  <!-- <app-list-person></app-list-person> -->\n\n  <!-- <app-parent></app-parent> -->\n\n  <!-- <app-scroll></app-scroll> -->\n\n  <!-- <app-view-parent></app-view-parent> -->\n\n  <!-- <app-card>\n          <h2 class=\"card-header\">Troi nang troi nang tho di tam nang</h2>\n          <p class=\"card-body\">Con chim non trên cành hoa</p>\n      </app-card> -->\n\n  <!-- <app-ip></app-ip> -->\n  <!-- <app-learn-pipe></app-learn-pipe> -->\n  <!-- <router-outlet></router-outlet> -->\n\n  <!-- <app-weather></app-weather> -->\n\n  <!-- <app-sign-in></app-sign-in> -->\n\n  <!-- <app-sign-up></app-sign-up> -->\n\n  <!-- <app-contact></app-contact> -->\n\n  <a routerLink=\"/contact\">Contacts</a>\n  <br>\n  <a routerLink=\"/detail\">Detail</a>\n  <br>\n  <a routerLink=\"/detail2\">Fake</a>\n\n  <router-outlet></router-outlet>\n\n  <!-- Optional JavaScript -->\n  <!-- jQuery first, then Popper.js, then Bootstrap JS -->\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\"\n    crossorigin=\"anonymous\"></script>\n</body>\n\n</html>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'demo-plunk';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _joke_joke_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./joke/joke.component */ "./src/app/joke/joke.component.ts");
/* harmony import */ var _joke_list_joke_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./joke-list/joke-list.component */ "./src/app/joke-list/joke-list.component.ts");
/* harmony import */ var _joke_form_joke_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./joke-form/joke-form.component */ "./src/app/joke-form/joke-form.component.ts");
/* harmony import */ var _words_words_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./words/words.component */ "./src/app/words/words.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _struct_struct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./struct/struct.component */ "./src/app/struct/struct.component.ts");
/* harmony import */ var _word_word_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./word/word.component */ "./src/app/word/word.component.ts");
/* harmony import */ var _words_words_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./words/words.directive */ "./src/app/words/words.directive.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _list_person_list_person_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-person/list-person.component */ "./src/app/list-person/list-person.component.ts");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./child/child.component */ "./src/app/child/child.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/parent/parent.component.ts");
/* harmony import */ var _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./scroll/scroll.component */ "./src/app/scroll/scroll.component.ts");
/* harmony import */ var _scroll_scroll_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scroll/scroll.directive */ "./src/app/scroll/scroll.directive.ts");
/* harmony import */ var _view_child_view_child_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view-child/view-child.component */ "./src/app/view-child/view-child.component.ts");
/* harmony import */ var _view_parent_view_parent_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view-parent/view-parent.component */ "./src/app/view-parent/view-parent.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./learn-pipe/learn-pipe.component */ "./src/app/learn-pipe/learn-pipe.component.ts");
/* harmony import */ var _learn_pipe_round_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./learn-pipe/round.pipe */ "./src/app/learn-pipe/round.pipe.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ip_ip_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ip/ip.component */ "./src/app/ip/ip.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _app_routing_model__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app-routing.model */ "./src/app/app-routing.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// import { ContactComponent } from './contact/contact.component';
// import { ContactDetailComponent } from './contact-detail/contact-detail.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _joke_joke_component__WEBPACK_IMPORTED_MODULE_4__["JokeComponent"],
                _joke_list_joke_list_component__WEBPACK_IMPORTED_MODULE_5__["JokeListComponent"],
                _joke_form_joke_form_component__WEBPACK_IMPORTED_MODULE_6__["JokeFormComponent"],
                _words_words_component__WEBPACK_IMPORTED_MODULE_7__["WordsComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__["UserFormComponent"],
                _struct_struct_component__WEBPACK_IMPORTED_MODULE_9__["StructComponent"],
                _word_word_component__WEBPACK_IMPORTED_MODULE_10__["WordComponent"],
                _words_words_directive__WEBPACK_IMPORTED_MODULE_11__["WordsDirective"],
                _person_person_component__WEBPACK_IMPORTED_MODULE_12__["PersonComponent"],
                _list_person_list_person_component__WEBPACK_IMPORTED_MODULE_13__["ListPersonComponent"],
                _child_child_component__WEBPACK_IMPORTED_MODULE_14__["ChildComponent"],
                _parent_parent_component__WEBPACK_IMPORTED_MODULE_15__["ParentComponent"],
                _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_16__["ScrollComponent"],
                _scroll_scroll_directive__WEBPACK_IMPORTED_MODULE_17__["ScrollDirective"],
                _view_child_view_child_component__WEBPACK_IMPORTED_MODULE_18__["ViewChildComponent"],
                _view_parent_view_parent_component__WEBPACK_IMPORTED_MODULE_19__["ViewParentComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_20__["CardComponent"],
                _learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_21__["LearnPipeComponent"],
                _learn_pipe_round_pipe__WEBPACK_IMPORTED_MODULE_22__["RoundPipe"],
                _ip_ip_component__WEBPACK_IMPORTED_MODULE_24__["IpComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_25__["WeatherComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_26__["SignInComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_27__["SignUpComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                // RouterModule.forRoot(routes, {useHash: true}),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_23__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_model__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [ngStyle]=\"{'min-width': '500px'}\">\n  <div>\n    <ng-content select=\".card-header\"></ng-content>\n  </div>\n\n  <div>\n      <ng-content select=\".card-body\"></ng-content>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            // styleUrls: ['./card.component.css'],
            styles: ["\n        .card {\n            padding: 5px;\n            margin: 5px;\n            background: #fff;\n            border-radius: 2px;\n            display: inline-block;\n            width: 300px;\n            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/child/child.component.css":
/*!*******************************************!*\
  !*** ./src/app/child/child.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/child/child.component.html":
/*!********************************************!*\
  !*** ./src/app/child/child.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"addForParent()\">Add</button>\n<button (click)=\"subForParent()\">Sub</button>"

/***/ }),

/***/ "./src/app/child/child.component.ts":
/*!******************************************!*\
  !*** ./src/app/child/child.component.ts ***!
  \******************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { EventEmitter } from 'events';
var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.myClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent.prototype.addForParent = function () {
        this.myClick.emit(true);
    };
    ChildComponent.prototype.subForParent = function () {
        this.myClick.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChildComponent.prototype, "myClick", void 0);
    ChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.css */ "./src/app/child/child.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent() {
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
    };
    ContactDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-detail',
            template: __webpack_require__(/*! ./contact-detail.component.html */ "./src/app/contact-detail/contact-detail.component.html"),
            styles: [__webpack_require__(/*! ./contact-detail.component.css */ "./src/app/contact-detail/contact-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/ip.service.ts":
/*!*******************************!*\
  !*** ./src/app/ip.service.ts ***!
  \*******************************/
/*! exports provided: IpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpService", function() { return IpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rx]s/add/operator/toPromise'
var IpService = /** @class */ (function () {
    function IpService(http) {
        this.http = http;
    }
    IpService.prototype.getPost = function () {
        return this.http.get('http://localhost:3000/posts')
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    IpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], IpService);
    return IpService;
}());



/***/ }),

/***/ "./src/app/ip/ip.component.css":
/*!*************************************!*\
  !*** ./src/app/ip/ip.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ip/ip.component.html":
/*!**************************************!*\
  !*** ./src/app/ip/ip.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{posts | json}} \n</p>\n"

/***/ }),

/***/ "./src/app/ip/ip.component.ts":
/*!************************************!*\
  !*** ./src/app/ip/ip.component.ts ***!
  \************************************/
/*! exports provided: IpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpComponent", function() { return IpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ip_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ip.service */ "./src/app/ip.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IpComponent = /** @class */ (function () {
    function IpComponent(ipService) {
        var _this = this;
        this.ipService = ipService;
        this.ipService.getPost()
            .then(function (posts) { return _this.posts = posts; })
            .catch(function (err) { return console.log(err); });
    }
    IpComponent.prototype.ngOnInit = function () {
    };
    IpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ip',
            template: __webpack_require__(/*! ./ip.component.html */ "./src/app/ip/ip.component.html"),
            styles: [__webpack_require__(/*! ./ip.component.css */ "./src/app/ip/ip.component.css")],
            providers: [_ip_service__WEBPACK_IMPORTED_MODULE_1__["IpService"]]
        }),
        __metadata("design:paramtypes", [_ip_service__WEBPACK_IMPORTED_MODULE_1__["IpService"]])
    ], IpComponent);
    return IpComponent;
}());



/***/ }),

/***/ "./src/app/joke-form/joke-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/joke-form/joke-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    background-color: gray\n}"

/***/ }),

/***/ "./src/app/joke-form/joke-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/joke-form/joke-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-block\">\n    <h4 class=\"card-title\">Create Joke</h4>\n    <div class=\"form-group\">\n      <input type=\"text\"\n             class=\"\"\n             placeholder=\"Enter the setup\"\n             #setup>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\"\n             class=\"\"\n             placeholder=\"Enter the punchline\"\n             #punchline>\n    </div>\n    <button type=\"button\" style=\"color: red; height: 30px; width: 100px\"\n            class=\"\"\n            (click)=\"createJoke(setup.value, punchline.value)\">\n            Create\n    </button>\n</div>\n\n<h1>Mot con vit</h1>"

/***/ }),

/***/ "./src/app/joke-form/joke-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/joke-form/joke-form.component.ts ***!
  \**************************************************/
/*! exports provided: JokeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokeFormComponent", function() { return JokeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _plunk_joke_joke__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../plunk/joke/joke */ "./src/plunk/joke/joke.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JokeFormComponent = /** @class */ (function () {
    function JokeFormComponent() {
        this.jokeCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    JokeFormComponent.prototype.ngOnInit = function () {
        // const observable = Rx.Observable.create(function (observer) {
        //   console.log('Rxjs và Reactive Programming');
        //   observer.next(1);
        //   observer.next(2);
        //   observer.next(3);
        //   setTimeout(() => {
        //     observer.next(4);
        //     observer.complete();
        //   }, 1000);
        // });
    };
    JokeFormComponent.prototype.createJoke = function (setup, punchline) {
        this.jokeCreated.emit(new _plunk_joke_joke__WEBPACK_IMPORTED_MODULE_1__["Joke"](setup, punchline));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JokeFormComponent.prototype, "jokeCreated", void 0);
    JokeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-joke-form',
            template: __webpack_require__(/*! ./joke-form.component.html */ "./src/app/joke-form/joke-form.component.html"),
            styles: [__webpack_require__(/*! ./joke-form.component.css */ "./src/app/joke-form/joke-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JokeFormComponent);
    return JokeFormComponent;
}());



/***/ }),

/***/ "./src/app/joke-list/joke-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/joke-list/joke-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/joke-list/joke-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/joke-list/joke-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-joke-form (jokeCreated)=\"addJoke($event)\"></app-joke-form>\n\n<h1>Joke List</h1>\n\n<p></p>\n\n<app-joke *ngFor=\"let j of jokes\" [joke]=\"j\">\n  <span class=\"setup\">setup: {{ j.setup }}?</span>\n  <h1 class=\"punchline\">punchline: {{ j.punchline }}</h1>\n</app-joke>\n\n<p></p>\n\n<button type=\"button\" class=\"btn btn-success\" (click)=\"addJoke()\">Add Joke\n</button>\n<button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteJoke()\">Clear Jokes\n</button>\n\n<h1>Hello world</h1>"

/***/ }),

/***/ "./src/app/joke-list/joke-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/joke-list/joke-list.component.ts ***!
  \**************************************************/
/*! exports provided: JokeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokeListComponent", function() { return JokeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _plunk_joke_joke__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../plunk/joke/joke */ "./src/plunk/joke/joke.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JokeListComponent = /** @class */ (function () {
    function JokeListComponent() {
        this.jokes = [];
        this.jokes = [
            new _plunk_joke_joke__WEBPACK_IMPORTED_MODULE_1__["Joke"]("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
            new _plunk_joke_joke__WEBPACK_IMPORTED_MODULE_1__["Joke"]("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
            new _plunk_joke_joke__WEBPACK_IMPORTED_MODULE_1__["Joke"]("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
        ];
    }
    JokeListComponent.prototype.ngOnInit = function () {
    };
    JokeListComponent.prototype.ngOnChanges = function () {
    };
    JokeListComponent.prototype.addJoke = function (joke) {
        // console.log(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
        this.jokes.unshift(new _plunk_joke_joke__WEBPACK_IMPORTED_MODULE_1__["Joke"]("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
    };
    JokeListComponent.prototype.deleteJoke = function () {
        this.jokes = [];
    };
    JokeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-joke-list',
            template: __webpack_require__(/*! ./joke-list.component.html */ "./src/app/joke-list/joke-list.component.html"),
            styles: [__webpack_require__(/*! ./joke-list.component.css */ "./src/app/joke-list/joke-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JokeListComponent);
    return JokeListComponent;
}());



/***/ }),

/***/ "./src/app/joke/joke.component.css":
/*!*****************************************!*\
  !*** ./src/app/joke/joke.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    background-color: gray\n}"

/***/ }),

/***/ "./src/app/joke/joke.component.html":
/*!******************************************!*\
  !*** ./src/app/joke/joke.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <h4 class=\"card-title\">\n    <ng-content select=\".setup\"></ng-content>\n  </h4>\n  <p class=\"card-text\" [hidden]=\"joke.hide\">\n    <ng-content select=\".punchline\"></ng-content>\n  </p>\n  <a class=\"btn btn-primary\" (click)=\"joke.toggle()\">Tell Me</a>\n</div>\n"

/***/ }),

/***/ "./src/app/joke/joke.component.ts":
/*!****************************************!*\
  !*** ./src/app/joke/joke.component.ts ***!
  \****************************************/
/*! exports provided: JokeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokeComponent", function() { return JokeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_plunk_joke_joke__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/plunk/joke/joke */ "./src/plunk/joke/joke.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JokeComponent = /** @class */ (function () {
    function JokeComponent() {
        this.setup = "What did the cheese say when it looked in the mirror?";
        this.punchline = "Halloumi (Hello Me)";
    }
    JokeComponent.prototype.ngOnChanges = function (changes) {
        // console.log(`ngOnChanges`, changes);
        // for(let key in changes) {
        //   console.log('key', changes[key]);
        // }
    };
    JokeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('joke'),
        __metadata("design:type", src_plunk_joke_joke__WEBPACK_IMPORTED_MODULE_1__["Joke"])
    ], JokeComponent.prototype, "joke", void 0);
    JokeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-joke',
            template: __webpack_require__(/*! ./joke.component.html */ "./src/app/joke/joke.component.html"),
            styles: [__webpack_require__(/*! ./joke.component.css */ "./src/app/joke/joke.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JokeComponent);
    return JokeComponent;
}());



/***/ }),

/***/ "./src/app/learn-pipe/learn-pipe.component.css":
/*!*****************************************************!*\
  !*** ./src/app/learn-pipe/learn-pipe.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/learn-pipe/learn-pipe.component.html":
/*!******************************************************!*\
  !*** ./src/app/learn-pipe/learn-pipe.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  {{birthday | date:short}}\n</p>\n\n\n<p>\n  {{person | json | uppercase}}\n</p>\n\n\n<p>\n  {{address | async}}\n</p> -->\n\n\n<p>{{1.9 | round: true}}</p>\n\n<p>{{1.5 | round : false}}</p>"

/***/ }),

/***/ "./src/app/learn-pipe/learn-pipe.component.ts":
/*!****************************************************!*\
  !*** ./src/app/learn-pipe/learn-pipe.component.ts ***!
  \****************************************************/
/*! exports provided: LearnPipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnPipeComponent", function() { return LearnPipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearnPipeComponent = /** @class */ (function () {
    function LearnPipeComponent() {
        this.birthday = new Date(2015, 7, 22);
        this.person = {
            name: 'sonbkt',
            age: 24
        };
        this.address = Promise.resolve('Khuc tri Ngoc Son');
    }
    LearnPipeComponent.prototype.ngOnInit = function () {
    };
    LearnPipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learn-pipe',
            template: __webpack_require__(/*! ./learn-pipe.component.html */ "./src/app/learn-pipe/learn-pipe.component.html"),
            styles: [__webpack_require__(/*! ./learn-pipe.component.css */ "./src/app/learn-pipe/learn-pipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LearnPipeComponent);
    return LearnPipeComponent;
}());



/***/ }),

/***/ "./src/app/learn-pipe/round.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/learn-pipe/round.pipe.ts ***!
  \******************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (value, isUpper) {
        if (isUpper)
            return Math.ceil(value);
        else
            return Math.floor(value);
    };
    RoundPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'round'
        })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/list-person/list-person.component.css":
/*!*******************************************************!*\
  !*** ./src/app/list-person/list-person.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-person/list-person.component.html":
/*!********************************************************!*\
  !*** ./src/app/list-person/list-person.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ng-container  *ngFor=\"let person of arrPerson\">\n  <app-person [name]=\"person.name\" [age]=\"person.age\" (removByNameEvent)=\"removePersonByNameChildEvent($event)\"></app-person>\n</ng-container>"

/***/ }),

/***/ "./src/app/list-person/list-person.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-person/list-person.component.ts ***!
  \******************************************************/
/*! exports provided: ListPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPersonComponent", function() { return ListPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListPersonComponent = /** @class */ (function () {
    function ListPersonComponent() {
        this.arrPerson = [
            { name: 'Tí', age: '10' },
            { name: 'Tèo', age: '12' },
            { name: 'Tũn', age: '20' }
        ];
    }
    ListPersonComponent.prototype.ngOnInit = function () {
    };
    ListPersonComponent.prototype.removePersonByNameChildEvent = function (value) {
        var index = this.arrPerson.findIndex(function (index) { return index.name === value; });
        this.arrPerson.splice(index, 1);
        console.log(this.arrPerson);
    };
    ListPersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-person',
            template: __webpack_require__(/*! ./list-person.component.html */ "./src/app/list-person/list-person.component.html"),
            styles: [__webpack_require__(/*! ./list-person.component.css */ "./src/app/list-person/list-person.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListPersonComponent);
    return ListPersonComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/parent/parent.component.css":
/*!*********************************************!*\
  !*** ./src/app/parent/parent.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parent/parent.component.html":
/*!**********************************************!*\
  !*** ./src/app/parent/parent.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>value: {{value}}</h3>\n\n<app-child (myClick)=\"changeValue($event)\"></app-child>"

/***/ }),

/***/ "./src/app/parent/parent.component.ts":
/*!********************************************!*\
  !*** ./src/app/parent/parent.component.ts ***!
  \********************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
        this.value = 0;
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent.prototype.changeValue = function (isAdd) {
        if (isAdd) {
            this.value = this.value + 1;
        }
        else {
            this.value = this.value - 1;
        }
    };
    ParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/parent/parent.component.html"),
            styles: [__webpack_require__(/*! ./parent.component.css */ "./src/app/parent/parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/person/person.component.css":
/*!*********************************************!*\
  !*** ./src/app/person/person.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/person/person.component.html":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"padding: 10px; border: 1px solid\">\n    <h3>Tên: {{name}}</h3>\n    <p>Tuổi: {{age}}</p>\n    <button (click)=\"removePersonByName()\">Xoá</button>\n</div>"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
        this.removByNameEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.removePersonByName = function () {
        this.removByNameEvent.emit(this.name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PersonComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PersonComponent.prototype, "age", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PersonComponent.prototype, "removByNameEvent", void 0);
    PersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/person/person.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/scroll/scroll.component.css":
/*!*********************************************!*\
  !*** ./src/app/scroll/scroll.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/scroll/scroll.component.html":
/*!**********************************************!*\
  !*** ./src/app/scroll/scroll.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n\n<p>\n  scroll works!\n</p>\n<p>\n  scroll works!\n</p>\n<p style=\"color: red; position: fixed\">\n  scroll works!\n</p>\n<div class=\"view-main-screen\" #mainScreen>\n  <p>Hello world</p>\n  <p>Hello world</p>\n  <button (click)=\"clickMe()\" style=\"color: blue; \">Click me</button>\n</div>\n<p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  \n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  \n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  \n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  \n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>\n  <p>\n    scroll works!\n  </p>"

/***/ }),

/***/ "./src/app/scroll/scroll.component.ts":
/*!********************************************!*\
  !*** ./src/app/scroll/scroll.component.ts ***!
  \********************************************/
/*! exports provided: ScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return ScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollComponent = /** @class */ (function () {
    function ScrollComponent() {
    }
    ScrollComponent.prototype.ngOnInit = function () {
    };
    ScrollComponent.prototype.onScrollEvent = function ($event) {
        // console.log(this.elementView.nativeElement.offsetTop, window.pageYOffset);
        console.log(this.elementView.nativeElement.scrollTop);
    };
    ScrollComponent.prototype.clickMe = function () {
        this.viewHeight = this.elementView.nativeElement.offsetHeight;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainScreen'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ScrollComponent.prototype, "elementView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollComponent.prototype, "onScrollEvent", null);
    ScrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scroll',
            template: __webpack_require__(/*! ./scroll.component.html */ "./src/app/scroll/scroll.component.html"),
            styles: [__webpack_require__(/*! ./scroll.component.css */ "./src/app/scroll/scroll.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScrollComponent);
    return ScrollComponent;
}());



/***/ }),

/***/ "./src/app/scroll/scroll.directive.ts":
/*!********************************************!*\
  !*** ./src/app/scroll/scroll.directive.ts ***!
  \********************************************/
/*! exports provided: ScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDirective", function() { return ScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollDirective = /** @class */ (function () {
    function ScrollDirective(element) {
    }
    ScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appScroll]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollDirective);
    return ScrollDirective;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\" required>\n<br>\n<input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" required>\n<br>\n<button [disabled]=\"formSignIn.invalid\" (click)=\"onSubmit()\">Submit</button> -->\n\n\n<form (ngSubmit)=\"onSubmit(formSignIn)\" #formSignIn=\"ngForm\">\n  <input type=\"text\" placeholder=\"Email\" ngModel #txtEmail=\"ngModel\" name=\"email\" email required>\n  <br>\n  <p *ngIf=\"txtEmail.touched && txtEmail.errors?.required\">\n    Email is required\n  </p>\n  <p *ngIf=\"txtEmail.touched && txtEmail.errors?.email\">\n    Not Valid Email\n  </p>\n  <input type=\"password\" placeholder=\"Password\" ngModel #txtPassWord=\"ngModel\" pattern=\"[a-z]*\" name=\"password\" minlength=\"6\" required>\n  <br>\n  <div ngModelGroup=\"subjects\">\n    <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"nodejs\">Nodejs</label> &ensp; &emsp;\n    <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"angular\">Angular</label> &ensp;&emsp;\n    <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"react\">React</label>\n  </div>\n  <br>\n  <button>Submit</button>\n</form>\n\n<button (click)=\"postToExpress(formSignIn)\">Post</button>\n<p>{{txtPassWord.errors | json}}</p>\n<p>{{formSignIn.value | json}}</p>\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = /** @class */ (function () {
    function SignInComponent(signInService) {
        this.signInService = signInService;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.onSubmit = function (formSignIn) {
        console.log(formSignIn);
        // throw new Error('Form is invalid')
    };
    SignInComponent.prototype.postToExpress = function (formSignIn) {
        this.signInService.signIn(formSignIn.value);
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")],
            providers: [_sign_in_service__WEBPACK_IMPORTED_MODULE_1__["SignInService"]]
        }),
        __metadata("design:paramtypes", [_sign_in_service__WEBPACK_IMPORTED_MODULE_1__["SignInService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.service.ts":
/*!********************************************!*\
  !*** ./src/app/sign-in/sign-in.service.ts ***!
  \********************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInService = /** @class */ (function () {
    function SignInService(http) {
        this.http = http;
    }
    SignInService.prototype.signIn = function (value) {
        var url = "http://localhost:6969/signin";
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(value);
        console.log(value);
        this.http.post(url, body, { headers: headers }).toPromise().then(function (rs) {
            console.log('rs', rs);
        });
    };
    SignInService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SignInService);
    return SignInService;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"formSignUp\">\n  <input type=\"text\" placeholder=\"Email\" formControlName=\"email\">\n  <p *ngIf=\"formSignUp.get('email').invalid && formSignUp.get('email').touched\">\n    Email is required\n  </p>\n  <br>\n  <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n  <br><br>\n  <div formGroupName=\"subject\">\n    <label><input type=\"checkbox\" formControlName=\"nodejs\">Nodejs</label> &ensp; &emsp;\n    <label><input type=\"checkbox\" formControlName=\"angular\">Angular</label> &ensp;&emsp;\n    <label><input type=\"checkbox\" formControlName=\"react\">React</label>\n  </div>\n  <br>\n  <button [disabled]=\"formSignUp.invalid\">Submit</button>\n</form>\n<p>Hello world</p>\n<p>{{formSignUp.controls.email.errors | json}}</p>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(fb) {
        this.fb = fb;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.formSignUp = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: 'abc',
            subject: this.fb.group({
                nodejs: false,
                angular: true,
                react: false,
            })
        });
    };
    SignUpComponent.prototype.onSubmit = function () {
        console.log(this.formSignUp);
        // console.log(this.formSignUp.value);
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/struct/struct.component.css":
/*!*********************************************!*\
  !*** ./src/app/struct/struct.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/struct/struct.component.html":
/*!**********************************************!*\
  !*** ./src/app/struct/struct.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"isShow\">\n  struct works!\n</p>\n\n<ul *ngFor=\"let subject of arrSubject\">\n    \n    <li>{{subject}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/struct/struct.component.ts":
/*!********************************************!*\
  !*** ./src/app/struct/struct.component.ts ***!
  \********************************************/
/*! exports provided: StructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructComponent", function() { return StructComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StructComponent = /** @class */ (function () {
    function StructComponent() {
        this.isShow = true;
        this.arrSubject = [
            'Angular',
            'NodeJs',
            'React'
        ];
    }
    StructComponent.prototype.ngOnInit = function () {
    };
    StructComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-struct',
            template: __webpack_require__(/*! ./struct.component.html */ "./src/app/struct/struct.component.html"),
            styles: [__webpack_require__(/*! ./struct.component.css */ "./src/app/struct/struct.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StructComponent);
    return StructComponent;
}());



/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-form/user-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle {\n    width: 50px;\n    height: 50px;\n    border: 1px;\n    background-color: blue\n}"

/***/ }),

/***/ "./src/app/user-form/user-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-form/user-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Name: <input type=\"text\" placeholder=\"Enter your username\" [(ngModel)]=\"name\"> -->\n\nName:   <input  placeholder=\"Enter user name\" (keyup)=\"showEvent($event)\">\n\n<!-- <p [style.color]=\"name.length % 2 == 0 ? 'red' : 'blue'\">Your name is: {{name}}</p> -->\n\n<p [ngStyle]=\"{color: 'red', fontSize: '30px'}\">Your name is: {{name}}</p>\n\n\n\n<div [ngClass]=\"{circle: true}\"></div>"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserFormComponent = /** @class */ (function () {
    function UserFormComponent() {
        this.name = '';
    }
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent.prototype.showEvent = function ($event) {
        console.log($event);
        this.name = $event.target.value;
        console.log(this.name);
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/view-child/view-child.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-child/view-child.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-child/view-child.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-child/view-child.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Value: {{value}}\n</div>\n\n<br>\n\n<div>\n  Value2: {{value2}}\n</div>"

/***/ }),

/***/ "./src/app/view-child/view-child.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-child/view-child.component.ts ***!
  \****************************************************/
/*! exports provided: ViewChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewChildComponent", function() { return ViewChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewChildComponent = /** @class */ (function () {
    function ViewChildComponent() {
        this.value = 0;
        this.value2 = 0;
    }
    ViewChildComponent.prototype.ngOnInit = function () {
    };
    ViewChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-child',
            template: __webpack_require__(/*! ./view-child.component.html */ "./src/app/view-child/view-child.component.html"),
            styles: [__webpack_require__(/*! ./view-child.component.css */ "./src/app/view-child/view-child.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewChildComponent);
    return ViewChildComponent;
}());



/***/ }),

/***/ "./src/app/view-parent/view-parent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/view-parent/view-parent.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-parent/view-parent.component.html":
/*!********************************************************!*\
  !*** ./src/app/view-parent/view-parent.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"plusValueChild()\">Click me</button>\n<br>\n<br>\n\n<button (click)=\"childValue.value2 = childValue.value2 + 1\">Click me 2</button>\n<app-view-child #childValue></app-view-child>"

/***/ }),

/***/ "./src/app/view-parent/view-parent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/view-parent/view-parent.component.ts ***!
  \******************************************************/
/*! exports provided: ViewParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewParentComponent", function() { return ViewParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _view_child_view_child_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view-child/view-child.component */ "./src/app/view-child/view-child.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewParentComponent = /** @class */ (function () {
    function ViewParentComponent() {
    }
    ViewParentComponent.prototype.ngOnInit = function () {
    };
    ViewParentComponent.prototype.plusValueChild = function () {
        this.myChild.value++;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_view_child_view_child_component__WEBPACK_IMPORTED_MODULE_1__["ViewChildComponent"]),
        __metadata("design:type", _view_child_view_child_component__WEBPACK_IMPORTED_MODULE_1__["ViewChildComponent"])
    ], ViewParentComponent.prototype, "myChild", void 0);
    ViewParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-parent',
            template: __webpack_require__(/*! ./view-parent.component.html */ "./src/app/view-parent/view-parent.component.html"),
            styles: [__webpack_require__(/*! ./view-parent.component.css */ "./src/app/view-parent/view-parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewParentComponent);
    return ViewParentComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Sai gon is now 34</h3>\n\n<input type=\"text\" placeholder=\"Enter your city name\">\n\n<br>\n\n<br>\n\n<button>Get weather</button>"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.service */ "./src/app/weather/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.weatherService.getWeatherByCityName('asd');
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")],
            providers: [_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]]
        }),
        __metadata("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.service.ts":
/*!********************************************!*\
  !*** ./src/app/weather/weather.service.ts ***!
  \********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWeatherByCityName = function (cityName) {
        var url = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";
        return this.http.get(url)
            .toPromise()
            .then(function (res) {
            console.log(res);
        });
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/word/word.component.css":
/*!*****************************************!*\
  !*** ./src/app/word/word.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/word/word.component.html":
/*!******************************************!*\
  !*** ./src/app/word/word.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 [hidden]=\"forgot\">\n    {{en}}\n  </h3>\n  <p>\n    words works!\n    {{vi}}\n  </p>\n  <img [src]='urlImage' alt=\"\">\n  \n  <button (click)=\"toggle()\">Toggle forgot</button>\n  \n  <p></p>\n  Name: <input type=\"text\" placeholder=\"User form\" (keyup)=\"showNameEvent($event)\">\n  \n  <div>\n    <p>Your name is: {{name}}</p>\n  </div>"

/***/ }),

/***/ "./src/app/word/word.component.ts":
/*!****************************************!*\
  !*** ./src/app/word/word.component.ts ***!
  \****************************************/
/*! exports provided: WordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordComponent", function() { return WordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WordComponent = /** @class */ (function () {
    function WordComponent() {
        this.en = 'en';
        this.vi = 'vi';
        this.urlImage = 'https://www.levelaccess.com/wp-content/uploads/2015/08/angular.jpg';
        this.forgot = true;
        this.name = '';
    }
    WordComponent.prototype.ngOnInit = function () {
    };
    WordComponent.prototype.toggle = function () {
        this.forgot = !this.forgot;
    };
    WordComponent.prototype.showNameEvent = function ($event) {
        this.name = $event.target.value;
    };
    WordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-word',
            template: __webpack_require__(/*! ./word.component.html */ "./src/app/word/word.component.html"),
            styles: [__webpack_require__(/*! ./word.component.css */ "./src/app/word/word.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WordComponent);
    return WordComponent;
}());



/***/ }),

/***/ "./src/app/words/words.component.css":
/*!*******************************************!*\
  !*** ./src/app/words/words.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width{\n    width: 200px;\n    height: 200px;\n    overflow: auto;\n}\n\n.double-width{\n    width:400px;\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/words/words.component.html":
/*!********************************************!*\
  !*** ./src/app/words/words.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"name\" #ctrl=\"ngModel\" required>\n\n\n<div *ngIf=\"isShowForm\">\n  <input placeholder=\"English\">\n  <br>\n  <input placeholder=\"Vietnamese\">\n  <br>\n</div>\n\n<button  (click)=\"addWord()\" [ngStyle]=\"{'position': 'fixed'}\">Add Word</button>\n\n<div *ngFor=\"let word of arrWords\">\n  <h4 [ngStyle]=\"{color: word.memorized ? 'green' : 'red'}\">{{word.en}}</h4>\n  <p>{{word.vn}}</p>\n  <button (click)=\"del(word.id)\">Del</button>\n  <button (click)=\"word.memorized = !word.memorized\">{{word.memorized ? 'đã thuộc' : 'chưa thuộc'}}</button>\n</div>\n\n\n<!-- <p scroller>Hello world</p> -->\n\n<!-- <div class=\"full-width\" scroller>\n  <div class=\"double-width\"></div>\n</div> -->\n\n<!-- <div (scroll)=\"onScroll($event)\" -->\n\n"

/***/ }),

/***/ "./src/app/words/words.component.ts":
/*!******************************************!*\
  !*** ./src/app/words/words.component.ts ***!
  \******************************************/
/*! exports provided: WordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsComponent", function() { return WordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WordsComponent = /** @class */ (function () {
    function WordsComponent(el) {
        this.el = el;
        this.name = '';
        this.newEn = '';
        this.newVn = '';
        this.isShowForm = false;
        this.arrWords = [
            { id: 1, en: 'action', vn: 'hành động', memorized: true },
            { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
            { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
            { id: 4, en: 'active', vn: 'chủ động', memorized: true },
            { id: 5, en: 'bath', vn: 'tắm', memorized: false },
            { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
        ];
    }
    WordsComponent.prototype.ngOnInit = function () {
    };
    WordsComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset;
        console.log(this.el.nativeElement.offsetTop);
        if (scrollPosition >= componentPosition) {
            // this.state = 'show'
        }
        else {
            // this.state = 'hide'
        }
    };
    WordsComponent.prototype.addWord = function () {
        console.log(this.name);
        this.isShowForm = !this.isShowForm;
    };
    WordsComponent.prototype.del = function (id) {
        var index = this.arrWords.findIndex(function (word) { return word.id === id; });
        console.log({ index: index });
        this.arrWords.splice(index, 1);
    };
    WordsComponent.prototype.memmory = function (id) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WordsComponent.prototype, "checkScroll", null);
    WordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-words',
            template: __webpack_require__(/*! ./words.component.html */ "./src/app/words/words.component.html"),
            styles: [__webpack_require__(/*! ./words.component.css */ "./src/app/words/words.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], WordsComponent);
    return WordsComponent;
}());



/***/ }),

/***/ "./src/app/words/words.directive.ts":
/*!******************************************!*\
  !*** ./src/app/words/words.directive.ts ***!
  \******************************************/
/*! exports provided: WordsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsDirective", function() { return WordsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WordsDirective = /** @class */ (function () {
    function WordsDirective(element) {
        this.element = element;
        element.nativeElement.style.color = 'blue';
        // window.addEventListener('scroll',  ['$event'] this.scroll, true); //third parameter
    }
    // @HostListener('click') doClick() {
    //   alert('it click works');
    // }
    // @HostListener('scroll')  doEnter() {
    //   alert('it mouse enter works')
    // }
    WordsDirective.prototype.onScrollEvent = function ($event) {
        // console.log($event);
        var a = this.element.nativeElement.offsetHeight;
        // console.log(this.element.nativeElement.offsetHeight);
        // console.log('height', window.innerHeight, 'width', window.innerHeight);
        var offsetLeft = 0;
        var offsetTop = 0;
        var verticalOffset = window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0;
        // console.log({verticalOffset});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WordsDirective.prototype, "onScrollEvent", null);
    WordsDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[scroller]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], WordsDirective);
    return WordsDirective;
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

/***/ "./src/plunk/joke/joke.ts":
/*!********************************!*\
  !*** ./src/plunk/joke/joke.ts ***!
  \********************************/
/*! exports provided: Joke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Joke", function() { return Joke; });
var Joke = /** @class */ (function () {
    function Joke(setup, punchline) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }
    Joke.prototype.toggle = function () {
        this.hide = !this.hide;
    };
    return Joke;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bui/WorkSpace/Learning/demo-plunk/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map