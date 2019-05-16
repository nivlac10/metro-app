import { Component } from '@angular/core';
import {  NavParams, LoadingController, Loading,
  AlertController, NavController, Platform  } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { IonicPage } from 'ionic-angular';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { EventProvider } from '../../providers/event/event';
import { LanguageProvider } from '../../providers/language/language';
import { SettingsProvider } from '../../providers/settings/settings';
import { ProfileProvider } from '../../providers/profile/profile';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the ReferridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-referride',
  templateUrl: 'referride.html',
})
export class ReferridePage {
  randomCode: any = 'Getting id...';
  message: string = null;
  file: string = null;
  link: string = null;
  subject: string = null;
  constructor(public ph: ProfileProvider, public share : SocialSharing, public lp: LanguageProvider, public pop: PopUpProvider, public eProvider: EventProvider, public platform: Platform, public nav: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, 
  public alertCtrl: AlertController,   public settings: SettingsProvider,
  public formBuilder: FormBuilder) {

    this.pop.presentLoader('Getting referal Earnings')
    this.ph.getUserProfile().on('value', userProfileSnapshot => {
      if (userProfileSnapshot.val())
        this.randomCode = userProfileSnapshot.val().idForRide
       this.pop.hideLoader()
     // alert(this.randomCode.replace(/[^A-Z,0-9]/gi, "").length);
    })

  }

  ionViewDidEnter() {
    this.message = 'Use ' + this.randomCode + ' as referal code to Register in  ' + this.settings.appName

  }

  
  FaceShare(){
    this.share.share(this.message, this.subject, this.file, this.link).then(()=>{
       
    }).catch(()=> {
     
    })
   }

}
