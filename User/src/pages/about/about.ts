import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicPage } from 'ionic-angular';
import { BrowserTab} from '@ionic-native/browser-tab';
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';
@IonicPage()

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
 Lang: any;
  constructor(public iab: InAppBrowser, public lp: LanguageProvider, public settings: SettingsProvider, public browsertab: BrowserTab, public navCtrl: NavController, public navParams: NavParams) {
    this.Lang = this.lp.translate();
  }

  gotoSite(){
 //this is the function that contains the link to your apps website
    this.browsertab.openUrl(this.settings.appLink).then(suc=>{
      console.log('hurray!! it works')
    })
  }

  gotoSite2(){
    //this is the function that contains the link to the  career section of your website
    this.browsertab.openUrl(this.settings.appCareer)
  }

  gotoSite3(){
    //this is the function that contains the FAQ links
    this.browsertab.openUrl(this.settings.appFaq)
  }

  gotoSite4(){
//this is the function that contains the link to your Terms and Condition
    this.browsertab.openUrl(this.settings.appTerms)
  }


  gotoSite9(){
    //this is the function that contains the link to your facebook
    this.browsertab.openUrl(this.settings.appFB)
  }

  gotoSite10(){
    //this is the function that contains the link to your Instagram 
    this.browsertab.openUrl(this.settings.appinsta)
  }

}
