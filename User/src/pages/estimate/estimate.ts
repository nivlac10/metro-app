import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, ModalController, ActionSheetController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { ProfileProvider } from '../../providers/profile/profile';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { OneSignal} from '@ionic-native/onesignal';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { NativeMapContainerProvider } from '../../providers/native-map-container/native-map-container';
import { DirectionserviceProvider } from '../../providers/directionservice/directionservice';
import { Platform } from 'ionic-angular';
import { LanguageProvider } from '../../providers/language/language';
declare var google;
/**
 * Generated class for the BooklaterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estimate',
  templateUrl: 'estimate.html',
})
export class EstimatePage {
  public eventList: Array<any>;
  public location: any;
  public username: any;
  public destination: any;
  public userPos: any;
  public userDes: any;
  public lat: any;
  public currentYear: any;
  public lng: any;
  public dataTime: any;
  public scheduleInfo: any;
  public hasBooked: boolean = false;
  public geocoder: any = new google.maps.Geocoder;
  public locationName: any;
  userID: any;
  id: any;
  currentMonth: any;
  currentDay: any;
  public  service : any = new google.maps.DistanceMatrixService();
  constructor(public navCtrl: NavController, public lp: LanguageProvider, public navParams: NavParams, public alertCtrl: AlertController, public platform: Platform, public ph: ProfileProvider, public dProvider: DirectionserviceProvider, public cMap: NativeMapContainerProvider, public gCode: GeocoderProvider, public One: OneSignal,  public pop: PopUpProvider, public eventProvider: EventProvider, private modalCtrl: ModalController) {
   
        //this.pop.showPimp(this.cMap.lat);
        this.lat = this.navParams.get('lat');
        this.lng = this.navParams.get('lng');
        this.userPos = new google.maps.LatLng(this.lat, this.lng)
         // this.pop.presentLoader('Getting location...')
          let latlng = {lat: parseFloat(this.lat), lng: parseFloat(this.lng)};
          this.geocoder.geocode({'location': latlng}, (results, status) => {
            if (status === 'OK') {
                //document.getElementById("position").innerText = results[0].formatted_address;
                this.locationName = results[0].formatted_address;
               //  this.pop.hideLoader()
               this.location = this.locationName;
              } else {
               // this.pop.showPimp(results[0]);
              }
        
          
        })
      // }
  // this.pop.presentLoader('Retrieving all...');
  this.ph.getWebAdminProfile().on('value', userProfileSnapshot => {
    let admin = userProfileSnapshot.val();
    this.dProvider.fare = admin.price;
    this.dProvider.pricePerKm = admin.perkm;
    // this.pop.hideLoader()
   })

  }


  Calculate(){
      if (this.userPos != null && this.userDes != null){
            this.calcScheduleRoute(this.userPos, this.userDes, this.destination, this.location);
            }else{
              this.pop.showPimp('Please Add your Destination and Location')
            }
 
  }



  calcScheduleRoute(start, stop, destinationName, locationName) {
    this.pop.presentLoader('Processing....')
    // let kush = []
    // kush.push(start, stop, destinationName, locationName, date)
    // this.pop.showPimp(kush) 
    this.service.getDistanceMatrix(
      {
        origins: [start, locationName],
        destinations: [destinationName, stop],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false, 
      }, (response, status) => {
        if (status == 'OK'){
          let fareTime = Math.floor(response.rows[0].elements[1].duration.value/60) * 5.5
          let price = Math.floor(response.rows[0].elements[1].distance.value/1000) * this.dProvider.pricePerKm + this.dProvider.fare + fareTime;
          console.log(this.dProvider.pricePerKm ,this.dProvider.fare)
           document.getElementById("cash").innerText = price;
         this.pop.hideLoader()
           console.log(price)
          }


        
      
      })

    
    

    }

  






showAddressModal (selectedBar) {
  let modal = this.modalCtrl.create('AutocompletePage');
  modal.onDidDismiss(data => {
    //Open the address modal on location bar click to change location
    console.log(data)
  if (selectedBar == 1 && data != null){
    document.getElementById("position").innerText = data;
    this.location = data
    this.gCode.geocoder.geocode( { 'address': data}, (results, status) => {
      if (status == 'OK') {
        var position = results[0].geometry.location
        this.userPos = new google.maps.LatLng(position.lat(), position.lng())
        this.lat = position.lat()
        this.lng = position.lng()
      }
    });
  }
   //Open the address modal on destination bar click to change destination
  if (selectedBar == 2 && data != null){
    document.getElementById("whereto").innerText = data;
    this.destination = data
    ///After data input, check to see if user selected to add a destination or to calculate distance.
    this.gCode.geocoder.geocode( { 'address': data}, (results, status) => {
      if (status == 'OK') {
        var position = results[0].geometry.location
        this.userDes = new google.maps.LatLng(position.lat(), position.lng())
       // let date = 'fhdg'
       this.Calculate()
      }
    });
    
  }
  });
  modal.present();
}




}
