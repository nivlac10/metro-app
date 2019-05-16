//native modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Stripe } from '@ionic-native/stripe';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { HTTP } from '@ionic-native/http';
import { HttpModule, Http } from '@angular/http';

import { Vibration } from '@ionic-native/vibration';
import { BrowserTab} from '@ionic-native/browser-tab';
import { Firebase} from '@ionic-native/firebase';
import { GoogleMaps,} from '@ionic-native/google-maps';
import * as firebase from 'firebase/app'
import { OneSignal} from '@ionic-native/onesignal';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
import { Ionic2RatingModule } from 'ionic2-rating';
import { SocialSharing } from '@ionic-native/social-sharing';
//other
import { MyApp } from './app.component';

//providers
import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';
import { RatePage } from '../pages/rate/rate';
import { GeocoderProvider } from '../providers/geocoder/geocoder';
import { DirectionserviceProvider } from '../providers/directionservice/directionservice';
import { PopUpProvider } from '../providers/pop-up/pop-up';
import { OnesignalProvider } from '../providers/onesignal/onesignal';
import { NativeMapContainerProvider } from '../providers/native-map-container/native-map-container';
import { SettingsProvider } from '../providers/settings/settings';
import { ActivityProvider } from '../providers/activity/activity';
import { PaypalProvider } from '../providers/paypal/paypal';
import { PaystackProvider } from '../providers/paystack/paystack';
import { LanguageProvider } from '../providers/language/language';
import { StripeProvider } from '../providers/stripe/stripe';
//export for firebase config added here to avoid initialization errors


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
    EventProvider, 
    ProfileProvider,
    BrowserTab,
    SettingsProvider,
    Camera,
    HTTP,
    Stripe,
    GeocoderProvider,
    DirectionserviceProvider,
    PopUpProvider,
    OnesignalProvider,
    BackgroundMode,
    OneSignal,
    InAppBrowser,
    CallNumber,
    Firebase,
    RatePage,
    SocialSharing,
    LocationAccuracy,
    NativeMapContainerProvider,
    GoogleMaps,
    Vibration,
    ActivityProvider,
    PaypalProvider,
    PaystackProvider,
    LanguageProvider,
    StripeProvider
  ]
})
export class AppModule {}
