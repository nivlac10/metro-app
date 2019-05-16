webpackJsonp([2],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(501);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 488:
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

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_native_map_container_native_map_container__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_language_language__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { Diagnostic } from '@ionic-native/diagnostic';
var LoginPage = (function () {
    function LoginPage(navCtrl, lp, settings, ntP, platform, menu, loadingCtrl, alertCtrl, authProvider, ph, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.ntP = ntP;
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
    LoginPage.prototype.checkForGPS = function () {
        //this.ntP.checkGps();
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
                        if (phone == null)
                            _this.navCtrl.setRoot('AccountkitPage');
                        else
                            _this.navCtrl.setRoot('HomePage');
                    });
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: _this.lp.translate()[0].accept,
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
    // loginViaFacebook(){
    //   this.authProvider.signInWithFacebook()
    //   .then( authData => {
    //     console.log(authData);
    //     this.loading.dismiss().then( () => {
    //           this.navCtrl.setRoot('StartupPage');
    //     });
    //   }, error => {
    //     this.loading.dismiss().then( () => {
    //       let alert = this.alertCtrl.create({
    //         message: error.message,
    //         buttons: [
    //           {
    //             text: this.lp.translate()[0].accept,
    //             role: 'cancel'
    //           }
    //         ]
    //       });
    //       alert.present();
    //     });
    //   });
    //   this.loading = this.loadingCtrl.create(
    //     {content: ''}
    //   );
    //   this.loading.present();
    // }
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push('EntrancePage');
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push('ResetPasswordPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/login/login.html"*/'<!-- <ion-header no-border>\n  <ion-navbar *navbar hideBackButton="true" color="nav-color">\n    <ion-title text-center>\n      Taxihub\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding class="o-scroll">\n   <div class=\'cont_IMG\'>\n    <div *ngIf="!initState" class=\'center_text\' text-center>\n       <h1 class=\'logo-text1\'> <strong>{{settings.appName}}</strong></h1>\n       <p class=\'logo-text\'> <strong>{{lp.translate()[0].fastandconv}}</strong></p>\n      </div>\n\n\n    <!-- <button *ngIf="initState" color=\'light\' ion-button block  (click)="loginViaFacebook()">\n          FACEBOOK\n    </button> -->\n\n  \n      \n  <form  *ngIf="initState" [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n      <ion-label color=\'primary\' stacked>{{lp.translate()[0].email}}</ion-label>\n      <ion-input  formControlName="email" type="email" placeholder="username@domain.com" \n        [class.invalid]="!loginForm.controls.email.valid && loginForm.controls.email.dirty"></ion-input>\n    \n \n   \n    \n      <ion-label color=\'primary\' stacked>{{lp.translate()[0].password}}</ion-label>\n      <ion-input  formControlName="password" type="password" placeholder="password" \n        [class.invalid]="!loginForm.controls.password.valid && loginForm.controls.password.dirty"></ion-input>\n   \n  \n\n   \n    <button ion-button block type="submit" [disabled]="!loginForm.valid">\n        {{lp.translate()[0].login}}\n    </button>\n\n   \n  </form>\n   \n  <div class=\'cont\'>\n    <button *ngIf="initState" color=\'primary\'ion-button block clear (click)="goToSignup()">\n        {{lp.translate()[0].newacc}}\n    </button>\n\n    <button *ngIf="initState" color=\'primary\' ion-button block clear (click)="goToResetPassword()">\n        {{lp.translate()[0].resetpasss}}\n    </button>\n\n</div>\n\n        <!-- Login To App Section Can Be Found Below -->\n\n   <div class=\'o_section\'>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <button *ngIf="!initState" color=\'primary\'ion-button block (click)="initState = true">\n                {{lp.translate()[0].login}}\n              </button>\n        </ion-col>\n        <ion-col>\n            <button *ngIf="!initState" color=\'primary\'ion-button block (click)="goToSignup()">\n                {{lp.translate()[0].signup}}\n              </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <!-- <button *ngIf="!initState" color=\'primary\' ion-button block  (click)="loginViaFacebook()">\n        {{lp.translate()[0].facebook}}\n    </button> -->\n\n   </div>\n\n<!--      \n    <div class=\'terms\'>\n        Our Terms And Service\n    </div> -->\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=2.js.map