import { Component, ViewChild, NgZone } from '@angular/core';
import { Platform, Nav, LoadingController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { SettingsProvider } from '../providers/settings/settings';
import { ProfileProvider } from '../providers/profile/profile';
import { OneSignal} from '@ionic-native/onesignal';
import { LanguageProvider } from '../providers/language/language';
import {timer} from 'rxjs/observable/timer'
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { NativeMapContainerProvider } from '../providers/native-map-container/native-map-container';
@Component({
  templateUrl: 'app.html'
}) 

export class MyApp {
    public user: any;
    @ViewChild(Nav) nav: Nav;
    // public fireAuth:firebase.auth.Auth;
    
    //for the purpose of effective lazy loading of pages make your rootPage directed at homepage.
    public rootPage: any;
    showSplash = true;
    public userProfile: any;
    phone: any;
    pages: Array<{component: any, icon: string}>

    constructor(public zone: NgZone, public dg: LocationAccuracy, public set: SettingsProvider, public cMap: NativeMapContainerProvider, public lp: LanguageProvider, public modalCtrl: ModalController,  public loadingCtrl: LoadingController, private One: OneSignal, public ph: ProfileProvider, public auth: AuthProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    //Initialize
    this.initializeApp();
    
    this.pages = [
      //Add pages for sidemenu                                                                                           
      {  component: 'PaymentPage', icon: "ios-card" },
      {  component: 'HistoryPage', icon: "ios-clock" },
      {  component: 'SupportPage', icon: "ios-chatbubbles" },
      {  component: 'SettingsPage', icon: "ios-settings" },
      {  component: 'PromoPage', icon: "ios-cash" },
      {  component: 'ReferridePage', icon: "ios-car" },
    ];
  

  }




  initializeApp(){
    ///initialize onesignal notification here
    this.platform.ready().then(() => {
      this.dg.canRequest().then((canRequest: boolean) => {

        if(canRequest) {
          // the accuracy option will be ignored by iOS
          this.dg.request(this.dg.REQUEST_PRIORITY_HIGH_ACCURACY).then(
            () => console.log('Request successful'),
            error => console.log('Error requesting location permissions', error)
          );
        }
      
      });
      //this.One.setLogLevel({logLevel: 4, visualLevel: 4})
     //Replace with your app id and google cloud messaging id from https://onesignal.com 
      this.One.startInit(this.set.OnesignalAppID, this.set.CloudID);
      this.One.inFocusDisplaying(this.One.OSInFocusDisplayOption.Notification);
      this.One.setSubscription(true);
      this.One.endInit();   
     // console.log(this.ph.user.photoURL)
      // #AARRGGBB where AA is an alpha value
      

      if (this.platform.is('android')) {
      	this.statusBar.backgroundColorByHexString("#33000000");
        }else{
          this.statusBar.styleDefault();
          //statusBar.backgroundColorByHexString('#000000');
        }
     this.splashScreen.hide();
     let h = timer(4000).subscribe(()=> 
   // if (this.ph.loadingState){
      this.rootPage = 'HomePage'
    //};
   )
      
    // }
    });
  }

  
    openPage(page) {
      //open side menu pages on click
      this.platform.registerBackButtonAction(()=>this.nav.popToRoot());
      this.nav.push(page);
    }


    OnPromo(){
      let modal = this.modalCtrl.create('PromoPage');
      modal.onDidDismiss(data => {
         
      })
    }

    gotoProfile() {
      //open top menu from side bar menu
      this.nav.push('ProfilePage');
      this.platform.registerBackButtonAction(()=>this.nav.popToRoot());
    }


    gotoAbout() {
      //open top menu from side bar menu
      this.nav.push('AboutPage');
      this.platform.registerBackButtonAction(()=>this.nav.popToRoot());
    }

  }