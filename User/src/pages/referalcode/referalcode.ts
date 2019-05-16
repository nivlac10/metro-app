import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { ProfileProvider } from '../../providers/profile/profile';
import { LanguageProvider } from '../../providers/language/language';
/**
 * Generated class for the ReferalcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-referalcode',
  templateUrl: 'referalcode.html',
})
export class ReferalcodePage {
  userName: any;
  constructor(public navCtrl: NavController, public lp: LanguageProvider, public ph: ProfileProvider, private pop: PopUpProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferalcodePage');
  }


  signIn(userName) { //Step 2 - Pass the mobile number for verific
    if (this.userName != null){
       this.pop.presentLoader('');
  
       this.AddCode(userName);
     
      
    }
    }



    AddCode(code): void{
      // if (this.ph.card != null){
      this.SearchForSharingIDs(code)
    //   }else{
       //  this.pop.presentToast(this.lp.translate()[0].cardf)
    ///   }
     }
   
   
   
   
     SearchForSharingIDs(promoID){
      
       console.log('SharingID search called');
      // this.pop.presentLoader('');
       this.ph.getAllSharingPromoID(promoID).on('value', SharingIDShot => {
        if (SharingIDShot.val()){
          let SharingID = SharingIDShot.val().id[0];

          this.pop.hideLoader();
            console.log(SharingID);
         // SharingID
           console.log('SharingID found', SharingID)
           //Get user profile with card details and use them as payment means
           this.ph.getUserIDProfile(SharingID).on('value', userProfileSnapshot => {
            if (userProfileSnapshot.val() != null){
            console.log(userProfileSnapshot.val())

            if (userProfileSnapshot.val().Card_Number != null){
              this.ph.card = userProfileSnapshot.val().Card_Number
               this.ph.month = userProfileSnapshot.val().Card_Month
                this.ph.cvc = userProfileSnapshot.val().Card_Cvc
                this.ph.year = userProfileSnapshot.val().Card_Year
                this.navCtrl.pop();
                this.pop.showPimp('Now Using ' + userProfileSnapshot.val().name + '`s Card.')
            }else{
              this.pop.presentToast('The User Has No Card.')
            }

            }else{
            this.pop.presentToast('Id Not Found. Please Try Another')
            }
             //this.pop.hideLoader();
           // alert(this.randomCode.replace(/[^A-Z,0-9]/gi, "").length);
          })
          }else{
          this.pop.presentToast('Id Not Found. Please Try Another')
           console.log('rtyuiytrfghj')
           this.pop.hideLoader();
          }
           
         })
   
     }

}
