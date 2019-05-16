import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { IonicPage } from 'ionic-angular';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  public eventList: Array<any>;

  constructor(public navCtrl: NavController, public lp: LanguageProvider, public settings: SettingsProvider, public pop: PopUpProvider, public load: LoadingController, public eventProvider: EventProvider) {}

  ionViewDidEnter() {
   this.pop.presentLoader('')
    this.eventProvider.getEventList().on('value', snapshot => {
      this.eventList = [];
    this.pop.hideLoader()
      snapshot.forEach( snap => {
        this.eventList.push({
          id: snap.key,
          name: snap.val().name,
          price: snap.val().price,
          date: snap.val().date,
          location: snap.val().location,
          destination: snap.val().destination
        });
        return false
      });
    });


    
  }

  goToEventDetail(eventId){
  this.navCtrl.push('HistoryDetailsPage', { 'eventId': eventId });
  }


}