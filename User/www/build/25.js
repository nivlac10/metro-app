webpackJsonp([25],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompletePageModule", function() { return AutocompletePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autocomplete__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutocompletePageModule = (function () {
    function AutocompletePageModule() {
    }
    return AutocompletePageModule;
}());
AutocompletePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__autocomplete__["a" /* AutocompletePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autocomplete__["a" /* AutocompletePage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__autocomplete__["a" /* AutocompletePage */]
        ]
    })
], AutocompletePageModule);

//# sourceMappingURL=autocomplete.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AutocompletePage = (function () {
    function AutocompletePage(viewCtrl, pop, lp, settings, navCtrl, ph, zone) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.pop = pop;
        this.lp = lp;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.ph = ph;
        this.zone = zone;
        this.service = new google.maps.places.AutocompleteService();
        this.Lang = this.lp.translate();
        this.autocompleteItems = [];
        //listen for home and work button
        ph.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.home = userProfileSnapshot.val().Home;
            _this.work = userProfileSnapshot.val().Work;
        });
        this.autocomplete = {
            query: ''
        };
    }
    AutocompletePage.prototype.gotoSetting = function () {
        this.navCtrl.push('ProfilePage');
    };
    AutocompletePage.prototype.chooseHome = function () {
        if (this.home == null) {
            this.viewCtrl.dismiss();
            this.pop.presentToast(this.lp.translate()[0].home);
        }
        else {
            this.viewCtrl.dismiss(this.home);
        }
    };
    AutocompletePage.prototype.chooseWork = function () {
        if (this.work == null) {
            this.viewCtrl.dismiss();
            this.pop.presentToast(this.lp.translate()[0].home);
        }
        else {
            this.viewCtrl.dismiss(this.work);
        }
    };
    AutocompletePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutocompletePage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
        this.ph.isHome = true;
    };
    AutocompletePage.prototype.updateSearch = function () {
        this.ph.isHome = false;
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: ['NG'] } }, function (predictions, status) {
            me.autocompleteItems = [];
            console.log(predictions, status);
            me.zone.run(function () {
                if (predictions != null)
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction.description);
                    });
            });
        });
    };
    return AutocompletePage;
}());
AutocompletePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/autocomplete/autocomplete.html"*/'<ion-header no-border>\n    <ion-title padding></ion-title>\n  </ion-header>\n\n  <ion-content>\n      <ion-toolbar>\n        \n          <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar>\n        </ion-toolbar>\n      <ion-list>\n          <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n            {{ item }}\n          </ion-item>\n        </ion-list>\n      <button detail-none  [ngStyle]="{\'bottom\': 0 + \'px\'}" icon-start ion-item color="nav-color" (click)="chooseHome()">\n          <ion-icon color=\'primary\' name="ios-home"></ion-icon>\n          <span *ngIf="home">{{Lang[0].homesearch}}</span>\n          <span *ngIf="!home" (click)=\'gotoSetting()\'>{{Lang[0].add}} {{Lang[0].homesearch}}</span>\n        </button>\n        <button detail-none  [ngStyle]="{\'bottom\': 0 + \'px\'}" icon-start ion-item color="nav-color" (click)="chooseWork()">\n            <ion-icon color=\'primary\' name="ios-briefcase"></ion-icon>\n            <span *ngIf="work">{{Lang[0].worksearch}}</span>\n            <span *ngIf="!work"  (click)=\'gotoSetting()\'>{{Lang[0].add}} {{Lang[0].worksearch}}</span>\n          </button>\n  \n  </ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/autocomplete/autocomplete.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _g || Object])
], AutocompletePage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=autocomplete.js.map

/***/ })

});
//# sourceMappingURL=25.js.map