webpackJsonp([27],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
        ]
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_browser_tab__ = __webpack_require__(302);
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







var AboutPage = (function () {
    function AboutPage(iab, lp, settings, browsertab, navCtrl, navParams) {
        this.iab = iab;
        this.lp = lp;
        this.settings = settings;
        this.browsertab = browsertab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Lang = this.lp.translate();
    }
    AboutPage.prototype.gotoSite = function () {
        //this is the function that contains the link to your apps website
        this.browsertab.openUrl(this.settings.appLink).then(function (suc) {
            console.log('hurray!! it works');
        });
    };
    AboutPage.prototype.gotoSite2 = function () {
        //this is the function that contains the link to the  career section of your website
        this.browsertab.openUrl(this.settings.appCareer);
    };
    AboutPage.prototype.gotoSite3 = function () {
        //this is the function that contains the FAQ links
        this.browsertab.openUrl(this.settings.appFaq);
    };
    AboutPage.prototype.gotoSite4 = function () {
        //this is the function that contains the link to your Terms and Condition
        this.browsertab.openUrl(this.settings.appTerms);
    };
    AboutPage.prototype.gotoSite9 = function () {
        //this is the function that contains the link to your facebook
        this.browsertab.openUrl(this.settings.appFB);
    };
    AboutPage.prototype.gotoSite10 = function () {
        //this is the function that contains the link to your Instagram 
        this.browsertab.openUrl(this.settings.appinsta);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])()
    /**
     * Generated class for the AboutPage page.
     *
     * See http://ionicframework.com/docs/components/#navigation for more info
     * on Ionic pages and navigation.
     */
    ,
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="nav-color">\n    <ion-title>{{this.Lang[0].about}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="no-scroll" padding>\n   \n    <button padding color="primary" ion-button block (click)="gotoSite()">\n        {{settings.appName}} {{Lang[0].website}}\n      </button>\n      <button padding color="primary" ion-button block (click)="gotoSite2()">\n          {{settings.appName}} {{Lang[0].career}}\n        </button>\n        <button padding  color="primary" ion-button block (click)="gotoSite3()">\n            {{this.Lang[0].faq}}\n      </button>\n      <ion-label></ion-label>\n      <button padding  color="newColor" ion-button block (click)="gotoSite9()">\n        Facebook\n  </button>\n\n  <button padding  color="danger" ion-button block (click)="gotoSite10()">\n    Instagram <strong>@{{settings.appName}}</strong>\n</button>\n<ion-label></ion-label>\n<ion-label></ion-label>\n      <button padding text-center color="primary" ion-button clear block (click)="gotoSite4()">\n        Terms and Conditions\n  </button>\n      \n      <ion-label padding text-center>\n      \n        <!-- Made with &hearts; by PlayStudio. -->\n    </ion-label>\n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_browser_tab__["a" /* BrowserTab */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=27.js.map