webpackJsonp([3],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_language_language__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { Diagnostic } from '@ionic-native/diagnostic';


var LoginPage = (function () {
    function LoginPage(navCtrl, lp, settings, platform, menu, loadingCtrl, alertCtrl, authProvider, ph, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.platform = platform;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.ph = ph;
        this.formBuilder = formBuilder;
        this.initState = false;
        menu.swipeEnable(false, 'menu1');
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        if (this.initState) {
            this.platform.registerBackButtonAction(function () { return _this.platform.exitApp(); });
        }
        else {
            this.platform.registerBackButtonAction(function () {
                _this.initState = false;
            });
        }
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        //this.checkForGPS()
        this.presentRouteLoader('');
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                _this.loading.dismiss().then(function () {
                    _this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
                        var phone = userProfileSnapshot.val().phoneNumber;
                        if (phone == null) {
                            _this.navCtrl.setRoot('MoreInfoPage');
                        }
                        else {
                            _this.navCtrl.setRoot('HomePage');
                        }
                    });
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: _this.lp.translate()[0].i8,
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.setRoot('SplashPage');
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.setRoot('ResetPasswordPage');
    };
    LoginPage.prototype.showLogin = function () {
        this.initState = true;
        this.presentRouteLoader('');
    };
    LoginPage.prototype.presentRouteLoader = function (message) {
        var loading = this.loadingCtrl.create({
            content: message
        });
        loading.present();
        var myTimeout = setTimeout(function () {
            loading.dismiss();
            clearTimeout(myTimeout);
        }, 600);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/login/login.html"*/'<!-- <ion-header no-border>\n  <ion-navbar *navbar hideBackButton="true" color="nav-color">\n    <ion-title text-center>\n      {{settings.appName}}\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding class="o-scroll">\n    <ion-label text-center>\n        <!-- <img src=\'data:image/png;base64,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\'/> -->\n       <h2 [hidden]=\'true\' class=\'logo-text\'> {{settings.appName}} </h2>\n       <p [hidden]=\'true\' class=\'logo-text\'> {{lp.translate()[0].f9}}</p>\n      </ion-label>\n\n  \n      \n  <form  *ngIf="initState" [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n      <ion-label color=\'primary\' stacked>{{lp.translate()[0].f10}}</ion-label>\n      <ion-input  formControlName="email" type="email" placeholder="username@domain.com" \n        [class.invalid]="!loginForm.controls.email.valid && loginForm.controls.email.dirty"></ion-input>\n    \n \n   \n    \n      <ion-label color=\'primary\' stacked>{{lp.translate()[0].g1}}</ion-label>\n      <ion-input  formControlName="password" type="password" placeholder="password" \n        [class.invalid]="!loginForm.controls.password.valid && loginForm.controls.password.dirty"></ion-input>\n   \n  \n\n   \n    <button ion-button block type="submit" [disabled]="!loginForm.valid">\n        {{lp.translate()[0].g2}}\n    </button>\n\n   \n  </form>\n   \n  \n    <button *ngIf="initState" color=\'light\'ion-button block clear (click)="goToSignup()">\n        {{lp.translate()[0].g3}}\n    </button>\n\n    <button *ngIf="initState" color=\'light\' ion-button block clear (click)="goToResetPassword()">\n        {{lp.translate()[0].g4}}\n    </button>\n\n\n\n        <!-- Login To App Section Can Be Found Below -->\n\n   <div class=\'o_section\'>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <button *ngIf="!initState" color=\'light\'ion-button block clear (click)="showLogin()">\n                {{lp.translate()[0].g2}}\n              </button>\n        </ion-col>\n        <ion-col>\n            <button *ngIf="!initState" color=\'light\'ion-button block clear (click)="goToSignup()">\n                {{lp.translate()[0].g5}}\n              </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n   </div>\n\n     \n    <div class=\'terms\'>\n        {{lp.translate()[0].g6}}\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map