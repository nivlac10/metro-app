import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {timer} from 'rxjs/observable/timer'
import { ProfileProvider } from '../../providers/profile/profile';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html',
})
export class PhonePage {

  constructor(public navCtrl: NavController, public pop: PopUpProvider, public ph: ProfileProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    // timer(500).subscribe(()=> 
   this.login()
   //this.pop.showLoader('')
   // )
  }

  login() {
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
	    defaultCountryCode: "MY",
	    facebookNotificationsEnabled: true
    }, (successdata) => {
      (<any>window).AccountKitPlugin.getAccount((user) => {
        this.pop.showLoader('')
      //  alert(user.phoneNumber)
        //alert(user.phoneNumber)
        if (user.phoneNumber)
        this.ph.UpdateNumber(user.phoneNumber).then(()=>{
          this.ph.updateGUID(this.guid()).then(()=>{
            //console.log(this.guid())
            this.navCtrl.setRoot('MoreInfoPage');
            this.pop.hideLoader()
          })
         
      
        })
    
      })
      }, (err) => {
       // alert(err);
        this.login()
    })
  }



  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(9)
      .substring(1);
  }
  
  guid() {
    return this.s4();
  }

}