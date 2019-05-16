import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, ModalController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { ProfileProvider } from '../../providers/profile/profile';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { SettingsProvider } from '../../providers/settings/settings';
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
  selector: 'page-booklater',
  templateUrl: 'booklater.html',
})
export class BooklaterPage {
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
  Lang: any;
  toppings: string = 'London Stansted Airport';
  public  service : any = new google.maps.DistanceMatrixService();
  constructor(public navCtrl: NavController, public settings: SettingsProvider, public navParams: NavParams, public lp: LanguageProvider, public alertCtrl: AlertController, public platform: Platform, public ph: ProfileProvider, public dProvider: DirectionserviceProvider, public cMap: NativeMapContainerProvider, public gCode: GeocoderProvider, public One: OneSignal, public pop: PopUpProvider, public eventProvider: EventProvider, private modalCtrl: ModalController) {
        this.Lang = this.lp.translate();
        //this.pop.showPimp(this.cMap.lat);
        this.settings.appCountryCode = 'UK'
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
  
      this.currentYear = new Date().getFullYear();
      this.currentMonth = new Date().getUTCMonth() + 1;
      this.currentDay = new Date().getUTCDate();
  this.pop.presentLoader('');
  this.ph.getWebAdminProfile().on('value', userProfileSnapshot => {
    let admin = userProfileSnapshot.val();
    this.dProvider.fare = admin.price;
    this.dProvider.pricePerKm = admin.perkm;
    this.pop.hideLoader()
   })

   if (!this.platform.is('cordova')){
    this.id = '3456789098765456733'
   this.ph.getScheduledProfile(this.id).on('value', userProfileSnapshot => {
    this.scheduleInfo = userProfileSnapshot.val();
    if (this.scheduleInfo != null){
    let today = new Date()
    let future = new Date(this.scheduleInfo.Client_Date)
    console.log(future)
    this.dataTime = this.calcDate(today, future)
    console.log(this.dataTime)
    }
 this.ph.getScheduledProfile(this.id).off('value')
   })
   }else{
    this.One.getIds().then(id=>{
      this.userID = id.userId
  
      this.ph.getScheduledProfile(this.userID).on('value', userProfileSnapshot => {
        this.scheduleInfo = userProfileSnapshot.val();
        if (this.scheduleInfo != null){
         // this.pop.showPimp('id is not null')
        let today = new Date()
        let future = new Date(this.scheduleInfo.Client_Date)
        console.log(future)
        this.dataTime = this.calcDate(today, future)
        console.log(this.dataTime)
      }
     this.ph.getScheduledProfile(this.id).off('value')
       })
      })
    
   }


  }

  ionViewDidEnter() {
    //this.pop.presentLoader('Retrieving all items..')
    this.eventProvider.getScheduledList().on('value', snapshot => {
      this.eventList = [];
      ///this.pop.hideLoader()
      snapshot.forEach( snap => {
        this.eventList.push({
          id: snap.key,
          date: snap.val().TimeandDate,
        });
        return false
      });

      this.eventProvider.getScheduledList().off('value')
    });
    
  }




  calcDate(date1, date2) {
    
        var diff = Math.floor(date2.getTime() - date1.getTime());
        var day = 1000 * 60 * 60 * 24;
    
        var days = Math.floor(diff/day);
        var months = Math.floor(days/31);
      //  var years = Math.floor(months/12);
    
       // console.log(days)
    
        var message = date2.toDateString()
        // message += " was "
        // message += days + " days " 
        // message += months + " months "
        // message += years + " years ago \n"
    
        return message
        }
    


  Chosen(e){
    if (this.currentYear <= e.year){
      console.log(this.userPos, this.userDes)
      if (this.userPos != null && this.userDes != null){
            console.log(e)
          let date = []
          let time = []
          date.push(e.year, e.month, e.day)
          time.push(e.hour, e.minute)
          console.log(date);
            this.calcScheduleRoute(this.userPos, this.userDes, this.destination, this.toppings, date, time);
            }else{
              this.pop.showPimp(this.Lang[0].addDest)
            }
    }else{
      this.pop.showPimp(this.Lang[0].addTime)
      console.log(this.currentMonth, this.currentDay)
    }
 
  }



  calcScheduleRoute(start, stop, destinationName, locationName, date, time) {
    this.pop.presentLoader('')
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
       //   let fareTime = Math.floor(response.rows[0].elements[1].duration.value/60) * 5.5
        //  let price = Math.floor(response.rows[0].elements[1].distance.value/1000) * this.dProvider.pricePerKm + this.dProvider.fare + fareTime;
          console.log(this.dProvider.pricePerKm ,this.dProvider.fare)
         // document.getElementById("cash").innerText = price;
          var image = this.ph.user.photoURL;
          var name = this.ph.user.displayName;
          var edited_name = this.ph.name;
          var pay = this.ph.paymentType;
          this.pop.calculateBtn = false;
      
          if (image == null){
           if (this.ph.pic == null){
            image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png'
           }else{
             image = this.ph.pic
           }
           
          }
            
          if (name == null){
            if (edited_name != null){
              name = edited_name
            }else{
              name = this.ph.user.email
            }
          }
      
          if (pay == null){
            pay = 1
          }

          if (this.lat == null && this.lng == null){
            this.lat = this.navParams.get('lat'); 
            this.lng = this.navParams.get('lng');
          }


          if (!this.platform.is('cordova')){
            let id = '3456789098765456733'
            this.ph.getUserProfile().on('value', userProfileSnapshot => {
              let ratingText = userProfileSnapshot.val().ratingtext;
              let ratingValue = userProfileSnapshot.val().rating;
              if (ratingText == null && ratingValue == null){
                ratingText = this.Lang[0].notrate
                ratingValue = 0
               }

               this.ph.getUserProfile().off('value')
            console.log( name, image, this.lat, this.lng, this.toppings, pay, this.destination, this.ph.phone, date, ratingText, ratingValue, time)
            this.eventProvider.CreateLondonBook( name, image, this.lat, this.lng, this.toppings, pay, this.destination, this.ph.phone, date, id ,ratingText, ratingValue, time).then( s=> {
              this.pop.hideLoader();
              this.pop.showPimp('Your ride has been scheduled successfully.')
            }) 

          })
          }else{ 
            this.One.getIds().then(id=>{
              this.userID = id.userId
        
            this.ph.getUserProfile().on('value', userProfileSnapshot => {
              let ratingText = userProfileSnapshot.val().ratingtext;
              let ratingValue = userProfileSnapshot.val().rating;
              if (ratingText == null && ratingValue == null){
               ratingText = this.Lang[0].notrate
               ratingValue = 0
              }
              this.lat = this.navParams.get('lat'); 
              this.lng = this.navParams.get('lng');
              this.ph.getUserProfile().off('value')
              // let kush = []
              // kush.push(price, name, image, this.lat, this.lng, this.location, pay, this.destination, this.ph.phone, date, this.userID ,ratingText, ratingValue, time)
              // this.pop.showPimp(kush) 
          console.log( name, image, this.lat, this.lng, this.toppings, pay, this.destination, this.ph.phone, date)
          this.eventProvider.CreateLondonBook( name, image, this.lat, this.lng, this.toppings, pay, this.destination, this.ph.phone, date, this.userID ,ratingText, ratingValue, time).then( s=> {
            this.pop.hideLoader();
            this.pop.showPimp(this.Lang[0].sucsch)
          }) 

        })
        
        })

      }
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
  //  this.location = data
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
       
      }
    });
    
  }
  });
  modal.present();
}




CancelRide(){
  const alert = this.alertCtrl.create({
    message: this.Lang[0].error,
    buttons: [
      {
        text: this.Lang[0].reject,
      },
      {
        text: this.Lang[0].accept,
        handler: data => {
         this.remove()
        }
      }
    ]
  });
  alert.present();
}

remove(){
  this.One.getIds().then(id=>{
    this.userID = id.userId
  this.ph.getScheduledProfile(this.userID).remove().then(s=>{
    this.pop.showPimp(this.Lang[0].sucSchw)
    this.hasBooked = false;
  })
})
}


}
