import {Component, NgZone} from '@angular/core';
import {ViewController, NavController} from 'ionic-angular';
declare let google;
import { ProfileProvider } from '../../providers/profile/profile';
import { SettingsProvider } from '../../providers/settings/settings';
import { IonicPage } from 'ionic-angular';
import { LanguageProvider } from '../../providers/language/language';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
@IonicPage()
@Component({
  templateUrl: 'autocomplete.html'
})

export class AutocompletePage {
  autocompleteItems;
  autocomplete;
  home: any;
  work: any;
  Lang: any;
  service = new google.maps.places.AutocompleteService();

  constructor (public viewCtrl: ViewController, public pop: PopUpProvider, public lp: LanguageProvider, public settings: SettingsProvider,  private navCtrl: NavController, private ph: ProfileProvider, private zone: NgZone) {
    this.Lang = this.lp.translate();
    this.autocompleteItems = []
    //listen for home and work button
    ph.getUserProfile().on('value', userProfileSnapshot => {
      this.home = userProfileSnapshot.val().Home;
      this.work = userProfileSnapshot.val().Work;
    });
    this.autocomplete = {
      query: ''
    };
  }


  gotoSetting(){
    this.navCtrl.push('ProfilePage')
  }

  chooseHome(){
    if (this.home == null){
    this.viewCtrl.dismiss();
    this.pop.presentToast(this.lp.translate()[0].home)
    }else{
    this.viewCtrl.dismiss(this.home);
    }
  }

  chooseWork(){
    if (this.work == null){
    this.viewCtrl.dismiss();
    this.pop.presentToast(this.lp.translate()[0].home)
    }else{
    this.viewCtrl.dismiss(this.work);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
    this.ph.isHome = true
  }
  
  updateSearch() {
    this.ph.isHome = false
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: {country: ['NG']} }, (predictions, status) => {
      me.autocompleteItems = []; 
      console.log(predictions, status);
      me.zone.run( () => {
        if (predictions != null)
        predictions.forEach( (prediction) => {
          me.autocompleteItems.push(prediction.description);
        });
      });
    });
  }
}