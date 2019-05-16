webpackJsonp([8],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferalcodePageModule", function() { return ReferalcodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__referalcode__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReferalcodePageModule = (function () {
    function ReferalcodePageModule() {
    }
    return ReferalcodePageModule;
}());
ReferalcodePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__referalcode__["a" /* ReferalcodePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__referalcode__["a" /* ReferalcodePage */]),
        ],
    })
], ReferalcodePageModule);

//# sourceMappingURL=referalcode.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferalcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pop_up_pop_up__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language__ = __webpack_require__(26);
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
 * Generated class for the ReferalcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReferalcodePage = (function () {
    function ReferalcodePage(navCtrl, lp, ph, pop) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.ph = ph;
        this.pop = pop;
    }
    ReferalcodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReferalcodePage');
    };
    ReferalcodePage.prototype.signIn = function (userName) {
        if (this.userName != null) {
            this.pop.presentLoader('');
            this.AddCode(userName);
        }
    };
    ReferalcodePage.prototype.AddCode = function (code) {
        // if (this.ph.card != null){
        this.SearchForSharingIDs(code);
        //   }else{
        //  this.pop.presentToast(this.lp.translate()[0].cardf)
        ///   }
    };
    ReferalcodePage.prototype.SearchForSharingIDs = function (promoID) {
        var _this = this;
        console.log('SharingID search called');
        // this.pop.presentLoader('');
        this.ph.getAllSharingPromoID(promoID).on('value', function (SharingIDShot) {
            if (SharingIDShot.val()) {
                var SharingID = SharingIDShot.val().id[0];
                _this.pop.hideLoader();
                console.log(SharingID);
                // SharingID
                console.log('SharingID found', SharingID);
                //Get user profile with card details and use them as payment means
                _this.ph.getUserIDProfile(SharingID).on('value', function (userProfileSnapshot) {
                    if (userProfileSnapshot.val() != null) {
                        console.log(userProfileSnapshot.val());
                        if (userProfileSnapshot.val().Card_Number != null) {
                            _this.ph.card = userProfileSnapshot.val().Card_Number;
                            _this.ph.month = userProfileSnapshot.val().Card_Month;
                            _this.ph.cvc = userProfileSnapshot.val().Card_Cvc;
                            _this.ph.year = userProfileSnapshot.val().Card_Year;
                            _this.navCtrl.pop();
                            _this.pop.showPimp('Now Using ' + userProfileSnapshot.val().name + '`s Card.');
                        }
                        else {
                            _this.pop.presentToast('The User Has No Card.');
                        }
                    }
                    else {
                        _this.pop.presentToast('Id Not Found. Please Try Another');
                    }
                    //this.pop.hideLoader();
                    // alert(this.randomCode.replace(/[^A-Z,0-9]/gi, "").length);
                });
            }
            else {
                _this.pop.presentToast('Id Not Found. Please Try Another');
                console.log('rtyuiytrfghj');
                _this.pop.hideLoader();
            }
        });
    };
    return ReferalcodePage;
}());
ReferalcodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-referalcode',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/referalcode/referalcode.html"*/'<!-- <ion-header no-border>\n    <ion-navbar color="nav-color">\n      <ion-title>\n        Add Your Phone Number\n      </ion-title>\n    </ion-navbar>\n  </ion-header> -->\n  \n  \n  <ion-content class="o-scroll" padding>\n   \n    <div id="recaptcha-container"></div>\n    \n  <div class=\'form\'>\n    <!-- <p padding >Add a Phone Number to continue. </p> -->\n\n    \n      <ion-label class=\'stack\' padding color=\'primary\' stacked>Referal Code</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="eg John Snow" [(ngModel)]="userName" ></ion-input>\n  \n      \n  \n      <button padding ion-button  color="primary" id=\'mybutton\' block (click)=\'signIn(userName)\'>{{lp.translate()[0].submit}}</button>\n     \n     \n  </div>\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/referalcode/referalcode.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_pop_up_pop_up__["a" /* PopUpProvider */]])
], ReferalcodePage);

//# sourceMappingURL=referalcode.js.map

/***/ })

});
//# sourceMappingURL=8.js.map