import { Component} from '@angular/core';
import { NavController, MenuController, ModalController, Platform, AlertController, LoadingController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { NativeMapContainerProvider } from '../../providers/native-map-container/native-map-container';
import { ProfileProvider } from '../../providers/profile/profile';
import { ActivityProvider } from '../../providers/activity/activity';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { DirectionserviceProvider } from '../../providers/directionservice/directionservice';
import { OnesignalProvider } from '../../providers/onesignal/onesignal';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { CallNumber } from '@ionic-native/call-number';
import { OneSignal} from '@ionic-native/onesignal';
import { AuthProvider } from '../../providers/auth/auth';
import { StripeProvider } from '../../providers/stripe/stripe';
import { PaystackProvider } from '../../providers/paystack/paystack';
import { LanguageProvider } from '../../providers/language/language';
// import { Geolocation } from '@ionic-native/geolocation';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
//  CameraPosition,
 // MarkerOptions,
 // Marker,
//  Geocoder,
  LatLngBounds,
  LatLng
 } from '@ionic-native/google-maps';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';
import { Vibration } from '@ionic-native/vibration';
import { IonicPage } from 'ionic-angular';
import { RatePage } from '../../pages/rate/rate';
import { StatusBar } from '@ionic-native/status-bar';
import { BackgroundMode } from '@ionic-native/background-mode';
import { SettingsProvider } from '../../providers/settings/settings';
import { timer } from 'rxjs/observable/timer'
import { interval } from 'rxjs/observable/interval';
// import { Content } from 'ionic-angular';
declare var google;


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NativeMapContainerProvider, PaystackProvider, OneSignal, ProfileProvider, PopUpProvider, DirectionserviceProvider, OnesignalProvider, GeocoderProvider ],
})

export class HomePage {
  // @ViewChild(Content) content: Content;
  userProfile: any;
  public location;
  public plate;
  poolID: any
  public arrived: boolean = true;
  public carType;
  public myList: Array<any>;
  public name;
  public seat;
  public rating;
  public isRidesharing: boolean = false;
  public picture;
  public canClear: boolean = true;
  public loopTimes: number = -1;
  public pool_List: any =[];
  public userDestLat: any;
  public executivePercentage: any = 0.5;
  public tricyclePercentage: any = 20
  public userDestLng: any;
  public poolState: boolean = false;
  public newPrice: any;
  AllDrivers: any = [];
  

  canRidePool: boolean = false;
  public clearThis : boolean = true;
  public noRides: boolean = false;
  public waitingToLog: boolean = true;
  public number;
  public sharerID: any;
  closeDriver_ID: any;
  closeDriver_Lat: any;
  closeDriver_Lng: any;
  public canCancel: boolean = false;
  chosenormal: boolean = false;
  public canJoinPool: boolean = false;
  public canRequestPool: boolean = false;
  public poolAvailable: boolean = false;
  public hideTopbuttons: boolean = false;
  public canStopCheck: boolean = false;
  public firstPrice;
 public highPrice;
  public actualPrice;
  public canStop: boolean = false;
  public connect: boolean = false;
  public onGpsEnabled: boolean = true;
  public toggleMore: boolean = true;
  public toggleNav: boolean = true;
  public choseCar: boolean = false;
  public bookStarted: boolean = false;
  public currency: any;
  picked: boolean = true;
  public choseEconomy: boolean = false;
  public choseClassic: boolean = false;
  public appName: any;
  public hasChecked: boolean = false;
  public paid_cash2: boolean = true;
  public review: any;
  destination_lat: any;
  destination_lng: any;
  public bookingState: boolean = false
  public hidelocator: boolean = false;
  public hasStarted: boolean = false;
  public shareRide: boolean = false;
  rechecking: boolean = false;
  ThisPool: boolean = false;
  public isPerKilo: boolean = false;
  isPool: boolean = true;
  public showShit: boolean = true;
  public connect_change : boolean = true
  public shareID: any;
  public picked_up : boolean = true
  public driver_picked : boolean = false
  public rideShare: boolean = false;
  public dropped : boolean = true
  public rated : boolean = true
  public deleted : boolean = true
  public done : boolean = true
  public hasRated : boolean = true
  public paid : boolean = true
  public poolPrice;
  hideNews: boolean = false;
  public paid_cash : boolean = true
  public not_ended : boolean = true
  public ended: boolean = true;
  canPool: boolean = false;
  userDestName: any;
  can: boolean = true;
  returningUser: boolean = false;
  started: boolean = false;
  public NotifyTimes: number = 0;
  timerBeforeNotify: number = 60000;
  timeTonotify: any;
  uid: any;
  hasNotified: boolean = true;
  isUser: any;
  referalPercentage: any = 3/100;
  home: any;
  referalID: any;
  cand: boolean = true;
  work: any;
  Myprice: any;
  called: boolean = true;
  hasDone: boolean = true;
  notification: boolean = false;
  driverLocationName: any;
  startedNavigation: boolean = false;
  destinationSetName: any;
  added: boolean = true;
  type: any = 'arrow-down';
  lat: any;
  showGps: boolean = false;
  canIncrease: boolean = false;
  Lang: any;
  cardnumber: any;
  hasCalled: boolean = true;
  referal:any;
  choseTricycle: boolean = false;
  public canShowBars: boolean = true;
  lng: any;
  price: any;
  news: any;
  public notify_ID: any;
  public geocoder: any = new google.maps.Geocoder;
  constructor(public storage: Storage, public stripe: StripeProvider, public lp: LanguageProvider, public authProvider: AuthProvider, public paystack: PaystackProvider, public One: OneSignal, public act: ActivityProvider, public settings: SettingsProvider, private backgroundMode: BackgroundMode, public statusBar: StatusBar, public loadingCtrl: LoadingController, private vibration: Vibration, public alert: AlertController,  public cMap: NativeMapContainerProvider, private call: CallNumber, public myGcode: GeocoderProvider, public dProvider: DirectionserviceProvider, public platform: Platform, public OneSignal: OnesignalProvider, public modalCtrl: ModalController, public menu: MenuController, public pop: PopUpProvider, public ph: ProfileProvider,  public navCtrl: NavController, public eventProvider: EventProvider) {
  //this.lp.translate() = this.lp.translate();
 
  
 }



ionViewDidEnter(){
  

  this.platform.ready().then(() => {
    if (!this.platform.is('cordova')){
      this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
  }else{
    if (!this.platform.is('browser')){
    this.One.getIds().then( success => {
      this.notify_ID = success.userId
    })
  }else{
    this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
  }
  }
  if (!this.cMap.selected_destination_bar)
  this.platform.registerBackButtonAction(()=>this.platform.exitApp());
  //this.storage.remove(`currentUserId`);
  })
 //this.storage.remove(`currentUserId`);
}




  ionViewDidLoad(){
    this.platform.ready().then(() => {
      if (!this.platform.is('cordova')){
        this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
        console.log('hereerdvdhjhfssfsfds')
    }else{
     
      this.One.getIds().then( success => {
        this.notify_ID = success.userId
      })

     

    }
   // //console.log(this.lp.translate())
   
    if (!this.platform.is('cordova')){
      this.cMap.hasShown = true
      this.cMap.lat = 5.4966964
      this.cMap.lng = 7.5297323
      this.myGcode.locationName = 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria'
    }


    //let has = false
    
       const unsubscribe =  firebase.auth().onAuthStateChanged((user) => {
    
       // alert(user)
      //Check of this is a user
      if (!user) {
       // this.ph.loadingState = true;
        //if this is not a user then show entrance scene and hide status bar
        this.navCtrl.setRoot('LoginPage');
       // this.statusBar.hide(); 
        this.ph.login = true;
      // //console.log(this.ph.loadingState)
       unsubscribe()
       
      }else{
        setTimeout(() => {
          this.checkConnection()
       }, 6000);
        unsubscribe()
        this.isUser = user
         let can = true;
         let fTime = setTimeout(() => {
               if (this.cMap.mapLoadComplete){
                
                 this.showGps = false;
               }else{
                 this.showGps = true;
               }
            }, 4000);


          

 
        //if user has a phone number then
        this.ph.getUserProfile().on('value', userProfileSnapshot => {
         // if (has){

          // console.log('dfegyuirotpiruywuieoigreiouyiytwuiouytuiyiughuigfuigrigryu')
           let userID = userProfileSnapshot.val().phoneNumber;
           this.ph.home = userProfileSnapshot.val().Home;
           this.ph.work = userProfileSnapshot.val().Work;
           let username = userProfileSnapshot.val().name;

           if (userProfileSnapshot.val().referal){
           this.referal = userProfileSnapshot.val().referal;
           this.referalID = userProfileSnapshot.val().referalID
           }

            // console.log(this.referal);
          if (userID == null){
           // this.ph.loadingState = true;
          this.navCtrl.setRoot('AccountkitPage')
          //console.log(this.ph.loadingState)
          this.ph.kit = true
          this.ph.getUserProfile().off('value')
          }else{
            if (username == null){
              this.navCtrl.setRoot('PhonePage')
              this.ph.getUserProfile().off('value')
            }else{

           
          if (this.hasDone){
            this.showLoadRefresh();
            this.cMap.loadMap();
            this.WaitForGeolocation();
            this.hasDone = false;
          }
            //this.ph.loadingState = true;
            //console.log(this.ph.loadingState)
            if (userProfileSnapshot.val().blocked == true){
              this.pop.alertClosure('You Have Been Suspended.');
             // this.isBlocked = true
             }

             if (this.ph.card != null){
              var mainStr = this.ph.card || '2345678765445678',
                vis = mainStr.slice(-4),
                countNum = '';
            
                for(var i = (mainStr.length)-4; i>0; i--){
                  countNum += '*';
                }
                this.cardnumber = countNum+vis;
              }


             if (userProfileSnapshot.val().mainID != null){
               console.log('main id is not null')
             // this.requestRideSharing();
              this.shareID = userProfileSnapshot.val().mainID;
            }


             if (userProfileSnapshot.val().shareID != null && this.cand){
              console.log('main id is not null')
            //  this.StartListeningForShare();
            if (this.cand == true) {
              this.cand = false; 
              this.showAlrt()
              this.uid = userProfileSnapshot.val().shareID
            }
           
             }
            }
         
          }

          
         
     //   }
        })
         
       //if user then show the status bar 
       // this.statusBar.show();

        //For Chrome Testing.....
          if (!this.platform.is('cordova')){
          this.cMap.showDriversOnMap();
          //this.CheckForPreviousData()
          }
          
          //Set Up Variables For admin configurations
          this.ph.getWebAdminProfile().orderByValue().on('value', userProfileSnapshot => {
            let admin = userProfileSnapshot.val();
            this.dProvider.fare = admin.price;
            this.dProvider.pricePerKm = admin.perkm;
            this.executivePercentage = admin.executive;
            this.tricyclePercentage = admin.tricycle;

            if (admin.referalPercentage)
            this.referalPercentage = admin.referalPercentage;

            if (admin.perkm == null || admin.price == null){
              this.dProvider.fare = 10;
              this.dProvider.pricePerKm = 50;
            }
            //this.settings.appcurrency = admin.Currency;
           })


           this.ph.getNewsProfile().on('value', userProfileSnapshot => {
             if (userProfileSnapshot.val()){
               this.news = 'News Available';
             }
           
        
           this.storage.get('News').then((sd)=>{
            console.log(sd, this.news)
            if (sd == this.news){
              this.hideNews = true
              console.log(sd)
            }else{
              this.hideNews = false;
            }
           })
        
          })

      
  
    }
    
  })
})
  }

  remove(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }


  checkConnection(){
    let connectedRef = firebase.database().ref(".info/connected");
         connectedRef.on("value", (snap) => {
      
          if (snap.val() === true) {
           // this.eventProvider.UpdateNetworkSate(true, this.uid);
            //console.log('network is okay')
       
            if (this.connect){
            this.pop.hideLoader();
            this.connect = false
            //console.log('cancelled network error loader')
        
            }
          } else {
            if (!this.connect){
            this.pop.presentLoader(this.lp.translate()[0].lost);
            this.connect = true
            }
          //  this.eventProvider.UpdateNetworkSate(false, this.uid);
          
            //console.log('network is bad')
            
          }
       
        });
  }
  


  showAlrt(){
    let alert = this.alert.create({
      title: 'Pool Request',
      subTitle: 'A new pool request has been made. Accept to start riding.',
      buttons: [ {
        text: this.lp.translate()[0].accept,
        role: 'cancel',
        handler: () => {
          this.ph.getUserProfile().update({
          }).then(()=>{
            this.requestRideSharing()
          
          console.log(this.shareID)
         
        })
        }
      },
      {
        text: this.lp.translate()[0].reject,
        role: 'cancel',
        handler: () => {
        
        }
      },
    
    ],
      enableBackdropDismiss: false 
    });
    alert.present();
  }


  requestRideSharing(){
    console.log('rideshare stsrted')
    this.isRidesharing = true;
      //this.StartPoolTrip()
   
      //document.getElementById("bar4").style.display = 'none'
      this.bookStarted = true;
      this.hideFunctions();
      this.returningUser = false;
      this.cMap.hasCompleted = false;
      var image = this.isUser.photoURL;
      var name = this.isUser.displayName;
      var pay = this.ph.paymentType;
      this.pop.calculateBtn = false;
      clearTimeout(this.cMap.timer1);
  
  
      if (image == null){
        if (this.ph.pic == null){
         image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png'
        }else{
          image = this.ph.pic;
        }
        
       }
        
      if (name == null){
        if (this.ph.name != null){
           name = this.ph.name;
        }else{
          name = this.isUser.email;
        }
      
      }
  
      if (pay == null){
        pay = 1
      }
     
      if (this.lat == null && this.lng == null){
        this.lat = this.lat 
        this.lng = this.lng
    
  
   
  
    }
  
  }


  WaitForGeolocation(){
    
    //A timer to detect if the location has been found.
       let location_tracker_loop = interval(1000).subscribe(()=>{
        if (this.cMap.hasShown){
          location_tracker_loop.unsubscribe()
          this.showMap();
          this.showGps = false;
          this.cMap.mapLoadComplete = true
          console.log('xfdwgvuhbeygvw')
        }
         })
      }
   


   bookLater(){
    //show or hide more button on connecting with driver.
    this.navCtrl.push('SchedulePage', {lat:this.cMap.lat, lng:this.cMap.lng, destination:this.myGcode.destinationSetName});
    this.platform.registerBackButtonAction(()=>this.ReturnHome());
   }

  
   toggleMoreBtn(){
    //show or hide more button on connecting with driver.
    this.toggleMore = this.toggleMore ? false : true;
    if (this.toggleMore){
      this.type = 'arrow-down'
    }else{
      this.type = 'arrow-up'
    }
   }


   toggleRideShare(){
    //show or hide more button on connecting with driver.
    this.rideShare = this.rideShare ? false : true;
  
   let id;
  
   if (this.rideShare){
      this.pop.presentLoader('Getting Pools nearby...')
    this.ph.getAllPool().on('value', snap => {
      
      this.myList = [];
         snap.forEach(element => {
        
          
        let end;
        let begin = new google.maps.LatLng(element.val().location[0], element.val().location[1])
        if (!this.platform.is('cordova')){
        end = new google.maps.LatLng(5.488334, 7.5190356)
        }else{
        end = new google.maps.LatLng(this.lat, this.lng)
        }

       
       // console.log(element.val().lat, element.val().lng)
        let distanceApart = google.maps.geometry.spherical.computeDistanceBetween(begin, end)/60
        let ef;
        let b;
        let dest;
        if (distanceApart <= this.settings.apart){
         
        b = new google.maps.LatLng(element.val().destination[0], element.val().destination[1])
      
       
        ef = new google.maps.LatLng(this.destination_lat, this.destination_lng)
        

        dest = google.maps.geometry.spherical.computeDistanceBetween(b, ef)/60

        if (dest <= this.settings.apart){
        this.pop.hideLoader();
            this.myList.push({
              id: element.key,
              name: element.val().name,
              picture: element.val().picture,
              userID: element.val().id
            });
            console.log(this.myList);
            return false
          }else{
            console.log('fwrghwhhrrhj')
            //this.pop.presentToast('No Pools Found')
            this.pop.hideLoader();
          }

        }else{
         // this.pop.presentToast('No Pools Found')
          this.pop.hideLoader();
         // this.pop.presentToast('No Pools Found')
        }

          });

          
        
          
        });
      

      }else{
        this.ph.getAllPool().off('value')
        this.pop.hideLoader();
       // this.pop.presentToast('No Pools Found')
      }
      
    
   }

   SendPool(id){
    console.log(id);
    this.can = false;
   let my = true
   
   this.sharerID = id
  }




   toggleMoreSection(){
    this.cMap.shove = false;
    this.StartTracker(false)
    this.hideNews = true;
    //show or hide more button on connecting with driver.
    //console.log(this.cMap.selected_destination_bar)
    document.getElementById("destination").innerText = this.lp.translate()[0].dest;
    this.cMap.selected_destination_bar = this.cMap.selected_destination_bar ? false : true;
    this.cMap.map.setClickable(false);
    this.cMap.onDestinatiobarHide = true;
    this.cMap.onLocationbarHide = true;
    this.cMap.showDone = false;
    this.hidelocator = true;
    this.platform.registerBackButtonAction(()=>this.ReturnHome());
    if (this.cMap.selected_destination_bar){
      //this.type = 'arrow-dropdown'
    }else{
      //this.type = 'arrow-dropup'
    }
   }




 //choose a ride type
   chooseRideType(value){
    let button = document.getElementById("car")
 
     let button2 = document.getElementById("pool")

    let button3 = document.getElementById("classic")

    let currentPrice = this.dProvider.price;
    let highPrice = this.dProvider.highPrice;
    console.log(button)

    
   

   if (value == 0){
    //console.log(currentPrice)
   
    this.actualPrice = currentPrice;
    this.highPrice = highPrice
    button.style.border = "1.8px solid gray";
  //  button.style.boxShadow = "0px 3px gray";
    button2.style.border = "none";
    button3.style.border = 'none';
    this.choseEconomy = true;
    this.choseTricycle = false;
    this.choseClassic = false;
    //console.log(this.dProvider.price)

   }

   if (value == 1){
   // console.log(currentPrice)

       button2.style.border = "1.8px solid gray"
     //  button2.style.boxShadow = "0px 3px gray";
       button.style.border = "none"
       button3.style.border = 'none'
       this.choseEconomy = false;
       this.choseTricycle = true;
       this.choseClassic = false;
       let exp = currentPrice * this.tricyclePercentage/100
       let expo = highPrice * this.tricyclePercentage/100
       this.actualPrice = Math.round(currentPrice - exp);
       this.highPrice = Math.round(highPrice - expo);
   }


   if (value == 2){
    console.log(currentPrice)

    button3.style.border = "1.8px solid gray";
    button.style.border = "none";
   // button3.style.boxShadow = "0px 3px gray";
    button2.style.border = 'none';

    this.choseEconomy = false;
    this.choseTricycle = false;
    this.choseClassic = true;

    let exp = currentPrice * this.executivePercentage/100
    let expo = highPrice * this.executivePercentage/100
    this.actualPrice = Math.round(currentPrice + exp);
    this.highPrice = Math.round(highPrice + expo);
}
  
 
   }


   changeButton(value){
    
    let currentPrice = this.dProvider.price;
    let highPrice = this.dProvider.highPrice;
    
     //console.log(currentPrice)

   if (value == 0){
    this.actualPrice = currentPrice;
   // console.log(currentPrice)
   this.highPrice = highPrice
    this.choseEconomy = true;
    this.choseTricycle = false;
    this.choseClassic = false;
    //console.log(this.dProvider.price)

   }

   if (value == 1){
    
    
       this.choseEconomy = false;
       this.choseTricycle = true;
       this.choseClassic = false;
        let exp = currentPrice * this.tricyclePercentage/100
        let expo = highPrice * this.tricyclePercentage/100
       this.actualPrice = Math.round(currentPrice - exp);
       //console.log(currentPrice)
       this.highPrice = Math.round(highPrice - expo);
   }


   if (value == 2){
    
   // console.log(currentPrice)
    
    this.choseEconomy = false;
    this.choseTricycle = false;
    this.choseClassic = true; 
    let exp = currentPrice * this.executivePercentage/100
    let expo = highPrice * this.executivePercentage/100
    this.actualPrice = Math.round(currentPrice + exp);
    this.highPrice = Math.round(highPrice + expo);
   
   
}
  
 
   }

 //call the driver now
   callDriver(){
     //console.log(this.number);
     this.call.callNumber(this.number, true);
   }


   StartTracker(state){
    let h = interval(2000).subscribe(()=> {
      if (state){
    
        this.cMap.map.getMyLocation().then(location =>{
          this.lat = location.latLng.lat;
          this.lng = location.latLng.lng;

          this.cMap.lat = location.latLng.lat;
          this.cMap.lng = location.latLng.lng;

          //this.cMap.map.setCameraTarget(new LatLng(this.lat, this.lng))
          if (this.cMap.marker && this.cMap.pause && this.cMap.shove){
          this.cMap.marker.setPosition(new LatLng(this.lat, this.lng));
          this.cMap.map.animateCamera({
            target: location.latLng,
            zoom: 15,
            tilt: 0,
            bearing: 0,
            duration: 1000
           }).then(distanceApart => { 

           })
           console.log('Updating Your Location ....');
          }

         
        }).catch((error)=>{
           console.log(error);
        })
      
      }else{
        h.unsubscribe();
      }
    })
   
  }

//Send a message to the driver
  
Send(){
  let modal = this.modalCtrl.create('ChatPage', {id:this.uid});
  modal.present();
  modal.onDidDismiss(()=>{
    this.notification = false
  })
}



   ReturnHome(){
     this.cMap.selected_destination_bar = false;
     this.cMap.map.setClickable(true);
     this.cMap.showDone = false;
     this.hidelocator = false;
     this.canJoinPool = false;
     this.isPerKilo = false
     if (this.cMap.shove == false){
     this.StartTracker(true);
     this.cMap.shove = true;
     }
     //this.ph.getAllPool().off('value')
     this.dProvider.isDriver = true;
     this.canRequestPool = false;
     this.hideMinor();
      this.cMap.hasRequested = false;
      this.pop.onRequest = false;
      this.hidelocator = false;
    //  this.canRidePool = false;
      this.cMap.canShowchoiceTab = false;
      this.cMap.norideavailable = false;
     
      this.platform.registerBackButtonAction(()=>this.platform.exitApp());
   }


  showMap(){
    //display the map set variables for better access
    this.lat = this.cMap.lat;
    this.lng = this.cMap.lng;

    //Check if user already has a connection, maybe lost due to unexpected device shut down and application exit
    if (!this.hasChecked){
    this.CheckForPreviousData();
    this.hasChecked = true;
    this.StartTracker(true);
    let rum = true;
   
   

    }
  }


  showAddressModal (selectedBar) {
    clearTimeout(this.cMap.timer1);
    
    //console.log(this.myGcode.locationName)
    let modal = this.modalCtrl.create('AutocompletePage');
    modal.onDidDismiss(data => {
      //Open the address modal on location bar click to change location
      //console.log(data)
      let myPos = new google.maps.LatLng(this.lat, this.lng)
    if (selectedBar == 1 && data != null){
      if (!this.startedNavigation){
      document.getElementById("location").innerText = data;
      this.myGcode.locationName = data
      this.pop.presentLoader('');
      this.myGcode.geocoder.geocode( { 'address': data}, (results, status) => {
        if (status === 'OK') {
          this.pop.hideLoader();
          var position = results[0].geometry.location;
          myPos = new google.maps.LatLng(position.lat(), position.lng());
        }else{
          this.pop.hideLoader();
        }

      })
      //this.cMap.RefreshMap(data)
      }
    }
     //Open the address modal on destination bar click to change destination
    if (selectedBar == 2 && data != null){
      document.getElementById("destination").innerText = data;
      this.myGcode.destinationSetName = data
     
      this.pop.presentLoader('')
      ///After data input, check to see if user selected to add a destination or to calculate distance.
      this.myGcode.geocoder.geocode( { 'address': data}, (results, status) => {
        if (status === 'OK') {
          this.pop.hideLoader();
          var position = results[0].geometry.location;
          let calPos = new google.maps.LatLng(position.lat(), position.lng());
          this.destination_lat = position.lat();
          this.destination_lng = position.lng();
         // if (this.cMap.pool){
           // this.SearchForPools(position.lat(), position.lng())
          //  }else{
             
                this.pickLocation();
               
                //console.log('pool not found')
                this.poolAvailable = false;
               
               
          //  }
          document.getElementById("destination").innerText = data;
          this.myGcode.destinationSetName = data;
          this.dProvider.calcRoute(myPos, calPos, false, true, data);
          this.picked = true;
        } else {
       
        }
      });
      
    }
    });
    modal.present();
  }


  showLoadRefresh() {
    let loading = this.loadingCtrl.create();
     loading.present();
     let myTimeout = setTimeout(() => {
       clearTimeout(myTimeout)
        loading.dismiss();
     }, 200);
   }
  



//This is the fuction for estimate btn.
  estimate(){
    this.navCtrl.push('EstimatePage', {lat:this.cMap.lat, lng:this.cMap.lng});
    this.platform.registerBackButtonAction(()=>this.navCtrl.popToRoot());
  }


    //Check if there is a key available in the storage, if not, return. This is to ensure that we dont lose information
    //If the user mistakenly closes the application.
  CheckForPreviousData(){
    console.log('checked DATA')
    this.storage.get('currentUserId').then((value) => {
    if (value){
     this.uid = value;
     this.startListeningForResponse();
     this.hideFunctions();
     this.returningUser = true;
     this.pop.onRequest = true;
     this.cMap.selected_destination_bar = true;
     this.pop.uid = this.uid;
     this.dProvider.id = this.uid;
     console.log('prev DATA')
    }else{
     this.storage.remove(`currentUserId`);
     this.act.getActiveProfile(this.notify_ID).on('child_added', customerSnapshot => {

      if(customerSnapshot.val().Client_location)
      this.checkForScheduledRide();
      })
     console.log('called scheduling')
    }

  }).catch(er=>{
    console.log(er)
  });
    
  }


  //Reset map position to user current position on location btn press
ResetMe(){
  let push =  new LatLng(this.lat, this.lng);
  // let centerBar = document.getElementById("onbar")
  // centerBar.style.display = 'none'
  this.cMap.map.moveCamera({
    target: push,
    zoom: 15,
    tilt: 0,
    bearing: 0,
   }).then(() =>{ 
    this.cMap.hidelocator = true;
    
  })
}


  checkForScheduledRide(){
  
    if (this.platform.is('cordova')){
    this.One.getIds().then(id => {
      this.uid = id.userId;
      this.act.getActiveProfile(this.uid).on('child_added', customerSnapshot => {
        //console.log(customerSnapshot.val())
        if(customerSnapshot.val().Client_location){
          this.act.getActiveProfile(this.uid).off('child_added')
          this.ph.getScheduledProfile(this.uid).remove().then(()=>{
          this.startListeningForResponse();
          this.hideFunctions();
          this.returningUser = true;
          this.pop.onRequest = true;
          this.cMap.selected_destination_bar = true;
          this.pop.uid = this.uid;
          this.dProvider.id = this.uid;
          //console.log('checked')
          
        })
        
      }else{
        this.act.getActiveProfile(this.uid).off('child_added');
        this.storage.remove(`currentUserId`);
      }
      })
    })

  }

    if (!this.platform.is('cordova')){
      this.uid = this.notify_ID;  
      this.act.getActiveProfile(this.uid).on('child_added', customerSnapshot => {
       // //console.log(customerSnapshot.val())
        if (customerSnapshot.val().Client_location){
          this.act.getActiveProfile(this.uid).off('child_added')
          this.ph.getScheduledProfile(this.uid).remove().then(()=>{
          this.startListeningForResponse();
          //console.log('scheduler')
          this.hideFunctions();
          this.cMap.selected_destination_bar = true;
          this.pop.onRequest = true
          this.returningUser = true;
          this.pop.uid = this.uid;
          this.dProvider.id = this.uid;
          //console.log('checked')
          })
        }else{
          this.act.getActiveProfile(this.uid).off('child_added')
        }
      })
     
    }
  }


  StartKilo(){
    let kush = true;
    this.isPerKilo = true;
    this.myGcode.destinationSetName = 'Calculate on trip end.';
   // this.dProvider.price = 0;
    this.picked = false; 
    this.pop.presentLoader('');
      
        
          //console.log(this.userDestLat, this.userDestLng)
        //  this.ph.getAllDrivers().off('value')
          this.pop.hideLoader();
         let myInt = interval(1000).subscribe(()=> {
          if (kush){
            kush = false;
          this.pop.presentLoader('')
          }
            
          myInt.unsubscribe()
              this.pop.hideLoader()
        this.pop.onRequest = true;
        if (this.cMap.isDriverAvailable && this.cMap.pool || this.cMap.smallcar || this.cMap.classic){
           //console.log('i was called')
           this.cMap.canShowchoiceTab = true;
     
          this.cMap.choseCar = false;
          this.cMap.showDone = false;
          this.cMap.selected_destination_bar = true;
          this.hidelocator = true
          this.checkButtons()
          this.cMap.canShowchoiceTab =  true;
         }else{
          this.cMap.canShowchoiceTab = false;
         
            this.cMap.norideavailable = true;
          this.cMap.choseCar = false;
          this.cMap.showDone = false;
          this.cMap.selected_destination_bar = true;
          this.hidelocator = true
         
        }
    
    });
  }


  GotoPlace(place){
    // this.pop.presentLoader('');

      this.platform.registerBackButtonAction(()=>this.ReturnHome());
      this.myGcode.destinationSetName = place;
    if (place != null){
      let myPos = new google.maps.LatLng(this.cMap.lat, this.cMap.lng)
      this.pop.presentLoader('');
      this.myGcode.geocoder.geocode( { 'address': place}, (results, status) => {
        if (status == 'OK') {
          this.pop.hideLoader();
          var position = results[0].geometry.location;
          let calPos = new google.maps.LatLng(position.lat(), position.lng())
          // if (this.cMap.pool){
          //   this.SearchForPools(position.lat(), position.lng())
          //   }else{
             
                this.StartTrip();
               
                //console.log('pool not found')
                this.poolAvailable = false;
               
               
            //}
          this.dProvider.calcRoute(myPos, calPos, false, true, place);
          
           ///   this.StartTrip();
           this.picked = false;  
         
        } else {
          if (this.pop.presentLoader)
          this.pop.hideLoader();

          this.pop.presentToast(this.lp.translate()[0].retry);
        }
      });
    }else{
      this.navCtrl.push('ProfilePage');
      this.platform.registerBackButtonAction(()=>this.navCtrl.popToRoot());
      this.pop.presentToast(this.lp.translate()[0].home);
    }
   // this.ph.getUserProfile().off('value');
  
  }



  Done(){
    if (this.myGcode.destinationSetName != null){
      let myPos = new google.maps.LatLng(this.cMap.lat, this.cMap.lng)
      this.pop.presentLoader('');
      this.geocoder.geocode( { 'address': this.myGcode.destinationSetName}, (results, status) => {
        if (status == 'OK') {
          this.pop.hideLoader();
          var position = results[0].geometry.location
          let calPos = new google.maps.LatLng(position.lat(), position.lng())
          this.myGcode.destinationSetName = this.myGcode.destinationSetName
          this.dProvider.calcRoute(myPos, calPos, false, true, this.myGcode.destinationSetName)
       //   if (this.cMap.pool){
        //  this.SearchForPools(position.lat(), position.lng())
         // }else{
          this.destination_lat = position.lat();
          this.destination_lng = position.lng();
              this.pickLocation();
             
              //console.log('pool not found')
              this.poolAvailable = false;
             
             
          //}
          this.picked = true//this.pickLocation();

        } else {
          this.pop.hideLoader()
          this.pop.presentToast(this.lp.translate()[0].retry)
        }
      });
  }else{
    this.cMap.onDestinatiobarHide = true;
    this.cMap.onLocationbarHide = true;
    this.cMap.showDone = false;
    this.hidelocator = true;
  }

  }
  
  pickLocation(){
    let kush = true;
    //this.actualPrice = this.dProvider.price
    //this.ph.getAllPool().off('value')
    if (this.myGcode.destinationSetName != null){
      this.pop.presentLoader('');
     // this.ph.getAllDrivers().on('value', snap => {
       // let snap = snap.val()
        this.pop.hideLoader();
        //this.ph.getAllDrivers().off('value')
      let myInt = setInterval(() => {
        if (kush){
          kush = false;
        this.pop.presentLoader('')
        }
        if (this.dProvider.price != null){
          clearInterval(myInt);
          this.pop.hideLoader();
    this.pop.onRequest = true
    this.cMap.map.setClickable(true);
    if (this.cMap.isDriverAvailable){
      this.cMap.canShowchoiceTab = true;
     // this.ph.getAllDrivers().off('value')
      this.cMap.choseCar = false;
      this.cMap.showDone = false;
      this.hidelocator = true;
      this.checkButtons();
      //this.cMap.canShowchoiceTab =  true;
    }else{
      this.cMap.canShowchoiceTab = false;
    
        this.cMap.norideavailable = true;
      this.cMap.choseCar = false;
      this.cMap.showDone = false;
      this.hidelocator = true
  
    }
  }else{
    //this.ph.getAllDrivers().off('value')
  }
}, 600)
//});
  }else{
    this.cMap.onDestinatiobarHide = true;
    this.cMap.onLocationbarHide = true;
    this.cMap.showDone = false;
  }

  

  }



 Start(){
  //console.log('This is the classic state ' + this.choseEconomy)


if(this.choseClassic)
{
  this.RequestForRide()
  this.canJoinPool = false;
  this.canRequestPool = true;
  this.canRidePool = false;
  this.cMap.canShowchoiceTab = false;
  this.cMap.norideavailable = false;
  this.newPrice = this.dProvider.price * this.executivePercentage
 // //console.log('no pools, no economy just create pool')
} 
if(this.choseTricycle)
{
  this.RequestForRide()
  this.canJoinPool = false;
  this.canRequestPool = true;
  this.canRidePool = false;
  this.cMap.canShowchoiceTab = false;
  this.cMap.norideavailable = false;
  this.newPrice = this.dProvider.price * this.tricyclePercentage
 // //console.log('no pools, no economy just create pool')
} 
else
{
  this.RequestForRide()
  this.canJoinPool = false;
  this.canRequestPool = true;
  this.canRidePool = false;
  this.cMap.canShowchoiceTab = false;
  this.cMap.norideavailable = false;
  ////console.log('no pools, no economy just create pool')
}

}



  StartTrip(){
    //this.ph.getAllPool().off('value')
    //this.actualPrice = this.dProvider.price
let kush = true;
//this.pop.presentLoader('');
  
    
      //console.log(this.userDestLat, this.userDestLng)
    //  this.ph.getAllDrivers().off('value')
      //this.pop.hideLoader()
      let myInt = interval(1000).subscribe(()=> {
      if (kush){
        kush = false;
      this.pop.presentLoader('')
      }
        if (this.dProvider.price != null){
        myInt.unsubscribe();
          this.pop.hideLoader();
    this.pop.onRequest = true
    this.cMap.map.setClickable(true)
    if (this.cMap.isDriverAvailable && this.cMap.pool || this.cMap.smallcar || this.cMap.classic){
       //console.log('i was called')
       this.cMap.canShowchoiceTab = true;
 
      this.cMap.choseCar = false;
      this.cMap.showDone = false;
      this.cMap.selected_destination_bar = true;
      this.hidelocator = true
      this.checkButtons()
      this.cMap.canShowchoiceTab =  true;
     }else{
      this.cMap.canShowchoiceTab = false;
      //this.ph.getAllDrivers().off('value')
     // if (!this.poolAvailable){
        
        //console.log('i was called')
        this.cMap.norideavailable = true;
      this.cMap.choseCar = false;
      this.cMap.showDone = false;
      this.cMap.selected_destination_bar = true;
      this.hidelocator = true
     
    }
  }else{
    //console.log('no price')
    //this.ph.getAllDrivers().off('value')
  }
});
  //  })
  }
  

  checkButtons(){
     console.log(this.cMap.car_notificationIds)
    //this.actualPrice = this.dProvider.price;
     this.cMap.canMess = true;
  if (this.cMap.car_notificationIds != null){
    let tem = true;
    
      this.pop.presentLoader('');
     
    for (let index = 0; index < this.cMap.car_notificationIds.length; index++) {
      const element = this.cMap.car_notificationIds[index];
       
    let end; 
    let begin = new google.maps.LatLng(element[0], element[1])
    
   
    
   
   if (!this.platform.is('cordova')){
    end = new google.maps.LatLng(5.488334, 7.5190356)
    }else{
    end = new google.maps.LatLng(this.lat, this.lng);
    }

    console.log('checkbutton')
    let distanceApart = google.maps.geometry.spherical.computeDistanceBetween(begin, end)/60
    
    console.log(distanceApart)
  if (distanceApart <= this.settings.apart) {
    console.log('checked button')
    if (tem){
      this.pop.hideLoader()
      tem = false;
      }
      console.log(element[4]);

      if (element[4] == 0){
        
        console.log(distanceApart);
        if (distanceApart < 60){
          this.cMap.standardStance = 1 + ' min';
          
        }else if (distanceApart > 60){
          let v = distanceApart/60;
          distanceApart = v + 1;
          this.cMap.standardStance = Math.round(distanceApart) + ' mins';
         
        }
        continue
      }

      if (element[4] == 1){
        
        console.log(distanceApart);
        if (distanceApart < 60){
          this.cMap.tricycleStance = 1 + ' min';
          
        }else if (distanceApart > 60){
          let v = distanceApart/60;
          distanceApart = v + 1;
          this.cMap.executiveStance = Math.round(distanceApart) + ' mins';
          
        }
        continue
      }

      if (element[4] == 2){
        
        console.log(distanceApart);
        if (distanceApart < 60){
          this.cMap.executiveStance = 1 + ' min';
        
        }else if (distanceApart > 60){
          let v = distanceApart/60;
          distanceApart = v + 1;
          this.cMap.executiveStance = Math.round(distanceApart) + ' mins';
        }
       continue
      }
      break
    }else{
      this.pop.hideLoader();
      this.ReturnHome();
      this.pop.presentToast('No drivers Close')
    }
   
  }

    

    if (this.isPerKilo){
      this.dProvider.price = 0;
    }

    
      
    if (this.cMap.smallcar && this.cMap.classic && this.cMap.pool){
     
      // this.choseEconomy = true;
      // this.choseClassic = false;
      // this.choseTricycle = false;
      this.changeButton(0);
    }

    if (this.cMap.smallcar && this.cMap.classic && !this.cMap.pool){
     
      // this.choseEconomy = true;
      // this.choseClassic = false;
      // this.choseTricycle = false;
      this.changeButton(0);
    }

    if (!this.cMap.smallcar && this.cMap.classic && this.cMap.pool){
     
      // this.choseEconomy = true;
      // this.choseClassic = false;
      // this.choseTricycle = false;
      this.changeButton(0);
    }


    if (this.cMap.smallcar && !this.cMap.classic && this.cMap.pool){
     
      // this.choseEconomy = true;
      // this.choseClassic = false;
      // this.choseTricycle = false;
      this.changeButton(0);
    }

    if (this.cMap.smallcar && !this.cMap.classic && !this.cMap.pool){
    
      //this.hideMinor();
      //  this.choseEconomy = true;
      //  this.choseClassic = false;
      //  this.choseTricycle = false;
       this.changeButton(0);
     // this.ReturnHome();
     // this.pop.presentToast(this.lp.translate()[0].nodriver)
    }

    if (this.cMap.classic && !this.cMap.smallcar && !this.cMap.pool){
    
      // this.choseEconomy = false;
      // this.choseClassic = true;
      // this.choseTricycle = false;
      this.changeButton(2);
    }

    if (this.cMap.pool && !this.cMap.smallcar && !this.cMap.classic){
    
      // this.choseEconomy = false;
      // this.choseClassic = false;
      // this.choseTricycle = true;
      this.changeButton(1);
    }

  }else{

  }


  }

  

  ReturnToSelect(){
      this.cMap.selected_destination_bar = false;
      this.cMap.showDone = false;
      this.pop.onRequest = false;
      this.hidelocator = false;
      this.canRidePool = false;
      this.cMap.canShowchoiceTab = false;
      this.cMap.norideavailable = false;
      this.hideMinor();
      this.isPerKilo = false;
      this.dProvider.price = null;
      this.cMap.hasRequested = false;
      this.cMap.hasShow = true;
      this.cMap.executiveStance = 'none';
      this.cMap.standardStance = 'none';
      this.cMap.tricycleStance = 'none';
  }

  hideMinor(){
    this.canJoinPool = false;
    this.canRequestPool = false;
    this.cMap.norideavailable = false;
    this.cMap.canShowchoiceTab = false;
    this.canRidePool = false;
  }


  hideFunctions(){
    this.hideNews = true;
    this.cMap.hasbooked = true;
    this.cMap.hasRequested = true;
    console.log('hidefuction Called')
    this.cMap.shove = false;
    this.called = true;
    ///hide and remove some properties on user request.
    // let bottomBar1 = document.getElementById("bar2").style.display = 'none'
    this.cMap.onbar2 = true;
    clearTimeout(this.cMap.timer1);
    this.hideMinor();
    this.StartTracker(false);
    //this.ph.getUserProfile().off('value');
    //this.canIncrease = false
    // let centerBar = document.getElementById("onbar")
    // centerBar.style.display = 'none'
    this.cMap.map.setClickable(true)
    document.getElementById("destination").innerHTML = this.lp.translate()[0].dest;
    this.cMap.map.setCameraZoom(6);
    this.startedNavigation = true;
    this.pop.onRequest = true;
    
  //  this.cMap.isCarAvailable = false;
    this.dProvider.calculateBtn = false;
   
   
    this.cMap.map.clear();
  }
  


  
   ///The Book Now button onclick=>Create and push the users information to the database.
  RequestForRide(){
    //document.getElementById("bar4").style.display = 'none'
    this.bookStarted = true;
    this.hideFunctions();
    this.returningUser = false;
    this.cMap.hasCompleted = false;
    var image = this.isUser.photoURL
    var name = this.isUser.displayName
    var pay = this.ph.paymentType
    this.pop.calculateBtn = false;
    clearTimeout(this.cMap.timer1);
    console.log('RequestForRide Called')
    this.ph.getAllDrivers().off('value');
      this.ph.getAllDrivers().off('child_changed');
      this.ph.getAllDrivers().off('child_removed');
      this.ph.getAllDrivers().off('child_added');
    if (image == null){
      if (this.ph.pic == null){
       image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png'
      }else{
        image = this.ph.pic;
      }
      
     }
      
    if (name == null){
      if (this.ph.name != null){
         name = this.ph.name
      }else{
        name = this.isUser.email
      }
    
    }

    if (pay == null){
      pay = 1
    }
   
    if (this.lat == null && this.lng == null){
      this.lat = this.lat 
      this.lng = this.lng
  

    if (!this.platform.is('cordova')){
      console.log('Location gotten')
      
      if (this.shareRide){
      this.ph.getAllPool().push({
        location: [this.lat, this.lng],
        id: this.ph.id,
        notificationID: '456789085764536475869876766',
        name: name,
        picture: image,
        destination: [this.destination_lat, this.destination_lng]
      }).then((id)=>{
        this.poolID = id.key
         console.log(id.key)
     
      })
    }
      this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);
    }else{
     
     if (this.shareRide){
     
        this.ph.getAllPool().push({
          location: [this.lat, this.lng],
          id: this.ph.id,
          notificationID: this.notify_ID,
          name: name,
          picture: image,
          destination: [this.destination_lat, this.destination_lng]
        }).then((id)=>{
          console.log(id)
          this.poolID = id.key
     
    })



  }
    
    console.log(name, image, this.lat, this.lng, this.myGcode.locationName, pay)
    this.createUserInformation(name, image, this.lat, this.lng, this.myGcode.locationName, pay);
    }

  }else{

    if (this.platform.is('cordova')){
    
       
    
       
    
  
    
       console.log('Location gotten')
      let latlng = {lat: this.lat, lng: this.lng};
    //this.geocoder.geocode({'location': latlng}, (results, status) => {
    //  if (status == 'OK') {
       this.lat = this.lat
       this.lng = this.lng
       if (this.shareRide){
       this.ph.getAllPool().push({
         location: [this.lat, this.lng],
         id: this.ph.id,
         notificationID: this.notify_ID,
         name: name,
         picture: image,
         destination: [this.destination_lat, this.destination_lng]
       }).then((suc)=>{
        this.poolID = suc.key
       })
      
    }
     
    this.createUserInformation(name, image, this.lat, this.lng, this.myGcode.locationName, pay)


}else{
  if (this.shareRide){
  this.ph.getAllPool().push({
    location: [this.lat, this.lng],
    id: this.ph.id,
    notificationID: '456789085764536475869876766',
    name: name,
    picture: image,
    destination: [this.destination_lat, this.destination_lng]
  }).then((id)=>{
    this.poolID = id.key
     console.log(id.key)
 
  })

}

this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);

}
}
  
  }

  
  //clear the booking request
  cancelRequest(){
  
    //  this.rechecking = true
      this.ClosePoolRequest()
    
     // this.hasStarted = false;
  }

  ClosePoolRequest(){
    this.showAlertComplex(this.lp.translate()[0].whycancel, this.lp.translate()[0].chose)
  }


  showAlertComplex(title, message){
    let alert = this.alert.create({
      title: title,
      message: message,
      inputs: [
        {
          name: 'long',
          label: this.lp.translate()[0].longpick,
          type: "checkbox",
          value: "true",
          checked: false
        },
        {
          name: 'incorrect',
          label: this.lp.translate()[0].incorrect,
          type: "checkbox",
          value: "false",
          checked: false
        }
      ],
      buttons: [
        {
          text: this.lp.translate()[0].reject,
          role: 'cancel',
          handler: () => {
            
          }
        },
        {
          text: this.lp.translate()[0].accept,
          handler: () => {
             this.pop.clearAll(this.uid, true)
         
              this.HideMe()
            //   this.act.getPoolProfile().remove().then(()=>{
            //    // this.canPool = false;
            //  })
           clearTimeout(this.timeTonotify);
  
    this.pop.hasCleared = true;
   
    this.hasCalled = true;
   //
    //this.pop.show('All Our Drivers Are Busy, Please Try Again. Sorry For The Incovenience.')
   
      console.log('cleared here')
        }
          }
        
      ],
      enableBackdropDismiss: false 
    });
    alert.present();
  }
    

 //goto payment page on cash or card click
  gotoPayment(){
    if (this.ph.card == null){
    this.navCtrl.push('PaymentPage');
    this.platform.registerBackButtonAction(()=>this.navCtrl.popToRoot());
    }
  }

 //share the ride btn
  




  

  

  createUserInformation(name: string, picture: any, 
    lat: number, lng: number, locationName: any, payWith: any) {
      
      ////Here we check if there are cars available, if none we return
      ///If there are cars available, then we check the distance between the car and the user 
      ///If its not close enough we return
      ///If its close enough we send the push to the driver.If we dont get a reponse in 60 seconds 
      ///We push the details to another close driver, but return if no more drivers.
      
      this.pop.hasCleared = false;
      
      this.platform.registerBackButtonAction(()=>this.pop.presentToast(this.lp.translate()[0].cantexit));
      let state;

      if(this.choseEconomy){ 
      state = 0;
      }
      if(this.choseTricycle){
      state = 1;
      }
      if(this.choseClassic){
      state = 2;
      }

      //console.log(state)
      
      //Driver id represents the drivers details. the notifytimes represents the number of times to notify, which increases or decreases as a result of the number of drivers available at the momne
      let driver_id;


     
      driver_id = this.cMap.car_notificationIds;
      
      let has = true
      console.log(driver_id, this.cMap.car_notificationIds);
      if (driver_id != []){
     
        console.log(this.cMap.car_notificationIds)
     //for (let index = 0; index < this.cMap.car_notificationIds.length; index++) {
       //const element = array[index];
      
       console.log(state, this.cMap.car_notificationIds[this.NotifyTimes][4]);
       //This confirms if there is actually a location cordinate presented by the driver
      if (this.cMap.car_notificationIds[this.NotifyTimes][4] == state){
        //this.cMap.isCarAvailable = false;

     
    if (this.cMap.car_notificationIds[this.NotifyTimes][4] != null){
       
        //this.cMap.car_notificationIds[index];
        console.log(this.cMap.car_notificationIds.length, this.NotifyTimes, this.cMap.car_notificationIds )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        //This represents the drivers information for access to the driver node in the database
      let selected_driver = this.cMap.car_notificationIds[this.NotifyTimes][2]
      let selected_drivers_key = this.cMap.car_notificationIds[this.NotifyTimes][3]
     
      console.log(selected_driver, this.cMap.car_notificationIds[this.NotifyTimes][4], selected_drivers_key);
      console.log(this.cMap.car_notificationIds);
      //Registering selected variables to providers for later use
      this.pop.uid = selected_driver;
      this.dProvider.id = selected_driver;
      this.uid = selected_driver;
      
      let dest = this.myGcode.destinationSetName;
   if (has){ 
      ////console.log('Started the shit here riht now')
    //Get access to the drivers database node, remove the current driver from the node and push, to avoid any other request on the same driver
    this.act.getCurrentDriver(selected_drivers_key).remove().then((id) => {
    
      // this.ph.getUserProfile().on('value', userProfileSnapshot => {
        let ratingText = this.ph.ratingText;
        let ratingValue = this.ph.ratingValue;
        if (ratingText == null && ratingValue == null){
          ratingText = this.lp.translate()[0].notrate;
          ratingValue = 0;
         }
       
         //console.log('occured here')
        
        //  this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
          console.log('hereerdvdhjhfssfsfds')
        
        
         
          this.Myprice = this.dProvider.price
       //  }
  
    has = false;
      //Push the drivers information to the customer connection node in the database
    this.act.getActivityProfile(selected_driver).set({
      
      Client_username: name,
      Client_Deleted: false,
      Client_location: [lat, lng],
      Client_locationName: locationName,
      Client_paymentForm: payWith,
      Client_picture: picture,
      Client_phoneNumber: this.ph.phone,
      Client_ID: this.ph.id,
      Client_destinationName: dest,
      Client_price: this.actualPrice,
      Client_CanChargeCard: false,
      Client_PickedUp: false,
      Client_Dropped: false,
      Client_HasRated: false,
      Client_Rating: ratingValue,
      Client_RatingText: ratingText,
      Client_hasPaid: false,
      Client_paidCash: false,
      Client_Pool: this.canPool,
      Client_returnState: false,
      Client_ended: false,
      Client_Notif: this.notify_ID,
      Client_Arrived: false
    }).then(suc=>{
      
      this.canStop = true;

        //After removing the driver from the driver node we can then create a push notification to this driver 
         console.log('push notification called')
       this.CreatePushNotification(this.cMap.car_notificationIds[this.NotifyTimes]);
        
    })
  
  })
    }
 
}else{
  console.log('No more Drivers to loop')
  this.NotifyTimes = 0
  clearTimeout(this.timeTonotify);
  this.pop.clearAll(this.uid, true);
  this.ReturnHome();
  this.hasCalled = true;
  this.clearAll()
  this.pop.hasCleared = true;
  this.cMap.onbar2 = false
  //console.log(this.NotifyTimes);
  this.rechecking = false;
  this.pop.presentToast('No Driver Close To You At The Moment.')
 
}
      
      }else{
        this.NotifyTimes++
        this.recheckInfoAndPush()
      }
 
   

    }else{
     this.Close()
    }
  
  }

  CreateSharePushNotification(){
    if (this.platform.is('cordova')){
      this.OneSignal.sendPush(this.shareID)
      }

      this.startListeningForResponse();
  }


  Close(){
    clearTimeout(this.timeTonotify);
    this.pop.clearAll(this.uid, true);
    this.ReturnHome();
    this.hasCalled = true;
    this.clearAll()
    this.pop.hasCleared = true;
    this.cMap.onbar2 = false
    //console.log(this.NotifyTimes);
    this.rechecking = false;
    this.pop.presentToast('No Driver Close To You At The Moment.')
   
    this.platform.registerBackButtonAction(()=>this.platform.exitApp());
  }

  
  CreatePushNotification(id){
  if (this.hasNotified){
    this.hasNotified = false;
    console.log('This id the notification' + id + this.NotifyTimes )
   // this.canIncrease = true;
  let current_id = id[2]
  //this.poolState = true;
  console.log(current_id)
  // if (this.platform.is('android'))
  if (this.platform.is('cordova')){
  this.OneSignal.sendPush(current_id)
  }
  ////console.log(cont)
  console.log(this.cMap.car_notificationIds.length, this.NotifyTimes)
    if (this.canStop){
    this.startListeningForResponse();
    this.canStop = false;
    }
    console.log('create push')
    this.canCancel = true
    this.timeTonotify = setTimeout(()=>{
      if (this.clearThis){
        this.NotifyTimes++
        this.hasNotified = true;
        console.log(this.cMap.car_notificationIds[this.NotifyTimes], this.cMap.car_notificationIds)
      if (this.cMap.car_notificationIds[this.NotifyTimes] != null){
        this.ClearInformation();
        console.log('cleared to start again')
        this.rechecking = true;
      }else{
        this.Close()
        this.rechecking = false;
        this.NotifyTimes = 0
      }
      console.log()
      
      }else{
        clearTimeout(this.timeTonotify)
      }
     }, this.timerBeforeNotify)
     this.canStop = false;
  //  }
    }
  }


  recheckInfoAndPush(){
    console.log('cleared Info and restarted');
    this.returningUser = false;
    var image = this.isUser.photoURL;
    var name = this.isUser.displayName;
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
        name = this.isUser.email
      }
    }

    if (pay == null){
      pay = 1
    }

    if (this.cMap.lat == null && this.cMap.lng == null){
      this.cMap.lat = this.lat 
      this.cMap.lng = this.lng
  

    if (!this.platform.is('cordova')){
      //console.log('from clearInfo')
      this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);
    }else{
      this.createUserInformation(name, image, this.cMap.lat, this.cMap.lng, this.myGcode.locationName, pay);
    }

  }else{

    if (this.platform.is('cordova')){
  
    
 
   
    //let latlng = {lat: location.latLng.lat, lng: location.latLng.lng};
  //this.geocoder.geocode({'location': latlng}, (results, status) => {
  //  if (status == 'OK') {
   
    this.createUserInformation(name, image, this.lat, this.lng, this.myGcode.locationName, pay);
    //this.pop.hideLoader()
  //}


// }
//  })
}else{

this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);

}
}
  }


  ClearInformation(){
    this.rechecking = true
    // let customer = firebase.database().ref(`Customer/${this.uid}`);
    this.act.getActiveProfile(this.uid).remove().then((success) =>{
      //console.log('cars is 0')
      console.log('cleared Info and restarted');
      this.returningUser = false;
      var image = this.isUser.photoURL;
      var name = this.isUser.displayName;
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
          name = this.isUser.email
        }
      }
  
      if (pay == null){
        pay = 1
      }
  
      if (this.cMap.lat == null && this.cMap.lng == null){
        this.cMap.lat = this.lat 
        this.cMap.lng = this.lng
    
  
      if (!this.platform.is('cordova')){
        //console.log('from clearInfo')
        this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);
      }else{
        this.createUserInformation(name, image, this.cMap.lat, this.cMap.lng, this.myGcode.locationName, pay);
      }
  
    }else{

      if (this.platform.is('cordova')){
    
      
   
     
      //let latlng = {lat: location.latLng.lat, lng: location.latLng.lng};
    //this.geocoder.geocode({'location': latlng}, (results, status) => {
    //  if (status == 'OK') {
     
      this.createUserInformation(name, image, this.lat, this.lng, this.myGcode.locationName, pay);
      //this.pop.hideLoader()
    //}


 // }
  //  })
}else{

  this.createUserInformation(name, image, 5.488334, 7.5190356, 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria', pay);

}
  }
    
     
    })
  }



  ToggleChange_1(){
    this.myGcode.locationChange = true
    this.cMap.onDestinatiobarHide = false;
    this.cMap.map.setClickable(true);
    this.cMap.showDone = true
    this.hidelocator = false
    this.cMap.isLocationChange = true
  }

  ToggleChange_2(){
   this.myGcode.locationChange = false
    this.cMap.onLocationbarHide = false;
    this.cMap.map.setClickable(true);
    this.cMap.showDone = true
    this.hidelocator = false
    this.cMap.isLocationChange = false;
  }




startListeningForResponse(){
     
 ///Here we listen for any changes in the DB
 if (this.act.user != null){
 this.connect_change  = true
 this.picked_up  = true
 this.driver_picked  = false
 this.dropped  = true
 this.rated  = true
 this.deleted  = true

 this.hasRated  = true
 this.paid  = true
 this.paid_cash  = true
 this.ended = true;
 this.not_ended  = true
 
 let connectedRef = firebase.database().ref(".info/connected");

//  if (this.platform.is('android'))
//     this.backgroundMode.enable();

   //console.log(this.uid)
  
    
    this.platform.ready().then(()=>{
      this.platform.registerBackButtonAction(()=>this.pop.presentToast(this.lp.translate()[0].cantexit));
    })
    

    this.act.getActiveProfile(this.uid).on('child_added', customerSnapshot => {
      let activity = customerSnapshot.val();
      if (activity == null){
       this.storage.remove(`currentUserId`);
       this.ReturnHome();
      }else{
        if (!this.isRidesharing){
        
       this.PerformActionOnAdd(activity)
        }else{
      this.PerformActionOnPoolAdd(activity)
        }
      }
    });

    this.eventProvider.getChatList(this.uid).on('child_added', snapshot => {
       if (snapshot.val().Driver_Message){
         this.notification = true;
      this.pop.presentToast('New Message From Driver')
      this.vibration.vibrate(1000);
       }
    })


    

    
    this.act.getActiveProfile(this.uid).on('child_changed', customerSnapshot => {
      let activity = customerSnapshot.val();
      if (!this.isRidesharing){
       this.PerformActionOnChange(activity)
      }else{
      this.PerformActionOnPoolChange(activity)
      }

       console.log('activity changed');
       clearTimeout(this.timeTonotify);
       this.NotifyTimes = 0
       this.clearThis = false;
       if (this.can){

         this.can = false;
       if (this.rideShare){
        
         
         
       // this.ph.getAllPool().child(this.poolID).remove().then((d)=>{console.log(d)}).catch((d)=>{console.log(d)})
       }
      }
    });

   


    this.act.getActiveProfile(this.uid).on('child_removed', customerSnapshot => {
      console.log('project to be cleared')
       if (!this.rechecking){
         this.PerformActionOnCancel()
         connectedRef.off("value")
         this.cMap.hasCompleted = true;
         this.poolState = true;
         this.dProvider.isDriver = false;
         console.log('project cleared')
         if (this.canClear){
          this.ph.getAllDrivers().off('value')
          this.ph.getAllDrivers().off('child_changed')
          this.ph.getAllDrivers().off('child_removed')
          this.ph.getAllDrivers().off('child_added')
          this.canClear = false;
         }
      }
     });


     connectedRef.on("value", (snap) => {
      
       if (snap.val() === true) {
        // this.eventProvider.UpdateNetworkSate(true, this.uid);
         //console.log('network is okay')
    
         if (this.connect){
         this.pop.hideLoader()
         this.connect = false
         //console.log('cancelled network error loader')
     
         }
       } else {
         if (!this.connect){
         this.pop.presentLoader(this.lp.translate()[0].lost);
         this.connect = true
         }
       //  this.eventProvider.UpdateNetworkSate(false, this.uid);
       
         //console.log('network is bad')
         
       }
    
     });

  
    }else{
      setTimeout(() => {
        this.startListeningForResponse()
      }, 200);
    }
    
  }






PerformActionOnAdd(activity){
  if (this.returningUser){
    if (activity.Driver_location != null){ 
     this.pop.presentSimpleLoader(this.lp.translate()[0].recover);
     this.hidelocator = true;
     this.connect = true;

 
    
     setTimeout(()=>{
      this.PerformActionOnChange(activity);
      if (this.platform.is('cordova')){
      this.vibration.vibrate(1000);
      
      }
    }, 1000)

     this.DriverFound(activity.Driver_location,
     activity.Driver_plate, 
     activity.Driver_carType,
     activity.Driver_name, 
     activity.Driver_seat,
     activity.Driver_locationName, 
     activity.Driver_rating, 
     activity.Driver_picture, 
     activity.Driver_number,
     activity.Client_locationName,
     activity.Client_location[0],
     activity.Client_location[1],
     activity.Driver_rateText,
     activity.Driver_ID
    );

   // this.cMap.onDestinatiobarHide = true;
   // document.getElementById("destination").innerText = activity.Client_destinationName;;


if (activity.Driver_location[0] != null){
   let driverPos = new google.maps.LatLng(activity.Driver_location[0], activity.Driver_location[1])
   let userPos
   userPos = new google.maps.LatLng(activity.Client_location[0], activity.Client_location[1])
  
   this.dProvider.calcRoute(userPos, driverPos, true, false, 'ghjtfd')
}


    
    }

  }
  

}



PerformActionOnPoolAdd(activity){
  if (this.returningUser){
    if (activity.Driver_location != null){ 
     this.pop.presentSimpleLoader(this.lp.translate()[0].recover);
     this.hidelocator = true;
     this.connect = true;

     setTimeout(()=>{
      this.PerformActionOnPoolChange(activity);
      if (this.platform.is('cordova')){
      this.vibration.vibrate(1000);
      }
    }, 1000)

     this.DriverFound(activity.Driver_location,
     activity.Driver_plate, 
     activity.Driver_carType,
     activity.Driver_name, 
     activity.Driver_seat,
     activity.Driver_locationName, 
     activity.Driver_rating, 
     activity.Driver_picture, 
     activity.Driver_number,
     activity.Pool_locationName,
     activity.Pool_location[0],
     activity.Pool_location[1],
     activity.Driver_rateText,
     activity.Driver_ID
    );

   // this.cMap.onDestinatiobarHide = true;
   // document.getElementById("destination").innerText = activity.Client_destinationName;;


if (activity.Driver_location[0] != null){
   let driverPos = new google.maps.LatLng(activity.Driver_location[0], activity.Driver_location[1]);
   let userPos;
   userPos = new google.maps.LatLng(activity.Pool_location[0], activity.Pool_location[1]);
   this.dProvider.calcRoute(userPos, driverPos, true, false, 'ghjtfd');
}


    
    }

  }
  

}



 PerformActionOnChange(activity){

  if (activity.Client_Arrived && this.arrived ){
   this.arrived = false;
   this.pop.showPimp('Your Driver Has Arrived');
  }
 
if (activity.Client_PickedUp && this.picked_up ){
  this.picked_up = false;
  this.driver_picked = true;
  this.cMap.isDestination = true;
  this.pop.SmartLoader('Confirming pickup..');
  
    this.cMap.ClearDetection = true;
   this.canShowBars = false;
   this.toggleMore = false;
   //this.act.getPoolProfile().remove()
  //console.log('Picked Up')
  this.PickedUp(activity)
  let lat;
  let lng;
  this.type = 'arrow-up'
  this.myGcode.Reverse_Geocode(this.cMap.lat, this.cMap.lng, this.cMap.map, false)
  if (this.platform.is('cordova')){
 //this.backgroundTask(this.lp.translate()[0].drive)
    this.pop.presentLoader('Picked up');
    
  this.geocoder.geocode( { 'address': activity.Client_destinationName}, (results, status) => {
    if (status == 'OK') {
     var position = results[0].geometry.location
     lat = position.lat();
     lng = position.lng();
     let location = [
       lat,
       lng
     ]

    }
  if (this.platform.is('cordova')){
    this.cMap.stopMovingUsertoDriver = true;
    this.cMap.detectUserChange.unsubscribe();
    console.log('destination');
  this.cMap.map.clear().then(()=>{
   console.log('now moving user to destination');
  this.cMap.setMarkersDestination(lat, lng);
 // document.getElementById("header").innerHTML = 'Estimated Arrival ' + this.dProvider.time2;
  let urPos = new google.maps.LatLng(lat, lng);
  
  let uLOC = new google.maps.LatLng(this.cMap.lat, this.cMap.lng);
   this.dProvider.calcDestRoute(this.name, uLOC, urPos, activity.Client_destinationName, this.uid);
    this.pop.hideLoader()

  })
}
    })
  }

}

if (activity.Client_Deleted && this.deleted){
  this.deleted = false
  //console.log('Deleted')
  this.pop.SmartLoader('');
  this.pop.presentToast(this.lp.translate()[0].drivercancel)
 // this.pop.clearAll(this.uid, true)
  this.cMap.ClearDetection = true;
  
   this.HideMe()
}

// if (activity.Pool_ended && this.isPool){
// this.isPool = false
// }

if (activity.Client_Dropped && this.dropped){
  //console.log('Dropped')
  this.dropped = false;
  document.getElementById("header").innerHTML = this.lp.translate()[0].end;
  this.pop.presentSimpleLoader(this.lp.translate()[0].waiting);
  this.ph.uid = this.uid
  this.Charged(activity)
  console.log('should change now to has ended')
  //this.backgroundTask(this.lp.translate()[0].drop)

}


if (activity.Client_hasPaid && this.paid) {
  this.paid = false
  
  ////console.log('Paid card')
 
  this.hasRated = false;
  //console.log('Both Driver and User has rated')
  //this.pop.hideLoader();
 // this.pop.presentSimpleLoader('Closing Connection...');
    this.navCtrl.push(RatePage, { 'eventId': activity.Driver_ID }).then(()=>{
    var currentdate = new Date(); 
    var datetime =   currentdate.getDate() + "/"  
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
  let destiny;       
   
    destiny = activity.Client_destinationName

   
  //  //console.log(this.name, this.price, datetime, this.myGcode.locationName, activity.Client_destinationName, activity.Driver_RateValue, activity.Driver_RateText)
    this.ph.createHistory(this.name, this.price, datetime, this.myGcode.locationName, destiny ).then(suc =>{
      //console.log('here and about to end connection')
            
  if (this.referal)
  if (this.referalID.replace(/[^A-Z,0-9]/gi, "").length == 4){
    console.log(this.price*3/100)
 this.ph.UpdateRefEarnings(this.price*3/100).then(()=>{})
    console.log('Passenger Referal Paid' + this.referal)
  }else{
   this.ph.UpdateRefEarnings2(this.price*3/100).then(()=>{})
    console.log('Driver Referal Paid' + this.referal)
  }
        
              this.act.getActivityProfile(this.uid).update({
                Client_ended: true,
              }).then(()=>{
                //console.log('cleared the db for client')
                clearTimeout(this.timeTonotify);
                this.pop.clearAll(this.uid, true);
                this.pop.hasCleared = true;
                //console.log(this.NotifyTimes);
                this.clearAll()
                this.hasCalled = true
                //this.pop.show('All Our Drivers Are Busy, Please Try Again. Sorry For The Incovenience.')
               
                // this.act.getPoolProfile().remove().then(()=>{
                //    this.canPool = false;
                // })
            })

          
           
          
        
          


  })
    
  })

  
} 

if (activity.Client_paidCash) {
 
    if (this.paid_cash){
  //console.log('I did this haha, come and get me') 
  this.paid_cash = false
  this.price = activity.Client_price
  let location =  activity.Client_locationName 
  let destination =  activity.Client_destinationName
  let obj = {id: this.uid, from: location, to: destination, charge: this.price, info: this.lp.translate()[0].paidcash };
  let modal = this.modalCtrl.create('PaymentApprovalPage', obj);

  modal.present();
  modal.onDidDismiss(() => {
    this.act.getActivityProfile(this.uid).update({
      Client_hasPaid: true,
    }).then(()=>{
   /// this.navCtrl.push(RatePage, { 'eventId': this.uid });
  })
 
  })
}

} 


if (this.connect_change){
  
  //console.log('connect now')
 this.Onconnect(activity)
 this.connect_change = false
}
 



this.userDestName = activity.Client_destinationName;

this.dProvider.name =  activity.Driver_name;
this.number = activity.Driver_number
this.pop.uid = this.uid

 
if (this.not_ended && activity.Driver_locationName != null){
 this.cMap.D_lat = activity.Driver_location[0]
 this.cMap.D_lng = activity.Driver_location[1]
 let userPos

 userPos = new google.maps.LatLng(activity.Client_location[0], activity.Client_location[1])
 

 let driverPos = new google.maps.LatLng(activity.Driver_location[0], activity.Driver_location[1])
 //console.log(this.myGcode.locationName, activity.Driver_locationName)
 this.driverLocationName = activity.Driver_locationName


 if (activity.Client_PickedUp == false){
  //console.log('driver has not picked') 
 this.dProvider.calcRoute(userPos, driverPos, true, false, 'wertyrw')
 }

 }
 }





 PerformActionOnPoolChange(activity){

  if (this.platform.is('cordova')){
  //   if (this.platform.is('android'))
  // this.backgroundMode.setDefaults({
  //   title: this.settings.appName,
  //   text: this.lp.translate()[0].driverarive + this.dProvider.time,
  //   bigText: true,
  //   hidden: false,
  // })
  }

 
if (activity.Pool_PickedUp && this.picked_up ){
  this.driver_picked = true;
  this.cMap.isDestination = true;
  this.pop.SmartLoader('');
  
    this.cMap.ClearDetection = true;
   this.canShowBars = false;
   this.toggleMore = false;
   //this.act.getPoolProfile().remove()
  //console.log('Picked Up')
  this.PickedUp(activity)
  let lat;
  let lng;
  this.type = 'arrow-up'
  this.myGcode.Reverse_Geocode(this.cMap.lat, this.cMap.lng, this.cMap.map, false)
  if (this.platform.is('cordova')){
 //this.backgroundTask(this.lp.translate()[0].drive)
    this.pop.presentLoader('');
    this.picked_up = false;
  this.geocoder.geocode( { 'address': activity.Pool_destinationName}, (results, status) => {
    if (status == 'OK') {
     var position = results[0].geometry.location
     lat = position.lat();
     lng = position.lng();
     let location = [
       lat,
       lng
     ]

    }
  if (this.platform.is('cordova')){
    this.cMap.stopMovingUsertoDriver = true;
    this.cMap.detectUserChange.unsubscribe();
    console.log('destination')
  this.cMap.map.clear().then(()=>{
   console.log('now moving user to destination')
  this.cMap.setMarkersDestination(lat, lng);
 // document.getElementById("header").innerHTML = 'Estimated Arrival ' + this.dProvider.time2;
  let urPos = new google.maps.LatLng(lat, lng);
  
  let uLOC = new google.maps.LatLng(this.cMap.lat, this.cMap.lng);
   this.dProvider.calcDestRoute(this.name, uLOC, urPos, activity.Pool_destinationName, this.uid);
    this.pop.hideLoader()

  })
}
    })
  }

}

if (activity.Pool_Deleted && this.deleted){
  this.deleted = false
  //console.log('Deleted')
  this.pop.SmartLoader('')
  this.pop.presentToast(this.lp.translate()[0].drivercancel)
 // this.pop.clearAll(this.uid, true)
  this.cMap.ClearDetection = true;
  
   this.HideMe()
}

// if (activity.Pool_ended && this.isPool){
// this.isPool = false
// }

if (activity.Pool_Dropped && this.dropped){
  //console.log('Dropped')
  if (!this.isPerKilo){
  this.dropped = false;
  document.getElementById("header").innerHTML = this.lp.translate()[0].end;
  this.pop.presentSimpleLoader(this.lp.translate()[0].waiting);
  this.ph.uid = this.uid
  this.Charged(activity)
  //console.log('should change now to has ended')
  //this.backgroundTask(this.lp.translate()[0].drop)
  }else{
    //this.calculateThis(activity.Pool_locationName, activity)
  }
}


if (activity.Pool_hasPaid && this.paid) {
  this.paid = false
  
  ////console.log('Paid card')
 
  this.hasRated = false;
  //console.log('Both Driver and User has rated')
  //this.pop.hideLoader();
 // this.pop.presentSimpleLoader('Closing Connection...');
    this.navCtrl.push(RatePage, { 'eventId': activity.Driver_ID }).then(()=>{
    var currentdate = new Date(); 
    var datetime =   currentdate.getDate() + "/"  
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
  let destiny;       
   
    destiny = activity.Pool_destinationName

   
  //  //console.log(this.name, this.price, datetime, this.myGcode.locationName, activity.Pool_destinationName, activity.Driver_RateValue, activity.Driver_RateText)
    this.ph.createHistory(this.name, this.price, datetime, this.myGcode.locationName, destiny ).then(suc =>{
      //console.log('here and about to end connection')
    
        
              this.act.getActivityProfile(this.uid).update({
                Pool_ended: true,
              }).then(()=>{
                //console.log('cleared the db for Pool')
                clearTimeout(this.timeTonotify);
                this.pop.clearAll(this.uid, true);
                this.pop.hasCleared = true;
                //console.log(this.NotifyTimes);
                this.clearAll()
                this.hasCalled = true
                //this.pop.show('All Our Drivers Are Busy, Please Try Again. Sorry For The Incovenience.')
               
                // this.act.getPoolProfile().remove().then(()=>{
                //    this.canPool = false;
                // })
            })

          
           
          
        
          


  })
    
  })

  
} 

if (activity.Pool_paidCash) {
 
    if (this.paid_cash){
  //console.log('I did this haha, come and get me') 
  this.paid_cash = false
  this.price = activity.Pool_price
  let location =  activity.Pool_locationName 
  let destination =  activity.Pool_destinationName
  let obj = {id: this.uid, from: location, to: destination, charge: this.price, info: this.lp.translate()[0].paidcash };
  let modal = this.modalCtrl.create('PaymentApprovalPage', obj);

  modal.present();
  modal.onDidDismiss(() => {
    this.act.getActivityProfile(this.uid).update({
      Pool_hasPaid: true,
    }).then(()=>{
   /// this.navCtrl.push(RatePage, { 'eventId': this.uid });
  })
 
  })
}

} 


if (this.connect_change){
  
  //console.log('connect now')
 this.Onconnect(activity)
 this.connect_change = false
}
 



this.userDestName = activity.Pool_destinationName;

this.dProvider.name =  activity.Driver_name;
this.number = activity.Driver_number
this.pop.uid = this.uid

 
if (this.not_ended && activity.Driver_locationName != null){
 this.cMap.D_lat = activity.Driver_location[0]
 this.cMap.D_lng = activity.Driver_location[1]
 let userPos

 userPos = new google.maps.LatLng(activity.Pool_location[0], activity.Pool_location[1])
 

 let driverPos = new google.maps.LatLng(activity.Driver_location[0], activity.Driver_location[1])
 //console.log(this.myGcode.locationName, activity.Driver_locationName)
 this.driverLocationName = activity.Driver_locationName


 if (activity.Pool_PickedUp == false){
  //console.log('driver has not picked') 
 this.dProvider.calcRoute(userPos, driverPos, true, false, 'wertyrw')
 }

 }
 }



//  backgroundTask(text){
//   if (this.platform.is('android'))
//   this.backgroundMode.setDefaults({
//     title: this.settings.appName,
//     text: text,
//     bigText: true,
//     hidden: false,
//   })
//  }



 ClearMe(){
  this.pop.clearAll(this.uid, true);  
 }


 openNews(){
  let mod = this.modalCtrl.create('NewsPage')
  mod.present();
  mod.onDidDismiss(() => {
   this.hideNews = true
   this.storage.set(`News`, this.news)
  })
}


 HideMe(){
  this.PerformActionOnCancel();
 }




  PerformActionOnCancel(){
  //if (this.rechecking){
    this.clearAll()
    this.hasCalled = true
  //  }
  console.log('cleared all')
  }


  clearAll(){
    if (this.hasCalled){
    this.startedNavigation = false;
   // this.ph.getAllPool().child(this.poolID).remove().then((d)=>{console.log(d);this.ph.getAllPool().off()}).catch((d)=>{console.log(d)})
    //this.storage.remove(`currentUserId`);
    this.isPool = true;
    this.ThisPool = false;
    this.paid_cash2  = true;
    this.paid_cash  = true;
    this.ended = true;
    this.deleted = true;
    this.canCancel = false;
    this.canClear = true
    this.hasCalled = false;
    this.cMap.stopMovingUserDestination = true;
    this.cMap.stopMovingUsertoDriver = true;
    // this.cMap.detectUserChange.unsubscribe();
    // this.cMap.detectCarChange.unsubscribe();
   //this.canIncrease = false;
   if (this.called){
     this.called = false;
    this.cMap.map.clear().then(()=>{
      this.cMap.refreshForChangesRemove();
      this.cMap.map.setClickable(true);
      this.StartTracker(true);
    });
  }

    if (!this.platform.is('cordova')){
      this.cMap.showDriversOnMap();
      console.log('retried')
    }
  
    this.cMap.onbar2 = false
    this.cMap.onbar3 = false
    this.cMap.isNavigate = false;
    this.canStop = true
    //this.cMap.element = this.mapComponent
    this.cMap.hasRequested = false;
   // this.onRequest = false;
    this.cMap.toggleBtn = false;
    this.cMap.onPointerHide = false;
   
   // this.cMap.onDestinatiobarHide = false;
    this.pop.allowed = true;
     this.cMap.canMess = false;
   // document.getElementById("header").innerText = "Requesting A Ride";
    //this.cMap.map.setOptions({draggable: true});
  //  this.cMap.isCarAvailable = true;
    this.cMap.car_notificationIds = [];
    this.pop.canDismiss = true
    this.storage.remove(`currentUserId`);
    this.cMap.cars = [];
    this.hasChecked = false;
    this.can = true;
      //this.act.getPoolProfile().remove();
    this.clearThis = true;
     console.log('closed connection')
    this.ReturnHome();
    this.cMap.isDestination = false;
    this.cMap.selected_destination_bar = false;
    this.cMap.isLocationChange = false
    this.dProvider.price = null;
    this.actualPrice = null;
    this.highPrice = null;
    this.cMap.showDone = false;
    this.pop.onRequest = false;
    this.canShowBars = true;
    this.toggleMore = true;
    this.poolAvailable = false;
    this.choseClassic = false;
      this.choseTricycle = false;
    this.cMap.isNavigate = false;
    this.rechecking = false;
    this.poolState = false;
    this.isPerKilo = false;
    this.connect_change = true;
    this.canIncrease = false;
    this.not_ended = false;
    this.hidelocator = false; 
    this.act.getActiveProfile(this.uid).off('child_added')
    this.act.getActiveProfile(this.uid).off('child_changed')
    this.act.getActiveProfile(this.uid).off('child_removed')
    this.bookStarted = false
    this.hideTopbuttons = false
    
   
    //this.cMap.map.setClickable(true)
 //  this.cMap.ClearDetection = false;
  }
  }




   hideFunctionsOnDriverFound()
   {
    this.cMap.onbar2 = false
    this.cMap.onbar3 = true
  
    this.cMap.toggleBtn = true;
    this.cMap.onPointerHide = true;
   
    this.cMap.car_notificationIds = [];
    clearTimeout(this.timeTonotify)
   }  

  
   DriverFound(location, plate, carType, name, seat, locationName, rating, picture, number, userPos, client_lat, client_lng, review, driverID): Promise <any>{
    this.location = location; this.plate = plate; this.carType = carType; this.name = name; this.seat = seat; this.rating = rating; this.review = review; this.picture = picture;
    this.pop.SmartLoader('');
    this.hideFunctionsOnDriverFound();
    
    this.cMap.lat = client_lat; 
    this.cMap.lng = client_lng;
    //this.calcRoute(userPos, locationName)
  if (location){
    this.cMap.D_lat = location[0]
    this.cMap.D_lng = location[1]
  }else{
   // clearTimeout(this.timeTonotify);
    this.ClearMe();
 
    //console.log('i cancelled')
    if (this.bookStarted)
    this.bookStarted = false
    this.pop.presentToast(this.lp.translate()[0].nodriver)
  }
  
    if (this.platform.is('cordova') && location){
    this.cMap.setMarkers(this.uid);
    }
    return
    }


    Onconnect(activity){
      this.pop.presentSimpleLoader(this.lp.translate()[0].driverfound)
      
      if (this.platform.is('cordova'))
      this.vibration.vibrate(1000);
     
    
      this.pop.uid = this.uid
    //  this.eventProvider.UpdateSate(true, this.uid);
      //console.log(this.uid)
      this.DriverFound(activity.Driver_location,
      activity.Driver_plate, 
      activity.Driver_carType,
      activity.Driver_name, 
      activity.Driver_seats,
      activity.Driver_locationName, 
      activity.Driver_rating, 
      activity.Driver_picture, 
      activity.Driver_number,
      activity.Client_locationName,
      activity.Client_location[0],
      activity.Client_location[1],
      activity.Driver_rateText,
      activity.Driver_RegNum
     )
     document.getElementById("destination").innerHTML = this.lp.translate()[0].dest;
     this.storage.set(`currentUserId`, this.uid)
  

  }



  

    PickedUp(activity){
     // this.pop.SmartLoader('')
      if (this.platform.is('cordova')){
     // this.cMap.map.setClickable(false)
    }
   // this.hideButtons()
    //console.log(this.cMap.onbar3)

      this.cMap.toggleBtn = false; 
      //console.log('should change now to has begun')
 //   document.getElementById("header").innerHTML = 'Journey Has Started';
     
      if ( activity.Client_price == null){
      
        this.cMap.toggleBtn = false;
        this.picked_up = false;
       
      }
  
    }


    Charged(activity){
      if (this.platform.is('cordova'))
      this.cMap.map.setClickable(false)

      this.price = activity.Client_price //|| activity.Pool_price;
      let location =  activity.Client_locationName //|| activity.Pool_locationName;
      let destination =  activity.Client_destinationName //|| activity.Pool_destinationName;
  
  if ( this.ph.card != null){
    let obj = {id: this.uid, from: location, to: destination, charge: this.price, info: this.lp.translate()[0].check };
    let modal = this.modalCtrl.create('PaymentApprovalPage', obj);
    ////console.log('I did this haha, come and get me') 
    modal.present();
    modal.onDidDismiss(() => {
      if (this.settings.isStripe){
        this.stripe.ChargeCard(this.price, this.uid)
      }else{
    this.paystack.ChargeCard(this.ph.card, this.ph.month, this.ph.cvc, this.ph.year, this.price*100, this.ph.email, this.uid)
      }
  })


   } else{
   // if (!this.hasStarted){
    this.act.getActivityProfile(this.uid).update({
      Client_paidCash: true,
   })
  // }
   }
 // })

    }

     


  

}
