webpackJsonp([24],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooklaterPageModule", function() { return BooklaterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booklater__ = __webpack_require__(492);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BooklaterPageModule = (function () {
    function BooklaterPageModule() {
    }
    return BooklaterPageModule;
}());
BooklaterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__booklater__["a" /* BooklaterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__booklater__["a" /* BooklaterPage */]),
        ],
    })
], BooklaterPageModule);

//# sourceMappingURL=booklater.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooklaterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_geocoder_geocoder__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_native_map_container_native_map_container__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_directionservice_directionservice__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_language_language__ = __webpack_require__(26);
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
 * Generated class for the BooklaterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BooklaterPage = (function () {
    function BooklaterPage(navCtrl, settings, navParams, lp, alertCtrl, platform, ph, dProvider, cMap, gCode, One, pop, eventProvider, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.navParams = navParams;
        this.lp = lp;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.ph = ph;
        this.dProvider = dProvider;
        this.cMap = cMap;
        this.gCode = gCode;
        this.One = One;
        this.pop = pop;
        this.eventProvider = eventProvider;
        this.modalCtrl = modalCtrl;
        this.hasBooked = false;
        this.geocoder = new google.maps.Geocoder;
        this.toppings = 'London Stansted Airport';
        this.service = new google.maps.DistanceMatrixService();
        this.Lang = this.lp.translate();
        //this.pop.showPimp(this.cMap.lat);
        this.settings.appCountryCode = 'UK';
        this.lat = this.navParams.get('lat');
        this.lng = this.navParams.get('lng');
        this.userPos = new google.maps.LatLng(this.lat, this.lng);
        // this.pop.presentLoader('Getting location...')
        var latlng = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) };
        this.geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                //document.getElementById("position").innerText = results[0].formatted_address;
                _this.locationName = results[0].formatted_address;
                //  this.pop.hideLoader()
                _this.location = _this.locationName;
            }
            else {
                // this.pop.showPimp(results[0]);
            }
        });
        // }
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getUTCMonth() + 1;
        this.currentDay = new Date().getUTCDate();
        this.pop.presentLoader('');
        this.ph.getWebAdminProfile().on('value', function (userProfileSnapshot) {
            var admin = userProfileSnapshot.val();
            _this.dProvider.fare = admin.price;
            _this.dProvider.pricePerKm = admin.perkm;
            _this.pop.hideLoader();
        });
        if (!this.platform.is('cordova')) {
            this.id = '3456789098765456733';
            this.ph.getScheduledProfile(this.id).on('value', function (userProfileSnapshot) {
                _this.scheduleInfo = userProfileSnapshot.val();
                if (_this.scheduleInfo != null) {
                    var today = new Date();
                    var future = new Date(_this.scheduleInfo.Client_Date);
                    console.log(future);
                    _this.dataTime = _this.calcDate(today, future);
                    console.log(_this.dataTime);
                }
                _this.ph.getScheduledProfile(_this.id).off('value');
            });
        }
        else {
            this.One.getIds().then(function (id) {
                _this.userID = id.userId;
                _this.ph.getScheduledProfile(_this.userID).on('value', function (userProfileSnapshot) {
                    _this.scheduleInfo = userProfileSnapshot.val();
                    if (_this.scheduleInfo != null) {
                        // this.pop.showPimp('id is not null')
                        var today = new Date();
                        var future = new Date(_this.scheduleInfo.Client_Date);
                        console.log(future);
                        _this.dataTime = _this.calcDate(today, future);
                        console.log(_this.dataTime);
                    }
                    _this.ph.getScheduledProfile(_this.id).off('value');
                });
            });
        }
    }
    BooklaterPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //this.pop.presentLoader('Retrieving all items..')
        this.eventProvider.getScheduledList().on('value', function (snapshot) {
            _this.eventList = [];
            ///this.pop.hideLoader()
            snapshot.forEach(function (snap) {
                _this.eventList.push({
                    id: snap.key,
                    date: snap.val().TimeandDate,
                });
                return false;
            });
            _this.eventProvider.getScheduledList().off('value');
        });
    };
    BooklaterPage.prototype.calcDate = function (date1, date2) {
        var diff = Math.floor(date2.getTime() - date1.getTime());
        var day = 1000 * 60 * 60 * 24;
        var days = Math.floor(diff / day);
        var months = Math.floor(days / 31);
        //  var years = Math.floor(months/12);
        // console.log(days)
        var message = date2.toDateString();
        // message += " was "
        // message += days + " days " 
        // message += months + " months "
        // message += years + " years ago \n"
        return message;
    };
    BooklaterPage.prototype.Chosen = function (e) {
        if (this.currentYear <= e.year) {
            console.log(this.userPos, this.userDes);
            if (this.userPos != null && this.userDes != null) {
                console.log(e);
                var date = [];
                var time = [];
                date.push(e.year, e.month, e.day);
                time.push(e.hour, e.minute);
                console.log(date);
                this.calcScheduleRoute(this.userPos, this.userDes, this.destination, this.toppings, date, time);
            }
            else {
                this.pop.showPimp(this.Lang[0].addDest);
            }
        }
        else {
            this.pop.showPimp(this.Lang[0].addTime);
            console.log(this.currentMonth, this.currentDay);
        }
    };
    BooklaterPage.prototype.calcScheduleRoute = function (start, stop, destinationName, locationName, date, time) {
        var _this = this;
        this.pop.presentLoader('');
        // let kush = []
        // kush.push(start, stop, destinationName, locationName, date)
        // this.pop.showPimp(kush) 
        this.service.getDistanceMatrix({
            origins: [start, locationName],
            destinations: [destinationName, stop],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        }, function (response, status) {
            if (status == 'OK') {
                //   let fareTime = Math.floor(response.rows[0].elements[1].duration.value/60) * 5.5
                //  let price = Math.floor(response.rows[0].elements[1].distance.value/1000) * this.dProvider.pricePerKm + this.dProvider.fare + fareTime;
                console.log(_this.dProvider.pricePerKm, _this.dProvider.fare);
                // document.getElementById("cash").innerText = price;
                var image = _this.ph.user.photoURL;
                var name = _this.ph.user.displayName;
                var edited_name = _this.ph.name;
                var pay = _this.ph.paymentType;
                _this.pop.calculateBtn = false;
                if (image == null) {
                    if (_this.ph.pic == null) {
                        image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png';
                    }
                    else {
                        image = _this.ph.pic;
                    }
                }
                if (name == null) {
                    if (edited_name != null) {
                        name = edited_name;
                    }
                    else {
                        name = _this.ph.user.email;
                    }
                }
                if (pay == null) {
                    pay = 1;
                }
                if (_this.lat == null && _this.lng == null) {
                    _this.lat = _this.navParams.get('lat');
                    _this.lng = _this.navParams.get('lng');
                }
                if (!_this.platform.is('cordova')) {
                    var id_1 = '3456789098765456733';
                    _this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
                        var ratingText = userProfileSnapshot.val().ratingtext;
                        var ratingValue = userProfileSnapshot.val().rating;
                        if (ratingText == null && ratingValue == null) {
                            ratingText = _this.Lang[0].notrate;
                            ratingValue = 0;
                        }
                        _this.ph.getUserProfile().off('value');
                        console.log(name, image, _this.lat, _this.lng, _this.toppings, pay, _this.destination, _this.ph.phone, date, ratingText, ratingValue, time);
                        _this.eventProvider.CreateLondonBook(name, image, _this.lat, _this.lng, _this.toppings, pay, _this.destination, _this.ph.phone, date, id_1, ratingText, ratingValue, time).then(function (s) {
                            _this.pop.hideLoader();
                            _this.pop.showPimp('Your ride has been scheduled successfully.');
                        });
                    });
                }
                else {
                    _this.One.getIds().then(function (id) {
                        _this.userID = id.userId;
                        _this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
                            var ratingText = userProfileSnapshot.val().ratingtext;
                            var ratingValue = userProfileSnapshot.val().rating;
                            if (ratingText == null && ratingValue == null) {
                                ratingText = _this.Lang[0].notrate;
                                ratingValue = 0;
                            }
                            _this.lat = _this.navParams.get('lat');
                            _this.lng = _this.navParams.get('lng');
                            _this.ph.getUserProfile().off('value');
                            // let kush = []
                            // kush.push(price, name, image, this.lat, this.lng, this.location, pay, this.destination, this.ph.phone, date, this.userID ,ratingText, ratingValue, time)
                            // this.pop.showPimp(kush) 
                            console.log(name, image, _this.lat, _this.lng, _this.toppings, pay, _this.destination, _this.ph.phone, date);
                            _this.eventProvider.CreateLondonBook(name, image, _this.lat, _this.lng, _this.toppings, pay, _this.destination, _this.ph.phone, date, _this.userID, ratingText, ratingValue, time).then(function (s) {
                                _this.pop.hideLoader();
                                _this.pop.showPimp(_this.Lang[0].sucsch);
                            });
                        });
                    });
                }
            }
        });
    };
    BooklaterPage.prototype.showAddressModal = function (selectedBar) {
        var _this = this;
        var modal = this.modalCtrl.create('AutocompletePage');
        modal.onDidDismiss(function (data) {
            //Open the address modal on location bar click to change location
            console.log(data);
            if (selectedBar == 1 && data != null) {
                document.getElementById("position").innerText = data;
                //  this.location = data
                _this.gCode.geocoder.geocode({ 'address': data }, function (results, status) {
                    if (status == 'OK') {
                        var position = results[0].geometry.location;
                        _this.userPos = new google.maps.LatLng(position.lat(), position.lng());
                        _this.lat = position.lat();
                        _this.lng = position.lng();
                    }
                });
            }
            //Open the address modal on destination bar click to change destination
            if (selectedBar == 2 && data != null) {
                document.getElementById("whereto").innerText = data;
                _this.destination = data;
                ///After data input, check to see if user selected to add a destination or to calculate distance.
                _this.gCode.geocoder.geocode({ 'address': data }, function (results, status) {
                    if (status == 'OK') {
                        var position = results[0].geometry.location;
                        _this.userDes = new google.maps.LatLng(position.lat(), position.lng());
                        // let date = 'fhdg'
                    }
                });
            }
        });
        modal.present();
    };
    BooklaterPage.prototype.CancelRide = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.Lang[0].error,
            buttons: [
                {
                    text: this.Lang[0].reject,
                },
                {
                    text: this.Lang[0].accept,
                    handler: function (data) {
                        _this.remove();
                    }
                }
            ]
        });
        alert.present();
    };
    BooklaterPage.prototype.remove = function () {
        var _this = this;
        this.One.getIds().then(function (id) {
            _this.userID = id.userId;
            _this.ph.getScheduledProfile(_this.userID).remove().then(function (s) {
                _this.pop.showPimp(_this.Lang[0].sucSchw);
                _this.hasBooked = false;
            });
        });
    };
    return BooklaterPage;
}());
BooklaterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-booklater',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/booklater/booklater.html"*/'<!--\n  Generated template for the BooklaterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar color="nav-color">\n    <ion-title>Book a Car in London</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="no-scroll">\n   <!-- These are the location bar and destination bar -->\n\n  <div *ngIf=\'scheduleInfo == null\' >\n   <div text-center class="whiteFlap">\n   <div class="bars">\n      <!-- <img id=\'envelope\' src="data:image/png;base64,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"> -->\n      <p>{{Lang[0].from}}</p>\n\n      \n      <!-- location bar -->\n    <!-- <p padding >Add a Phone Number to continue. </p> -->\n         \n  <div class=\'form\'>\n    <ion-item>\n      <ion-label class=\'stack\' padding color=\'primary\' stacked>Choose Your Airport</ion-label>\n      <ion-select [(ngModel)]="toppings" multiple="false">\n        <ion-option data-countryCode="AR" value="London City Airport">London City Airport</ion-option>\n        <ion-option data-countryCode="AU" value="London Gatwick Airport">London Gatwick Airport</ion-option>\n        <ion-option data-countryCode="AT" value="London Heathrow Airport">London Heathrow Airport</ion-option>\n        <ion-option data-countryCode="AZ" value="London Luton Airport">London Luton Airport</ion-option>\n        <ion-option data-countryCode="BS" value="London Stansted Airport">London Stansted Airport</ion-option>\n      </ion-select>\n    </ion-item>\n\n    </div>\n    \n       <p>{{Lang[0].to}}</p>\n          <!-- desination bar -->\n       <button no-lines detail-none ion-item icon-start class="bars-destinate" (click)="showAddressModal(2)">\n            <ion-icon color=\'deep\' name="flag"></ion-icon>\n            <div id="whereto">{{Lang[0].dest}}</div>\n       </button> \n\n       <!-- <p>Price.</p>\n       <button no-lines detail-none ion-item icon-start class="bars-price">\n          <ion-icon color=\'deep\' name="cash"></ion-icon>\n          <div id="cash">price will appear here</div>\n     </button>  -->\n  </div>\n\n   \n      \n\n   \n  <div class=\'top-items\'>\n      <ion-item no-lines>\n          <ion-label text-center>{{Lang[0].date}}</ion-label>\n          <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="myDate" (ionChange)=\'Chosen($event)\' min=\'2018\'  max="2020-10-31"></ion-datetime>\n        </ion-item>\n  </div>\n  </div>\n</div>\n\n\n\n\n  <div *ngIf=\'scheduleInfo != null\' class=\'followed-items\'>\n      <ion-list text-center>\n        <ion-item >\n          <h2 class=\'ride\'><strong> <ion-icon color=\'deep\' name="timer"></ion-icon>A London Ride Booked</strong></h2>\n          <h2 class=\'date\'><strong> <ion-icon color=\'deep\' name="calendar"></ion-icon>{{dataTime}}</strong></h2>\n          <h2 class=\'date\'><strong> <ion-icon color=\'primary\' name="clock"></ion-icon>@{{scheduleInfo.Client_Time}}</strong></h2>\n          <h2 class=\'location\'><strong> <ion-icon color=\'deep\' name="locate"></ion-icon>{{scheduleInfo.Client_locationName}}</strong></h2>\n          <h2 class=\'destination\'><strong> <ion-icon color=\'deep\' name="navigate"></ion-icon>{{scheduleInfo.Client_destinationName}}</strong></h2>\n         \n          <button detail-none id=\'button\' color="danger" no-lines text-center icon-start ion-item (click)="CancelRide()" >\n              {{Lang[0].clear}}\n          </button>\n        </ion-item>\n      </ion-list>\n        </div>\n   \n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/booklater/booklater.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_10__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], BooklaterPage);

//# sourceMappingURL=booklater.js.map

/***/ })

});
//# sourceMappingURL=24.js.map