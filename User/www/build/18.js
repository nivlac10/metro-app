webpackJsonp([18],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryPageModule = (function () {
    function HistoryPageModule() {
    }
    return HistoryPageModule;
}());
HistoryPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]
        ]
    })
], HistoryPageModule);

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_language__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HistoryPage = (function () {
    function HistoryPage(navCtrl, lp, settings, pop, load, eventProvider) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.pop = pop;
        this.load = load;
        this.eventProvider = eventProvider;
    }
    HistoryPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.pop.presentLoader('');
        this.eventProvider.getEventList().on('value', function (snapshot) {
            _this.eventList = [];
            _this.pop.hideLoader();
            snapshot.forEach(function (snap) {
                _this.eventList.push({
                    id: snap.key,
                    name: snap.val().name,
                    price: snap.val().price,
                    date: snap.val().date,
                    location: snap.val().location,
                    destination: snap.val().destination
                });
                return false;
            });
        });
    };
    HistoryPage.prototype.goToEventDetail = function (eventId) {
        this.navCtrl.push('HistoryDetailsPage', { 'eventId': eventId });
    };
    return HistoryPage;
}());
HistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-history',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/history/history.html"*/'<ion-header  no-border>\n  <ion-navbar color="nav-color">\n    <ion-title>{{lp.translate()[0].triphistory}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding text-center class=\'yes-scroll\'>\n    <div class=\'followed-items\'>\n  <ion-list text-center>\n      <div >\n    <ion-item  no-lines *ngFor="let event of eventList" (click)="goToEventDetail(event.id)">\n    \n      <h2 text-center class=\'drive\'><strong>{{event?.name}}</strong></h2>\n      \n      <h2 class=\'price\'><strong>{{settings.appcurrency}}{{event?.price}}</strong></h2>\n      <h2 class=\'date\'><strong>{{event?.date}}</strong></h2>\n      <h2 class=\'location\'><strong>{{event?.location}}</strong></h2>\n      <h2 class=\'destination\'><strong>{{event?.destination}}</strong></h2>\n    \n    </ion-item>\n  </div>\n  </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/history/history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], HistoryPage);

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=18.js.map