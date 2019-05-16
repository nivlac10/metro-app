import { Component } from '@angular/core';
import {  NavParams, LoadingController, Loading,
  AlertController, NavController, Platform  } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HTTP } from '@ionic-native/http';
import { IonicPage } from 'ionic-angular';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { EventProvider } from '../../providers/event/event';
import { LanguageProvider } from '../../providers/language/language';
import { SettingsProvider } from '../../providers/settings/settings';
import { ProfileProvider } from '../../providers/profile/profile';
import { SocialSharing } from '@ionic-native/social-sharing';
@IonicPage()
/**
 * Generated class for the PromoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-promo',
  templateUrl: 'promo.html',
})
export class PromoPage {
  randomCode: any = 'Getting id...'
  public cardpaymentForm: FormGroup;
  loading: Loading;
  earnings: any = 0;
  public eventList: Array<any>;
  message: string = null;
  file: string = null;
  link: string = null;
  subject: string = null;
  constructor(public ph: ProfileProvider, public http: HTTP, public share : SocialSharing, public lp: LanguageProvider, public pop: PopUpProvider, public eProvider: EventProvider, public platform: Platform, public nav: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController,   public settings: SettingsProvider,
    public formBuilder: FormBuilder) {
     this.pop.presentLoader('Getting referal Earnings')
      this.ph.getUserProfile().on('value', userProfileSnapshot => {
        if (userProfileSnapshot.val()){
          this.earnings = userProfileSnapshot.val().refEarning
          this.randomCode = userProfileSnapshot.val().id
        }else{
          this.earnings = 0
        }
         this.pop.hideLoader()
       // alert(this.randomCode.replace(/[^A-Z,0-9]/gi, "").length);
      })

      
      this.cardpaymentForm = formBuilder.group({
        card: ['', Validators.compose([Validators.maxLength(4), Validators.required])],
      });
  }

  ionViewDidEnter() {
    this.message = 'Use ' + this.randomCode + ' as referal code to Register in Ajetaxi ';

   }



   gotoEarning(){
     this.nav.push('EarningsPage');
   }


   FaceShare(){
    this.share.share(this.message, this.subject, this.file, this.link).then(()=>{
       
    }).catch(()=> {
     
    })
   }

  
   Request(){
    this.send('A user wants to request: ' + this.ph.phone, 'Trace the driver information to the admin', this.settings.support_email)
    this.pop.showPimp('You Have Made A Request And Your Payment Is Processing...')
  }


  send(subject: string, message: string, email: string) {
   
   var url = "https://api.mailgun.net/v3/" + this.settings.mailGUrl + "/messages";
   let body = {
     "from": email,
     "to": this.settings.companyMail,
     "subject": subject,
     "html": "<html><body>First Name: " + this.settings.appName + "<br>" + "Last Name: " + this.settings.appLink + "<br>" + "Email: " + email + "<br>" + "Subject: " + subject + "<br><br>" + "Message: " + message + "</body></html>"
   }
   let headers = {
     "Authorization": "Basic " + this.settings.mailGKey,
     "Content-Type": "application/x-www-form-urlencoded"

   };

   //this.pop.showLoader('')
  
   this.http.post(url, body, headers).then(data => {
    
     console.log("SUCCESS -> " + JSON.stringify(data));
     
   }).catch(error=>{
     console.log(error)
   })
}
 

}
