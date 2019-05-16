import { Component } from '@angular/core';
import { IonicPage, NavParams, AlertController, NavController, Platform } from 'ionic-angular';
import firebase from 'firebase/app';
import {Firebase} from '@ionic-native/firebase';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { ProfileProvider } from '../../providers/profile/profile';
import { LanguageProvider } from '../../providers/language/language';
import { SettingsProvider } from '../../providers/settings/settings';
@IonicPage()
@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html',
})
export class PhonePage {
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  verificationId: any = '';
  phoneNumber: any = '';
  userName: any = '';
  email: any;
  countryCode: any = '';
  result: any;
  userBank: any;
  userAccount: any;
  userCode: any;
  public Debugging: boolean = false;
 // toppings: number = 994;
  constructor(public navCtrl: NavController, public set: SettingsProvider, public lp: LanguageProvider, public platform: Platform, public ph: ProfileProvider, private pop: PopUpProvider, public navParams: NavParams, public firebase: Firebase) {
  }
  
  

  signIn(userName: string, userCode:any, userBank, userAccount) { 
    
    if (this.set.refer){
    //Step 2 - Pass the mobile number for verific
    if (this.userName != null && this.userBank != null && this.userAccount != null){
   this.pop.presentLoader('');
   // let number = this.phoneNumber;
    this.ph.updateName(this.userName).then(()=>{
      this.ph.updateGUID(this.guid()).then(()=>{
        this.ph.UpdateBank(this.userBank, this.userAccount).then(()=>{
     this.ph.updateRideID(this.guider(10)).then(()=>{
     if (this.userCode == null){
      this.pop.hideLoader();
       this.navCtrl.setRoot('HomePage');
     }else{
       this.AddCode(userCode);
     }
      })
         })
        })

      })
    }

  }else{

    
    if (this.userName){
      this.pop.presentLoader('');
      // let number = this.phoneNumber;
       this.ph.updateName(this.userName).then(()=>{
         this.ph.updateGUID(this.guid()).then(()=>{
        
        this.ph.updateRideID(this.guider(10)).then(()=>{
       
         this.pop.hideLoader();
          this.navCtrl.setRoot('HomePage');
      
         })
            
           })
   
         })
       }
  }
    }



    AddCode(code): void{
      // if (this.ph.card != null){
      this.SearchForSharingIDs(code);
    //   }else{
       //  this.pop.presentToast(this.lp.translate()[0].cardf)
    ///   }
     }
   
   
   
   
     SearchForSharingIDs(promoID){
      
       console.log('SharingID search called')
      // this.pop.presentLoader('');
       this.ph.getAllSharingID(promoID).on('value', SharingIDShot => {
         if (SharingIDShot.val()){
          let SharingID = SharingIDShot.val().id[0];

          this.pop.hideLoader();
        //  console.log(Sharing);
         // SharingID
      
           console.log('SharingID found', SharingID)
            this.ph.UpdateReferal(SharingID, promoID).then(()=>{
              this.navCtrl.setRoot('HomePage');
              this.ph.getAllSharingID(promoID).off('value')
            })
          }else{
            this.pop.hideLoader();
           console.log('rtyuiytrfghj')
           this.pop.presentToast('Id Not Found. Please Try Another')
          }
           
         })
   
     }



     


  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  guid() {
    return this.s4();
  }

  


  guider(r) {
    return this.s5(r);
  }

  s5(r) {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(r)
      .substring(1);
  }


  
  
  
  }