webpackJsonp([0],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_directionservice_directionservice__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_onesignal_onesignal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_geocoder_geocoder__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_call_number__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_rate_rate__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_background_mode__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_vibration__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_observable_timer__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_observable_interval__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_maps__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_language_language__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var HomePage = (function () {
    function HomePage(callNumber, vibration, googleMaps, lp, modalCtrl, storage, events, settings, navParams, backgroundMode, One, statusBar, loadingCtrl, locationTracker, myGcode, dProvider, platform, OneSignal, alert, pop, ph, navCtrl, eventProvider) {
        this.callNumber = callNumber;
        this.vibration = vibration;
        this.googleMaps = googleMaps;
        this.lp = lp;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.events = events;
        this.settings = settings;
        this.navParams = navParams;
        this.backgroundMode = backgroundMode;
        this.One = One;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.locationTracker = locationTracker;
        this.myGcode = myGcode;
        this.dProvider = dProvider;
        this.platform = platform;
        this.OneSignal = OneSignal;
        this.alert = alert;
        this.pop = pop;
        this.ph = ph;
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
        this.toggleMore = false;
        this.geocoder = new google.maps.Geocoder;
        this.gpsIson = false;
        this.hideMe = false;
        this.hasArrived = false;
        this.poolRequest = false;
        this.hasAdded_Destination2 = false;
        this.hasPooled = true;
        this.poolEnd = true;
        this.hasDone = true;
        this.isBlocked = false;
        this.canLoad = true;
        this.doneK = true;
        this.canDO = true;
        this.returningUser = true;
        this.NotifyTimes = -1;
        this.timerBeforeNotify = 2000;
        this.mapSection = false;
        this.toggleButtons = false;
        this.moreText = "Hide All";
        this.moreIcon = "ios-arrow-up";
        this.canShowOther = false;
        this.hasNotPicked = true;
        this.hasNotPicked2 = true;
        this.hasPooled2 = true;
        this.hideNews = false;
        this.notification = false;
        this.mapFalse = false;
        this.connected = false;
        this.toggleStatus = false;
        this.userHasPhone = false;
        this.hasAdded_Destination = false;
        this.canEnd2 = true;
        this.connect = false;
        this.canEnd = true;
        this.rating = 0;
        this.ratingText = 'Cool';
        this.appReady = false;
        this.hasSent = false;
        this.canStopCheck = false;
        this.canStop = false;
        this.isNetwork = true;
        this.greut = true;
        this.called = true;
        this.showGps = false;
        this.hasEnded = true;
        this.called2 = true;
        this.called_2 = true;
        this.itsOver = true;
        this.called_22 = true;
        this.tacktime = true;
        this.dropped = true;
        this.dropped2 = true;
        this.cliet = true;
        this.clientClrCheck = false;
        this.PoolClrCheck = false;
        this.done = true;
        this.hasNotFoundMap = true;
        this.showPassenger2 = false;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (!_this.platform.is('cordova')) {
                _this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
            }
            else {
                _this.One.getIds().then(function (success) {
                    _this.notify_ID = success.userId;
                });
            }
            console.log('did enter');
            if (!_this.platform.is('cordova')) {
                _this.locationTracker.lat = 5.4966964;
                _this.locationTracker.lng = 7.5297323;
            }
            if (_this.appReady && _this.locationTracker.lat != 0) {
                console.log(_this.settings.current_ID);
                if (!_this.platform.is('cordova')) {
                    if (_this.hasEnded) {
                        console.log('Updating car on database.');
                        //  this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.cartype);
                    }
                }
                if (_this.platform.is('cordova')) {
                    if (_this.hasEnded) {
                        //  this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.cartype);
                        _this.platform.registerBackButtonAction(function () { return _this.platform.pause; });
                        _this.platform.registerBackButtonAction(function () { return _this.platform.exitApp(); });
                    }
                    if (_this.settings.current_ID) {
                        _this.showLoadRefresh();
                        _this.notify_ID = _this.settings.id;
                        console.log('scheduling activated');
                        _this.StartListeningForChanges(_this.notify_ID);
                    }
                }
                else {
                    if (_this.settings.current_ID) {
                        _this.showLoadRefresh();
                        _this.notify_ID = _this.settings.id;
                        console.log('scheduling activated');
                        _this.StartListeningForChanges(_this.notify_ID);
                    }
                }
            }
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var unsubcribe = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.auth().onAuthStateChanged(function (user) {
                //alert()
                if (!user) {
                    _this.navCtrl.setRoot('LoginPage');
                    // this.statusBar.hide();
                    _this.ph.loadingState = true;
                    console.log(_this.ph.loadingState);
                    unsubcribe();
                }
                else {
                    unsubcribe();
                    var phone_1;
                    var picture_1;
                    var licence_pic_1;
                    var active_User_1;
                    var license_1;
                    setTimeout(function () {
                        _this.checkConnection();
                    }, 6000);
                    _this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
                        console.log(userProfileSnapshot.key);
                        phone_1 = userProfileSnapshot.val().phoneNumber;
                        picture_1 = userProfileSnapshot.val().picture;
                        active_User_1 = userProfileSnapshot.val().active_state;
                        license_1 = userProfileSnapshot.val().license;
                        licence_pic_1 = userProfileSnapshot.val().license_picture;
                        if (userProfileSnapshot.val().blocked == true) {
                            _this.pop.alertClosure('You Have Been Suspended.');
                            _this.isBlocked = true;
                        }
                        _this.cartype = userProfileSnapshot.val().Cartype;
                        _this.ph.getUserProfile().off('value');
                        if (phone_1) {
                            if (license_1) {
                                if (picture_1 != null && licence_pic_1 != null) {
                                    if (active_User_1) {
                                        _this.ph.loadingState = true;
                                        //console.log(this.ph.loadingState)
                                        console.log(active_User_1);
                                        var otherDatabseInfo = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.database().ref("DashboardSettings");
                                        otherDatabseInfo.on('value', function (userProfileSnapshot) {
                                            _this.dProvider.fare = userProfileSnapshot.val().price;
                                            _this.dProvider.pricePerKm = userProfileSnapshot.val().perkm;
                                            // this.pop.appName = userProfileSnapshot.val().AppName;
                                            //   this.settings.appcurrency = userProfileSnapshot.val().Currency;
                                        });
                                        _this.eventProvider.getScheduleList().on('value', function (snapshot) {
                                            if (snapshot.val() != null)
                                                _this.numSchedule = 1;
                                            console.log(_this.numSchedule);
                                        });
                                        _this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
                                            _this.earnings = userProfileSnapshot.val().earnings;
                                        });
                                        _this.ph.getNewsProfile().on('value', function (userProfileSnapshot) {
                                            if (userProfileSnapshot.val()) {
                                                _this.news = userProfileSnapshot.val().News;
                                            }
                                            _this.storage.get('News').then(function (sd) {
                                                console.log(sd, _this.news);
                                                if (sd == _this.news) {
                                                    _this.hideNews = true;
                                                    console.log(sd);
                                                }
                                                else {
                                                    _this.hideNews = false;
                                                    _this.newsti = 'News Available';
                                                }
                                            });
                                        });
                                        //       if (this.platform.is('cordova')) {
                                        //      this.backgroundMode.enable();
                                        //      this.backgroundMode.setDefaults({
                                        //       title: this.lp.translate()[0].e2,
                                        //       text: this.lp.translate()[0].e3,
                                        //       bigText: true,
                                        //       hidden: false,  
                                        //   })
                                        //     this.backgroundMode.overrideBackButton()
                                        // }
                                        if (!_this.platform.is('cordova')) {
                                            _this.locationTracker.lng = 7.5297323;
                                            _this.locationTracker.lat = 5.4966964;
                                            _this.locationTracker.hasShown = true;
                                            //   this.loadMap(this.locationTracker.lat, this.locationTracker.lng)
                                        }
                                        if (_this.platform.is('cordova')) {
                                            if (_this.hasDone) {
                                                _this.NowWaitingForID();
                                                _this.hasDone = false;
                                                _this.showLoadRefresh();
                                                _this.locationTracker.loadMap();
                                            }
                                        }
                                        else {
                                            if (_this.hasDone) {
                                                _this.NowWaitingForID();
                                                _this.hasDone = false;
                                                _this.showLoadRefresh();
                                            }
                                            _this.loadMapGoogle(_this.locationTracker.lat, _this.locationTracker.lng);
                                        }
                                        var fTime_1 = setTimeout(function () {
                                            if (_this.locationTracker.mapLoadComplete) {
                                                clearInterval(fTime_1);
                                                _this.showGps = false;
                                            }
                                            else {
                                                _this.showGps = true;
                                            }
                                        }, 4000);
                                        // this.statusBar.show();
                                    }
                                    else {
                                        _this.navCtrl.setRoot('WaitingPage');
                                        _this.ph.loadingState = true;
                                        console.log(_this.ph.loadingState);
                                    }
                                }
                                else {
                                    _this.navCtrl.setRoot('AddphotoinfoPage');
                                    console.log(_this.ph.loadingState);
                                    _this.ph.loadingState = true;
                                }
                            }
                            else {
                                _this.navCtrl.setRoot('MoreInfoPage');
                                console.log(_this.ph.loadingState);
                                _this.ph.loadingState = true;
                            }
                        }
                        else {
                            _this.navCtrl.setRoot('PhonePage');
                            _this.ph.loadingState = true;
                            console.log(_this.ph.loadingState);
                        }
                    });
                }
            });
        });
    };
    HomePage.prototype.checkConnection = function () {
        var _this = this;
        var done = true;
        var dismissLoader = this.loadingCtrl.create({
            content: 'Network Lost, Please Check Your Connection. Retrying...'
        });
        var connectedRef = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.database().ref(".info/connected");
        connectedRef.on("value", function (snap) {
            if (snap.val() === true) {
                if (_this.connect) {
                    dismissLoader.dismiss();
                    _this.connect = false;
                    console.log('cancelled network error loader');
                    //connectedRef.off("value");
                }
            }
            else {
                if (!_this.connect) {
                    dismissLoader.present();
                    _this.connect = true;
                }
            }
        });
    };
    HomePage.prototype.toggleMapFalse = function () {
        this.mapFalse = this.mapFalse ? false : true;
    };
    HomePage.prototype.openNews = function () {
        var _this = this;
        var mod = this.modalCtrl.create('NewsPage');
        mod.present();
        mod.onDidDismiss(function () {
            _this.hideNews = true;
            _this.storage.set("News", _this.news);
        });
    };
    HomePage.prototype.togglePassengers = function () {
        this.showPassenger2 = this.showPassenger2 ? false : true;
        console.log('Now Toggling');
        // this.poolRequest = this.poolRequest ? false : true
    };
    HomePage.prototype.gotoSupport = function () {
        var _this = this;
        this.navCtrl.push('SupportPage');
        this.platform.registerBackButtonAction(function () { return _this.navCtrl.popToRoot(); });
    };
    HomePage.prototype.hoseMe = function () {
        this.hideMe = this.hideMe ? false : true;
    };
    HomePage.prototype.showMoreRating = function () {
        this.pop.showPimp(this.ratingText);
    };
    HomePage.prototype.showMoreMessage = function () {
        this.pop.showPimp(this.message);
    };
    HomePage.prototype.gotoScheduled = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () { return _this.navCtrl.popToRoot(); });
        this.navCtrl.push('SchedulePage', { lat: this.locationTracker.lat, lng: this.locationTracker.lng, notif: this.notify_ID }); // Push your "OtherPage"                                                                                                                                                                                                                                                                 
    };
    HomePage.prototype.loadMapGoogle = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        };
        //  this.map.setLabel(null)
        //this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        console.log('map called');
    };
    HomePage.prototype.NowWaitingForID = function () {
        var _this = this;
        var location_locationTracker_loop = Object(__WEBPACK_IMPORTED_MODULE_19_rxjs_observable_interval__["interval"])(1000).subscribe(function () {
            //  this.StartTracker(false);
            if (_this.locationTracker.hasShown) {
                location_locationTracker_loop.unsubscribe();
                if (_this.doneK) {
                    _this.doneK = false;
                    _this.pop.presentToast('Now Online');
                    console.log(_this.locationTracker.lng);
                    _this.CheckForPreviousData();
                    _this.showGps = false;
                    _this.locationTracker.mapLoadComplete = true;
                    _this.toggleStatus = true;
                    _this.pop.loggedOff = false;
                    _this.hasNotFoundMap = false;
                    _this.StartTracker(true);
                    // this.pop.onRequest = true;
                    // alert('Weak As Fuck')
                    if (_this.platform.is('cordova')) {
                        // this.WaitForNotificationID();
                        _this.StartListeningForChanges(_this.notify_ID);
                    }
                    else {
                        _this.notification_Id = "3456787654567898765434567";
                        _this.StartListeningForChanges(_this.notify_ID);
                        console.log('waiting.....');
                    }
                    _this.appReady = true;
                    console.log("connected");
                    if (!_this.isBlocked) {
                        _this.OneSignal.UpdateInfo(_this.locationTracker.lat, _this.locationTracker.lng, _this.cartype);
                        _this.myGcode.Reverse_Geocode(_this.locationTracker.lat, _this.locationTracker.lng, _this.locationTracker.map1, false);
                    }
                }
            }
        });
    };
    HomePage.prototype.StartTracker = function (state) {
        var _this = this;
        var tracker = Object(__WEBPACK_IMPORTED_MODULE_19_rxjs_observable_interval__["interval"])(2000).subscribe(function () {
            if (state == true) {
                if (_this.platform.is('cordova'))
                    _this.locationTracker.map1.getMyLocation().then(function (location) {
                        _this.lat = location.latLng.lat;
                        _this.lng = location.latLng.lng;
                        _this.OneSignal.UpdateInfo(_this.lat, _this.lng, _this.cartype);
                        _this.locationTracker.map1.animateCamera({
                            target: location.latLng,
                            zoom: 15,
                            tilt: 0,
                            bearing: 0,
                            duration: 1000
                        }).then(function (distanceApart) {
                        });
                        _this.locationTracker.marker.setPosition(new __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_maps__["c" /* LatLng */](_this.lat, _this.lng));
                        console.log('Updating Your Location ....');
                    }).catch(function (error) {
                        console.log(error);
                    });
                //alert('Weak As Fuck')
            }
            else {
                tracker.unsubscribe();
                //state = false;
            }
        });
    };
    //  WaitForNotificationID(){
    //   let notuif_loop = setTimeout(()=>{
    //     if (this.OneSignal.notif_id != null){
    //       clearTimeout(notuif_loop)
    //    this.notification_Id = this.OneSignal.notif_id
    //    this.StartListeningForChanges(this.notification_Id);
    //    }, 300)
    //  }
    HomePage.prototype.gotoProfile = function () {
        var _this = this;
        this.navCtrl.push('ProfilePage');
        this.platform.registerBackButtonAction(function () { return _this.navCtrl.popToRoot(); });
    };
    HomePage.prototype.gotoEarnings = function () {
        var _this = this;
        this.navCtrl.push('PaymentPage');
        this.platform.registerBackButtonAction(function () { return _this.navCtrl.popToRoot(); });
    };
    HomePage.prototype.SendMessage = function () {
        var _this = this;
        var modal = this.modalCtrl.create('ChatPage', { id: this.notify_ID });
        modal.present();
        modal.onDidDismiss(function () {
            _this.notification = false;
        });
    };
    HomePage.prototype.CheckForPreviousData = function () {
        var _this = this;
        this.storage.get('currentUserId').then(function (value) {
            if (value != null) {
                _this.notify_ID = value;
                _this.StartListeningForChanges(_this.notify_ID);
                _this.settings.current_ID = true;
                var num = Math.floor(Math.random() * Math.floor(10));
                console.log(num);
                _this.hasAdded_Destination = true;
                // this.eventProvider.confirmRentry(num, this.notify_ID)
                //console.log(this.locat.lat);
                _this.locationTracker.hasTransactionEnded = true;
                _this.locationTracker.canTrack_ = true;
                _this.platform.ready().then(function () {
                    _this.platform.registerBackButtonAction(function () { return _this.pop.presentToast(_this.lp.translate()[0].e4); });
                });
                console.log('Stopped Normal Movement Of Driver');
                _this.OneSignal.isInDeepSh_t = true;
            }
            else {
                _this.storage.remove("currentUserId");
            }
        }).catch(function (er) { console.log(er); });
    };
    HomePage.prototype.gotoHistory = function () {
        var _this = this;
        this.navCtrl.push('HistoryPage');
        this.platform.registerBackButtonAction(function () { return _this.navCtrl.popToRoot(); });
    };
    HomePage.prototype.goOnline = function () {
        if (this.locationTracker.lat != 0) {
            this.pop.loggedOff = false;
            this.pop.presentToast(this.lp.translate()[0].e5);
            this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.cartype);
            //     if (this.platform.is('cordova')) {
            //     this.backgroundMode.enable();
            //     this.backgroundMode.setDefaults({
            //      title: this.lp.translate()[0].e2,
            //      text: this.lp.translate()[0].e3,
            //      bigText: true,
            //      hidden: false,
            //  })
            // }
        }
        else {
            this.pop.alertMe('No latitude and Longitude On Your Device. Are You running on an emulator?');
        }
    };
    HomePage.prototype.goOffline = function () {
        this.pop.GoOffline();
        if (this.platform.is('android')) {
            //this.backgroundMode.disable();
        }
        this.pop.loggedOff = true;
    };
    HomePage.prototype.call = function () {
        //  this.callNumber.callNumber(this.customerPhone, true)
        //  .then(() => console.log('Launched dialer!'))
        //  .catch(() => console.log('Error launching dialer'));
        //  alert('trying to call')
        window.open("tel:" + this.customerPhone);
    };
    HomePage.prototype.clearConnection = function () {
        var _this = this;
        var customer = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.database().ref("Customer/" + this.notify_ID);
        customer.remove().then(function (success) {
            _this.pop.hasPicked = false;
            _this.hasNotPicked = true;
            _this.pop.hasPicked2 = false;
            _this.hasNotPicked2 = true;
        });
    };
    //  showHelp(){
    //    this.pop.alertMe('PLEASE MAKE SURE YOU HAVE GOOGLE MAPS INSTALLED ON YOUR DEVICE. Click on start navigation, to drive to client. ')
    //  }
    HomePage.prototype.alertMe = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'Are Sure You Want Cancel This Job?',
            buttons: [{
                    text: "Yes",
                    role: 'cancel',
                    handler: function () {
                        _this.clearAllNow();
                    }
                },
                {
                    text: "No",
                    role: 'cancel',
                    handler: function () {
                    }
                },
            ],
            enableBackdropDismiss: true
        });
        alert.present();
    };
    HomePage.prototype.Arrived = function () {
        if (this.platform.is('cordova'))
            this.sendPush(this.customerID);
        this.hasArrived = false;
        this.eventProvider.ApprovedArrival(true, this.notify_ID);
    };
    HomePage.prototype.sendPush = function (id) {
        // console.log('This is the push id', [id])
        var notificationObj = {
            include_player_ids: [id],
            contents: { en: 'Your Driver Has Arrived' },
        };
        this.One.postNotification(notificationObj).then(function (good) {
            console.log(good);
            //alert("Notification Post Success:\n" + id);
        }, function (error) {
            console.log(error);
            //this.pop.showPimp(error)
            // alert("Notification Post Failed:\n" + JSON.stringify(error));
            // alert("Notification Post Failed:\n" + id);
        });
    };
    HomePage.prototype.Pickup = function () {
        var _this = this;
        this.eventProvider.ApprovePickup(true, this.notify_ID);
        this.pop.hasPicked = true;
        if (this.platform.is('cordova'))
            this.sendPush(this.customerID);
        // this.locationTracker.hasTransactionEnded = false
        // clearTimeout(this.locationTracker.tracking_timeout)
        this.locationTracker.ClearDetection = true;
        //clearInterval(this.locationTracker.detectCarChange)
        this.myGcode.Reverse_Geocode(this.locationTracker.lat, this.locationTracker.lng, this.locationTracker.map1, false);
        //this.locationTracker.ResetMe()
        this.pop.showLoader('');
        if (this.platform.is('cordova')) {
            this.locationTracker.map1.clear().then(function () {
                _this.locationTracker.isDestination = true;
                _this.geocoder.geocode({ 'address': _this.destination }, function (results, status) {
                    if (status == 'OK') {
                        var position = results[0].geometry.location;
                        var lat = position.lat();
                        var lng = position.lng();
                        var location_1 = [
                            lat,
                            lng
                        ];
                        if (_this.platform.is('cordova'))
                            //this.locationTracker.map1.clear().then(()=>{
                            _this.locationTracker.setMarkers(location_1);
                        // })
                        var urPos = new google.maps.LatLng(lat, lng);
                        var uLOC = new google.maps.LatLng(_this.locationTracker.lat, _this.locationTracker.lng);
                        _this.dProvider.calcDestRoute(_this.name, uLOC, urPos, _this.destination, _this.notify_ID);
                        _this.pop.hideLoader();
                    }
                });
            });
        }
        else {
            var urPos = new google.maps.LatLng(5.4966964, 7.5297323);
            var uLOC = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lng);
            this.dProvider.calcDestRoute(this.name, uLOC, urPos, this.destination, this.notify_ID);
            this.pop.hideLoader();
        }
    };
    HomePage.prototype.Drop = function () {
        //  if (this.hasAdded_Destination){
        clearTimeout(this.locationTracker.tracking_timeout);
        this.locationTracker.canTrack_ = false;
        this.locationTracker.hasTransactionEnded = false;
        this.eventProvider.ApproveDrop(true, this.notify_ID);
    };
    HomePage.prototype.ConfirmDrop = function () {
        var _this = this;
        var alert = this.alert.create({
            message: this.lp.translate()[0].c5,
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].c7,
                    handler: function (data) {
                        _this.Drop();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.ConfirmPickup = function () {
        var _this = this;
        var alert = this.alert.create({
            message: this.lp.translate()[0].c5,
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].c7,
                    handler: function (data) {
                        _this.Pickup();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.StartListeningForChanges = function (id) {
        var _this = this;
        this.notify_ID = id;
        console.log(this.notify_ID);
        if (this.settings.current_ID) {
            this.storage.set("currentUserId", this.notify_ID).then(function () {
                console.log('saved id');
            });
        }
        this.eventProvider.getChatList(this.notify_ID).on('child_added', function (snapshot) {
            if (snapshot.val().Client_Message) {
                _this.notification = true;
                _this.pop.presentToast('New Message From Client');
                _this.vibration.vibrate(1000);
            }
        });
        this.ph.getUserAsClientInfo(this.notify_ID).on('child_added', function (driverSnap) {
            _this.UserAdded(driverSnap);
            console.log('new user added');
        });
        this.ph.getUserAsClientInfo(this.notify_ID).on('child_changed', function (driverSnap) {
            _this.UserChanged(driverSnap);
            _this.locationTracker.userLat = location[0];
            _this.locationTracker.userLng = location[1];
        });
        this.ph.getUserAsClientInfo(this.notify_ID).on('child_removed', function (driverSnap) {
            _this.UserRemoved(driverSnap);
        });
    };
    HomePage.prototype.UserAdded = function (driverSnap) {
        console.log("poured in details, alert called oo");
        // this.pop.presentToast('New Rider Detected')
        if (this.platform.is('cordova')) {
            //this.locationTracker.map1.setClickable(false);
            // this.map.
        }
        this.Client_Added(driverSnap, this.lp.translate()[0].e8);
        this.StartTracker(false);
    };
    HomePage.prototype.Client_Added = function (driverSnap, f) {
        var _this = this;
        if (driverSnap.val().Client_location && driverSnap.val().Client_ended == false && this.hasPooled2) {
            this.driverLoc = driverSnap.val().Client_location;
            this.hasPooled2 = false;
            this.mapSection = true;
            this.canDO = true;
            this.hideNews = true;
            this.userHasPhone = true;
            var obj = { info: f };
            this.myAlert = this.modalCtrl.create('AcceptPage', obj);
            this.myAlert.onDidDismiss(function (data) {
                if (data == 1 && !_this.hasEnded) {
                    _this.ph.getUserAsClientInfo(_this.notify_ID).on('value', function (driverSnap) {
                        if (driverSnap != null) {
                            _this.AcceptJob();
                        }
                        else {
                            _this.pop.presentToast('You Lost the Job');
                        }
                        _this.ph.getUserAsClientInfo(_this.notify_ID).off('value');
                    });
                }
                else {
                    _this.RejectJob();
                }
            });
            this.myAlert.present();
            // this.isNetwork = driverSnap.val().Network_state
            console.log("driver location not null");
            this.customerPhone = driverSnap.val().Client_phoneNumber;
            this.destination = driverSnap.val().Client_destinationName;
            this.customerID = driverSnap.val().Client_Notif;
            this.NewClientFound(driverSnap.val().Client_locationName, driverSnap.val().Client_location, driverSnap.val().Client_username, driverSnap.val().Client_picture, driverSnap.val().Client_destinationName, driverSnap.val().Client_Rating, driverSnap.val().Client_RatingText, driverSnap.val().Client_price);
        }
    };
    HomePage.prototype.UserChanged = function (driverSnap) {
        if (driverSnap.val().Client_hasPaid && this.dropped2) {
            console.log('Passenger 1 has paid');
            this.pop.hideLoader();
            this.dropped2 = false;
        }
        if (driverSnap.val().Pool_ended) {
            this.pop.presentToast('Passenger Has Cancelled Request');
        }
        if (driverSnap.val().Client_ended && this.canEnd) {
            // this.clearDuty();
            this.locationTracker.hasTransactionEnded = false;
            this.OneSignal.isInDeepSh_t = false;
            // this.clientClrCheck = true;
            console.log('passenger 1 ended');
            //console.log('another driver added');
            this.clearAllNow();
            console.log('All has been cleared');
            // this.clearDuty();
            this.canEnd = false;
            // this.clientClrCheck = true;
            console.log('connection ended');
            //console.log('another driver added');
            this.HideFunc(true, true);
            this.HideFunc(false, true);
            this.canEnd = false;
        }
        if (driverSnap.val().Client_Dropped) {
            if (this.called) {
                this.hasCompletedRide(driverSnap);
                this.pop.showLoader(this.lp.translate()[0].e9);
                console.log('passenger 1 has dropped');
                this.called = false;
            }
        }
        if (driverSnap.val().Client_PickedUp && this.hasNotPicked) {
            this.hasNotPicked = false;
            this.pop.hasPicked = true;
            console.log('picked up passenger 1');
        }
    };
    HomePage.prototype.UserRemoved = function (driverSnap) {
        this.showLoadRefresh();
        this.clearAllNow();
        // this.pop.hideLoader()
        console.log('Stopped The movement of driver towards user');
    };
    HomePage.prototype.showLoadRefresh = function () {
        var loading = this.loadingCtrl.create();
        loading.present();
        var myTimeout = setTimeout(function () {
            clearTimeout(myTimeout);
            loading.dismiss();
        }, 400);
    };
    HomePage.prototype.NewClientFound = function (client_locationName, location, name, picture, destinationName, rate, ratingText, price) {
        var _this = this;
        this.name = name;
        this.picture = picture;
        this.location = client_locationName;
        this.destination = destinationName;
        this.rating = rate;
        this.ratingText = ratingText;
        this.ridePrice = price;
        //this.locationTracker.setMarkers(location)
        this.hasEnded = false;
        this.pop.GoOffline2();
        //this.canShowOther = true;
        var urPos = new google.maps.LatLng(location[0], location[1]);
        var uLOC = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lng);
        // console.log(price)
        if (this.platform.is('cordova'))
            this.locationTracker.map1.clear().then(function () {
                _this.locationTracker.setMarkers(location);
            });
        this.userLat = location[0];
        this.userLng = location[1];
        this.locationTracker.userLat = location[0];
        this.locationTracker.userLng = location[1];
        this.showLoadRefresh();
        this.dProvider.calcRoute(this.name, uLOC, urPos, this.location, false);
        this.myGcode.Reverse_Geocode(this.locationTracker.lat, this.locationTracker.lng, this.locationTracker.map1, false);
        console.log(location);
        console.log('Set Marker func called');
        //this.locationTracker.setMarkers(location);
    };
    HomePage.prototype.hasCompletedRide = function (driverSnap) {
        var _this = this;
        console.log('done user rated');
        this.showLoadRefresh();
        // this.pop.loading.dismiss();
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        // this.showLoadRefresh()
        this.ph.UpdateEarnings(driverSnap.val().Client_price).then(function () {
            _this.eventProvider.createHistory(driverSnap.val().Client_username, Math.floor(driverSnap.val().Client_price), datetime, driverSnap.val().Client_locationName, driverSnap.val().Client_destinationName).then(function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__pages_rate_rate__["a" /* RatePage */], { 'eventId': driverSnap.val().Client_ID, 'lat': _this.locationTracker.lat, 'lng': _this.locationTracker.lng, 'cartype': _this.cartype }).then(function () {
                    _this.hasNotPicked = true;
                    // this.ph.getCompanyProfileEarnings().update({
                    //  earnings: driverSnap.val().Client_price*0.03 + this.ph.compEarnings
                    // }).then(()=> {
                    //   this.greut = true
                    //   this.ph.getCompanyProfileEarnings().push({
                    //     driverName: this.ph.name,
                    //     cartype: this.ph.carType,
                    //     license: this.ph.number
                    //   })
                    // })
                });
            });
        });
    };
    HomePage.prototype.gotoMap = function () {
        if (this.platform.is('android'))
            window.open('geo://' + this.locationTracker.lat + ',' + this.locationTracker.lng + '?q=' + this.userLat + ',' + this.userLng + '(' + this.location + ')', '_system');
        if (this.platform.is('ios'))
            window.open('maps://?q=' + this.location + '&saddr=' + this.locationTracker.lat + ',' + this.locationTracker.lng + '&daddr=' + this.userLat + ',' + this.userLng, '_system');
    };
    HomePage.prototype.gotoDestination = function () {
        var _this = this;
        this.pop.showLoader(this.lp.translate()[0].e10);
        this.geocoder.geocode({ 'address': this.destination }, function (results, status) {
            if (status == 'OK') {
                var position = results[0].geometry.location;
                var lat = position.lat();
                var lng = position.lng();
                _this.pop.hideLoader();
                if (_this.platform.is('android')) {
                    window.open('geo://' + _this.locationTracker.lat + ',' + _this.locationTracker.lng + '?q=' + lat + ',' + lng + '(' + _this.destination + ')', '_system');
                }
                ;
                if (_this.platform.is('ios')) {
                    window.open('maps://?q=' + _this.destination + '&saddr=' + _this.locationTracker.lat + ',' + _this.locationTracker.lng + '&daddr=' + lat + ',' + lng, '_system');
                }
            }
            else {
                _this.pop.showPimp(_this.lp.translate()[0].f1);
            }
        });
    };
    HomePage.prototype.HideFunc = function (pool, client) {
        this.clearAllNow();
        console.log('clear everything');
    };
    HomePage.prototype.clearAllNow = function () {
        var _this = this;
        this.hasArrived = true;
        //  console.log(this.name, this.name2, this.hasEnded)
        this.locationTracker.ClearDetection = true;
        this.pop.GoOffline2();
        this.locationTracker.isDestination = false;
        //this.pop.loggedOff = false;
        if (this.platform.is('cordova')) {
            this.locationTracker.map1.clear();
            this.platform.registerBackButtonAction(function () { return _this.platform.pause; });
            this.platform.registerBackButtonAction(function () { return _this.platform.exitApp(); });
            if (this.canDO) {
                this.locationTracker.ResetMe();
                this.canDO = false;
            }
        }
        //clearInterval(this.locationTracker.detectCarChange)
        console.log(this.name);
        this.hasPooled2 = true;
        this.hasPooled = true;
        this.clientClrCheck = false;
        this.PoolClrCheck = false;
        this.canEnd = true;
        this.canEnd2 = true;
        this.hasDone = true;
        this.hasEnded = true;
        this.canShowOther = false;
        this.itsOver = false;
        this.locationTracker.driver = false;
        this.OneSignal.isInDeepSh_t = false;
        this.StartTracker(true);
        if (this.platform.is('cordova')) {
            this.locationTracker.map1.setClickable(true);
        }
        this.hasNotPicked = true;
        clearTimeout(this.locationTracker.tracking_timeout);
        this.locationTracker.canTrack_ = false;
        this.locationTracker.hasTransactionEnded = false;
        this.ph.getUserAsClientInfo(this.notify_ID).off('child_added');
        this.ph.getUserAsClientInfo(this.notify_ID).off('child_changed');
        this.ph.getUserAsClientInfo(this.notify_ID).off('child_removed');
        this.pop.hasPicked = false;
        if (this.myAlert) {
            this.myAlert.dismiss();
            this.myAlert = false;
        }
        console.log('database has been wiped');
        //this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.cartype);
        this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.earnings = userProfileSnapshot.val().earnings;
        });
        this.platform.ready().then(function () {
            Object(__WEBPACK_IMPORTED_MODULE_18_rxjs_observable_timer__["timer"])(2000).subscribe(function () {
                _this.StartListeningForChanges(_this.notify_ID);
            });
            _this.platform.registerBackButtonAction(function () { return _this.platform.exitApp(); });
            _this.OneSignal.UpdateInfo(_this.locationTracker.lat, _this.locationTracker.lng, _this.cartype);
        });
        this.poolRequest = false;
        this.clearConnection();
        if (this.settings.current_ID) {
            this.settings.current_ID = false;
            if (!this.platform.is('cordova')) {
                this.notify_ID = "3456787654567898765434567";
                this.StartListeningForChanges(this.notify_ID);
            }
            else {
                //  this.One.getIds().then( success => {
                this.notify_ID = this.OneSignal.notif_id;
                this.StartListeningForChanges(this.notify_ID);
                //  })
            }
        }
    };
    HomePage.prototype.RejectJob = function () {
        this.HideFunc(true, true);
    };
    HomePage.prototype.AcceptJob = function () {
        var _this = this;
        this.called = true;
        this.called_2 = true;
        this.dropped2 = true;
        this.done = true;
        this.connected = true;
        //console.log('couldnt pass through')
        //console.log('came through')
        // this.ph.getUserAsClientInfo(this.notify_ID).off('child_added')
        console.log('driver loc is empty');
        if (this.driverLoc != null) {
            //  console.log('passed through')
            console.log('driver loc is filled');
            this.locationTracker.hasTransactionEnded = true;
            this.locationTracker.canTrack_ = true;
            this.platform.ready().then(function () {
                _this.platform.registerBackButtonAction(function () { return _this.pop.presentToast(_this.lp.translate()[0].e4); });
            });
            // console.log('Stopped Normal Movement Of Driver')
            this.OneSignal.isInDeepSh_t = true;
            //this.eventProvider.getCurrentDriver().remove().then(suc =>{
            //   console.log('removed now');
            this.ph.rateText = '';
            this.ph.rating = 0;
            // console.log('Driver Location Name is :' + this.myGcode.locationName)
            if (!this.platform.is('cordova')) {
                //console.log('removed now' + this.ph.name, this.ph.picture, this.notify_ID, 5.4966964, 7.5297323, this.myGcode.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.ph.rating, this.ph.number )
                this.createUserInformation(this.ph.name, this.ph.picture, this.notify_ID, 5.4966964, 7.5297323, this.myGcode.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.ph.rating, this.ph.rateText, this.ph.number);
            }
            else {
                this.createUserInformation(this.ph.name, this.ph.picture, this.notify_ID, this.locationTracker.lat, this.locationTracker.lng, this.myGcode.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.ph.rating, this.ph.rateText, this.ph.number);
            }
            console.log('shit done');
            // })
        }
        else {
            this.name = null;
            this.pop.showPimp(this.lp.translate()[0].f3);
        }
    };
    HomePage.prototype.createUserInformation = function (name, picture, id, lat, lng, locationName, plate, seats, carType, rating, rateText, number) {
        var _this = this;
        //   console.log(this.notify_ID)
        if (!this.platform.is('cordova')) {
            this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
            this.eventProvider.PushUserDetails(name, picture, id, lat, lng, locationName, plate, seats, carType, rating, rateText, number, this.notify_ID).then(function (suc) {
                // console.log('Now Moving the driver towards the user')
                if (_this.platform.is('cordova'))
                    _this.locationTracker.startTracking();
                // if (this.poolRequest)
                //this.locationTracker.startTracking2();
            });
        }
        else {
            this.One.getIds().then(function (success) {
                _this.notify_ID = success.userId;
                _this.eventProvider.PushUserDetails(name, picture, id, lat, lng, locationName, plate, seats, carType, rating, rateText, number, _this.notify_ID).then(function (suc) {
                    // console.log('Now Moving the driver towards the user')
                    if (_this.platform.is('cordova'))
                        _this.locationTracker.startTracking();
                    // if (this.poolRequest)
                    //this.locationTracker.startTracking2();
                });
            });
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/home/home.html"*/'\n <ion-content class=\'no-scroll\'>\n\n    <div id="map">\n\n    <div class="topBar" >\n\n        <button *ngIf="hasNotPicked && hasEnded" no-lines detail-none class=\'button\' clear padding  icon-only ion-button menuToggle>\n            <ion-icon name="ios-menu"></ion-icon>\n          </button>\n\n          <!-- <div id=\'buttonContainer2\'>\n          <button *ngIf="hasNotPicked && !hasEnded"  text-center class="button" icon-only color="danger" (click)="alertMe()">\n              <ion-icon color=\'nav-color\' name="trash"></ion-icon>\n              </button>\n            </div> -->\n        <!-- <ion-title [hidden]="pop.onRequest"> -->\n\n<!--                \n            -->\n              \n            \n               \n         <div id=\'buttonContainer\'>\n          <button  *ngIf="!this.pop.loggedOff && hasEnded" class=\'button\' color="primary" (click)=\'goOffline()\'>\n             {{lp.translate()[0].e6}}\n       </button>\n       <button class=\'button\' *ngIf="this.pop.loggedOff && hasEnded && !hasNotFoundMap" (click)=\'goOnline()\'>{{lp.translate()[0].e7}}</button>\n   \n       <button class=\'button\' *ngIf="this.pop.loggedOff && hasNotFoundMap"><ion-spinner color=\'nav-color\' name="bubbles"></ion-spinner></button>\n       \n       \n\n          <button *ngIf="hasNotPicked && !poolRequest && !hasEnded" text-center class="button" icon-start color="danger" (click)="SendMessage()">\n            <ion-icon color=\'light\' name="chatbubbles"  >\n              <ion-badge *ngIf=\'notification\' id="cart-badge">New</ion-badge>\n            <!-- <ion-badge *ngIf=\'notification\' id="notifications-badge" color="danger">!</ion-badge> -->\n          </ion-icon>\n              </button>\n       </div>\n\n\n   \n        <!-- </ion-title> -->\n       </div>\n      </div> \n </ion-content>\n\n<!-- <ion-content >\n\n    \n   \n  \n\n    </ion-content> -->\n\n\n\n<ion-footer no-border *ngIf="!hasEnded">\n    <button *ngIf="hasNotPicked" text-center class="buttons" icon-only color="danger" (click)="hoseMe()">\n       <ion-icon *ngIf="!hideMe" color=\'nav-color\' name="arrow-up"></ion-icon>\n       <ion-icon *ngIf="hideMe" color=\'nav-color\' name="arrow-down"></ion-icon>\n        </button>\n  <div id="map_layer">\n              \n\n            <button detail-none [hidden]=\'!hideMe\'  class="button_1" ion-item icon-start >\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col [hidden]="!hasNotPicked"> \n                          <img class="profile-pic" [src]="picture"/>\n                          <p>{{name}}</p>\n                      </ion-col>\n                      \n                      <ion-col>\n                          <button padding id=\'container\' *ngIf="hasNotPicked" color="gery" detail-none icon-start>\n                              <ion-item color="secondary" id=\'rides\'> \n                                 <ion-icon  color="gery"  name="timer" item-start></ion-icon>\n                                 {{lp.translate()[0].e1}}\n                                 <ion-badge color=\'gery\' item-end>{{dProvider.time}}</ion-badge>\n                               </ion-item>\n                             \n                             </button>\n                  \n                  \n                      </ion-col>\n                      \n                      <ion-col [hidden]="!hasNotPicked">\n                          \n                                              \n                                              <p><ion-icon  name="locate" color=\'green\'></ion-icon>{{location}}</p>\n                                             \n                                              \n                                               \n                                                  \n                                                  <p><ion-icon name="flag" color=\'danger\'></ion-icon>{{destination}}</p>\n                                                \n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>   \n               </button>\n        \n\n\n      \n\n\n     \n        <ion-grid>\n          <ion-row>\n     <ion-col>\n        <button id="container_1" [hidden]="hasNotPicked" text-center detail-none class="button" icon-start color="primary" (click)="gotoDestination()">\n              {{lp.translate()[0].d10}}\n              </button>\n              <button  id="container_1" [hidden]="!hasNotPicked" text-center detail-none class="button" icon-start color="gery" (click)="gotoMap()">\n                    {{lp.translate()[0].d9}}\n                    </button>\n     </ion-col>\n     <ion-col>\n        <button *ngIf="hasNotPicked && !hasEnded" id="container_1" class="button" detail-none text-center icon-start color="green" (click)="alertMe()">\n         \n            Cancel\n            </button>\n     </ion-col>\n\n     <ion-col>\n      <button *ngIf="hasArrived" id="container_1" class="button" detail-none text-center icon-start color="green" (click)="Arrived()">\n       \n          Arrived\n          </button>\n   </ion-col>\n\n     <ion-col>\n      <button [hidden]="pop.hasPicked" id="container_1" class="button" detail-none text-center icon-start color="green" (click)="call()">\n       \n          {{lp.translate()[0].d8}}\n          </button>\n   </ion-col>\n    \n     <ion-col>\n        <button id="container_1" [hidden]="!pop.hasPicked" class="button" detail-none icon-start color="gery" (click)="ConfirmDrop()">\n          \n          {{lp.translate()[0].d7}}\n          </button>\n          <button  id="container_1" [hidden]="pop.hasPicked" class="button" detail-none text-center icon-start  color="primary" (click)="ConfirmPickup()">\n            \n            {{lp.translate()[0].d6}}\n              </button>\n     </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n      <ion-grid *ngIf="pop.hasPicked" >\n        <ion-row>\n          <ion-col>\n              <button padding id=\'container\' color="gery" detail-none icon-start>\n                  <ion-item color="secondary" id=\'rides\'> \n                     <ion-icon  color="gery"  name="timer" item-start></ion-icon>\n                    Estimated Arrival\n                     <ion-badge color=\'gery\' item-end>{{dProvider.time2}}</ion-badge>\n                   </ion-item>\n                 </button>\n          </ion-col>\n          \n          </ion-row>\n          </ion-grid>\n\n          <ion-grid>\n              <ion-row>\n                <ion-col>\n                    <button padding id=\'container\' color="gery" detail-none icon-start>\n                        <ion-item color="secondary" id=\'rides\'> \n                          <ion-icon  color="gery"  name="cash" item-start></ion-icon>\n                          Price Estimate\n                           <ion-badge id=\'myBadge\' color=\'primary\' item-end>{{settings.appcurrency}}{{ridePrice}}</ion-badge>\n                         </ion-item>\n                       </button>\n                </ion-col>\n                </ion-row>\n                </ion-grid>\n\n\n</div>\n    \n</ion-footer>\n\n\n   \n<ion-footer no-border *ngIf="hasEnded" id=\'lower_items\'>\n\n    <ion-item no-lines detail-none *ngIf=\'news && !hideNews\' color="primary" id=\'rides\'> \n        <!-- <ion-icon  color="secondary"  name="ios-cash" item-start></ion-icon> -->\n        {{this.newsti}}\n        <ion-badge color=\'secondary\' item-end (click)=\'openNews()\'>View More</ion-badge>\n      </ion-item>\n    \n          \n                <ion-item no-lines detail-none color="secondary" id=\'rides\'> \n                   <ion-icon  color="primary"  name="ios-cash" item-start></ion-icon>\n                   {{lp.translate()[0].c1}}\n                   <ion-badge color=\'primary\' item-end>{{settings.appcurrency}}{{earnings}}</ion-badge>\n                 </ion-item>\n               \n\n                 <ion-item no-lines detail-none color="secondary" id=\'rides\'> \n                    <ion-icon  color="primary"  name="ios-star" item-start></ion-icon>\n                    {{lp.translate()[0].l8}} \n                    <ion-badge color=\'primary\' item-end>{{ph.rating}}</ion-badge>\n                  </ion-item>\n              \n</ion-footer>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_onesignal_onesignal__["a" /* OnesignalProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_geocoder_geocoder__["a" /* GeocoderProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_21__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_16__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_onesignal_onesignal__["a" /* OnesignalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IntervalObservable_1 = __webpack_require__(493);
exports.interval = IntervalObservable_1.IntervalObservable.create;
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__(302);
var Observable_1 = __webpack_require__(9);
var async_1 = __webpack_require__(303);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = (function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = async_1.async;
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified IScheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` IScheduler to provide a notion of time, but you may pass any
     * IScheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(Observable_1.Observable));
exports.IntervalObservable = IntervalObservable;
//# sourceMappingURL=IntervalObservable.js.map

/***/ })

});
//# sourceMappingURL=0.js.map