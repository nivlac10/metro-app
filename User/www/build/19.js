webpackJsonp([19],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailsPageModule", function() { return HistoryDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_details__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryDetailsPageModule = (function () {
    function HistoryDetailsPageModule() {
    }
    return HistoryDetailsPageModule;
}());
HistoryDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__history_details__["a" /* HistoryDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history_details__["a" /* HistoryDetailsPage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__history_details__["a" /* HistoryDetailsPage */]
        ]
    })
], HistoryDetailsPageModule);

//# sourceMappingURL=history-details.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(57);
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






var HistoryDetailsPage = (function () {
    function HistoryDetailsPage(navCtrl, lp, navParams, settings, eventProvider) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.navParams = navParams;
        this.settings = settings;
        this.eventProvider = eventProvider;
        this.currentEvent = {};
    }
    HistoryDetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log(this.navParams.get('eventId'));
        this.eventProvider.getEventDetail(this.navParams.get('eventId'))
            .on('value', function (eventSnapshot) {
            _this.currentEvent = eventSnapshot.val();
            _this.currentEvent.id = eventSnapshot.key;
            //this.LoadMap(this.currentEvent.location, this.currentEvent.destination);
            _this.GetRoute(_this.currentEvent.location, _this.currentEvent.destination);
        });
    };
    HistoryDetailsPage.prototype.GetRoute = function (location, destination) {
        var source, destination;
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });
        var mumbai = new google.maps.LatLng(18.9750, 72.8258);
        var mapOptions = {
            zoom: 7,
            center: mumbai
        };
        var map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('dvPanel'));
        //*********DIRECTIONS AND ROUTE**********************//
        source = location;
        destination = destination;
        var request = {
            origin: source,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
        //*********DISTANCE AND DURATION**********************//
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [source],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
                var distance = response.rows[0].elements[0].distance.text;
                var duration = response.rows[0].elements[0].duration.text;
                var dvDistance = document.getElementById("dvDistance");
                dvDistance.innerHTML = "";
                dvDistance.innerHTML += "Distance: " + distance + "<br />";
                dvDistance.innerHTML += "Duration:" + duration;
            }
            else {
                alert("Unable to find the distance via road.");
            }
        });
    };
    return HistoryDetailsPage;
}());
HistoryDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-history-details',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/history-details/history-details.html"*/'<ion-header no-border>\n  <ion-navbar color="nav-color">\n    <ion-title>{{lp.translate()[0].detailsp}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="scroll">\n  <ion-row padding>\n  </ion-row>\n  <div>\n    <div text-center>\n      <h3 class=\'name\' >{{currentEvent?.name}}</h3>\n      <hr>\n    </div>\n    \n   \n  </div>\n\n  <div id=\'dvMap\' style="width: auto; height: 150px">\n  </div>\n  <div text-center >\n    <h3 class=\'price\'><ion-icon padding color=\'primary\' name="ios-cash"></ion-icon> <strong>{{settings.appcurrency}}{{currentEvent?.price}}</strong></h3>\n    <h3 class=\'date\'><ion-icon padding color=\'primary\' name="ios-calendar-outline"></ion-icon><strong>{{currentEvent?.date}}</strong></h3>\n    <h3 class=\'location\'><ion-icon padding color=\'primary\' name="locate"></ion-icon><strong>{{currentEvent?.location}}</strong></h3>\n    <h3 class=\'destination\'><ion-icon padding color=\'primary\' name="flag"></ion-icon><strong>{{currentEvent?.destination}}</strong></h3>\n</div>\n<div id=\'dvPanel\' style="width: auto; height: 150px"></div>\n    <div id=\'dvDistance\' style="width: auto; height: 150px"></div>\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/history-details/history-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], HistoryDetailsPage);

//# sourceMappingURL=history-details.js.map

/***/ })

});
//# sourceMappingURL=19.js.map