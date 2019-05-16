webpackJsonp([11],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePageModule", function() { return PhonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhonePageModule = (function () {
    function PhonePageModule() {
    }
    return PhonePageModule;
}());
PhonePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__phone__["a" /* PhonePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__phone__["a" /* PhonePage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__phone__["a" /* PhonePage */]
        ]
    })
], PhonePageModule);

//# sourceMappingURL=phone.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_language__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhonePage = (function () {
    // toppings: number = 994;
    function PhonePage(navCtrl, set, lp, platform, ph, pop, navParams, firebase) {
        this.navCtrl = navCtrl;
        this.set = set;
        this.lp = lp;
        this.platform = platform;
        this.ph = ph;
        this.pop = pop;
        this.navParams = navParams;
        this.firebase = firebase;
        this.verificationId = '';
        this.phoneNumber = '';
        this.userName = '';
        this.countryCode = '';
        this.Debugging = false;
    }
    PhonePage.prototype.signIn = function (userName, userCode, userBank, userAccount) {
        var _this = this;
        if (this.set.refer) {
            //Step 2 - Pass the mobile number for verific
            if (this.userName != null && this.userBank != null && this.userAccount != null) {
                this.pop.presentLoader('');
                // let number = this.phoneNumber;
                this.ph.updateName(this.userName).then(function () {
                    _this.ph.updateGUID(_this.guid()).then(function () {
                        _this.ph.UpdateBank(_this.userBank, _this.userAccount).then(function () {
                            _this.ph.updateRideID(_this.guider(10)).then(function () {
                                if (_this.userCode == null) {
                                    _this.pop.hideLoader();
                                    _this.navCtrl.setRoot('HomePage');
                                }
                                else {
                                    _this.AddCode(userCode);
                                }
                            });
                        });
                    });
                });
            }
        }
        else {
            if (this.userName) {
                this.pop.presentLoader('');
                // let number = this.phoneNumber;
                this.ph.updateName(this.userName).then(function () {
                    _this.ph.updateGUID(_this.guid()).then(function () {
                        _this.ph.updateRideID(_this.guider(10)).then(function () {
                            _this.pop.hideLoader();
                            _this.navCtrl.setRoot('HomePage');
                        });
                    });
                });
            }
        }
    };
    PhonePage.prototype.AddCode = function (code) {
        // if (this.ph.card != null){
        this.SearchForSharingIDs(code);
        //   }else{
        //  this.pop.presentToast(this.lp.translate()[0].cardf)
        ///   }
    };
    PhonePage.prototype.SearchForSharingIDs = function (promoID) {
        var _this = this;
        console.log('SharingID search called');
        // this.pop.presentLoader('');
        this.ph.getAllSharingID(promoID).on('value', function (SharingIDShot) {
            if (SharingIDShot.val()) {
                var SharingID = SharingIDShot.val().id[0];
                _this.pop.hideLoader();
                //  console.log(Sharing);
                // SharingID
                console.log('SharingID found', SharingID);
                _this.ph.UpdateReferal(SharingID, promoID).then(function () {
                    _this.navCtrl.setRoot('HomePage');
                    _this.ph.getAllSharingID(promoID).off('value');
                });
            }
            else {
                _this.pop.hideLoader();
                console.log('rtyuiytrfghj');
                _this.pop.presentToast('Id Not Found. Please Try Another');
            }
        });
    };
    PhonePage.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    PhonePage.prototype.guid = function () {
        return this.s4();
    };
    PhonePage.prototype.guider = function (r) {
        return this.s5(r);
    };
    PhonePage.prototype.s5 = function (r) {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(r)
            .substring(1);
    };
    return PhonePage;
}());
PhonePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-phone',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/phone/phone.html"*/'<!-- <ion-header no-border>\n    <ion-navbar color="nav-color">\n      <ion-title>\n        Add Your Phone Number\n      </ion-title>\n    </ion-navbar>\n  </ion-header> -->\n  \n  \n  <ion-content class="o-scroll" padding>\n   \n      <div id="recaptcha-container"></div>\n      \n    <div class=\'form\'>\n      <!-- <p padding >Add a Phone Number to continue. </p> -->\n\n      \n        <ion-label class=\'stack\' padding color=\'primary\' stacked>Full {{lp.translate()[0].name}}</ion-label>\n        <ion-input class=\'input\' no-lines type="text" placeholder="eg John Snow" [(ngModel)]="userName" ></ion-input>\n    \n\n        <ion-label *ngIf=\'set.refer\' class=\'stack\' padding color=\'primary\' stacked>Referral Code(If any)</ion-label>\n        <ion-input *ngIf=\'set.refer\' class=\'input\' no-lines type="text" placeholder="eg xxxx" [(ngModel)]="userCode" ></ion-input>\n    \n        <ion-label *ngIf=\'set.refer\' class=\'stack\' padding color=\'primary\' stacked>Bank Name</ion-label>\n        <ion-input *ngIf=\'set.refer\' class=\'input\' no-lines type="text" placeholder="eg First bank" [(ngModel)]="userBank" ></ion-input>\n    \n        <ion-label *ngIf=\'set.refer\' class=\'stack\' padding color=\'primary\' stacked>Account Number</ion-label>\n        <ion-input *ngIf=\'set.refer\' class=\'input\' no-lines type="text" placeholder="eg xxxxxxxxxxxxxxx" [(ngModel)]="userAccount" ></ion-input>\n    \n    \n        <button *ngIf=\'set.refer\' padding ion-button  color="primary" id=\'mybutton\' block (click)=\'signIn(userName, userCode, userBank, userAccount)\'>{{lp.translate()[0].submit}}</button>\n       \n        <button *ngIf=\'!set.refer\' padding ion-button  color="primary" id=\'mybutton\' block (click)=\'signIn(userName)\'>{{lp.translate()[0].submit}}</button>\n       \n       \n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/phone/phone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */]])
], PhonePage);

//# sourceMappingURL=phone.js.map

/***/ })

});
//# sourceMappingURL=11.js.map