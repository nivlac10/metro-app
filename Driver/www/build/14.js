webpackJsonp([14],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreInfoPageModule", function() { return MoreInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_info__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoreInfoPageModule = (function () {
    function MoreInfoPageModule() {
    }
    return MoreInfoPageModule;
}());
MoreInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__more_info__["a" /* MoreInfoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__more_info__["a" /* MoreInfoPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__more_info__["a" /* MoreInfoPage */]
        ]
    })
], MoreInfoPageModule);

//# sourceMappingURL=more-info.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_language__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_event_event__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MoreInfoPage = (function () {
    function MoreInfoPage(plat, eventProvider, platform, navParams, lp, pop, navCtrl, menu, authProvider, loadingCtrl, ph, alertCtrl) {
        this.plat = plat;
        this.eventProvider = eventProvider;
        this.platform = platform;
        this.navParams = navParams;
        this.lp = lp;
        this.pop = pop;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.ph = ph;
        this.alertCtrl = alertCtrl;
        this.cartypes = '1';
        this.carChosen = false;
        this.cities = 'Abuja';
        this.license = '';
        this.model = '';
        this.plate = '';
        this.verificationId = '';
        this.phoneNumber = '';
        this.userName = '';
        this.countryCode = '';
        this.companies = 'NO INSPECTOR';
        this.Debugging = false;
        this.toppings = 234;
        // this.phoneNumber = this.navParams.get('phone');
    }
    MoreInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.pop.showLoader('please wait....');
        this.eventProvider.getCompanyList().on('value', function (snapshot) {
            _this.items = [];
            _this.pop.hideLoader();
            snapshot.forEach(function (snap) {
                _this.items.push({
                    id: snap.key,
                });
                return false;
            });
        });
    };
    MoreInfoPage.prototype.signIn = function (userName) {
        var _this = this;
        if (this.name != null && this.banks != null && this.cities && this.number != null
            && this.model && this.year && this.license && this.plate && this.seat) {
            this.pop.showLoader('');
            this.ph.UpdateInfo(this.name, this.cities, this.license, this.model, this.year, this.plate, this.seat, this.number, this.banks, this.cartypes, this.companies).then(function (success) {
                _this.navCtrl.setRoot('AddphotoinfoPage');
                _this.pop.hideLoader();
                _this.ph.getCompanyProfile(_this.companies).update({
                    earnings: 0,
                }).then(function () {
                });
            });
        }
    };
    return MoreInfoPage;
}());
MoreInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])()
    /**
     * Generated class for the MoreInfoPage page.
     *
     * See http://ionicframework.com/docs/components/#navigation for more info
     * on Ionic pages and navigation.
     */
    ,
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more-info',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/more-info/more-info.html"*/'<ion-header  no-border>\n  <ion-navbar color="primary">\n    <ion-title>Step 1</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center class=\'yes-scroll\'>\n    <div class=\'form\'>\n\n        <ion-label text-center>\n           Personal Information\n           <hr>\n          </ion-label>\n  \n      <ion-label class=\'stack\' padding color=\'primary\' stacked>{{lp.translate()[0].h2}}</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="eg John Snow" [(ngModel)]="name" ></ion-input>\n\n      <ion-label class=\'stack\' padding color=\'primary\' stacked>{{lp.translate()[0].h10}}</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="eg xxxxxxxxxx" [(ngModel)]="number" ></ion-input>\n\n      <ion-label class=\'stack\' padding color=\'primary\' stacked>{{lp.translate()[0].i1}}</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="eg Some Bank" [(ngModel)]="banks" ></ion-input>\n\n      <ion-label text-center>\n          Car Information\n          <hr>\n        </ion-label>\n\n      <ion-label class=\'stack\' padding color=\'primary\' stacked>License</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="" [(ngModel)]="license" ></ion-input>\n      \n      <ion-label class=\'stack\' padding color=\'primary\' stacked>CarModel</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="" [(ngModel)]="model" ></ion-input>\n\n      <ion-label class=\'stack\' padding color=\'primary\' stacked>CarYear</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="" [(ngModel)]="year" ></ion-input>\n      \n      <ion-label class=\'stack\' padding color=\'primary\' stacked>CarPlate</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="" [(ngModel)]="plate" ></ion-input>\n      \n      <ion-label class=\'stack\' padding color=\'primary\' stacked>CarSeat Number</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="" [(ngModel)]="seat" ></ion-input>\n     \n  <ion-item padding>\n    <ion-label class=\'stack\' padding  stacked>Car Transmission</ion-label>\n    <ion-select [(ngModel)]="cartransmission" multiple="false">\n     <ion-option data-countryCode="1" value="1" selected>Automatic</ion-option>\n      <ion-option data-countryCode="2" value="2">Manual</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\'ph.cars\' padding>\n      <ion-label class=\'stack\' padding  stacked>Car Type</ion-label>\n      <ion-select [(ngModel)]="cartypes" multiple="false">\n       <ion-option *ngIf=\'ph.cars.car_0\' data-countryCode="1" value="0" selected>{{ph.cars.car_0}}</ion-option>\n        <ion-option data-countryCode="2" value="1">{{ph.cars.car_1}}</ion-option>\n        <ion-option data-countryCode="3" value="2">{{ph.cars.car_2}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-label class=\'stack\' padding  stacked>Car Inspector</ion-label>\n      <ion-select [(ngModel)]="companies" multiple="false">\n      <div *ngFor=\'let item of items\'>\n       <ion-option value=\'{{item.id}}\'>{{item.id}}</ion-option>\n      </div>\n      </ion-select>\n    </ion-item>\n<!-- \n  <ion-item padding>\n    <ion-label class=\'stack\' padding  stacked>{{lp.translate()[0].i1}}</ion-label>\n    <ion-select [(ngModel)]="banks" multiple="false">\n     <ion-option data-countryCode="DZ" value="213">Algeria (+213)</ion-option>\n      <ion-option data-countryCode="AR" value="54">Argentina (+54)</ion-option>\n      <ion-option data-countryCode="AU" value="61">Australia (+61)</ion-option>\n      <ion-option data-countryCode="AT" value="43">Austria (+43)</ion-option>\n      <ion-option data-countryCode="AZ" value="994" selected>Azerbaijan (+994)</ion-option>\n    </ion-select>\n  </ion-item> -->\n\n\n  <!-- <ion-item padding >\n      <ion-label class=\'stack\' padding color=\'primary\' stacked>{{lp.translate()[0].h4}}</ion-label>\n      <ion-select [(ngModel)]="cities" multiple="false">\n       <ion-option data-countryCode="1" value="Bakı" selected>Bakı</ion-option>\n        <ion-option data-countryCode="2" value="Ağcabədi">Ağcabədi</ion-option>\n        <ion-option data-countryCode="3" value="Ağdam">Ağdam</ion-option>\n        <ion-option data-countryCode="4" value="Ağdaş">Ağdaş</ion-option>\n        <ion-option data-countryCode="5" value="Ağdərə">Ağdərə</ion-option>\n\n        <ion-option data-countryCode="6" value="Ağstafa">Ağstafa</ion-option>\n        <ion-option data-countryCode="7" value="Ağsu">Ağsu</ion-option>\n        <ion-option data-countryCode="8" value="Astara">Astara</ion-option>\n        <ion-option data-countryCode="9" value="Balakən">Balakən</ion-option>\n        <ion-option data-countryCode="10" value="Beyləqan" >Beyləqan</ion-option>\n\n        <ion-option data-countryCode="11" value="Bərdə">Bərdə</ion-option>\n        <ion-option data-countryCode="12" value="Biləsuvar">Biləsuvar</ion-option>\n        <ion-option data-countryCode="13" value="Cəbrayıl">Cəbrayıl</ion-option>\n        <ion-option data-countryCode="14" value="Cəlilabad">Cəlilabad</ion-option>\n        <ion-option data-countryCode="15" value="Culfa" >Culfa</ion-option>\n\n        <ion-option data-countryCode="16" value="Daşkəsən">Daşkəsən</ion-option>\n        <ion-option data-countryCode="17" value="Dəliməmmədli">Dəliməmmədli</ion-option>\n        <ion-option data-countryCode="18" value="Əsgəran">Əsgəran</ion-option>\n        <ion-option data-countryCode="19" value="Füzuli">Füzuli</ion-option>\n        <ion-option data-countryCode="20" value="Gədəbəy">Gədəbəy</ion-option>\n\n        <ion-option data-countryCode="21" value="Gəncə">Gəncə</ion-option>\n        <ion-option data-countryCode="22" value="Goranboy">Goranboy</ion-option>\n        <ion-option data-countryCode="23" value="Göygöl">Göygöl</ion-option>\n        <ion-option data-countryCode="24" value="Göytəpə">Göytəpə</ion-option>\n        <ion-option data-countryCode="25" value="Hacıqabul" >Hacıqabul</ion-option>\n\n        <ion-option data-countryCode="26" value="Horadiz">Horadiz</ion-option>\n        <ion-option data-countryCode="27" value="Xaçmaz">Xaçmaz</ion-option>\n        <ion-option data-countryCode="28" value="Xankəndi">Xankəndi</ion-option>\n        <ion-option data-countryCode="29" value="Xocalı">Xocalı</ion-option>\n        <ion-option data-countryCode="30" value="Xocavənd">Xocavənd</ion-option>\n\n        <ion-option data-countryCode="31" value="Xırdalan">Xırdalan</ion-option>\n        <ion-option data-countryCode="32" value="Xızı">Xızı</ion-option>\n        <ion-option data-countryCode="33" value="Xudat">Xudat</ion-option>\n        <ion-option data-countryCode="34" value="İmişli">İmişli</ion-option>\n        <ion-option data-countryCode="35" value="İsmayıllı" >İsmayıllı</ion-option>\n\n        <ion-option data-countryCode="36" value="Kəlbəcər">Kəlbəcər</ion-option>\n        <ion-option data-countryCode="37" value="Kürdəmir">Kürdəmir</ion-option>\n        <ion-option data-countryCode="38" value="Qax">Qax</ion-option>\n        <ion-option data-countryCode="39" value="Qazax">Qazax</ion-option>\n        <ion-option data-countryCode="40" value="Qəbələ">Qəbələ</ion-option>\n\n        <ion-option data-countryCode="41" value="Qobustan">Qobustan</ion-option>\n        <ion-option data-countryCode="42" value="Qovlar">Qovlar</ion-option>\n        <ion-option data-countryCode="43" value="Quba">Quba</ion-option>\n        <ion-option data-countryCode="44" value="Qubadlı">Qubadlı</ion-option>\n        <ion-option data-countryCode="45" value="Qusar" >Qusar</ion-option>\n\n        <ion-option data-countryCode="46" value="Laçın">Laçın</ion-option>\n        <ion-option data-countryCode="47" value="Lerik">Lerik</ion-option>\n        <ion-option data-countryCode="48" value="Lənkəran">Lənkəran</ion-option>\n        <ion-option data-countryCode="49" value="Liman">Liman</ion-option>\n        <ion-option data-countryCode="50" value="Masallı" >Masallı</ion-option>\n\n        <ion-option data-countryCode="51" value="Mingəçevir">Mingəçevir</ion-option>\n        <ion-option data-countryCode="52" value="Naftalan">Naftalan</ion-option>\n        <ion-option data-countryCode="53" value="Naxçıvan">Naxçıvan</ion-option>\n        <ion-option data-countryCode="54" value="Neftçala">Neftçala</ion-option>\n        <ion-option data-countryCode="55" value="Oğuz">Oğuz</ion-option>\n\n        <ion-option data-countryCode="56" value="Ordubad">Ordubad</ion-option>\n        <ion-option data-countryCode="57" value="Saatlı">Saatlı</ion-option>\n        <ion-option data-countryCode="58" value="Sabirabad">Sabirabad</ion-option>\n        <ion-option data-countryCode="59" value="Salyan">Salyan</ion-option>\n        <ion-option data-countryCode="60" value="Samux" >Samux</ion-option>\n\n        <ion-option data-countryCode="61" value="Siyəzən">Siyəzən</ion-option>\n        <ion-option data-countryCode="62" value="Sumqayıt">Sumqayıt</ion-option>\n        <ion-option data-countryCode="63" value="Şabran">Şabran</ion-option>\n        <ion-option data-countryCode="64" value="Şahbuz">Şahbuz</ion-option>\n        <ion-option data-countryCode="65" value="Şamaxı" >Şamaxı</ion-option>\n\n        <ion-option data-countryCode="66" value="Şəki">Şəki</ion-option>\n        <ion-option data-countryCode="67" value="Şəmkir">Şəmkir</ion-option>\n        <ion-option data-countryCode="68" value="Şərur">Şərur</ion-option>\n        <ion-option data-countryCode="69" value="Şirvan">Şirvan</ion-option>\n        <ion-option data-countryCode="70" value="Şuşa">Şuşa</ion-option>\n\n        <ion-option data-countryCode="71" value="Tərtər">Tərtər</ion-option>\n        <ion-option data-countryCode="72" value="Tovuz">Tovuz</ion-option>\n        <ion-option data-countryCode="73" value="Ucar">Ucar</ion-option>\n        <ion-option data-countryCode="74" value="Yardımlı">Yardımlı</ion-option>\n        <ion-option data-countryCode="75" value="Yevlax" >Yevlax</ion-option>\n\n        <ion-option data-countryCode="76" value="Zaqatala">Zaqatala</ion-option>\n        <ion-option data-countryCode="77" value="Zəngilan">Zəngilan</ion-option>\n        <ion-option data-countryCode="78" value="Zərdab">Zərdab</ion-option>\n       \n      </ion-select>\n    </ion-item> -->\n   \n\n  <button padding ion-button  color="primary" id=\'mybutton\' block (click)=\'signIn(userName)\'>{{lp.translate()[0].b2}}</button>\n  \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/more-info/more-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MoreInfoPage);

//# sourceMappingURL=more-info.js.map

/***/ })

});
//# sourceMappingURL=14.js.map