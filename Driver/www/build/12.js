webpackJsonp([12],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePageModule", function() { return PhonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone__ = __webpack_require__(498);
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
            __WEBPACK_IMPORTED_MODULE_2__phone__["a" /* PhonePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__phone__["a" /* PhonePage */]),
        ],
    })
], PhonePageModule);

//# sourceMappingURL=phone.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(66);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhonePage = (function () {
    function PhonePage(navCtrl, pop, ph, navParams) {
        this.navCtrl = navCtrl;
        this.pop = pop;
        this.ph = ph;
        this.navParams = navParams;
    }
    PhonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        // timer(500).subscribe(()=> 
        this.login();
        //this.pop.showLoader('')
        // )
    };
    PhonePage.prototype.login = function () {
        var _this = this;
        window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "MY",
            facebookNotificationsEnabled: true
        }, function (successdata) {
            window.AccountKitPlugin.getAccount(function (user) {
                _this.pop.showLoader('');
                //  alert(user.phoneNumber)
                //alert(user.phoneNumber)
                if (user.phoneNumber)
                    _this.ph.UpdateNumber(user.phoneNumber).then(function () {
                        _this.ph.updateGUID(_this.guid()).then(function () {
                            //console.log(this.guid())
                            _this.navCtrl.setRoot('MoreInfoPage');
                            _this.pop.hideLoader();
                        });
                    });
            });
        }, function (err) {
            // alert(err);
            _this.login();
        });
    };
    PhonePage.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(9)
            .substring(1);
    };
    PhonePage.prototype.guid = function () {
        return this.s4();
    };
    return PhonePage;
}());
PhonePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-phone',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/phone/phone.html"*/'<!--\n  Generated template for the PhonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="sk-cube-grid">\n  <div class="sk-cube sk-cube1"></div>\n  <div class="sk-cube sk-cube2"></div>\n  <div class="sk-cube sk-cube3"></div>\n  <div class="sk-cube sk-cube4"></div>\n  <div class="sk-cube sk-cube5"></div>\n  <div class="sk-cube sk-cube6"></div>\n  <div class="sk-cube sk-cube7"></div>\n  <div class="sk-cube sk-cube8"></div>\n  <div class="sk-cube sk-cube9"></div>\n</div>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/phone/phone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], PhonePage);

//# sourceMappingURL=phone.js.map

/***/ })

});
//# sourceMappingURL=12.js.map