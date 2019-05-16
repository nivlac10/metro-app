import { Component, ViewChild, NgZone } from '@angular/core';
import { Platform, Nav, LoadingController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { ProfileProvider } from '../providers/profile/profile';
import { OneSignal} from '@ionic-native/onesignal';
import { LanguageProvider } from '../providers/language/language';
import {timer} from 'rxjs/observable/timer'
import { SettingsProvider } from '../providers/settings/settings';
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

    constructor(public zone: NgZone, public set: SettingsProvider, public lp: LanguageProvider, public modalCtrl: ModalController,  public loadingCtrl: LoadingController, private One: OneSignal, public ph: ProfileProvider, public auth: AuthProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    //Initialize
    this.initializeApp();
    
    this.pages = [
      //Add pages for sidemenu
      
      {  component: 'HistoryPage', icon: "ios-card" },
      {  component: 'ProfilePage', icon: "ios-clock" },
      {  component: 'SupportPage', icon: "ios-chatbubbles" },
      {  component: 'SettingsPage', icon: "ios-settings" },
      {  component: 'SchedulePage', icon: "ios-timer" },
      {  component: 'PromoPage', icon: "ios-cash" },
      {  component: 'WalletPage', icon: "ios-briefcase" },
     
    ];

    

  }




  initializeApp(){
    ///initialize onesignal notification here
    this.platform.ready().then(() => {
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
          this.statusBar.styleDefault()
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

    // GotoSChedule(page){
    //   if (this.cMap.lat != null)
    //   this.nav.push(page, {lat:this.cMap.lat, lng:this.cMap.lng});
    // }


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