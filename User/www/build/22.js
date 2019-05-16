webpackJsonp([22],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = (function () {
    function ChatPageModule() {
    }
    return ChatPageModule;
}());
ChatPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
        ],
    })
], ChatPageModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_language_language__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_event__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(38);
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
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, viewCtrl, alert, eventProvider, ph, lp, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alert = alert;
        this.eventProvider = eventProvider;
        this.ph = ph;
        this.lp = lp;
        this.navParams = navParams;
        this.id = this.navParams.get('id');
    }
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('inregf');
        this.eventProvider.getChatList(this.id).orderByValue().on('value', function (snapshot) {
            _this.eventList = [];
            console.log('sjiy');
            snapshot.forEach(function (snap) {
                _this.eventList.push({
                    id: snap.key,
                    driver: snap.val().Driver_Message,
                    user: snap.val().Client_Message,
                });
                console.log(_this.eventList);
                return false;
            });
        });
    };
    ChatPage.prototype.closeChat = function () {
        this.viewCtrl.dismiss();
    };
    ChatPage.prototype.Send = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'message',
            inputs: [
                {
                    name: 'Message',
                    placeholder: 'Reply'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        _this.ph.SendMessage(data.Message, _this.id);
                    }
                }
            ]
        });
        alert.present();
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title>chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding text-center class=\'yes-scroll\'>\n    <div class=\'followed-items\'>\n            <ion-list text-center>\n              <div text-center *ngFor="let event of eventList">\n                <ion-item text-wrap detail-none no-lines class=\'driver\' *ngIf=\'!event.user\'>\n                   <p>{{event.driver}}</p>\n                </ion-item>\n                <ion-item text-wrap detail-none no-lines class=\'user\' *ngIf=\'!event.driver\'>\n                  <p>{{event.user}}</p>\n                 </ion-item>\n              </div>\n              </ion-list>\n       \n    </div>\n  </ion-content>\n  \n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n   \n          <ion-col>\n              <button id="container_1"  text-center detail-none class="button" icon-start color="primary" (click)="closeChat()">\n                    Close\n                    </button>\n           </ion-col>\n           <ion-col>\n              <button id="container_1"  class="button" detail-none text-center icon-start color="green" (click)="Send()">\n               \n                  New Message\n                  </button>\n           </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=22.js.map