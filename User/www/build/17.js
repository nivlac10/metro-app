webpackJsonp([17],{

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(499);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_native_map_container_native_map_container__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_activity_activity__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pop_up_pop_up__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_directionservice_directionservice__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_onesignal_onesignal__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_geocoder_geocoder__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_call_number__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_stripe_stripe__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_paystack_paystack__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_language_language__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase_app__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_vibration__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_rate_rate__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_background_mode__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_settings_settings__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_observable_interval__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_rxjs_observable_interval__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















// import { Geolocation } from '@ionic-native/geolocation';










var HomePage = (function () {
    function HomePage(storage, stripe, lp, authProvider, paystack, One, act, settings, backgroundMode, statusBar, loadingCtrl, vibration, alert, cMap, call, myGcode, dProvider, platform, OneSignal, modalCtrl, menu, pop, ph, navCtrl, eventProvider) {
        //this.lp.translate() = this.lp.translate();
        this.storage = storage;
        this.stripe = stripe;
        this.lp = lp;
        this.authProvider = authProvider;
        this.paystack = paystack;
        this.One = One;
        this.act = act;
        this.settings = settings;
        this.backgroundMode = backgroundMode;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.vibration = vibration;
        this.alert = alert;
        this.cMap = cMap;
        this.call = call;
        this.myGcode = myGcode;
        this.dProvider = dProvider;
        this.platform = platform;
        this.OneSignal = OneSignal;
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        this.pop = pop;
        this.ph = ph;
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
        this.arrived = true;
        this.isRidesharing = false;
        this.canClear = true;
        this.loopTimes = -1;
        this.pool_List = [];
        this.executivePercentage = 0.5;
        this.tricyclePercentage = 20;
        this.poolState = false;
        this.AllDrivers = [];
        this.canRidePool = false;
        this.clearThis = true;
        this.noRides = false;
        this.waitingToLog = true;
        this.canCancel = false;
        this.chosenormal = false;
        this.canJoinPool = false;
        this.canRequestPool = false;
        this.poolAvailable = false;
        this.hideTopbuttons = false;
        this.canStopCheck = false;
        this.canStop = false;
        this.connect = false;
        this.onGpsEnabled = true;
        this.toggleMore = true;
        this.toggleNav = true;
        this.choseCar = false;
        this.bookStarted = false;
        this.picked = true;
        this.choseEconomy = false;
        this.choseClassic = false;
        this.hasChecked = false;
        this.paid_cash2 = true;
        this.bookingState = false;
        this.hidelocator = false;
        this.hasStarted = false;
        this.shareRide = false;
        this.rechecking = false;
        this.ThisPool = false;
        this.isPerKilo = false;
        this.isPool = true;
        this.showShit = true;
        this.connect_change = true;
        this.picked_up = true;
        this.driver_picked = false;
        this.rideShare = false;
        this.dropped = true;
        this.rated = true;
        this.deleted = true;
        this.done = true;
        this.hasRated = true;
        this.paid = true;
        this.hideNews = false;
        this.paid_cash = true;
        this.not_ended = true;
        this.ended = true;
        this.canPool = false;
        this.can = true;
        this.returningUser = false;
        this.started = false;
        this.NotifyTimes = 0;
        this.timerBeforeNotify = 60000;
        this.hasNotified = true;
        this.referalPercentage = 3 / 100;
        this.cand = true;
        this.called = true;
        this.hasDone = true;
        this.notification = false;
        this.startedNavigation = false;
        this.added = true;
        this.type = 'arrow-down';
        this.showGps = false;
        this.canIncrease = false;
        this.hasCalled = true;
        this.choseTricycle = false;
        this.canShowBars = true;
        this.geocoder = new google.maps.Geocoder;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (!_this.platform.is('cordova')) {
                _this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
            }
            else {
                if (!_this.platform.is('browser')) {
                    _this.One.getIds().then(function (success) {
                        _this.notify_ID = success.userId;
                    });
                }
                else {
                    _this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
                }
            }
            if (!_this.cMap.selected_destination_bar)
                _this.platform.registerBackButtonAction(function () { return _this.platform.exitApp(); });
            //this.storage.remove(`currentUserId`);
        });
        //this.storage.remove(`currentUserId`);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (!_this.platform.is('cordova')) {
                _this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
                console.log('hereerdvdhjhfssfsfds');
            }
            else {
                _this.One.getIds().then(function (success) {
                    _this.notify_ID = success.userId;
                });
            }
            // //console.log(this.lp.translate())
            if (!_this.platform.is('cordova')) {
                _this.cMap.hasShown = true;
                _this.cMap.lat = 5.4966964;
                _this.cMap.lng = 7.5297323;
                _this.myGcode.locationName = 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria';
            }
            //let has = false
            var unsubscribe = __WEBPACK_IMPORTED_MODULE_17_firebase_app__["auth"]().onAuthStateChanged(function (user) {
                // alert(user)
                //Check of this is a user
                if (!user) {
                    // this.ph.loadingState = true;
                    //if this is not a user then show entrance scene and hide status bar
                    _this.navCtrl.setRoot('LoginPage');
                    // this.statusBar.hide(); 
                    _this.ph.login = true;
                    // //console.log(this.ph.loadingState)
                    unsubscribe();
                }
                else {
                    setTimeout(function () {
                        _this.checkConnection();
                    }, 6000);
                    unsubscribe();
                    _this.isUser = user;
                    var can = true;
                    var fTime = setTimeout(function () {
                        if (_this.cMap.mapLoadComplete) {
                            _this.showGps = false;
                        }
                        else {
                            _this.showGps = true;
                        }
                    }, 4000);
                    //if user has a phone number then
                    _this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
                        // if (has){
                        // console.log('dfegyuirotpiruywuieoigreiouyiytwuiouytuiyiughuigfuigrigryu')
                        var userID = userProfileSnapshot.val().phoneNumber;
                        _this.ph.home = userProfileSnapshot.val().Home;
                        _this.ph.work = userProfileSnapshot.val().Work;
                        var username = userProfileSnapshot.val().name;
                        if (userProfileSnapshot.val().referal) {
                            _this.referal = userProfileSnapshot.val().referal;
                            _this.referalID = userProfileSnapshot.val().referalID;
                        }
                        // console.log(this.referal);
                        if (userID == null) {
                            // this.ph.loadingState = true;
                            _this.navCtrl.setRoot('AccountkitPage');
                            //console.log(this.ph.loadingState)
                            _this.ph.kit = true;
                            _this.ph.getUserProfile().off('value');
                        }
                        else {
                            if (username == null) {
                                _this.navCtrl.setRoot('PhonePage');
                                _this.ph.getUserProfile().off('value');
                            }
                            else {
                                if (_this.hasDone) {
                                    _this.showLoadRefresh();
                                    _this.cMap.loadMap();
                                    _this.WaitForGeolocation();
                                    _this.hasDone = false;
                                }
                                //this.ph.loadingState = true;
                                //console.log(this.ph.loadingState)
                                if (userProfileSnapshot.val().blocked == true) {
                                    _this.pop.alertClosure('You Have Been Suspended.');
                                    // this.isBlocked = true
                                }
                                if (_this.ph.card != null) {
                                    var mainStr = _this.ph.card || '2345678765445678', vis = mainStr.slice(-4), countNum = '';
                                    for (var i = (mainStr.length) - 4; i > 0; i--) {
                                        countNum += '*';
                                    }
                                    _this.cardnumber = countNum + vis;
                                }
                                if (userProfileSnapshot.val().mainID != null) {
                                    console.log('main id is not null');
                                    // this.requestRideSharing();
                                    _this.shareID = userProfileSnapshot.val().mainID;
                                }
                                if (userProfileSnapshot.val().shareID != null && _this.cand) {
                                    console.log('main id is not null');
                                    //  this.StartListeningForShare();
                                    if (_this.cand == true) {
                                        _this.cand = false;
                                        _this.showAlrt();
                                        _this.uid = userProfileSnapshot.val().shareID;
                                    }
                                }
                            }
                        }
                        //   }
                    });
                    //if user then show the status bar 
                    // this.statusBar.show();
                    //For Chrome Testing.....
                    if (!_this.platform.is('cordova')) {
                        _this.cMap.showDriversOnMap();
                        //this.CheckForPreviousData()
                    }
                    //Set Up Variables For admin configurations
                    _this.ph.getWebAdminProfile().orderByValue().on('value', function (userProfileSnapshot) {
                        var admin = userProfileSnapshot.val();
                        _this.dProvider.fare = admin.price;
                        _this.dProvider.pricePerKm = admin.perkm;
                        _this.executivePercentage = admin.executive;
                        _this.tricyclePercentage = admin.tricycle;
                        if (admin.referalPercentage)
                            _this.referalPercentage = admin.referalPercentage;
                        if (admin.perkm == null || admin.price == null) {
                            _this.dProvider.fare = 10;
                            _this.dProvider.pricePerKm = 50;
                        }
                        //this.settings.appcurrency = admin.Currency;
                    });
                    _this.ph.getNewsProfile().on('value', function (userProfileSnapshot) {
                        if (userProfileSnapshot.val()) {
                            _this.news = 'News Available';
                        }
                        _this.storage.get('News').then(function (sd) {
                            console.log(sd, _this.news);
                            if (sd == _this.news) {
                                _this.hideNews = true;
                                console.log(sd);
                            }
                            else {
                                _this.hideNews = false;
                            }
                        });
                    });
                }
            });
        });
    };
    HomePage.prototype.remove = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    HomePage.prototype.checkConnection = function () {
        var _this = this;
        var connectedRef = __WEBPACK_IMPORTED_MODULE_17_firebase_app__["database"]().ref(".info/connected");
        connectedRef.on("value", function (snap) {
            if (snap.val() === true) {
                // this.eventProvider.UpdateNetworkSate(true, this.uid);
                //console.log('network is okay')
                if (_this.connect) {
                    _this.pop.hideLoader();
                    _this.connect = false;
                    //console.log('cancelled network error loader')
                }
            }
            else {
                if (!_this.connect) {
                    _this.pop.presentLoader(_this.lp.translate()[0].lost);
                    _this.connect = true;
                }
                //  this.eventProvider.UpdateNetworkSate(false, this.uid);
                //console.log('network is bad')
            }
        });
    };
    HomePage.prototype.showAlrt = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'Pool Request',
            subTitle: 'A new pool request has been made. Accept to start riding.',
            buttons: [{
                    text: this.lp.translate()[0].accept,
                    role: 'cancel',
                    handler: function () {
                        _this.ph.getUserProfile().update({}).then(function () {
                            _this.requestRideSharing();
                            console.log(_this.shareID);
                        });
                    }
                },
                {
                    text: this.lp.translate()[0].reject,
                    role: 'cancel',
                    handler: function () {
                    }
                },
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    HomePage.prototype.requestRideSharing = function () {
        console.log('rideshare stsrted');
        this.isRidesharing = true;
        //this.StartPoolTrip()
        //document.getElementById("bar4").style.display = 'none'
        this.bookStarted = true;
        this.hideFunctions();
        this.returningUser = false;
        this.cMap.hasCompleted = false;
        var image = this.isUser.photoURL;
        var name = this.isUser.displayName;
        var pay = this.ph.paymentType;
        this.pop.calculateBtn = false;
        clearTimeout(this.cMap.timer1);
        if (image == null) {
            if (this.ph.pic == null) {
                image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png';
            }
            else {
                image = this.ph.pic;
            }
        }
        if (name == null) {
            if (this.ph.name != null) {
                name = this.ph.name;
            }
            else {
                name = this.isUser.email;
            }
        }
        if (pay == null) {
            pay = 1;
        }
        if (this.lat == null && this.lng == null) {
            this.lat = this.lat;
            this.lng = this.lng;
        }
    };
    HomePage.prototype.WaitForGeolocation = function () {
        var _this = this;
        //A timer to detect if the location has been found.
        var location_tracker_loop = Object(__WEBPACK_IMPORTED_MODULE_24_rxjs_observable_interval__["interval"])(1000).subscribe(function () {
            if (_this.cMap.hasShown) {
                location_tracker_loop.unsubscribe();
                _this.showMap();
                _this.showGps = false;
                _this.cMap.mapLoadComplete = true;
                console.log('xfdwgvuhbeygvw');
            }
        });
    };
    HomePage.prototype.bookLater = function () {
        var _this = this;
        //show or hide more button on connecting with driver.
        this.navCtrl.push('SchedulePage', { lat: this.cMap.lat, lng: this.cMap.lng, destination: this.myGcode.destinationSetName });
        this.platform.registerBackButtonAction(function () { return _this.ReturnHome(); });
    };
    HomePage.prototype.toggleMoreBtn = function () {
        //show or hide more button on connecting with driver.
        this.toggleMore = this.toggleMore ? false : true;
        if (this.toggleMore) {
            this.type = 'arrow-down';
        }
        else {
            this.type = 'arrow-up';
        }
    };
    HomePage.prototype.toggleRideShare = function () {
        var _this = this;
        //show or hide more button on connecting with driver.
        this.rideShare = this.rideShare ? false : true;
        var id;
        if (this.rideShare) {
            this.pop.presentLoader('Getting Pools nearby...');
            this.ph.getAllPool().on('value', function (snap) {
                _this.myList = [];
                snap.forEach(function (element) {
                    var end;
                    var begin = new google.maps.LatLng(element.val().location[0], element.val().location[1]);
                    if (!_this.platform.is('cordova')) {
                        end = new google.maps.LatLng(5.488334, 7.5190356);
                    }
                    else {
                        end = new google.maps.LatLng(_this.lat, _this.lng);
                    }
                    // console.log(element.val().lat, element.val().lng)
                    var distanceApart = google.maps.geometry.spherical.computeDistanceBetween(begin, end) / 60;
                    var ef;
                    var b;
                    var dest;
                    if (distanceApart <= _this.settings.apart) {
                        b = new google.maps.LatLng(element.val().destination[0], element.val().destination[1]);
                        ef = new google.maps.LatLng(_this.destination_lat, _this.destination_lng);
                        dest = google.maps.geometry.spherical.computeDistanceBetween(b, ef) / 60;
                        if (dest <= _this.settings.apart) {
                            _this.pop.hideLoader();
                            _this.myList.push({
                                id: element.key,
                                name: element.val().name,
                                picture: element.val().picture,
                                userID: element.val().id
                            });
                            console.log(_this.myList);
                            return false;
                        }
                        else {
                            console.log('fwrghwhhrrhj');
                            //this.pop.presentToast('No Pools Found')
                            _this.pop.hideLoader();
                        }
                    }
                    else {
                        // this.pop.presentToast('No Pools Found')
                        _this.pop.hideLoader();
                        // this.pop.presentToast('No Pools Found')
                    }
                });
            });
        }
        else {
            this.ph.getAllPool().off('value');
            this.pop.hideLoader();
            // this.pop.presentToast('No Pools Found')
        }
    };
    HomePage.prototype.SendPool = function (id) {
        console.log(id);
        this.can = false;
        var my = true;
        this.sharerID = id;
    };
    HomePage.prototype.toggleMoreSection = function () {
        var _this = this;
        this.cMap.shove = false;
        this.StartTracker(false);
        this.hideNews = true;
        //show or hide more button on connecting with driver.
        //console.log(this.cMap.selected_destination_bar)
        document.getElementById("destination").innerText = this.lp.translate()[0].dest;
        this.cMap.selected_destination_bar = this.cMap.selected_destination_bar ? false : true;
        this.cMap.map.setClickable(false);
        this.cMap.onDestinatiobarHide = true;
        this.cMap.onLocationbarHide = true;
        this.cMap.showDone = false;
        this.hidelocator = true;
        this.platform.registerBackButtonAction(function () { return _this.ReturnHome(); });
        if (this.cMap.selected_destination_bar) {
            //this.type = 'arrow-dropdown'
        }
        else {
            //this.type = 'arrow-dropup'
        }
    };
    //choose a ride type
    HomePage.prototype.chooseRideType = function (value) {
        var button = document.getElementById("car");
        var button2 = document.getElementById("pool");
        var button3 = document.getElementById("classic");
        var currentPrice = this.dProvider.price;
        var highPrice = this.dProvider.highPrice;
        console.log(button);
        if (value == 0) {
            //console.log(currentPrice)
            this.actualPrice = currentPrice;
            this.highPrice = highPrice;
            button.style.border = "1.8px solid gray";
            //  button.style.boxShadow = "0px 3px gray";
            button2.style.border = "none";
            button3.style.border = 'none';
            this.choseEconomy = true;
            this.choseTricycle = false;
            this.choseClassic = false;
            //console.log(this.dProvider.price)
        }
        if (value == 1) {
            // console.log(currentPrice)
            button2.style.border = "1.8px solid gray";
            //  button2.style.boxShadow = "0px 3px gray";
            button.style.border = "none";
            button3.style.border = 'none';
            this.choseEconomy = false;
            this.choseTricycle = true;
            this.choseClassic = false;
            var exp = currentPrice * this.tricyclePercentage / 100;
            var expo = highPrice * this.tricyclePercentage / 100;
            this.actualPrice = Math.round(currentPrice - exp);
            this.highPrice = Math.round(highPrice - expo);
        }
        if (value == 2) {
            console.log(currentPrice);
            button3.style.border = "1.8px solid gray";
            button.style.border = "none";
            // button3.style.boxShadow = "0px 3px gray";
            button2.style.border = 'none';
            this.choseEconomy = false;
            this.choseTricycle = false;
            this.choseClassic = true;
            var exp = currentPrice * this.executivePercentage / 100;
            var expo = highPrice * this.executivePercentage / 100;
            this.actualPrice = Math.round(currentPrice + exp);
            this.highPrice = Math.round(highPrice + expo);
        }
    };
    HomePage.prototype.changeButton = function (value) {
        var currentPrice = this.dProvider.price;
        var highPrice = this.dProvider.highPrice;
        //console.log(currentPrice)
        if (value == 0) {
            this.actualPrice = currentPrice;
            // console.log(currentPrice)
            this.highPrice = highPrice;
            this.choseEconomy = true;
            this.choseTricycle = false;
            this.choseClassic = false;
            //console.log(this.dProvider.price)
        }
        if (value == 1) {
            this.choseEconomy = false;
            this.choseTricycle = true;
            this.choseClassic = false;
            var exp = currentPrice * this.tricyclePercentage / 100;
            var expo = highPrice * this.tricyclePercentage / 100;
            this.actualPrice = Math.round(currentPrice - exp);
            //console.log(currentPrice)
            this.highPrice = Math.round(highPrice - expo);
        }
        if (value == 2) {
            // console.log(currentPrice)
            this.choseEconomy = false;
            this.choseTricycle = false;
            this.choseClassic = true;
            var exp = currentPrice * this.executivePercentage / 100;
            var expo = highPrice * this.executivePercentage / 100;
            this.actualPrice = Math.round(currentPrice + exp);
            this.highPrice = Math.round(highPrice + expo);
        }
    };
    //call the driver now
    HomePage.prototype.callDriver = function () {
        //console.log(this.number);
        this.call.callNumber(this.number, true);
    };
    HomePage.prototype.StartTracker = function (state) {
        var _this = this;
        var h = Object(__WEBPACK_IMPORTED_MODULE_24_rxjs_observable_interval__["interval"])(2000).subscribe(function () {
            if (state) {
                _this.cMap.map.getMyLocation().then(function (location) {
                    _this.lat = location.latLng.lat;
                    _this.lng = location.latLng.lng;
                    _this.cMap.lat = location.latLng.lat;
                    _this.cMap.lng = location.latLng.lng;
                    //this.cMap.map.setCameraTarget(new LatLng(this.lat, this.lng))
                    if (_this.cMap.marker && _this.cMap.pause && _this.cMap.shove) {
                        _this.cMap.marker.setPosition(new __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__["c" /* LatLng */](_this.lat, _this.lng));
                        _this.cMap.map.animateCamera({
                            target: location.latLng,
                            zoom: 15,
                            tilt: 0,
                            bearing: 0,
                            duration: 1000
                        }).then(function (distanceApart) {
                        });
                        console.log('Updating Your Location ....');
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else {
                h.unsubscribe();
            }
        });
    };
    //Send a message to the driver
    HomePage.prototype.Send = function () {
        var _this = this;
        var modal = this.modalCtrl.create('ChatPage', { id: this.uid });
        modal.present();
        modal.onDidDismiss(function () {
            _this.notification = false;
        });
    };
    HomePage.prototype.ReturnHome = function () {
        var _this = this;
        this.cMap.selected_destination_bar = false;
        this.cMap.map.setClickable(true);
        this.cMap.showDone = false;
        this.hidelocator = false;
        this.canJoinPool = false;
        this.isPerKilo = false;
        if (this.cMap.shove == false) {
            this.StartTracker(true);
            this.cMap.shove = true;
        }
        //this.ph.getAllPool().off('value')
        this.dProvider.isDriver = true;
        this.canRequestPool = false;
        this.hideMinor();
        this.cMap.hasRequested = false;
        this.pop.onRequest = false;
        this.hidelocator = false;
        //  this.canRidePool = false;
        this.cMap.canShowchoiceTab = false;
        this.cMap.norideavailable = false;
        this.platform.registerBackButtonAction(function () { return _this.platform.exitApp(); });
    };
    HomePage.prototype.showMap = function () {
        //display the map set variables for better access
        this.lat = this.cMap.lat;
        this.lng = this.cMap.lng;
        //Check if user already has a connection, maybe lost due to unexpected device shut down and application exit
        if (!this.hasChecked) {
            this.CheckForPreviousData();
            this.hasChecked = true;
            this.StartTracker(true);
            var rum = true;
        }
    };
    HomePage.prototype.showAddressModal = function (selectedBar) {
        var _this = this;
        clearTimeout(this.cMap.timer1);
        //console.log(this.myGcode.locationName)
        var modal = this.modalCtrl.create('AutocompletePage');
        modal.onDidDismiss(function (data) {
            //Open the address modal on location bar click to change location
            //console.log(data)
            var myPos = new google.maps.LatLng(_this.lat, _this.lng);
            if (selectedBar == 1 && data != null) {
                if (!_this.startedNavigation) {
                    document.getElementById("location").innerText = data;
                    _this.myGcode.locationName = data;
                    _this.pop.presentLoader('');
                    _this.myGcode.geocoder.geocode({ 'address': data }, function (results, status) {
                        if (status === 'OK') {
                            _this.pop.hideLoader();
                            var position = results[0].geometry.location;
                            myPos = new google.maps.LatLng(position.lat(), position.lng());
                        }
                        else {
                            _this.pop.hideLoader();
                        }
                    });
                    //this.cMap.RefreshMap(data)
                }
            }
            //Open the address modal on destination bar click to change destination
            if (selectedBar == 2 && data != null) {
                document.getElementById("destination").innerText = data;
                _this.myGcode.destinationSetName = data;
                _this.pop.presentLoader('');
                ///After data input, check to see if user selected to add a destination or to calculate distance.
                _this.myGcode.geocoder.geocode({ 'address': data }, function (results, status) {
                    if (status === 'OK') {
                        _this.pop.hideLoader();
                        var position = results[0].geometry.location;
                        var calPos = new google.maps.LatLng(position.lat(), position.lng());
                        _this.destination_lat = position.lat();
                        _this.destination_lng = position.lng();
                        // if (this.cMap.pool){
                        // this.SearchForPools(position.lat(), position.lng())
                        //  }else{
                        _this.pickLocation();
                        //console.log('pool not found')
                        _this.poolAvailable = false;
                        //  }
                        document.getElementById("destination").innerText = data;
                        _this.myGcode.destinationSetName = data;
                        _this.dProvider.calcRoute(myPos, calPos, false, true, data);
                        _this.picked = true;
                    }
                    else {
                    }
                });
            }
        });
        modal.present();
    };
    HomePage.prototype.showLoadRefresh = function () {
        var loading = this.loadingCtrl.create();
        loading.present();
        var myTimeout = setTimeout(function () {
            clearTimeout(myTimeout);
            loading.dismiss();
        }, 200);
    };
    //This is the fuction for estimate btn.
    HomePage.prototype.estimate = function () {
        var _this = this;
        this.navCtrl.push('EstimatePage', { lat: this.cMap.lat, lng: this.cMap.lng });
        this.platform.registerBackButtonAction(function () { return _this.navCtrl.popToRoot(); });
    };
    //Check if there is a key available in the storage, if not, return. This is to ensure that we dont lose information
    //If the user mistakenly closes the application.
    HomePage.prototype.CheckForPreviousData = function () {
        var _this = this;
        console.log('checked DATA');
        this.storage.get('currentUserId').then(function (value) {
            if (value) {
                _this.uid = value;
                _this.startListeningForResponse();
                _this.hideFunctions();
                _this.returningUser = true;
                _this.pop.onRequest = true;
                _this.cMap.selected_destination_bar = true;
                _this.pop.uid = _this.uid;
                _this.dProvider.id = _this.uid;
                console.log('prev DATA');
            }
            else {
                _this.storage.remove("currentUserId");
                _this.act.getActiveProfile(_this.notify_ID).on('child_added', function (customerSnapshot) {
                    if (customerSnapshot.val().Client_location)
                        _this.checkForScheduledRide();
                });
                console.log('called scheduling');
            }
        }).catch(function (er) {
            console.log(er);
        });
    };
    //Reset map position to user current position on location btn press
    HomePage.prototype.ResetMe = function () {
        var _this = this;
        var push = new __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__["c" /* LatLng */](this.lat, this.lng);
        // let centerBar = document.getElementById("onbar")
        // centerBar.style.display = 'none'
        this.cMap.map.moveCamera({
            target: push,
            zoom: 15,
            tilt: 0,
            bearing: 0,
        }).then(function () {
            _this.cMap.hidelocator = true;
        });
    };
    HomePage.prototype.checkForScheduledRide = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.One.getIds().then(function (id) {
                _this.uid = id.userId;
                _this.act.getActiveProfile(_this.uid).on('child_added', function (customerSnapshot) {
                    //console.log(customerSnapshot.val())
                    if (customerSnapshot.val().Client_location) {
                        _this.act.getActiveProfile(_this.uid).off('child_added');
                        _this.ph.getScheduledProfile(_this.uid).remove().then(function () {
                            _this.startListeningForResponse();
                            _this.hideFunctions();
                            _this.returningUser = true;
                            _this.pop.onRequest = true;
                            _this.cMap.selected_destination_bar = true;
                            _this.pop.uid = _this.uid;
                            _this.dProvider.id = _this.uid;
                            //console.log('checked')
                        });
                    }
                    else {
                        _this.act.getActiveProfile(_this.uid).off('child_added');
                        _this.storage.remove("currentUserId");
                    }
                });
            });
        }
        if (!this.platform.is('cordova')) {
            this.uid = this.notify_ID;
            this.act.getActiveProfile(this.uid).on('child_added', function (customerSnapshot) {
                // //console.log(customerSnapshot.val())
                if (customerSnapshot.val().Client_location) {
                    _this.act.getActiveProfile(_this.uid).off('child_added');
                    _this.ph.getScheduledProfile(_this.uid).remove().then(function () {
                        _this.startListeningForResponse();
                        //console.log('scheduler')
                        _this.hideFunctions();
                        _this.cMap.selected_destination_bar = true;
                        _this.pop.onRequest = true;
                        _this.returningUser = true;
                        _this.pop.uid = _this.uid;
                        _this.dProvider.id = _this.uid;
                        //console.log('checked')
                    });
                }
                else {
                    _this.act.getActiveProfile(_this.uid).off('child_added');
                }
            });
        }
    };
    HomePage.prototype.StartKilo = function () {
        var _this = this;
        var kush = true;
        this.isPerKilo = true;
        this.myGcode.destinationSetName = 'Calculate on trip end.';
        // this.dProvider.price = 0;
        this.picked = false;
        this.pop.presentLoader('');
        //console.log(this.userDestLat, this.userDestLng)
        //  this.ph.getAllDrivers().off('value')
        this.pop.hideLoader();
        var myInt = Object(__WEBPACK_IMPORTED_MODULE_24_rxjs_observable_interval__["interval"])(1000).subscribe(function () {
            if (kush) {
                kush = false;
                _this.pop.presentLoader('');
            }
            myInt.unsubscribe();
            _this.pop.hideLoader();
            _this.pop.onRequest = true;
            if (_this.cMap.isDriverAvailable && _this.cMap.pool || _this.cMap.smallcar || _this.cMap.classic) {
                //console.log('i was called')
                _this.cMap.canShowchoiceTab = true;
                _this.cMap.choseCar = false;
                _this.cMap.showDone = false;
                _this.cMap.selected_destination_bar = true;
                _this.hidelocator = true;
                _this.checkButtons();
                _this.cMap.canShowchoiceTab = true;
            }
            else {
                _this.cMap.canShowchoiceTab = false;
                _this.cMap.norideavailable = true;
                _this.cMap.choseCar = false;
                _this.cMap.showDone = false;
                _this.cMap.selected_destination_bar = true;
                _this.hidelocator = true;
            }
        });
    };
    HomePage.prototype.GotoPlace = function (place) {
        // this.pop.presentLoader('');
        var _this = this;
        this.platform.registerBackButtonAction(function () { return _this.ReturnHome(); });
        this.myGcode.destinationSetName = place;
        if (place != null) {
            var myPos_1 = new google.maps.LatLng(this.cMap.lat, this.cMap.lng);
            this.pop.presentLoader('');
            this.myGcode.geocoder.geocode({ 'address': place }, function (results, status) {
                if (status == 'OK') {
                    _this.pop.hideLoader();
                    var position = results[0].geometry.location;
                    var calPos = new google.maps.LatLng(position.lat(), position.lng());
                    // if (this.cMap.pool){
                    //   this.SearchForPools(position.lat(), position.lng())
                    //   }else{
                    _this.StartTrip();
                    //console.log('pool not found')
                    _this.poolAvailable = false;
                    //}
                    _this.dProvider.calcRoute(myPos_1, calPos, false, true, place);
                    ///   this.StartTrip();
                    _this.picked = false;
                }
                else {
                    if (_this.pop.presentLoader)
                        _this.pop.hideLoader();
                    _this.pop.presentToast(_this.lp.translate()[0].retry);
                }
            });
        }
        else {
            this.navCtrl.push('ProfilePage');
            this.platform.registerBackButtonAction(function () { return _this.navCtrl.popToRoot(); });
            this.pop.presentToast(this.lp.translate()[0].home);
        }
        // this.ph.getUserProfile().off('value');
    };
    HomePage.prototype.Done = function () {
        var _this = this;
        if (this.myGcode.destinationSetName != null) {
            var myPos_2 = new google.maps.LatLng(this.cMap.lat, this.cMap.lng);
            this.pop.presentLoader('');
            this.geocoder.geocode({ 'address': this.myGcode.destinationSetName }, function (results, status) {
                if (status == 'OK') {
                    _this.pop.hideLoader();
                    var position = results[0].geometry.location;
                    var calPos = new google.maps.LatLng(position.lat(), position.lng());
                    _this.myGcode.destinationSetName = _this.myGcode.destinationSetName;
                    _this.dProvider.calcRoute(myPos_2, calPos, false, true, _this.myGcode.destinationSetName);
                    //   if (this.cMap.pool){
                    //  this.SearchForPools(position.lat(), position.lng())
                    // }else{
                    _this.destination_lat = position.lat();
                    _this.destination_lng = position.lng();
                    _this.pickLocation();
                    //console.log('pool not found')
                    _this.poolAvailable = false;
                    //}
                    _this.picked = true; //this.pickLocation();
                }
                else {
                    _this.pop.hideLoader();
                    _this.pop.presentToast(_this.lp.translate()[0].retry);
                }
            });
        }
        else {
            this.cMap.onDestinatiobarHide = true;
            this.cMap.onLocationbarHide = true;
            this.cMap.showDone = false;
            this.hidelocator = true;
        }
    };
    HomePage.prototype.pickLocation = function () {
        var _this = this;
        var kush = true;
        //this.actualPrice = this.dProvider.price
        //this.ph.getAllPool().off('value')
        if (this.myGcode.destinationSetName != null) {
            this.pop.presentLoader('');
            // this.ph.getAllDrivers().on('value', snap => {
            // let snap = snap.val()
            this.pop.hideLoader();
            //this.ph.getAllDrivers().off('value')
            var myInt_1 = setInterval(function () {
                if (kush) {
                    kush = false;
                    _this.pop.presentLoader('');
                }
                if (_this.dProvider.price != null) {
                    clearInterval(myInt_1);
                    _this.pop.hideLoader();
                    _this.pop.onRequest = true;
                    _this.cMap.map.setClickable(true);
                    if (_this.cMap.isDriverAvailable) {
                        _this.cMap.canShowchoiceTab = true;
                        // this.ph.getAllDrivers().off('value')
                        _this.cMap.choseCar = false;
                        _this.cMap.showDone = false;
                        _this.hidelocator = true;
                        _this.checkButtons();
                        //this.cMap.canShowchoiceTab =  true;
                    }
                    else {
                        _this.cMap.canShowchoiceTab = false;
                        _this.cMap.norideavailable = true;
                        _this.cMap.choseCar = false;
                        _this.cMap.showDone = false;
                        _this.hidelocator = true;
                    }
                }
                else {
                    //this.ph.getAllDrivers().off('value')
                }
            }, 600);
            //});
        }
        else {
            this.cMap.onDestinatiobarHide = true;
            this.cMap.onLocationbarHide = true;
            this.cMap.showDone = false;
        }
    };
    HomePage.prototype.Start = function () {
        //console.log('This is the classic state ' + this.choseEconomy)
        if (this.choseClassic) {
            this.RequestForRide();
            this.canJoinPool = false;
            this.canRequestPool = true;
            this.canRidePool = false;
            this.cMap.canShowchoiceTab = false;
            this.cMap.norideavailable = false;
            this.newPrice = this.dProvider.price * this.executivePercentage;
            // //console.log('no pools, no economy just create pool')
        }
        if (this.choseTricycle) {
            this.RequestForRide();
            this.canJoinPool = false;
            this.canRequestPool = true;
            this.canRidePool = false;
            this.cMap.canShowchoiceTab = false;
            this.cMap.norideavailable = false;
            this.newPrice = this.dProvider.price * this.tricyclePercentage;
            // //console.log('no pools, no economy just create pool')
        }
        else {
            this.RequestForRide();
            this.canJoinPool = false;
            this.canRequestPool = true;
            this.canRidePool = false;
            this.cMap.canShowchoiceTab = false;
            this.cMap.norideavailable = false;
            ////console.log('no pools, no economy just create pool')
        }
    };
    HomePage.prototype.StartTrip = function () {
        var _this = this;
        //this.ph.getAllPool().off('value')
        //this.actualPrice = this.dProvider.price
        var kush = true;
        //this.pop.presentLoader('');
        //console.log(this.userDestLat, this.userDestLng)
        //  this.ph.getAllDrivers().off('value')
        //this.pop.hideLoader()
        var myInt = Object(__WEBPACK_IMPORTED_MODULE_24_rxjs_observable_interval__["interval"])(1000).subscribe(function () {
            if (kush) {
                kush = false;
                _this.pop.presentLoader('');
            }
            if (_this.dProvider.price != null) {
                myInt.unsubscribe();
                _this.pop.hideLoader();
                _this.pop.onRequest = true;
                _this.cMap.map.setClickable(true);
                if (_this.cMap.isDriverAvailable && _this.cMap.pool || _this.cMap.smallcar || _this.cMap.classic) {
                    //console.log('i was called')
                    _this.cMap.canShowchoiceTab = true;
                    _this.cMap.choseCar = false;
                    _this.cMap.showDone = false;
                    _this.cMap.selected_destination_bar = true;
                    _this.hidelocator = true;
                    _this.checkButtons();
                    _this.cMap.canShowchoiceTab = true;
                }
                else {
                    _this.cMap.canShowchoiceTab = false;
                    //this.ph.getAllDrivers().off('value')
                    // if (!this.poolAvailable){
                    //console.log('i was called')
                    _this.cMap.norideavailable = true;
                    _this.cMap.choseCar = false;
                    _this.cMap.showDone = false;
                    _this.cMap.selected_destination_bar = true;
                    _this.hidelocator = true;
                }
            }
            else {
                //console.log('no price')
                //this.ph.getAllDrivers().off('value')
            }
        });
        //  })
    };
    HomePage.prototype.checkButtons = function () {
        console.log(this.cMap.car_notificationIds);
        //this.actualPrice = this.dProvider.price;
        this.cMap.canMess = true;
        if (this.cMap.car_notificationIds != null) {
            var tem = true;
            this.pop.presentLoader('');
            for (var index = 0; index < this.cMap.car_notificationIds.length; index++) {
                var element = this.cMap.car_notificationIds[index];
                var end = void 0;
                var begin = new google.maps.LatLng(element[0], element[1]);
                if (!this.platform.is('cordova')) {
                    end = new google.maps.LatLng(5.488334, 7.5190356);
                }
                else {
                    end = new google.maps.LatLng(this.lat, this.lng);
                }
                console.log('checkbutton');
                var distanceApart = google.maps.geometry.spherical.computeDistanceBetween(begin, end) / 60;
                console.log(distanceApart);
                if (distanceApart <= this.settings.apart) {
                    console.log('checked button');
                    if (tem) {
                        this.pop.hideLoader();
                        tem = false;
                    }
                    console.log(element[4]);
                    if (element[4] == 0) {
                        console.log(distanceApart);
                        if (distanceApart < 60) {
                            this.cMap.standardStance = 1 + ' min';
                        }
                        else if (distanceApart > 60) {
                            var v = distanceApart / 60;
                            distanceApart = v + 1;
                            this.cMap.standardStance = Math.round(distanceApart) + ' mins';
                        }
                        continue;
                    }
                    if (element[4] == 1) {
                        console.log(distanceApart);
                        if (distanceApart < 60) {
                            this.cMap.tricycleStance = 1 + ' min';
                        }
                        else if (distanceApart > 60) {
                            var v = distanceApart / 60;
                            distanceApart = v + 1;
                            this.cMap.executiveStance = Math.round(distanceApart) + ' mins';
                        }
                        continue;
                    }
                    if (element[4] == 2) {
                        console.log(distanceApart);
                        if (distanceApart < 60) {
                            this.cMap.executiveStance = 1 + ' min';
                        }
                        else if (distanceApart > 60) {
                            var v = distanceApart / 60;
                            distanceApart = v + 1;
                            this.cMap.executiveStance = Math.round(distanceApart) + ' mins';
                        }
                        continue;
                    }
                    break;
                }
                else {
                    this.pop.hideLoader();
                    this.ReturnHome();
                    this.pop.presentToast('No drivers Close');
                }
            }
            if (this.isPerKilo) {
                this.dProvider.price = 0;
            }
            if (this.cMap.smallcar && this.cMap.classic && this.cMap.pool) {
                // this.choseEconomy = true;
                // this.choseClassic = false;
                // this.choseTricycle = false;
                this.changeButton(0);
            }
            if (this.cMap.smallcar && this.cMap.classic && !this.cMap.pool) {
                // this.choseEconomy = true;
                // this.choseClassic = false;
                // this.choseTricycle = false;
                this.changeButton(0);
            }
            if (!this.cMap.smallcar && this.cMap.classic && this.cMap.pool) {
                // this.choseEconomy = true;
                // this.choseClassic = false;
                // this.choseTricycle = false;
                this.changeButton(0);
            }
            if (this.cMap.smallcar && !this.cMap.classic && this.cMap.pool) {
                // this.choseEconomy = true;
                // this.choseClassic = false;
                // this.choseTricycle = false;
                this.changeButton(0);
            }
            if (this.cMap.smallcar && !this.cMap.classic && !this.cMap.pool) {
                //this.hideMinor();
                //  this.choseEconomy = true;
                //  this.choseClassic = false;
                //  this.choseTricycle = false;
                this.changeButton(0);
                // this.ReturnHome();
                // this.pop.presentToast(this.lp.translate()[0].nodriver)
            }
            if (this.cMap.classic && !this.cMap.smallcar && !this.cMap.pool) {
                // this.choseEconomy = false;
                // this.choseClassic = true;
                // this.choseTricycle = false;
                this.changeButton(2);
            }
            if (this.cMap.pool && !this.cMap.smallcar && !this.cMap.classic) {
                // this.choseEconomy = false;
                // this.choseClassic = false;
                // this.choseTricycle = true;
                this.changeButton(1);
            }
        }
        else {
        }
    };
    HomePage.prototype.ReturnToSelect = function () {
        this.cMap.selected_destination_bar = false;
        this.cMap.showDone = false;
        this.pop.onRequest = false;
        this.hidelocator = false;
        this.canRidePool = false;
        this.cMap.canShowchoiceTab = false;
        this.cMap.norideavailable = false;
        this.hideMinor();
        this.isPerKilo = false;
        this.dProvider.price = null;
        this.cMap.hasRequested = false;
        this.cMap.hasShow = true;
        this.cMap.executiveStance = 'none';
        this.cMap.standardStance = 'none';
        this.cMap.tricycleStance = 'none';
    };
    HomePage.prototype.hideMinor = function () {
        this.canJoinPool = false;
        this.canRequestPool = false;
        this.cMap.norideavailable = false;
        this.cMap.canShowchoiceTab = false;
        this.canRidePool = false;
    };
    HomePage.prototype.hideFunctions = function () {
        this.hideNews = true;
        this.cMap.hasbooked = true;
        this.cMap.hasRequested = true;
        console.log('hidefuction Called');
        this.cMap.shove = false;
        this.called = true;
        ///hide and remove some properties on user request.
        // let bottomBar1 = document.getElementById("bar2").style.display = 'none'
        this.cMap.onbar2 = true;
        clearTimeout(this.cMap.timer1);
        this.hideMinor();
        this.StartTracker(false);
        //this.ph.getUserProfile().off('value');
        //this.canIncrease = false
        // let centerBar = document.getElementById("onbar")
        // centerBar.style.display = 'none'
        this.cMap.map.setClickable(true);
        document.getElementById("destination").innerHTML = this.lp.translate()[0].dest;
        this.cMap.map.setCameraZoom(6);
        this.startedNavigation = true;
        this.pop.onRequest = true;
        //  this.cMap.isCarAvailable = false;
        this.dProvider.calculateBtn = false;
        this.cMap.map.clear();
    };
    ///The Book Now button onclick=>Create and push the users information to the database.
    HomePage.prototype.RequestForRide = function () {
        var _this = this;
        //document.getElementById("bar4").style.display = 'none'
        this.bookStarted = true;
        this.hideFunctions();
        this.returningUser = false;
        this.cMap.hasCompleted = false;
        var image = this.isUser.photoURL;
        var name = this.isUser.displayName;
        var pay = this.ph.paymentType;
        this.pop.calculateBtn = false;
        clearTimeout(this.cMap.timer1);
        console.log('RequestForRide Called');
        this.ph.getAllDrivers().off('value');
        this.ph.getAllDrivers().off('child_changed');
        this.ph.getAllDrivers().off('child_removed');
        this.ph.getAllDrivers().off('child_added');
        if (image == null) {
            if (this.ph.pic == null) {
                image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png';
            }
            else {
                image = this.ph.pic;
            }
        }
        if (name == null) {
            if (this.ph.name != null) {
                name = this.ph.name;
            }
            else {
                name = this.isUser.email;
            }
        }
        if (pay == null) {
            pay = 1;
        }
        if (this.lat == null && this.lng == null) {
            this.lat = this.lat;
            this.lng = this.lng;
            if (!this.platform.is('cordova')) {
                console.log('Location gotten');
                if (this.shareRide) {
                    this.ph.getAllPool().push({
                        location: [this.lat, this.lng],
                        id: this.ph.id,
                        notificationID: '456789085764536475869876766',
                        name: name,
                        picture: image,
                        destination: [this.destination_lat, this.destination_lng]
                    }).then(function (id) {
                        _this.poolID = id.key;
                        console.log(id.key);
                    });
                }
                this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);
            }
            else {
                if (this.shareRide) {
                    this.ph.getAllPool().push({
                        location: [this.lat, this.lng],
                        id: this.ph.id,
                        notificationID: this.notify_ID,
                        name: name,
                        picture: image,
                        destination: [this.destination_lat, this.destination_lng]
                    }).then(function (id) {
                        console.log(id);
                        _this.poolID = id.key;
                    });
                }
                console.log(name, image, this.lat, this.lng, this.myGcode.locationName, pay);
                this.createUserInformation(name, image, this.lat, this.lng, this.myGcode.locationName, pay);
            }
        }
        else {
            if (this.platform.is('cordova')) {
                console.log('Location gotten');
                var latlng = { lat: this.lat, lng: this.lng };
                //this.geocoder.geocode({'location': latlng}, (results, status) => {
                //  if (status == 'OK') {
                this.lat = this.lat;
                this.lng = this.lng;
                if (this.shareRide) {
                    this.ph.getAllPool().push({
                        location: [this.lat, this.lng],
                        id: this.ph.id,
                        notificationID: this.notify_ID,
                        name: name,
                        picture: image,
                        destination: [this.destination_lat, this.destination_lng]
                    }).then(function (suc) {
                        _this.poolID = suc.key;
                    });
                }
                this.createUserInformation(name, image, this.lat, this.lng, this.myGcode.locationName, pay);
            }
            else {
                if (this.shareRide) {
                    this.ph.getAllPool().push({
                        location: [this.lat, this.lng],
                        id: this.ph.id,
                        notificationID: '456789085764536475869876766',
                        name: name,
                        picture: image,
                        destination: [this.destination_lat, this.destination_lng]
                    }).then(function (id) {
                        _this.poolID = id.key;
                        console.log(id.key);
                    });
                }
                this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);
            }
        }
    };
    //clear the booking request
    HomePage.prototype.cancelRequest = function () {
        //  this.rechecking = true
        this.ClosePoolRequest();
        // this.hasStarted = false;
    };
    HomePage.prototype.ClosePoolRequest = function () {
        this.showAlertComplex(this.lp.translate()[0].whycancel, this.lp.translate()[0].chose);
    };
    HomePage.prototype.showAlertComplex = function (title, message) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            message: message,
            inputs: [
                {
                    name: 'long',
                    label: this.lp.translate()[0].longpick,
                    type: "checkbox",
                    value: "true",
                    checked: false
                },
                {
                    name: 'incorrect',
                    label: this.lp.translate()[0].incorrect,
                    type: "checkbox",
                    value: "false",
                    checked: false
                }
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].reject,
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: this.lp.translate()[0].accept,
                    handler: function () {
                        _this.pop.clearAll(_this.uid, true);
                        _this.HideMe();
                        //   this.act.getPoolProfile().remove().then(()=>{
                        //    // this.canPool = false;
                        //  })
                        clearTimeout(_this.timeTonotify);
                        _this.pop.hasCleared = true;
                        _this.hasCalled = true;
                        //
                        //this.pop.show('All Our Drivers Are Busy, Please Try Again. Sorry For The Incovenience.')
                        console.log('cleared here');
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    //goto payment page on cash or card click
    HomePage.prototype.gotoPayment = function () {
        var _this = this;
        if (this.ph.card == null) {
            this.navCtrl.push('PaymentPage');
            this.platform.registerBackButtonAction(function () { return _this.navCtrl.popToRoot(); });
        }
    };
    //share the ride btn
    HomePage.prototype.createUserInformation = function (name, picture, lat, lng, locationName, payWith) {
        ////Here we check if there are cars available, if none we return
        ///If there are cars available, then we check the distance between the car and the user 
        ///If its not close enough we return
        ///If its close enough we send the push to the driver.If we dont get a reponse in 60 seconds 
        ///We push the details to another close driver, but return if no more drivers.
        var _this = this;
        this.pop.hasCleared = false;
        this.platform.registerBackButtonAction(function () { return _this.pop.presentToast(_this.lp.translate()[0].cantexit); });
        var state;
        if (this.choseEconomy) {
            state = 0;
        }
        if (this.choseTricycle) {
            state = 1;
        }
        if (this.choseClassic) {
            state = 2;
        }
        //console.log(state)
        //Driver id represents the drivers details. the notifytimes represents the number of times to notify, which increases or decreases as a result of the number of drivers available at the momne
        var driver_id;
        driver_id = this.cMap.car_notificationIds;
        var has = true;
        console.log(driver_id, this.cMap.car_notificationIds);
        if (driver_id != []) {
            console.log(this.cMap.car_notificationIds);
            //for (let index = 0; index < this.cMap.car_notificationIds.length; index++) {
            //const element = array[index];
            console.log(state, this.cMap.car_notificationIds[this.NotifyTimes][4]);
            //This confirms if there is actually a location cordinate presented by the driver
            if (this.cMap.car_notificationIds[this.NotifyTimes][4] == state) {
                //this.cMap.isCarAvailable = false;
                if (this.cMap.car_notificationIds[this.NotifyTimes][4] != null) {
                    //this.cMap.car_notificationIds[index];
                    console.log(this.cMap.car_notificationIds.length, this.NotifyTimes, this.cMap.car_notificationIds);
                    //This represents the drivers information for access to the driver node in the database
                    var selected_driver_1 = this.cMap.car_notificationIds[this.NotifyTimes][2];
                    var selected_drivers_key = this.cMap.car_notificationIds[this.NotifyTimes][3];
                    console.log(selected_driver_1, this.cMap.car_notificationIds[this.NotifyTimes][4], selected_drivers_key);
                    console.log(this.cMap.car_notificationIds);
                    //Registering selected variables to providers for later use
                    this.pop.uid = selected_driver_1;
                    this.dProvider.id = selected_driver_1;
                    this.uid = selected_driver_1;
                    var dest_1 = this.myGcode.destinationSetName;
                    if (has) {
                        ////console.log('Started the shit here riht now')
                        //Get access to the drivers database node, remove the current driver from the node and push, to avoid any other request on the same driver
                        this.act.getCurrentDriver(selected_drivers_key).remove().then(function (id) {
                            // this.ph.getUserProfile().on('value', userProfileSnapshot => {
                            var ratingText = _this.ph.ratingText;
                            var ratingValue = _this.ph.ratingValue;
                            if (ratingText == null && ratingValue == null) {
                                ratingText = _this.lp.translate()[0].notrate;
                                ratingValue = 0;
                            }
                            //console.log('occured here')
                            //  this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
                            console.log('hereerdvdhjhfssfsfds');
                            _this.Myprice = _this.dProvider.price;
                            //  }
                            has = false;
                            //Push the drivers information to the customer connection node in the database
                            _this.act.getActivityProfile(selected_driver_1).set({
                                Client_username: name,
                                Client_Deleted: false,
                                Client_location: [lat, lng],
                                Client_locationName: locationName,
                                Client_paymentForm: payWith,
                                Client_picture: picture,
                                Client_phoneNumber: _this.ph.phone,
                                Client_ID: _this.ph.id,
                                Client_destinationName: dest_1,
                                Client_price: _this.actualPrice,
                                Client_CanChargeCard: false,
                                Client_PickedUp: false,
                                Client_Dropped: false,
                                Client_HasRated: false,
                                Client_Rating: ratingValue,
                                Client_RatingText: ratingText,
                                Client_hasPaid: false,
                                Client_paidCash: false,
                                Client_Pool: _this.canPool,
                                Client_returnState: false,
                                Client_ended: false,
                                Client_Notif: _this.notify_ID,
                                Client_Arrived: false
                            }).then(function (suc) {
                                _this.canStop = true;
                                //After removing the driver from the driver node we can then create a push notification to this driver 
                                console.log('push notification called');
                                _this.CreatePushNotification(_this.cMap.car_notificationIds[_this.NotifyTimes]);
                            });
                        });
                    }
                }
                else {
                    console.log('No more Drivers to loop');
                    this.NotifyTimes = 0;
                    clearTimeout(this.timeTonotify);
                    this.pop.clearAll(this.uid, true);
                    this.ReturnHome();
                    this.hasCalled = true;
                    this.clearAll();
                    this.pop.hasCleared = true;
                    this.cMap.onbar2 = false;
                    //console.log(this.NotifyTimes);
                    this.rechecking = false;
                    this.pop.presentToast('No Driver Close To You At The Moment.');
                }
            }
            else {
                this.NotifyTimes++;
                this.recheckInfoAndPush();
            }
        }
        else {
            this.Close();
        }
    };
    HomePage.prototype.CreateSharePushNotification = function () {
        if (this.platform.is('cordova')) {
            this.OneSignal.sendPush(this.shareID);
        }
        this.startListeningForResponse();
    };
    HomePage.prototype.Close = function () {
        var _this = this;
        clearTimeout(this.timeTonotify);
        this.pop.clearAll(this.uid, true);
        this.ReturnHome();
        this.hasCalled = true;
        this.clearAll();
        this.pop.hasCleared = true;
        this.cMap.onbar2 = false;
        //console.log(this.NotifyTimes);
        this.rechecking = false;
        this.pop.presentToast('No Driver Close To You At The Moment.');
        this.platform.registerBackButtonAction(function () { return _this.platform.exitApp(); });
    };
    HomePage.prototype.CreatePushNotification = function (id) {
        var _this = this;
        if (this.hasNotified) {
            this.hasNotified = false;
            console.log('This id the notification' + id + this.NotifyTimes);
            // this.canIncrease = true;
            var current_id = id[2];
            //this.poolState = true;
            console.log(current_id);
            // if (this.platform.is('android'))
            if (this.platform.is('cordova')) {
                this.OneSignal.sendPush(current_id);
            }
            ////console.log(cont)
            console.log(this.cMap.car_notificationIds.length, this.NotifyTimes);
            if (this.canStop) {
                this.startListeningForResponse();
                this.canStop = false;
            }
            console.log('create push');
            this.canCancel = true;
            this.timeTonotify = setTimeout(function () {
                if (_this.clearThis) {
                    _this.NotifyTimes++;
                    _this.hasNotified = true;
                    console.log(_this.cMap.car_notificationIds[_this.NotifyTimes], _this.cMap.car_notificationIds);
                    if (_this.cMap.car_notificationIds[_this.NotifyTimes] != null) {
                        _this.ClearInformation();
                        console.log('cleared to start again');
                        _this.rechecking = true;
                    }
                    else {
                        _this.Close();
                        _this.rechecking = false;
                        _this.NotifyTimes = 0;
                    }
                    console.log();
                }
                else {
                    clearTimeout(_this.timeTonotify);
                }
            }, this.timerBeforeNotify);
            this.canStop = false;
            //  }
        }
    };
    HomePage.prototype.recheckInfoAndPush = function () {
        console.log('cleared Info and restarted');
        this.returningUser = false;
        var image = this.isUser.photoURL;
        var name = this.isUser.displayName;
        var edited_name = this.ph.name;
        var pay = this.ph.paymentType;
        this.pop.calculateBtn = false;
        if (image == null) {
            if (this.ph.pic == null) {
                image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png';
            }
            else {
                image = this.ph.pic;
            }
        }
        if (name == null) {
            if (edited_name != null) {
                name = edited_name;
            }
            else {
                name = this.isUser.email;
            }
        }
        if (pay == null) {
            pay = 1;
        }
        if (this.cMap.lat == null && this.cMap.lng == null) {
            this.cMap.lat = this.lat;
            this.cMap.lng = this.lng;
            if (!this.platform.is('cordova')) {
                //console.log('from clearInfo')
                this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);
            }
            else {
                this.createUserInformation(name, image, this.cMap.lat, this.cMap.lng, this.myGcode.locationName, pay);
            }
        }
        else {
            if (this.platform.is('cordova')) {
                //let latlng = {lat: location.latLng.lat, lng: location.latLng.lng};
                //this.geocoder.geocode({'location': latlng}, (results, status) => {
                //  if (status == 'OK') {
                this.createUserInformation(name, image, this.lat, this.lng, this.myGcode.locationName, pay);
                //this.pop.hideLoader()
                //}
                // }
                //  })
            }
            else {
                this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);
            }
        }
    };
    HomePage.prototype.ClearInformation = function () {
        var _this = this;
        this.rechecking = true;
        // let customer = firebase.database().ref(`Customer/${this.uid}`);
        this.act.getActiveProfile(this.uid).remove().then(function (success) {
            //console.log('cars is 0')
            console.log('cleared Info and restarted');
            _this.returningUser = false;
            var image = _this.isUser.photoURL;
            var name = _this.isUser.displayName;
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
                    name = _this.isUser.email;
                }
            }
            if (pay == null) {
                pay = 1;
            }
            if (_this.cMap.lat == null && _this.cMap.lng == null) {
                _this.cMap.lat = _this.lat;
                _this.cMap.lng = _this.lng;
                if (!_this.platform.is('cordova')) {
                    //console.log('from clearInfo')
                    _this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);
                }
                else {
                    _this.createUserInformation(name, image, _this.cMap.lat, _this.cMap.lng, _this.myGcode.locationName, pay);
                }
            }
            else {
                if (_this.platform.is('cordova')) {
                    //let latlng = {lat: location.latLng.lat, lng: location.latLng.lng};
                    //this.geocoder.geocode({'location': latlng}, (results, status) => {
                    //  if (status == 'OK') {
                    _this.createUserInformation(name, image, _this.lat, _this.lng, _this.myGcode.locationName, pay);
                    //this.pop.hideLoader()
                    //}
                    // }
                    //  })
                }
                else {
                    _this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);
                }
            }
        });
    };
    HomePage.prototype.ToggleChange_1 = function () {
        this.myGcode.locationChange = true;
        this.cMap.onDestinatiobarHide = false;
        this.cMap.map.setClickable(true);
        this.cMap.showDone = true;
        this.hidelocator = false;
        this.cMap.isLocationChange = true;
    };
    HomePage.prototype.ToggleChange_2 = function () {
        this.myGcode.locationChange = false;
        this.cMap.onLocationbarHide = false;
        this.cMap.map.setClickable(true);
        this.cMap.showDone = true;
        this.hidelocator = false;
        this.cMap.isLocationChange = false;
    };
    HomePage.prototype.startListeningForResponse = function () {
        var _this = this;
        ///Here we listen for any changes in the DB
        if (this.act.user != null) {
            this.connect_change = true;
            this.picked_up = true;
            this.driver_picked = false;
            this.dropped = true;
            this.rated = true;
            this.deleted = true;
            this.hasRated = true;
            this.paid = true;
            this.paid_cash = true;
            this.ended = true;
            this.not_ended = true;
            var connectedRef_1 = __WEBPACK_IMPORTED_MODULE_17_firebase_app__["database"]().ref(".info/connected");
            //  if (this.platform.is('android'))
            //     this.backgroundMode.enable();
            //console.log(this.uid)
            this.platform.ready().then(function () {
                _this.platform.registerBackButtonAction(function () { return _this.pop.presentToast(_this.lp.translate()[0].cantexit); });
            });
            this.act.getActiveProfile(this.uid).on('child_added', function (customerSnapshot) {
                var activity = customerSnapshot.val();
                if (activity == null) {
                    _this.storage.remove("currentUserId");
                    _this.ReturnHome();
                }
                else {
                    if (!_this.isRidesharing) {
                        _this.PerformActionOnAdd(activity);
                    }
                    else {
                        _this.PerformActionOnPoolAdd(activity);
                    }
                }
            });
            this.eventProvider.getChatList(this.uid).on('child_added', function (snapshot) {
                if (snapshot.val().Driver_Message) {
                    _this.notification = true;
                    _this.pop.presentToast('New Message From Driver');
                    _this.vibration.vibrate(1000);
                }
            });
            this.act.getActiveProfile(this.uid).on('child_changed', function (customerSnapshot) {
                var activity = customerSnapshot.val();
                if (!_this.isRidesharing) {
                    _this.PerformActionOnChange(activity);
                }
                else {
                    _this.PerformActionOnPoolChange(activity);
                }
                console.log('activity changed');
                clearTimeout(_this.timeTonotify);
                _this.NotifyTimes = 0;
                _this.clearThis = false;
                if (_this.can) {
                    _this.can = false;
                    if (_this.rideShare) {
                        // this.ph.getAllPool().child(this.poolID).remove().then((d)=>{console.log(d)}).catch((d)=>{console.log(d)})
                    }
                }
            });
            this.act.getActiveProfile(this.uid).on('child_removed', function (customerSnapshot) {
                console.log('project to be cleared');
                if (!_this.rechecking) {
                    _this.PerformActionOnCancel();
                    connectedRef_1.off("value");
                    _this.cMap.hasCompleted = true;
                    _this.poolState = true;
                    _this.dProvider.isDriver = false;
                    console.log('project cleared');
                    if (_this.canClear) {
                        _this.ph.getAllDrivers().off('value');
                        _this.ph.getAllDrivers().off('child_changed');
                        _this.ph.getAllDrivers().off('child_removed');
                        _this.ph.getAllDrivers().off('child_added');
                        _this.canClear = false;
                    }
                }
            });
            connectedRef_1.on("value", function (snap) {
                if (snap.val() === true) {
                    // this.eventProvider.UpdateNetworkSate(true, this.uid);
                    //console.log('network is okay')
                    if (_this.connect) {
                        _this.pop.hideLoader();
                        _this.connect = false;
                        //console.log('cancelled network error loader')
                    }
                }
                else {
                    if (!_this.connect) {
                        _this.pop.presentLoader(_this.lp.translate()[0].lost);
                        _this.connect = true;
                    }
                    //  this.eventProvider.UpdateNetworkSate(false, this.uid);
                    //console.log('network is bad')
                }
            });
        }
        else {
            setTimeout(function () {
                _this.startListeningForResponse();
            }, 200);
        }
    };
    HomePage.prototype.PerformActionOnAdd = function (activity) {
        var _this = this;
        if (this.returningUser) {
            if (activity.Driver_location != null) {
                this.pop.presentSimpleLoader(this.lp.translate()[0].recover);
                this.hidelocator = true;
                this.connect = true;
                setTimeout(function () {
                    _this.PerformActionOnChange(activity);
                    if (_this.platform.is('cordova')) {
                        _this.vibration.vibrate(1000);
                    }
                }, 1000);
                this.DriverFound(activity.Driver_location, activity.Driver_plate, activity.Driver_carType, activity.Driver_name, activity.Driver_seat, activity.Driver_locationName, activity.Driver_rating, activity.Driver_picture, activity.Driver_number, activity.Client_locationName, activity.Client_location[0], activity.Client_location[1], activity.Driver_rateText, activity.Driver_ID);
                // this.cMap.onDestinatiobarHide = true;
                // document.getElementById("destination").innerText = activity.Client_destinationName;;
                if (activity.Driver_location[0] != null) {
                    var driverPos = new google.maps.LatLng(activity.Driver_location[0], activity.Driver_location[1]);
                    var userPos = void 0;
                    userPos = new google.maps.LatLng(activity.Client_location[0], activity.Client_location[1]);
                    this.dProvider.calcRoute(userPos, driverPos, true, false, 'ghjtfd');
                }
            }
        }
    };
    HomePage.prototype.PerformActionOnPoolAdd = function (activity) {
        var _this = this;
        if (this.returningUser) {
            if (activity.Driver_location != null) {
                this.pop.presentSimpleLoader(this.lp.translate()[0].recover);
                this.hidelocator = true;
                this.connect = true;
                setTimeout(function () {
                    _this.PerformActionOnPoolChange(activity);
                    if (_this.platform.is('cordova')) {
                        _this.vibration.vibrate(1000);
                    }
                }, 1000);
                this.DriverFound(activity.Driver_location, activity.Driver_plate, activity.Driver_carType, activity.Driver_name, activity.Driver_seat, activity.Driver_locationName, activity.Driver_rating, activity.Driver_picture, activity.Driver_number, activity.Pool_locationName, activity.Pool_location[0], activity.Pool_location[1], activity.Driver_rateText, activity.Driver_ID);
                // this.cMap.onDestinatiobarHide = true;
                // document.getElementById("destination").innerText = activity.Client_destinationName;;
                if (activity.Driver_location[0] != null) {
                    var driverPos = new google.maps.LatLng(activity.Driver_location[0], activity.Driver_location[1]);
                    var userPos = void 0;
                    userPos = new google.maps.LatLng(activity.Pool_location[0], activity.Pool_location[1]);
                    this.dProvider.calcRoute(userPos, driverPos, true, false, 'ghjtfd');
                }
            }
        }
    };
    HomePage.prototype.PerformActionOnChange = function (activity) {
        var _this = this;
        if (activity.Client_Arrived && this.arrived) {
            this.arrived = false;
            this.pop.showPimp('Your Driver Has Arrived');
        }
        if (activity.Client_PickedUp && this.picked_up) {
            this.picked_up = false;
            this.driver_picked = true;
            this.cMap.isDestination = true;
            this.pop.SmartLoader('Confirming pickup..');
            this.cMap.ClearDetection = true;
            this.canShowBars = false;
            this.toggleMore = false;
            //this.act.getPoolProfile().remove()
            //console.log('Picked Up')
            this.PickedUp(activity);
            var lat_1;
            var lng_1;
            this.type = 'arrow-up';
            this.myGcode.Reverse_Geocode(this.cMap.lat, this.cMap.lng, this.cMap.map, false);
            if (this.platform.is('cordova')) {
                //this.backgroundTask(this.lp.translate()[0].drive)
                this.pop.presentLoader('Picked up');
                this.geocoder.geocode({ 'address': activity.Client_destinationName }, function (results, status) {
                    if (status == 'OK') {
                        var position = results[0].geometry.location;
                        lat_1 = position.lat();
                        lng_1 = position.lng();
                        var location_1 = [
                            lat_1,
                            lng_1
                        ];
                    }
                    if (_this.platform.is('cordova')) {
                        _this.cMap.stopMovingUsertoDriver = true;
                        _this.cMap.detectUserChange.unsubscribe();
                        console.log('destination');
                        _this.cMap.map.clear().then(function () {
                            console.log('now moving user to destination');
                            _this.cMap.setMarkersDestination(lat_1, lng_1);
                            // document.getElementById("header").innerHTML = 'Estimated Arrival ' + this.dProvider.time2;
                            var urPos = new google.maps.LatLng(lat_1, lng_1);
                            var uLOC = new google.maps.LatLng(_this.cMap.lat, _this.cMap.lng);
                            _this.dProvider.calcDestRoute(_this.name, uLOC, urPos, activity.Client_destinationName, _this.uid);
                            _this.pop.hideLoader();
                        });
                    }
                });
            }
        }
        if (activity.Client_Deleted && this.deleted) {
            this.deleted = false;
            //console.log('Deleted')
            this.pop.SmartLoader('');
            this.pop.presentToast(this.lp.translate()[0].drivercancel);
            // this.pop.clearAll(this.uid, true)
            this.cMap.ClearDetection = true;
            this.HideMe();
        }
        // if (activity.Pool_ended && this.isPool){
        // this.isPool = false
        // }
        if (activity.Client_Dropped && this.dropped) {
            //console.log('Dropped')
            this.dropped = false;
            document.getElementById("header").innerHTML = this.lp.translate()[0].end;
            this.pop.presentSimpleLoader(this.lp.translate()[0].waiting);
            this.ph.uid = this.uid;
            this.Charged(activity);
            console.log('should change now to has ended');
            //this.backgroundTask(this.lp.translate()[0].drop)
        }
        if (activity.Client_hasPaid && this.paid) {
            this.paid = false;
            ////console.log('Paid card')
            this.hasRated = false;
            //console.log('Both Driver and User has rated')
            //this.pop.hideLoader();
            // this.pop.presentSimpleLoader('Closing Connection...');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__pages_rate_rate__["a" /* RatePage */], { 'eventId': activity.Driver_ID }).then(function () {
                var currentdate = new Date();
                var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth() + 1) + "/"
                    + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":"
                    + currentdate.getSeconds();
                var destiny;
                destiny = activity.Client_destinationName;
                //  //console.log(this.name, this.price, datetime, this.myGcode.locationName, activity.Client_destinationName, activity.Driver_RateValue, activity.Driver_RateText)
                _this.ph.createHistory(_this.name, _this.price, datetime, _this.myGcode.locationName, destiny).then(function (suc) {
                    //console.log('here and about to end connection')
                    if (_this.referal)
                        if (_this.referalID.replace(/[^A-Z,0-9]/gi, "").length == 4) {
                            console.log(_this.price * 3 / 100);
                            _this.ph.UpdateRefEarnings(_this.price * 3 / 100).then(function () { });
                            console.log('Passenger Referal Paid' + _this.referal);
                        }
                        else {
                            _this.ph.UpdateRefEarnings2(_this.price * 3 / 100).then(function () { });
                            console.log('Driver Referal Paid' + _this.referal);
                        }
                    _this.act.getActivityProfile(_this.uid).update({
                        Client_ended: true,
                    }).then(function () {
                        //console.log('cleared the db for client')
                        clearTimeout(_this.timeTonotify);
                        _this.pop.clearAll(_this.uid, true);
                        _this.pop.hasCleared = true;
                        //console.log(this.NotifyTimes);
                        _this.clearAll();
                        _this.hasCalled = true;
                        //this.pop.show('All Our Drivers Are Busy, Please Try Again. Sorry For The Incovenience.')
                        // this.act.getPoolProfile().remove().then(()=>{
                        //    this.canPool = false;
                        // })
                    });
                });
            });
        }
        if (activity.Client_paidCash) {
            if (this.paid_cash) {
                //console.log('I did this haha, come and get me') 
                this.paid_cash = false;
                this.price = activity.Client_price;
                var location_2 = activity.Client_locationName;
                var destination = activity.Client_destinationName;
                var obj = { id: this.uid, from: location_2, to: destination, charge: this.price, info: this.lp.translate()[0].paidcash };
                var modal = this.modalCtrl.create('PaymentApprovalPage', obj);
                modal.present();
                modal.onDidDismiss(function () {
                    _this.act.getActivityProfile(_this.uid).update({
                        Client_hasPaid: true,
                    }).then(function () {
                        /// this.navCtrl.push(RatePage, { 'eventId': this.uid });
                    });
                });
            }
        }
        if (this.connect_change) {
            //console.log('connect now')
            this.Onconnect(activity);
            this.connect_change = false;
        }
        this.userDestName = activity.Client_destinationName;
        this.dProvider.name = activity.Driver_name;
        this.number = activity.Driver_number;
        this.pop.uid = this.uid;
        if (this.not_ended && activity.Driver_locationName != null) {
            this.cMap.D_lat = activity.Driver_location[0];
            this.cMap.D_lng = activity.Driver_location[1];
            var userPos = void 0;
            userPos = new google.maps.LatLng(activity.Client_location[0], activity.Client_location[1]);
            var driverPos = new google.maps.LatLng(activity.Driver_location[0], activity.Driver_location[1]);
            //console.log(this.myGcode.locationName, activity.Driver_locationName)
            this.driverLocationName = activity.Driver_locationName;
            if (activity.Client_PickedUp == false) {
                //console.log('driver has not picked') 
                this.dProvider.calcRoute(userPos, driverPos, true, false, 'wertyrw');
            }
        }
    };
    HomePage.prototype.PerformActionOnPoolChange = function (activity) {
        var _this = this;
        if (this.platform.is('cordova')) {
            //   if (this.platform.is('android'))
            // this.backgroundMode.setDefaults({
            //   title: this.settings.appName,
            //   text: this.lp.translate()[0].driverarive + this.dProvider.time,
            //   bigText: true,
            //   hidden: false,
            // })
        }
        if (activity.Pool_PickedUp && this.picked_up) {
            this.driver_picked = true;
            this.cMap.isDestination = true;
            this.pop.SmartLoader('');
            this.cMap.ClearDetection = true;
            this.canShowBars = false;
            this.toggleMore = false;
            //this.act.getPoolProfile().remove()
            //console.log('Picked Up')
            this.PickedUp(activity);
            var lat_2;
            var lng_2;
            this.type = 'arrow-up';
            this.myGcode.Reverse_Geocode(this.cMap.lat, this.cMap.lng, this.cMap.map, false);
            if (this.platform.is('cordova')) {
                //this.backgroundTask(this.lp.translate()[0].drive)
                this.pop.presentLoader('');
                this.picked_up = false;
                this.geocoder.geocode({ 'address': activity.Pool_destinationName }, function (results, status) {
                    if (status == 'OK') {
                        var position = results[0].geometry.location;
                        lat_2 = position.lat();
                        lng_2 = position.lng();
                        var location_3 = [
                            lat_2,
                            lng_2
                        ];
                    }
                    if (_this.platform.is('cordova')) {
                        _this.cMap.stopMovingUsertoDriver = true;
                        _this.cMap.detectUserChange.unsubscribe();
                        console.log('destination');
                        _this.cMap.map.clear().then(function () {
                            console.log('now moving user to destination');
                            _this.cMap.setMarkersDestination(lat_2, lng_2);
                            // document.getElementById("header").innerHTML = 'Estimated Arrival ' + this.dProvider.time2;
                            var urPos = new google.maps.LatLng(lat_2, lng_2);
                            var uLOC = new google.maps.LatLng(_this.cMap.lat, _this.cMap.lng);
                            _this.dProvider.calcDestRoute(_this.name, uLOC, urPos, activity.Pool_destinationName, _this.uid);
                            _this.pop.hideLoader();
                        });
                    }
                });
            }
        }
        if (activity.Pool_Deleted && this.deleted) {
            this.deleted = false;
            //console.log('Deleted')
            this.pop.SmartLoader('');
            this.pop.presentToast(this.lp.translate()[0].drivercancel);
            // this.pop.clearAll(this.uid, true)
            this.cMap.ClearDetection = true;
            this.HideMe();
        }
        // if (activity.Pool_ended && this.isPool){
        // this.isPool = false
        // }
        if (activity.Pool_Dropped && this.dropped) {
            //console.log('Dropped')
            if (!this.isPerKilo) {
                this.dropped = false;
                document.getElementById("header").innerHTML = this.lp.translate()[0].end;
                this.pop.presentSimpleLoader(this.lp.translate()[0].waiting);
                this.ph.uid = this.uid;
                this.Charged(activity);
                //console.log('should change now to has ended')
                //this.backgroundTask(this.lp.translate()[0].drop)
            }
            else {
                //this.calculateThis(activity.Pool_locationName, activity)
            }
        }
        if (activity.Pool_hasPaid && this.paid) {
            this.paid = false;
            ////console.log('Paid card')
            this.hasRated = false;
            //console.log('Both Driver and User has rated')
            //this.pop.hideLoader();
            // this.pop.presentSimpleLoader('Closing Connection...');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__pages_rate_rate__["a" /* RatePage */], { 'eventId': activity.Driver_ID }).then(function () {
                var currentdate = new Date();
                var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth() + 1) + "/"
                    + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":"
                    + currentdate.getSeconds();
                var destiny;
                destiny = activity.Pool_destinationName;
                //  //console.log(this.name, this.price, datetime, this.myGcode.locationName, activity.Pool_destinationName, activity.Driver_RateValue, activity.Driver_RateText)
                _this.ph.createHistory(_this.name, _this.price, datetime, _this.myGcode.locationName, destiny).then(function (suc) {
                    //console.log('here and about to end connection')
                    _this.act.getActivityProfile(_this.uid).update({
                        Pool_ended: true,
                    }).then(function () {
                        //console.log('cleared the db for Pool')
                        clearTimeout(_this.timeTonotify);
                        _this.pop.clearAll(_this.uid, true);
                        _this.pop.hasCleared = true;
                        //console.log(this.NotifyTimes);
                        _this.clearAll();
                        _this.hasCalled = true;
                        //this.pop.show('All Our Drivers Are Busy, Please Try Again. Sorry For The Incovenience.')
                        // this.act.getPoolProfile().remove().then(()=>{
                        //    this.canPool = false;
                        // })
                    });
                });
            });
        }
        if (activity.Pool_paidCash) {
            if (this.paid_cash) {
                //console.log('I did this haha, come and get me') 
                this.paid_cash = false;
                this.price = activity.Pool_price;
                var location_4 = activity.Pool_locationName;
                var destination = activity.Pool_destinationName;
                var obj = { id: this.uid, from: location_4, to: destination, charge: this.price, info: this.lp.translate()[0].paidcash };
                var modal = this.modalCtrl.create('PaymentApprovalPage', obj);
                modal.present();
                modal.onDidDismiss(function () {
                    _this.act.getActivityProfile(_this.uid).update({
                        Pool_hasPaid: true,
                    }).then(function () {
                        /// this.navCtrl.push(RatePage, { 'eventId': this.uid });
                    });
                });
            }
        }
        if (this.connect_change) {
            //console.log('connect now')
            this.Onconnect(activity);
            this.connect_change = false;
        }
        this.userDestName = activity.Pool_destinationName;
        this.dProvider.name = activity.Driver_name;
        this.number = activity.Driver_number;
        this.pop.uid = this.uid;
        if (this.not_ended && activity.Driver_locationName != null) {
            this.cMap.D_lat = activity.Driver_location[0];
            this.cMap.D_lng = activity.Driver_location[1];
            var userPos = void 0;
            userPos = new google.maps.LatLng(activity.Pool_location[0], activity.Pool_location[1]);
            var driverPos = new google.maps.LatLng(activity.Driver_location[0], activity.Driver_location[1]);
            //console.log(this.myGcode.locationName, activity.Driver_locationName)
            this.driverLocationName = activity.Driver_locationName;
            if (activity.Pool_PickedUp == false) {
                //console.log('driver has not picked') 
                this.dProvider.calcRoute(userPos, driverPos, true, false, 'wertyrw');
            }
        }
    };
    //  backgroundTask(text){
    //   if (this.platform.is('android'))
    //   this.backgroundMode.setDefaults({
    //     title: this.settings.appName,
    //     text: text,
    //     bigText: true,
    //     hidden: false,
    //   })
    //  }
    HomePage.prototype.ClearMe = function () {
        this.pop.clearAll(this.uid, true);
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
    HomePage.prototype.HideMe = function () {
        this.PerformActionOnCancel();
    };
    HomePage.prototype.PerformActionOnCancel = function () {
        //if (this.rechecking){
        this.clearAll();
        this.hasCalled = true;
        //  }
        console.log('cleared all');
    };
    HomePage.prototype.clearAll = function () {
        var _this = this;
        if (this.hasCalled) {
            this.startedNavigation = false;
            // this.ph.getAllPool().child(this.poolID).remove().then((d)=>{console.log(d);this.ph.getAllPool().off()}).catch((d)=>{console.log(d)})
            //this.storage.remove(`currentUserId`);
            this.isPool = true;
            this.ThisPool = false;
            this.paid_cash2 = true;
            this.paid_cash = true;
            this.ended = true;
            this.deleted = true;
            this.canCancel = false;
            this.canClear = true;
            this.hasCalled = false;
            this.cMap.stopMovingUserDestination = true;
            this.cMap.stopMovingUsertoDriver = true;
            // this.cMap.detectUserChange.unsubscribe();
            // this.cMap.detectCarChange.unsubscribe();
            //this.canIncrease = false;
            if (this.called) {
                this.called = false;
                this.cMap.map.clear().then(function () {
                    _this.cMap.refreshForChangesRemove();
                    _this.cMap.map.setClickable(true);
                    _this.StartTracker(true);
                });
            }
            if (!this.platform.is('cordova')) {
                this.cMap.showDriversOnMap();
                console.log('retried');
            }
            this.cMap.onbar2 = false;
            this.cMap.onbar3 = false;
            this.cMap.isNavigate = false;
            this.canStop = true;
            //this.cMap.element = this.mapComponent
            this.cMap.hasRequested = false;
            // this.onRequest = false;
            this.cMap.toggleBtn = false;
            this.cMap.onPointerHide = false;
            // this.cMap.onDestinatiobarHide = false;
            this.pop.allowed = true;
            this.cMap.canMess = false;
            // document.getElementById("header").innerText = "Requesting A Ride";
            //this.cMap.map.setOptions({draggable: true});
            //  this.cMap.isCarAvailable = true;
            this.cMap.car_notificationIds = [];
            this.pop.canDismiss = true;
            this.storage.remove("currentUserId");
            this.cMap.cars = [];
            this.hasChecked = false;
            this.can = true;
            //this.act.getPoolProfile().remove();
            this.clearThis = true;
            console.log('closed connection');
            this.ReturnHome();
            this.cMap.isDestination = false;
            this.cMap.selected_destination_bar = false;
            this.cMap.isLocationChange = false;
            this.dProvider.price = null;
            this.actualPrice = null;
            this.highPrice = null;
            this.cMap.showDone = false;
            this.pop.onRequest = false;
            this.canShowBars = true;
            this.toggleMore = true;
            this.poolAvailable = false;
            this.choseClassic = false;
            this.choseTricycle = false;
            this.cMap.isNavigate = false;
            this.rechecking = false;
            this.poolState = false;
            this.isPerKilo = false;
            this.connect_change = true;
            this.canIncrease = false;
            this.not_ended = false;
            this.hidelocator = false;
            this.act.getActiveProfile(this.uid).off('child_added');
            this.act.getActiveProfile(this.uid).off('child_changed');
            this.act.getActiveProfile(this.uid).off('child_removed');
            this.bookStarted = false;
            this.hideTopbuttons = false;
            //this.cMap.map.setClickable(true)
            //  this.cMap.ClearDetection = false;
        }
    };
    HomePage.prototype.hideFunctionsOnDriverFound = function () {
        this.cMap.onbar2 = false;
        this.cMap.onbar3 = true;
        this.cMap.toggleBtn = true;
        this.cMap.onPointerHide = true;
        this.cMap.car_notificationIds = [];
        clearTimeout(this.timeTonotify);
    };
    HomePage.prototype.DriverFound = function (location, plate, carType, name, seat, locationName, rating, picture, number, userPos, client_lat, client_lng, review, driverID) {
        this.location = location;
        this.plate = plate;
        this.carType = carType;
        this.name = name;
        this.seat = seat;
        this.rating = rating;
        this.review = review;
        this.picture = picture;
        this.pop.SmartLoader('');
        this.hideFunctionsOnDriverFound();
        this.cMap.lat = client_lat;
        this.cMap.lng = client_lng;
        //this.calcRoute(userPos, locationName)
        if (location) {
            this.cMap.D_lat = location[0];
            this.cMap.D_lng = location[1];
        }
        else {
            // clearTimeout(this.timeTonotify);
            this.ClearMe();
            //console.log('i cancelled')
            if (this.bookStarted)
                this.bookStarted = false;
            this.pop.presentToast(this.lp.translate()[0].nodriver);
        }
        if (this.platform.is('cordova') && location) {
            this.cMap.setMarkers(this.uid);
        }
        return;
    };
    HomePage.prototype.Onconnect = function (activity) {
        this.pop.presentSimpleLoader(this.lp.translate()[0].driverfound);
        if (this.platform.is('cordova'))
            this.vibration.vibrate(1000);
        this.pop.uid = this.uid;
        //  this.eventProvider.UpdateSate(true, this.uid);
        //console.log(this.uid)
        this.DriverFound(activity.Driver_location, activity.Driver_plate, activity.Driver_carType, activity.Driver_name, activity.Driver_seats, activity.Driver_locationName, activity.Driver_rating, activity.Driver_picture, activity.Driver_number, activity.Client_locationName, activity.Client_location[0], activity.Client_location[1], activity.Driver_rateText, activity.Driver_RegNum);
        document.getElementById("destination").innerHTML = this.lp.translate()[0].dest;
        this.storage.set("currentUserId", this.uid);
    };
    HomePage.prototype.PickedUp = function (activity) {
        // this.pop.SmartLoader('')
        if (this.platform.is('cordova')) {
            // this.cMap.map.setClickable(false)
        }
        // this.hideButtons()
        //console.log(this.cMap.onbar3)
        this.cMap.toggleBtn = false;
        //console.log('should change now to has begun')
        //   document.getElementById("header").innerHTML = 'Journey Has Started';
        if (activity.Client_price == null) {
            this.cMap.toggleBtn = false;
            this.picked_up = false;
        }
    };
    HomePage.prototype.Charged = function (activity) {
        var _this = this;
        if (this.platform.is('cordova'))
            this.cMap.map.setClickable(false);
        this.price = activity.Client_price; //|| activity.Pool_price;
        var location = activity.Client_locationName; //|| activity.Pool_locationName;
        var destination = activity.Client_destinationName; //|| activity.Pool_destinationName;
        if (this.ph.card != null) {
            var obj = { id: this.uid, from: location, to: destination, charge: this.price, info: this.lp.translate()[0].check };
            var modal = this.modalCtrl.create('PaymentApprovalPage', obj);
            ////console.log('I did this haha, come and get me') 
            modal.present();
            modal.onDidDismiss(function () {
                if (_this.settings.isStripe) {
                    _this.stripe.ChargeCard(_this.price, _this.uid);
                }
                else {
                    _this.paystack.ChargeCard(_this.ph.card, _this.ph.month, _this.ph.cvc, _this.ph.year, _this.price * 100, _this.ph.email, _this.uid);
                }
            });
        }
        else {
            // if (!this.hasStarted){
            this.act.getActivityProfile(this.uid).update({
                Client_paidCash: true,
            });
            // }
        }
        // })
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/home/home.html"*/'\n<ion-content class="no-scroll">\n  \n   <!-- This is the cordova google map -->\n   <div id="map">\n\n      <div class="topBar" *ngIf="cMap.onbar3">\n      \n        <!-- <div id=\'buttonContainer2\'>\n          <button detail-none class=\'button\' icon-only (click)="hideButtons()">\n              <ion-icon color=\'light\' name="eye"></ion-icon>\n         </button>\n         </div> -->\n      \n\n\n      <div id=\'buttonContainer\'>\n          <button *ngIf="!hideTopbuttons" class=\'button\' detail-none icon-only (click)="Send()">\n              <ion-icon color=\'light\' name="chatbubbles"  >\n                  <ion-badge *ngIf=\'notification\' id="cart-badge">New</ion-badge>\n                <!-- <ion-badge *ngIf=\'notification\' id="notifications-badge" color="danger">!</ion-badge> -->\n              </ion-icon>\n          </button>\n        </div>\n\n      </div>\n\n        <!-- This is the navigation bar containing sidemenu btn and booklater btn -->\n       <div class="topBar" [hidden]=\'pop.onRequest\'>\n\n          <!-- sidemenu btn -->\n          <!-- <div [hidden]=\'pop.onRequest\'> -->\n           <button *ngIf="!cMap.selected_destination_bar" no-lines detail-none class=\'button\' clear padding  icon-only ion-button menuToggle>\n               <ion-icon name="ios-menu"></ion-icon>\n             </button>\n\n            \n          <!-- </div> -->\n\n              <!-- back btn -->\n          \n           <button *ngIf="cMap.selected_destination_bar" no-lines detail-none class=\'button\' clear padding  icon-only ion-button (click)="ReturnHome()">\n                   <ion-icon name="ios-arrow-back"></ion-icon>\n                 </button>\n              <!-- </div> -->\n                   \n                 <!-- <button *ngIf="pop.onRequest" no-lines detail-none class=\'button\' clear padding  icon-only ion-button (click)="ReturnHome()">\n                       <ion-icon name="ios-arrow-back"></ion-icon>\n                     </button>\n    -->\n\n              <!-- booklater btn -->\n            \n\n             \n\n              <span [hidden]=\'pop.onRequest\'>\n                <button [hidden]=\'!settings.schedule\' *ngIf="!cMap.selected_destination_bar" no-lines detail-none class=\'button-right\' clear padding  icon-only ion-button (click)="bookLater()">\n                  <ion-icon name="ios-calendar-outline"></ion-icon>\n                </button>\n                 </span>\n\n             <button *ngIf="cMap.selected_destination_bar" no-lines detail-none class=\'button-right\' clear padding  icon-only ion-button (click)="estimate()">\n                   <ion-icon name="ios-calculator-outline"></ion-icon>\n                 </button>\n            \n\n       </div>\n\n\n       <div class="topBar" [hidden]=\'!pop.onRequest\' >\n                  <div [hidden]=\'startedNavigation\'>\n                              <!-- back btn -->\n                          \n                           <button no-lines detail-none class=\'button\' clear padding  icon-only ion-button (click)="ReturnToSelect()">\n                                   <ion-icon name="ios-arrow-back"></ion-icon>\n                                 </button>\n                              <!-- </div> -->\n        \n                           </div>\n                                   \n                       </div>\n               \n                      \n       \n        <!-- These are the location bar and destination bar -->\n       <div [hidden]=\'pop.onRequest\'class="bars">\n                         <!-- location bar -->\n                         <div [hidden]=\'!cMap.hasShown\'>\n                         <button  no-lines detail-none [hidden]="cMap.selected_destination_bar" ion-item class="bars-whereto" icon-start (click)="toggleMoreSection()" >\n                               <ion-icon color=\'deep\' padding  name="square"></ion-icon>\n                             <div class=\'myText\' >{{lp.translate()[0].whereTo}}</div>\n                           </button>\n\n                         \n                       </div>\n\n       <div class=\'bookingSect\' [hidden]="!cMap.selected_destination_bar">   \n             <!-- location bar -->\n             <ion-grid >\n                   <ion-row>\n                     <ion-col id=\'iCol\' (click)="showAddressModal(1)">\n            <button  no-lines detail-none [hidden]="!cMap.onLocationbarHide" ion-item class="bars-locate" icon-start  >\n                  <ion-icon color=\'danger\' name="locate"></ion-icon>\n                <div id="location">{{lp.translate()[0].set}}\n                </div>\n              </button>\n           </ion-col>\n           \n                   <button no-lines detail-none  ion-item color="primary" [hidden]="!cMap.onLocationbarHide"  [disabled]=\'cMap.showDone\' class="bars-locate-pin" (click)="ToggleChange_1()">\n                     <ion-icon color=\'nav-color\' name="pin"></ion-icon>\n                   </button>\n          \n       </ion-row>\n     </ion-grid>\n\n                 <!-- desination bar -->\n                 <ion-grid >\n                       <ion-row>\n                         <ion-col id=\'iCol\' (click)="showAddressModal(2)">\n                <button  no-lines detail-none [hidden]="!cMap.onDestinatiobarHide" ion-item class="bars-destinate" icon-start >\n                      <ion-icon color=\'primary\' name="flag"></ion-icon>\n                    <div id="destination">{{lp.translate()[0].dest}}\n                    </div>\n                  </button>\n               </ion-col>\n               <!-- <ion-col id=\'myCol\'> -->\n                       <button no-lines detail-none icon-only ion-item color="primary" [hidden]="!cMap.onDestinatiobarHide" [disabled]=\'cMap.showDone\' class="bars-destinate-pin" (click)="ToggleChange_2()">\n                         <ion-icon color=\'nav-color\' name="pin"></ion-icon>\n                       </button>\n                 <!-- </ion-col> -->\n           </ion-row>\n         </ion-grid>\n\n           </div>   \n\n\n          \n         </div>\n\n\n \n             <!-- This is the little location btn on the top left corner -->\n             <!-- <div [hidden]=\'!cMap.hasShown\'>\n                <button [hidden]=\'cMap.hidelocator\' class=\'locate_button\' no-lines detail-none icon-only ion-item  (click)="ResetMe()">\n                  <ion-icon class=\'locate_icon\' color=\'primary\' name="locate"></ion-icon>\n                  </button>\n              </div> -->\n\n\n      <!-- This is the pickup location button situated in the center -->    \n     <button [hidden]="!cMap.showDone" no-lines detail-none class="bar" id=\'onbar\' ion-item  icon-right (click)="Done()">\n         <!-- <h2 class=\'textleft\' id=\'leftext\'>wait</h2> -->\n         {{lp.translate()[0].done}}\n        <ion-icon color=\'light\' class="icon" name="ios-arrow-round-forward"></ion-icon>\n    </button>\n      \n      \n    <!-- marker/pin situated in the center -->\n    <div [hidden]="!cMap.showDone">\n    <div [hidden]="!cMap.selected_destination_bar" class="centerMarker">\n    <span class="middy" [hidden]="cMap.onPointerHide">\n       <div id="nugget" [hidden]="cMap.onPointerHide">\n         </div>\n     </span> \n    </div> \n   </div>\n\n      \n\n\n          \n  \n\n <!-- Booking section  -->\n <div id=\'bar2\' *ngIf=\'cMap.canShowchoiceTab\' class="bottom-bar">\n           \n   \n    <div class="request-for-ride">\n         <!-- ridetypes section -->\n           <div  *ngIf=\'!rideShare\'>\n                   <ion-grid id=\'myGrid\'>\n                         <ion-row>\n             \n                           <!-- small car -->\n                           <ion-col id=\'car\'>\n                            <div text-center id=\'stf\'><p>{{cMap.standardStance}}</p></div>\n                               <button [disabled]=\'!cMap.smallcar\' class="carMarker"  ion-button round icon-only (click)="chooseRideType(0)">\n                                \n                           </button>\n                           <div><h2 class=\'topey\' text-center>{{settings.car1}}</h2>\n                          </div>\n                           \n                   </ion-col>\n                         \n                 <!-- pool car -->\n             <ion-col id=\'pool\'>\n              <div text-center id=\'stf\'><p>{{cMap.tricycleStance}}</p></div>\n                 <button [disabled]=\'!cMap.pool\' class="carMarker_1"  ion-button round icon-only (click)="chooseRideType(1)">\n                  \n             </button>\n             <div><h2 class=\'topey\' text-center>{{settings.car2}}</h2>\n            </div>\n             </ion-col>\n\n\n             <ion-col id=\'classic\'>\n              <div text-center id=\'stf\'><p>{{cMap.executiveStance}}</p></div>\n               <button [disabled]=\'!cMap.classic\' class="carMarker_2"  ion-button round icon-only (click)="chooseRideType(2)">\n               \n           </button>\n               <div><h2 class=\'topey\' text-center>{{settings.car3}}</h2>\n               </div>\n           </ion-col>\n            \n                 </ion-row>\n               </ion-grid>\n\n              \n\n\n             </div>\n\n\n\n            <!--Pool section-->\n\n\n             <!-- <div >\n                <ion-label padding>Pool Available</ion-label>\n              <ion-grid id=\'myGrid2\'>\n                    <ion-row>\n                      <ion-col *ngFor=\'let event of myList\'>\n                        <ion-card>\n                            <img class=\'image\' [src]=event?.picture>\n                        <h2 text-center ><strong>{{event?.name}}</strong></h2>\n                       <ion-label></ion-label>\n                          <button block ion-button (click)="SendPool(event.userID)">\n                            Request\n                      </button>\n                        </ion-card>\n                       \n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div> -->\n\n            \n                 \n             <!-- <button id=\'pay2\' detail-none no-lines icon-start ion-item>\n              <ion-item color="light" id=\'rides\'> \n                      <ion-icon  color="primary"  name="ios-timer" item-start></ion-icon>\n                      Arrival\n                      <ion-badge *ngIf=\'actualPrice != null\' item-end><div id=\'price\' >{{dProvider.time}}</div></ion-badge>\n                    </ion-item>\n         </button> -->\n    <!-- Top two buttons for cash/card and estimate -->\n   \n             <!-- <button id=\'pay\' detail-none no-lines  icon-start ion-item  (click)="gotoPayment()">\n                   <ion-item color="secondary" id=\'rides\'> \n                           <ion-icon  color="primary"  name="ios-cash-outline" item-start></ion-icon>\n                           {{lp.translate()[0].cash}}\n                           <ion-badge  item-end><div id=\'price\' >{{settings.appcurrency}}{{actualPrice}}</div></ion-badge>\n                    </ion-item>\n              </button> -->\n              <button *ngIf=\'!rideShare\' id=\'pay\' detail-none no-lines icon-start ion-item  (click)="gotoPayment()">\n                   <ion-item color="secondary" id=\'rides\'> \n                           <!-- <ion-icon  color="primary"  name="ios-card-outline" item-start></ion-icon> -->\n                         \n                           <div *ngIf=\'cardnumber\'>{{cardnumber}}</div>\n                           <div *ngIf=\'!cardnumber\'>Add Card</div>\n                           <ion-badge *ngIf=\'actualPrice != null\' item-end><div id=\'price\' >{{settings.appcurrency}}{{actualPrice}} - {{settings.appcurrency}}{{highPrice}}</div></ion-badge>\n                         </ion-item>\n              </button>\n               <!-- <button id=\'pay\' detail-none no-lines *ngIf="ph.paymentType != 1 && ph.paymentType != 2"  icon-start ion-item (click)="gotoPayment()">\n                       <ion-item color="secondary" id=\'rides\'> \n                               <ion-icon  color="primary"  name="ios-create" item-start></ion-icon>\n                               {{lp.translate()[0].cash}}\n                               <ion-badge  item-end><div id=\'price\' >{{settings.appcurrency}}{{actualPrice}}</div></ion-badge>\n                             </ion-item>\n               </button> -->\n         \n     \n     <!-- center text for price info -->\n     <!-- <div class="text" text-center>\n        {{settings.appName}} Charges {{settings.appcurrency}} {{dProvider.pricePerKm}} | Km\n     </div> -->\n     \n     <!-- Booknow btn -->\n     <div  class=\'booker\' >\n     \n       <ion-grid>\n         <ion-row>\n           <ion-col padding>\n              <button no-lines detail-none class="gutton" icon-end ion-item color="primary" (click)="Start()">\n                  <ion-icon  color=\'nav-color\' name="ios-car"></ion-icon>\n                  BOOK\n                </button>\n           </ion-col>\n           <ion-col padding *ngIf=\'settings.schedule\'>\n              <button no-lines detail-none class="gutton" icon-end ion-item color="gery" (click)="bookLater()">\n                  <ion-icon color=\'nav-color\' name="ios-clock"></ion-icon>\n                  LATER\n                </button>\n           </ion-col>\n\n           <!-- <ion-col>\n            <button *ngIf=\'!rideShare\' no-lines detail-none class="gutton" icon-end ion-item color="newColor" (click)="toggleRideShare()">\n                <ion-icon color=\'nav-color\' name="ios-contact"></ion-icon>\n                POOL\n              </button>\n\n              <button *ngIf=\'rideShare\' no-lines detail-none class="gutton" icon-end ion-item color="danger" (click)="toggleRideShare()">\n                <ion-icon color=\'nav-color\' name="ios-trash"></ion-icon>\n                CLOSE\n              </button>\n         </ion-col> -->\n         </ion-row>\n       </ion-grid>\n      \n   </div>\n     </div>\n\n   </div>\n\n\n\n\n\n\n   <!-- Gohome or work section -->\n   <div [hidden]=\'!cMap.hasShown\'>\n   <div [hidden]=\'cMap.selected_destination_bar\' class=\'bottom-list\'>\n           <ion-grid class=\'my-grid\'>\n               <ion-row>\n                 <!-- home -->\n                 <ion-col>\n                     <button *ngIf=\'ph.home\' color=\'nav-color\' class="stuffs"  ion-button round icon-only (click)="GotoPlace(ph.home)">\n                         <ion-icon color=\'primary\' class="icon" name="ios-home"></ion-icon>\n                 </button>\n         </ion-col>\n      \n        \n   \n       <!-- work -->\n   <ion-col >\n       <button color=\'nav-color\' *ngIf=\'ph.work\' class="stuffs"  ion-button round icon-only (click)="GotoPlace(ph.work)">\n           <ion-icon color=\'primary\' class="icon" name="ios-briefcase"></ion-icon>\n   </button>\n   </ion-col>\n   \n       </ion-row>\n     </ion-grid>\n\n     <!-- <button  no-lines text-center detail-none ion-item clear icon-start (click)="StartKilo()" >\n      <ion-icon color=\'deep\' padding  name="car"></ion-icon>\n    Charge Per Kilometre\n  </button> -->\n         </div>\n         \n       </div>         \n\n\n \n\n\n <!-- Booking section  -->\n \n <div id=\'norideBar\' *ngIf=\'cMap.norideavailable\' class="bottom-bar">\n       \n\n<div class="request-for-ride">\n\n       <img id=\'envelope\' src="data:image/png;base64,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">\n       \n             <!-- <ion-label color="primary"  [ngStyle]="{\'margin-top\': 10 + \'px\', \'font-size\': 1.3 + \'em\'}" > -->\n               <p id="butt"text-center>No Drivers Available In This Area</p>\n             <!-- </ion-label> -->\n            \n               \n </div>\n\n</div>\n\n\n\n\n   <!-- center  bar showing driver booking state\n   <div  class=\'myCentre\'*ngIf="cMap.onbar2">\n           <ion-item no-lines color="white">\n                   <ion-grid>\n                           <ion-row>\n                             <ion-col>\n                   <ion-spinner color=\'primary\' name="crescent"></ion-spinner>\n                             </ion-col>\n                             <ion-col>\n                   <ion-title>Connecting with Driver...\n                           <ion-icon color=\'primary\' name="ios-contact"></ion-icon>\n                   </ion-title>                 \n                             </ion-col>\n               </ion-row>\n             </ion-grid>\n                  </ion-item>\n   </div> -->\n\n  \n   <!-- cancel button on driver booking state-->\n   <div class="bottom-bar2" *ngIf="cMap.onbar2" >\n       <ion-item no-lines color="white">\n          \n           <ion-spinner color=\'primary\' name="crescent"></ion-spinner>\n                     \n           <ion-title padding text-center>\n                   <ion-icon  color=\'primary\' name="ios-timer"></ion-icon>\n                   {{lp.translate()[0].just}}\n           </ion-title>                 \n                 \n          </ion-item>\n              <!-- cancel btn-->\n             <button *ngIf=\'canCancel\' class="gutton" detail-none ion-item icon-only color="primary" (click)="cancelRequest()">\n                   <ion-icon color=\'light\' name="close"></ion-icon>\n              </button>\n\n           </div>\n\n\n    \n   <!-- bar showing driver information section-->\n       <div class="bottom3-container" *ngIf="cMap.onbar3">\n        \n   \n              <!-- Driver information -->\n               <div *ngIf=\'toggleMore\' class="bottom-bar3">\n                   <!-- <img class=\'myImage\'> -->\n                              <ion-grid >\n                                 <ion-row>\n                                   <ion-col>\n    \n                                       <img class="profile-pic" [src]="picture"/>\n                                   </ion-col>\n                                   <ion-col>\n                                   <div class="text">\n                                       {{name}}\n                                    </div>\n                                   </ion-col>\n                                    <ion-col>\n                                     \n                                       <ion-icon [ngStyle]="{\'margin-top\': 17 + \'px\', \'margin-left\': 20 + \'px\', \'font-size\': 2 + \'em\'}" name="star">\n                                       </ion-icon>\n                                       {{rating}}|5\n                                   </ion-col>\n                                 </ion-row>\n                               </ion-grid>\n                                 \n                              <div class="logos">\n                               <ion-grid>\n                                   <ion-row>\n                                     <ion-col>\n                                       \n                                         <ion-icon color=\'primary\' name="ios-car">\n                                         </ion-icon>\n                                         {{carType}}\n                                      \n                                     </ion-col>\n                                     \n                                     <ion-col>\n                                        \n                                         <ion-icon color=\'primary\' name="ios-contacts">\n                                         \n                                         </ion-icon>\n                                         {{seat}}\n                                       \n                                     </ion-col>\n                                     <ion-col>\n                                       \n                                         <ion-icon color=\'primary\' name="ios-barcode">\n                                        \n                                         </ion-icon>\n                                         {{plate}}\n                                        \n                                     </ion-col>\n                                   </ion-row>\n                                 </ion-grid>\n    \n                              </div>\n                              <p><strong>Review " {{review}} "</strong></p>\n                           </div> \n                       </div>                     \n                     \n\n\n      <!-- Low bar containing btns to connect the driver and the user-->\n      <div *ngIf="cMap.onbar3" id="top-buttons" text-center>\n\n           <ion-grid>\n             <ion-row>\n               <ion-col>\n                   <button  detail-none icon-only (click)="callDriver()">\n                   <ion-icon color=\'nav-color\' name="ios-call"></ion-icon>\n                    </button>\n               </ion-col>\n               <ion-col>\n                   <button detail-none icon-only [disabled]=\'!canShowBars\' (click)="cancelRequest()">\n                   <ion-icon  color=\'nav-color\' name="ios-trash"></ion-icon>\n                   </button>\n               </ion-col>\n               <ion-col>\n                   <button color=\'gery\' detail-none icon-only  (click)="toggleMoreBtn()"> \n                   <ion-icon color=\'nav-color\' name="ios-{{type}}" ></ion-icon>\n                   </button>\n               </ion-col>\n             </ion-row>\n           </ion-grid>\n\n\n \n\n           <!-- driver and user distance container -->\n           <button class=\'lowbutton\' *ngIf="dProvider.time2 == null" color=\'primary\' detail-none icon-only padding id=\'header\'>\n                   Driver Arrives in % mins\n              </button> \n\n              <button class=\'lowbutton\' *ngIf="dProvider.time2" color=\'primary\' detail-none icon-only padding id=\'header\'>\n                  Estimated Arrival {{dProvider.time2}}\n             </button> \n        </div> \n       \n      </div>  \n\n    </ion-content>\n\n\n    <ion-footer no-border *ngIf=\'news && !hideNews\' id=\'lower_items\'>\n\n      <ion-item *ngIf=\'news\' color="secondary" id=\'rides\' (click)=\'openNews()\'> \n          <!-- <ion-icon  color="primary"  name="ios-cash" item-start></ion-icon> -->\n          {{news}}\n          <ion-badge color=\'primary\' item-end>View More</ion-badge>\n        </ion-item>\n    </ion-footer>  '/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_paystack_paystack__["a" /* PaystackProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_onesignal_onesignal__["a" /* OnesignalProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_geocoder_geocoder__["a" /* GeocoderProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_18__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_13__providers_stripe_stripe__["a" /* StripeProvider */], __WEBPACK_IMPORTED_MODULE_15__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_paystack_paystack__["a" /* PaystackProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_5__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_23__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_9__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__providers_onesignal_onesignal__["a" /* OnesignalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=17.js.map