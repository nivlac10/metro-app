webpackJsonp([0],{

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
        ]
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

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

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_language_language__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = (function () {
    function SignupPage(navCtrl, lp, authProvider, formBuilder, loadingCtrl, ph, alertCtrl) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.ph = ph;
        this.alertCtrl = alertCtrl;
        this.signupForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authProvider.signupUser(this.signupForm.value.email, this.signupForm.value.password)
                .then(function () {
                _this.loading.dismiss().then(function () {
                    if (_this.ph.phone == null)
                        _this.navCtrl.push('AccountkitPage');
                    else
                        _this.navCtrl.setRoot('HomePage');
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
    SignupPage.prototype.goToLogin = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/signup/signup.html"*/'<ion-header no-border>\n    <ion-navbar color="nav-color">\n      <ion-title>\n        Add Your Email\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content class="o-scroll" padding>\n  <!-- <div text-center>\n    <img src=\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMzI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCAzMiIgd2lkdGg9IjIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJMYXllcl8xIi8+PGcgaWQ9Im1hcF94NUZfcGluX3g1Rl9zdHJva2UiPjxnPjxwYXRoIGQ9Ik05Ljk5Niw0YzEuNjA1LDAsMy4xMTMsMC42MjUsNC4yNDYsMS43NkMxNS4zNzUsNi44OTEsMTYsOC4zOTgsMTYsMTBzLTAuNjI1LDMuMTA5LTEuNzMsNC4yMTMgICAgYy0wLjE2OCwwLjE2Ni0yLjIzOCwyLjIyNS00LjI3Myw1LjQ0MWMtMi4wMi0zLjIxMS00LjA4Mi01LjI2Mi00LjIzOC01LjQxNEM0LjYyNSwxMy4xMDksNCwxMS42MDIsNCwxMHMwLjYyNS0zLjEwOSwxLjc1OC00LjI0MiAgICBTOC4zMTQsNCw5Ljk5Niw0IE05Ljk5NiwwQzcuNDQxLDAsNC44ODMsMC45NzcsMi45MywyLjkzYy0zLjkwNiwzLjkwNC0zLjkwNiwxMC4yMzYsMCwxNC4xNDFjMCwwLDcuMDY2LDYuOTMsNy4wNjYsMTQuOTMgICAgYzAtOCw3LjA3NC0xNC45Myw3LjA3NC0xNC45M2MzLjkwNi0zLjkwNCwzLjkwNi0xMC4yMzYsMC0xNC4xNDFDMTUuMTE3LDAuOTc3LDEyLjU1OSwwLDkuOTk2LDBMOS45OTYsMHoiIHN0eWxlPSJmaWxsOiM0RTRFNTA7Ii8+PHBhdGggZD0iTTEyLDEwYzAsMS4xMDUtMC44OTUsMi0yLjAwNCwyQzguODExLDEyLDgsMTEuMTA1LDgsMTBzMC44MTEtMiwxLjk5Ni0yQzExLjEwNSw4LDEyLDguODk1LDEyLDEweiIgc3R5bGU9ImZpbGw6IzRFNEU1MDsiLz48L2c+PC9nPjwvc3ZnPg==\'/>\n  </div> -->\n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n      <ion-label color=\'primary\' stacked>{{lp.translate()[0].email}}</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Your email address" \n        [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty">\n      </ion-input>\n    \n\n   \n      <ion-label color=\'primary\' stacked>{{lp.translate()[0].password}}</ion-label>\n      <ion-input formControlName="password" type="password" placeholder="Your password" \n        [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty">\n      </ion-input>\n\n\n    <button padding ion-button block type="submit" [disabled]="!signupForm.valid">\n        {{lp.translate()[0].newacc}}\n    </button>\n  </form>\n\n  <button color=\'light\'ion-button block (click)="goToLogin()">\n      {{lp.translate()[0].login}}\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map