import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading, NavParams } from 'ionic-angular';
import { LanguageProvider } from '../../providers/language/language';
import { ProfileProvider } from '../../providers/profile/profile';
// import { RatePage } from '../../pages/rate/rate';
/**
 * Generated class for the StartupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-startup',
  templateUrl: 'startup.html',
})
export class StartupPage {

  constructor(public navCtrl: NavController, public ph: ProfileProvider, public lp: LanguageProvider, public load: LoadingController,  public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.startUp()
  }

   startUp(){
    console.log('ionViewDidLoad StartupPage');
    let ssl = setTimeout(() => {
      console.log(this.ph.hasLoaded)
      if (this.ph.hasLoaded){
       
      if (this.ph.login){
       this.navCtrl.setRoot('LoginPage')
      }else if (this.ph.kit){
       this.navCtrl.setRoot('AccountkitPage')
      }else{
       this.navCtrl.pop()
      }
     }else{
      clearTimeout(ssl)
      
        this.startUp();
     
     }
    }, 500);
   }

}
