import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { LanguageProvider } from '../../providers/language/language';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the RatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {
  @ViewChild('myInput') myInput: ElementRef;
  public rateNumber: any;
  todo = {
    description: ' '
  }
  constructor(public navCtrl: NavController, public lp: LanguageProvider,  public viewCtrl: ViewController, public storage: Storage, public pop: PopUpProvider, public navParams: NavParams, public prof: ProfileProvider) {
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
   }

  onModelChange($event){
   this.rateNumber = $event
   this.pop.presentLoader('')

   setTimeout(() => {
     this.pop.hideLoader();
   }, 1000);
  }


logForm() {
  console.log(this.todo)
  if (this.rateNumber != null) {
    var value = this.navParams.get('eventId')
    console.log(this.rateNumber)
    // this.todo.description = 'No description'
    this.prof.RateDriver(value, this.rateNumber, this.todo.description, true).then(suc =>{
    
      this.navCtrl.pop();
      });
 
  }else{
    this.pop.showPimp(this.lp.translate()[0].alertcar)}
}

}
