//native modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';
import { BackgroundMode } from '@ionic-native/background-mode';
import * as firebase from 'firebase/app'
import {OneSignal} from '@ionic-native/onesignal';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
import { Ionic2RatingModule } from 'ionic2-rating';
// import {Http, Request, RequestMethod} from "@angular/http";
import {HttpModule} from '@angular/http';
import { HTTP } from '@ionic-native/http';
//other
import { MyApp } from './app.component';

import { RatePage } from '../pages/rate/rate';


//providers
import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import {
  GoogleMaps,

 } from '@ionic-native/google-maps';

import { GeocoderProvider } from '../providers/geocoder/geocoder';
import { DirectionserviceProvider } from '../providers/directionservice/directionservice';

import { PopUpProvider } from '../providers/pop-up/pop-up';
import { SettingsProvider } from '../providers/settings/settings';
import { OnesignalProvider } from '../providers/onesignal/onesignal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Vibration } from '@ionic-native/vibration';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LanguageProvider } from '../providers/language/language';
import { PaystackProvider } from '../providers/paystack/paystack';


export const firebaseConfig = {
  apiKey: "AIzaSyCwzaekjLiP39qJSPOtoFCQvcn1FWdUfmY",
  authDomain: "metro-app-47710.firebaseapp.com",
  databaseURL: "https://metro-app-47710.firebaseio.com",
  storageBucket: "metro-app-47710.appspot.com",
  messagingSenderId: "677545043138"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    RatePage,
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    IonicStorageModule.forRoot(),
    BrowserModule,
    HttpModule,
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RatePage,
  
   
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    AuthProvider, 
    HTTP,
    Vibration,
    EventProvider, 
    ProfileProvider,
    BackgroundMode,
    LocationTrackerProvider,
    GeocoderProvider,
    DirectionserviceProvider,
    PopUpProvider,
    OnesignalProvider,
    OneSignal,
    SettingsProvider,
    InAppBrowser,
    CallNumber,
    GoogleMaps,
    Camera,
    RatePage,
    LanguageProvider,
    PaystackProvider,
    SocialSharing
   
  ]
})
export class AppModule {}
