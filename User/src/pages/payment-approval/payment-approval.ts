import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';
/**
 * Generated class for the PaymentApprovalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-approval',
  templateUrl: 'payment-approval.html',
})
export class PaymentApprovalPage {
  from: string = this.navParams.get('from');
  to: string = this.navParams.get('to');
  charge: string = this.navParams.get('charge');
  info: any = this.navParams.get('info');
  constructor(public navCtrl: NavController, public lp: LanguageProvider, public settings: SettingsProvider, public viewCtrl: ViewController, public pop: PopUpProvider, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentApprovalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
