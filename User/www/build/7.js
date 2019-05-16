webpackJsonp([7],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferridePageModule", function() { return ReferridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__referride__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReferridePageModule = (function () {
    function ReferridePageModule() {
    }
    return ReferridePageModule;
}());
ReferridePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__referride__["a" /* ReferridePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__referride__["a" /* ReferridePage */]),
        ],
    })
], ReferridePageModule);

//# sourceMappingURL=referride.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_event__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_language__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ReferridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReferridePage = (function () {
    function ReferridePage(ph, share, lp, pop, eProvider, platform, nav, navParams, loadingCtrl, alertCtrl, settings, formBuilder) {
        var _this = this;
        this.ph = ph;
        this.share = share;
        this.lp = lp;
        this.pop = pop;
        this.eProvider = eProvider;
        this.platform = platform;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.randomCode = 'Getting id...';
        this.message = null;
        this.file = null;
        this.link = null;
        this.subject = null;
        this.pop.presentLoader('Getting referal Earnings');
        this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
            if (userProfileSnapshot.val())
                _this.randomCode = userProfileSnapshot.val().idForRide;
            _this.pop.hideLoader();
            // alert(this.randomCode.replace(/[^A-Z,0-9]/gi, "").length);
        });
    }
    ReferridePage.prototype.ionViewDidEnter = function () {
        this.message = 'Use ' + this.randomCode + ' as referal code to Register in  ' + this.settings.appName;
    };
    ReferridePage.prototype.FaceShare = function () {
        this.share.share(this.message, this.subject, this.file, this.link).then(function () {
        }).catch(function () {
        });
    };
    return ReferridePage;
}());
ReferridePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-referride',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/referride/referride.html"*/'<!--\n  Generated template for the ReferridePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="nav-color">\n    <ion-title>Your Ride Referal Code</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="no-scroll" padding >\n  \n  <div text-center class="whiteFlap">\n     \n        <div class=\'bars\'>\n        \n        <button no-lines detail-none ion-item icon-start class="bars-price">\n            <ion-icon color=\'primary\' name="key"></ion-icon>\n            <div id="cash">{{randomCode}}</div>\n       </button> \n         </div>\n   \n        <p>Share app with others. using this referal code. To get a free ride.</p>\n        <!-- <ion-grid>\n          <ion-row>\n            <ion-col> -->\n                <button  icon-only [ngStyle]="{\'margin-top\': 20 + \'px\'}" color="primary" ion-button block (click)="FaceShare()">\n                    <ion-icon color=\'nav-color\' name="share"> Share </ion-icon>\n               </button>         \n            <!-- </ion-col>\n            <ion-col>\n                <button icon-only [ngStyle]="{\'margin-top\': 20 + \'px\'}" color="gery" ion-button block (click)="WhatsappShare()">\n                    <ion-icon color=\'nav-color\' name="logo-whatsapp"></ion-icon>\n               </button>         \n            </ion-col>\n            <ion-col>\n                <button icon-only [ngStyle]="{\'margin-top\': 20 + \'px\'}" color="newColor" ion-button block (click)="InstaShare()">\n                    <ion-icon color=\'nav-color\' name="logo-instagram"></ion-icon>\n               </button>         \n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n       \n    </div>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/referride/referride.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_5__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], ReferridePage);

//# sourceMappingURL=referride.js.map

/***/ })

});
//# sourceMappingURL=7.js.map