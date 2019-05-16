import { Injectable } from '@angular/core';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { EventProvider } from '../../providers/event/event';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { Platform, ModalController} from 'ionic-angular';
import { NativeMapContainerProvider } from '../../providers/native-map-container/native-map-container';
//import firebase from 'firebase/app';
import { LanguageProvider } from '../../providers/language/language';
declare var google;
/*
  Generated class for the DirectionserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DirectionserviceProvider {
  public price: any;
  public time: any;
  public canDismiss: boolean = false;
  public name: string;
  public id : any;
  public highPrice: any;
  public locationName: any;
  public hasGottenTripDist: boolean = false;
  public calculateBtn: boolean = false;
  public  pricePerKm : any;
  public  fare : any ;
  public time2: any;
   public rate:any = 2;
    public extra:any = 50;
    public fix:any = 65;
    public above:any = 110;
    public next:any = 55;
    public min:any = 3;
    public cons:any = 4;
    public mainFare: any;
  appPrice: any;
  public canUpdateDestination: boolean = false;
  public isDriver: boolean = false;
  destinationName: any;
  public  service : any = new google.maps.DistanceMatrixService();
   public duration: any;
  constructor( private eProvider: EventProvider, public lp: LanguageProvider, public modalCtrl: ModalController, public platform: Platform, public cMap: NativeMapContainerProvider, public gCode: GeocoderProvider, public popOp: PopUpProvider) {
    console.log(this.fare)
  }

  calcRoute(start, stop, isDriver, canUpdateDestination, destinationName) {
    if (!this.platform.is('cordova')){
      start = new google.maps.LatLng(5.4975394, 7.5029374)
      this.gCode.locationName = 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria'
    }

     if (this.calculateBtn){
  this.popOp.presentLoader('Measuring distance')
     }
     
       this.service.getDistanceMatrix(
         {
           origins: [start, this.gCode.locationName],
           destinations: [destinationName, stop],
           travelMode: 'DRIVING',
           unitSystem: google.maps.UnitSystem.METRIC,
           avoidHighways: false,
           avoidTolls: false,
         }, (response, status) => {
           this.callback(response, status)
         })
      
         this.isDriver = isDriver;
         this.canUpdateDestination = canUpdateDestination;
         this.destinationName = destinationName
   
  }

  callback(response, status) {
    // See Parsing the Results for
    // the basics of a callback function.
    console.log(response, status);
    
  
   
    if (status === 'OK'){
      // loading.present();
    if (response.rows[0].elements[1].status == 'ZERO_RESULTS' || response.rows[0].elements[1].status == 'NOT_FOUND'){
      this.popOp.showPimp('No directions by Driving Found For That Route. Distance May be too far.')
      this.popOp.hideLoader();
      this.cMap.canShowchoiceTab = false;
     // this.cMap.norideavailable = true
    }else{
    
      let duration = Math.round(response.rows[0].elements[1].duration.value/60)
      let distance = Math.round(response.rows[0].elements[1].distance.value/1000)
      this.duration = duration
      this.price = (this.fare + distance + duration) * this.pricePerKm
      console.log('This is the duration' + duration)
      console.log('This is the distance' + distance)
      if (this.price < this.mainFare){
      this.price =  this.mainFare;
      }

      this.highPrice = this.price + this.price*25/100;
      //this.popOp.price  = this.price;
      console.log('im here in dprovider' + this.pricePerKm , this.fare , duration)
      this.time = response.rows[0].elements[1].duration.text;
      console.log(this.price);
      //this.popOp.hideLoader();
      let rect = document.getElementById("header");
      if (this.isDriver && rect){
       rect.innerText = this.lp.translate()[0].arrival + this.time;
      //  loading.dismiss()
     }

      
     console.log(response.rows[0].elements[1].distance.value/1000, response.rows[0].elements[1].duration.value, response.rows[0].elements[1].duration.text)
    }
  }else{
    this.cMap.norideavailable = true
    this.popOp.hideLoader();
  }
  }


  // UpdateInformation(destinationName: string, price: any){
  //   this.eProvider.UpdateDestination(destinationName, price, this.id).then(success => {
  //    this.popOp.showPimp('Destination Set');
  //   }).catch(error =>{})
  // }


  calcDestRoute(name, start, stop, destinationName,  id) {
    // this.isDriver2 = isDriver2
    if (!this.platform.is('cordova')){
      start = new google.maps.LatLng(5.4975394, 7.5029374)
      this.gCode.locationName = 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria'
    }
 
       this.service.getDistanceMatrix(
         {
           origins: [start, this.gCode.locationName],
           destinations: [destinationName, stop],
           travelMode: 'DRIVING',
           unitSystem: google.maps.UnitSystem.METRIC,
           avoidHighways: false,
           avoidTolls: false,
         }, (response, status) => {
           this.callback2(response, status, id)
         })
      
         this.destinationName = destinationName
         this.name = name
        
         let time = new Date();
         
         var hh = time.getHours();
         var mm = time.getMinutes();
         var ss = time.getSeconds() ;
 
         
        }
 



        callback2(response, status, id) {
          // See Parsing the Results for
          // the basics of a callback function.
          console.log(response, status);
         
      
          if (status == 'OK'){
          
          if (response.rows[0].elements[1].status == 'ZERO_RESULTS' || response.rows[0].elements[1].status == 'NOT_FOUND'){
        
            this.popOp.showPimp('Destination Not Yet Supported. Please Choose Another Destination')
        
          }else{
            let duration = Math.round(response.rows[0].elements[1].duration.value/60)
      let distance = Math.round(response.rows[0].elements[1].distance.value/1000)
      this.duration = duration
      this.price = (this.fare + distance + duration) * this.pricePerKm
      console.log('This is the duration' + duration)
      console.log('This is the distance' + distance)
      if (this.price < this.mainFare){
      this.price =  this.mainFare;
      }
      //this.popOp.price  = this.price;
      console.log('im here in dprovider' + this.pricePerKm , this.fare , duration)
      //this.time = response.rows[0].elements[1].duration.text;
      //console.log(this.price)distance.value/1000) * this.fare + this.pricePerKm + fareTime;
           
            //if (!this.isDriver2)
          //  this.time = response.rows[0].elements[1].duration.text;
           // else
            this.time2 = response.rows[0].elements[1].duration.text;
           //  document.getElementById("header").innerText = 'Get to Client in ' + this.time;
              
             this.popOp.canDismiss = true;
           // this.eProvider.UpdateTime(this.time2, id);
          
      
           console.log(response.rows[0].elements[1].distance.value/1000, response.rows[0].elements[1].duration.value, response.rows[0].elements[1].duration.text)
          }
          }else{
         
            this.popOp.showPimp('One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again.')
          }
        }
      
  


}
