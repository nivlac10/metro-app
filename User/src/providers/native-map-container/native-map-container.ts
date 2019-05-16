import { Injectable, NgZone } from '@angular/core';
import {
GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent, LatLng,
  //  CameraPosition,
  // MarkerOptions,
  // Marker,
  //  Geocoder,
  LatLngBounds
} from '@ionic-native/google-maps';
import { AlertController, Platform, ToastController } from 'ionic-angular';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { interval } from 'rxjs/observable/interval';
import { timer } from 'rxjs/observable/timer';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { ProfileProvider } from '../../providers/profile/profile';
import { SettingsProvider } from '../../providers/settings/settings';
declare var google: any;
declare var plugin: any;
/*
  Generated class for the NativeMapContainerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NativeMapContainerProvider {
  public onLocationbarHide: boolean = true;
  public onDestinatiobarHide: boolean = true;
  public lat: any;
  public lng: any;
  public startPos: any;
  public client: any;
  public driver: any;
  public CARS: any = [];
  public pause: boolean = true;
  public shove: boolean = true;
  public speed: number = 50; // km/h
  public marker: any;
  public canMess: boolean = true;
  public cars: any = [];
  public car_location: any = [];
  public car_notificationIds: Array<any>;
  public delay: number = 100;
  public hasRequested: boolean = false;
  public isCarAvailable: boolean = false;
  public uid: any
  public norideavailable: boolean = false;
  public canShowchoiceTab: boolean = false;
  public actual_Lat: any;
  public noGps: boolean = false;
  public actual_Lng: any;
  public isLocationChange: boolean = false;
  public onGpsEnabled: boolean = false;
  isNavigate: boolean =false;
  locations: any;
  location: any;
  public executiveStance: any = 'none';
  public tricycleStance: any = 'none';
  public standardStance: any = 'none';
  timer1: any;
  public closeDrivers: any = [];
  map: GoogleMap;
  public mapLoadComplete: boolean = false;
  public driverCarType: number = 0;
  choseCar: boolean = false;
  public toggleNav: boolean = true;
  public isClear :boolean = false;
  public onbar: boolean = false;
  public driver_Point: any;
  public classic: boolean = false;
  public smallcar: boolean = false;
  public pool: boolean = false;
  public onbar1: boolean = false;
  public onbar2: boolean = false;
  public onbar3: boolean = false;
  public canShow:  boolean = true;
  public toggleBtn: boolean = false;
  public onPointerHide: boolean = false;
  public userPos: any;
  public stopMovingUserDestination: boolean = false;
  public stopMovingUsertoDriver: boolean = false;
  public selected_destination_bar: boolean = false;
  mapElement: HTMLElement;
  public pan: number = 0;
  NotifyTimes: number = -1;
  canCheck: boolean = true;
  public isDriverAvailable: boolean = false;
  public detectCarChange: any;
  public detectUserChange: any;
  user_Point: any;
  public does: boolean = true;
  public carMarker: any = []
  public ClearDetection: boolean = false;
  public hasDone: boolean = false;
  public hasStart: boolean = false;
  public hasShown: boolean = true;
  public D_lat: any;
  public hasShow: boolean =  true;
  public car: any;
  public started: boolean = false;
  public showDone: boolean = false;
  public hasbooked: boolean = false;
  public driverPrice: any;
  public locationChange: boolean = true;
  public hasAdded: boolean = false;
  public hasCompleted: boolean = true;
  public isDestination: boolean = false;
  public CloseCars: any = [];
  public hidelocator: boolean = true;
  myTime: any;
  id: any;
  ready: boolean = false;
  public D_lng: any;
  constructor( private googleMaps: GoogleMaps, public toastCtrl: ToastController, public alert: AlertController,  public settings: SettingsProvider, public zone: NgZone, public myProf: ProfileProvider, public gcode: GeocoderProvider, public platform: Platform) {
    if (!this.platform.is('cordova')){
    this.lat = 5.4966964;
    this.lng = 7.5297323;
    }
  }

 ///Start the cordova map
  loadMap() {
    //console.log('map called')
    
    
    let lat;
    let lng;
    let zoom;
      lat = 5.4982219
      lng = 7.5019607
      zoom = 6
     
    
    
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: lat,
          lng: lng
        },
        zoom: zoom,
        tilt: 0
      }
    };



    this.map = this.googleMaps.create(document.getElementById("map"), mapOptions);
  //   if (!this.platform.is('browser')){
  //   plugin.google.maps.environment.setEnv({
  //     'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyC-bynE-7w6u9N7yC1Y1S-e1CXQvsiO2cA',
  //     'API_KEY_FOR_BROWSER_DEBUG': ''
  //   });
  // }
    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        //console.log('Map is ready!');
        this.hasStart = true;
        this.map.setTrafficEnabled(false)
        this.map.setIndoorEnabled(false)
        this.map.setClickable(false)
        this.map.setCompassEnabled(false)

        this.map.getMyLocation().then(location => {
          console.log(location.latLng);
            
            this.AnimateToLoc(location); 
            this.location = location;
            //this.actual_Lat = location.latLng.lat
           // this.actual_Lng = location.latLng.lng
            this.gcode.Reverse_Geocode(location.latLng.lat, location.latLng.lng, this.map, false)
            this.userPos = new google.maps.LatLng(location.latLng.lat, location.latLng.lng)
         
        }).catch(er => {
         this.showError('No GPS signal. Enter address or enable location services.')
         
        }) 

      });
  }


  //check if gps is available by trying to getlocation info which automatically handles everything
  checkGps(){
   let kush = setInterval(() => {
     // this.map = this.googleMaps.create(document.getElementById("op"), mapOptions);
      this.map.getMyLocation().then(location =>{
        //console.log('location now on')
        this.loadMap();
        clearInterval(kush)
      })
    }, 2000);
    
  }

  showError(title){
    let alert = this.alert.create({
      title: title,
      buttons: [ {
        text: 'Okay',
        role: 'cancel',
        handler: () => {
          this.checkGps();
         ///this.refreshForChangesRemove()
         //this.noGps = true;
        }
      },],
      enableBackdropDismiss: false 
    });
    alert.present();
  }



//Start the map touch detection
 PumpControls(){

 this.map.on(GoogleMapsEvent.CAMERA_MOVE_START).subscribe(start =>{
    this.hidelocator = false;
    this.pause = false;
 if (!this.hasRequested){
 // this.map.refreshLayout();
    // let centerBar = document.getElementById("onbar").style.display = 'none'

   // let location = document.getElementById("location").style.marginTop = '-140px'
    
    //this.onDestinatiobarHide = false

    clearTimeout(this.timer1);
    

   // let bottomBar1 = document.getElementById("bar2").style.display = 'none'

   }
   
       
  });

  this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe(start =>{
    
    this.pause = true;
  //Check if the user has already booked a ride
   if (!this.hasRequested){
      
      if (this.canCheck && this.ready){
        this.canCheck = false
        //console.log('move ended')
        
      }
   //   this.checkForDriversAroundUser()
      
     

      
        if (!this.platform.is('cordova')){
          this.lat = 4.883364;
          this.lng = 7.025034;
          //console.log('move ended 2')
        }else{
          if (this.isLocationChange){
        let center = this.map.getCameraPosition();
        this.lat = center.target.lat;
        this.lng = center.target.lng;
        this.gcode.Reverse_Geocode(this.lat, this.lng, this.map, false)
          }else{
            let center = this.map.getCameraPosition();
            let lat = center.target.lat;
        let lng = center.target.lng;
        this.gcode.Reverse_Geocode(lat, lng, this.map, false)
          }
  
        }

     

      }
    
     
  });

  }



 ///Animate to user location 
  AnimateToLoc(location){
  
   //alert(location.latLng)
   if (!this.hasbooked){
   this.map.animateCamera({
    target: location.latLng,
    zoom: 15,
    tilt: 0,
    bearing: 0,
    duration: 1000
   }).then(distanceApart =>{
    console.log('camera done')
     this.lat = location.latLng.lat
     this.lng = location.latLng.lng
    // alert('locked')
      //console.log(this.lat, this.lng)
      this.PumpControls();
     //if (this.canShow){
       timer(2000).subscribe(()=>{
        this.showDriversOnMap();
       })
      
      this.canShow = false;
     //}
       this.hasShown = true
       this.map.setClickable(true)
      // let centerBar = document.getElementById("onbar")
      // centerBar.style.display = 'block'

      this.hasRequested = false;
      this.car_notificationIds = []
      this.isDriverAvailable = false;

    this.map.addMarker({
      title: '',
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMhSURBVGhD7ZbLaxNRFIejoH+BulJELba6UnRdFyalYlKtfWBSXTSPUnAjiAoFKVK1C0kmKW7cuBOfuKpJF1IfFcxMW3Xhzn+gFSw2leZOwLmek5xgmx6bSUydW5gffDT0nnPnm8m9N+Nx48ZN42NNnNljpQPPrYw/VyLwwnp56iANqx2S/y4zAbkSuIkFK92+m8rUDT75SvkycBPPqEzdWGn/EiePwA0sUpm62fw3ABuWk0dweVGZurEyHc24YdfI4yaeCDRRmdrBk0hm/E9xyci0/0fxSN0s8m6cju/C4C5vMDLiC0U/eoPRn0jpc2TkRHBgB5WpGV8o0gMsgbDkgJvJnQzGuqhcrXjPR3tB0qqUZrC8ocg5alMjpWUTzTGyLFC72N7dv5PanQ9I3aqUtMFNanc+8EQ/M4LrApv6E7U7n1qWTxnsoXbnwwnagdqdDydnB2p3PpycHajd+XBydqB258PJ2YHanQ++QsCxOM9JcpRqIz3Urkbw1xjkxitlGcaxltrUiq8v2skIrwZqqFy9+ELhVlZ6FeFWKlcvbcGBFl76D1hD5c5m+IvcntALxzXdjCUNM64Z4sno5JzBSa9kdHJex9piD/SmsoVjOBdNu7FJZcVhTRfXgSmgABJyJZqel219MVYcwTGsWduHc4l3yay4pn0Qh+hyjcmwlFsT06IbpSsvzHE6fJmVR3CM61mLeAt0SSm3kEZ9SU3nD4D4G/4iPGcvDbHyCI5xPX9FN18njPx+0qkt8dl8E8h/Yydeh94rd1h5BMe4nvVAB3QhLftJ6uI9N2E1Lt4YY+URHON6qqEZ5iRp2Q+cFHlusmr0337AyiM4xvVURyyTlv3UuvbLDMYfs/IIjnE91YBv4BVp2Q9t4Jr3QKNBh3uzy3tJq7aMZfP7cP1xE/8P8MmjA+nUFzyLYUN31ruk6gKOT9iDHf/8O1CZsRnRAhNfLd6MLkz24vUAc+GcxbkN0UyX29jcn5HbUoZ5NJk1I/BOcxcEHgFT8PS+wlc/ByILIPYLwc/4v+IYvoYY4mGxxzDD8PcIzkXTunHjpqZ4PL8BxvILnWFiTqAAAAAASUVORK5CYII=",
      position: location.latLng,
    })
    .then(marker => {
      this.marker = marker;
     // this.marker = true;
     
      this.hasAdded = false
      this.mapLoadComplete = true;
      console.log('marker added')
      this.map.addCircle({
        'center': location.latLng,
        'radius': 3000,
        'strokeColor' : '#A0BAE7',
        'strokeWidth': 2,
        'visible': true,
        'fillColor' : '#a6cfff2c'
    }).then(circle =>{
      setTimeout(()=>{
        circle.setRadius(0)
        // this.startChecking()
          }, 1500)
    });
   })


  })

}else{
  this.map.clear().then(()=>{
  this.map.moveCamera({
    target: location.latLng,
    zoom: 15,
    tilt: 0,
    bearing: 0,
   }).then(distanceApart =>{
    //console.log('camera done')
     this.lat = location.latLng.lat
     this.lng = location.latLng.lng
    // alert('locked')
      //console.log(this.lat, this.lng)
      this.PumpControls();
     //if (this.canShow){
    
      this.canShow = false;
     //}
       this.hasShown = true
       this.map.setClickable(true)
      // let centerBar = document.getElementById("onbar")
      // centerBar.style.display = 'block'
      timer(2000).subscribe(()=>{
        this.showDriversOnMap();
       })
      this.hasRequested = false;
      this.car_notificationIds = []
      this.isDriverAvailable = false;
      if (this.does){
    this.map.addMarker({
      title: '',
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMhSURBVGhD7ZbLaxNRFIejoH+BulJELba6UnRdFyalYlKtfWBSXTSPUnAjiAoFKVK1C0kmKW7cuBOfuKpJF1IfFcxMW3Xhzn+gFSw2leZOwLmek5xgmx6bSUydW5gffDT0nnPnm8m9N+Nx48ZN42NNnNljpQPPrYw/VyLwwnp56iANqx2S/y4zAbkSuIkFK92+m8rUDT75SvkycBPPqEzdWGn/EiePwA0sUpm62fw3ABuWk0dweVGZurEyHc24YdfI4yaeCDRRmdrBk0hm/E9xyci0/0fxSN0s8m6cju/C4C5vMDLiC0U/eoPRn0jpc2TkRHBgB5WpGV8o0gMsgbDkgJvJnQzGuqhcrXjPR3tB0qqUZrC8ocg5alMjpWUTzTGyLFC72N7dv5PanQ9I3aqUtMFNanc+8EQ/M4LrApv6E7U7n1qWTxnsoXbnwwnagdqdDydnB2p3PpycHajd+XBydqB258PJ2YHanQ++QsCxOM9JcpRqIz3Urkbw1xjkxitlGcaxltrUiq8v2skIrwZqqFy9+ELhVlZ6FeFWKlcvbcGBFl76D1hD5c5m+IvcntALxzXdjCUNM64Z4sno5JzBSa9kdHJex9piD/SmsoVjOBdNu7FJZcVhTRfXgSmgABJyJZqel219MVYcwTGsWduHc4l3yay4pn0Qh+hyjcmwlFsT06IbpSsvzHE6fJmVR3CM61mLeAt0SSm3kEZ9SU3nD4D4G/4iPGcvDbHyCI5xPX9FN18njPx+0qkt8dl8E8h/Yydeh94rd1h5BMe4nvVAB3QhLftJ6uI9N2E1Lt4YY+URHON6qqEZ5iRp2Q+cFHlusmr0337AyiM4xvVURyyTlv3UuvbLDMYfs/IIjnE91YBv4BVp2Q9t4Jr3QKNBh3uzy3tJq7aMZfP7cP1xE/8P8MmjA+nUFzyLYUN31ruk6gKOT9iDHf/8O1CZsRnRAhNfLd6MLkz24vUAc+GcxbkN0UyX29jcn5HbUoZ5NJk1I/BOcxcEHgFT8PS+wlc/ByILIPYLwc/4v+IYvoYY4mGxxzDD8PcIzkXTunHjpqZ4PL8BxvILnWFiTqAAAAAASUVORK5CYII=",
      position: location.latLng,
    })
    .then(marker => {
      this.marker = marker;
     // this.marker = true;
     this.does = false;
      this.hasAdded = false
      this.mapLoadComplete = true;
      //console.log('marker added')
      this.map.addCircle({
        'center': location.latLng,
        'radius': 3000,
        'strokeColor' : '#A0BAE7',
        'strokeWidth': 2,
        'visible': true,
        'fillColor' : '#a6cfff2c'
    }).then(circle =>{
      setTimeout(()=>{
        circle.setRadius(0)
        // this.startChecking()
          }, 1500)
    });
   })

  }

  })

})

}

}









//Change the pointer/marker to reflect changed position.
RefreshMap(address){
  // let centerBar = document.getElementById("onbar")
  // centerBar.style.display = 'none'
  var geocode = new google.maps.Geocoder;
  geocode.geocode( { 'address': address}, (results, status) => {
   if (status == 'OK') {
    var position = results[0].geometry.location;
    let matLatr = new LatLng(position.lat(), position.lng());
    this.map.animateCamera({
      target: matLatr,
      zoom: 15,
      tilt: 0,
      bearing: 0,
      duration: 1000
     }).then(distanceApart =>{
    // let centerBar = document.getElementById("onbar")
    // centerBar.style.display = 'block';
    //console.log(this.lat)

    this.lat = position.lat();
    this.lng = position.lng();
 
    this.canCheck = false
   // this.checkForDriversAroundUser()
  
   

     })
   } else {
    // alert('Geocode was not distanceApartcessful for the following reason: ' + status);
   }
   
   })



  
}


//recreate the map class to clear previous markers and positions
Reset(){
  // let centerBar = document.getElementById("onbar")
  // centerBar.style.display = 'none'
  this.map.moveCamera({
    target: this.location.latLng,
    zoom: 14,
    tilt: 0,
    bearing: 0,
   }).then(distanceApart =>{
    //console.log('camera done')
     this.lat = this.location.latLng.lat
     this.lng = this.location.latLng.lng


      if (this.hasCompleted){
     //this.showDriversOnMap();
     }
    
     //console.log(this.lat, this.lng)
    //  let centerBar = document.getElementById("onbar")
    //  centerBar.style.display = 'block'
     this.hasRequested = false;
     this.car_notificationIds = []
     this.isDriverAvailable = false;
    this.map.addMarker({
      title: '',
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMhSURBVGhD7ZbLaxNRFIejoH+BulJELba6UnRdFyalYlKtfWBSXTSPUnAjiAoFKVK1C0kmKW7cuBOfuKpJF1IfFcxMW3Xhzn+gFSw2leZOwLmek5xgmx6bSUydW5gffDT0nnPnm8m9N+Nx48ZN42NNnNljpQPPrYw/VyLwwnp56iANqx2S/y4zAbkSuIkFK92+m8rUDT75SvkycBPPqEzdWGn/EiePwA0sUpm62fw3ABuWk0dweVGZurEyHc24YdfI4yaeCDRRmdrBk0hm/E9xyci0/0fxSN0s8m6cju/C4C5vMDLiC0U/eoPRn0jpc2TkRHBgB5WpGV8o0gMsgbDkgJvJnQzGuqhcrXjPR3tB0qqUZrC8ocg5alMjpWUTzTGyLFC72N7dv5PanQ9I3aqUtMFNanc+8EQ/M4LrApv6E7U7n1qWTxnsoXbnwwnagdqdDydnB2p3PpycHajd+XBydqB258PJ2YHanQ++QsCxOM9JcpRqIz3Urkbw1xjkxitlGcaxltrUiq8v2skIrwZqqFy9+ELhVlZ6FeFWKlcvbcGBFl76D1hD5c5m+IvcntALxzXdjCUNM64Z4sno5JzBSa9kdHJex9piD/SmsoVjOBdNu7FJZcVhTRfXgSmgABJyJZqel219MVYcwTGsWduHc4l3yay4pn0Qh+hyjcmwlFsT06IbpSsvzHE6fJmVR3CM61mLeAt0SSm3kEZ9SU3nD4D4G/4iPGcvDbHyCI5xPX9FN18njPx+0qkt8dl8E8h/Yydeh94rd1h5BMe4nvVAB3QhLftJ6uI9N2E1Lt4YY+URHON6qqEZ5iRp2Q+cFHlusmr0337AyiM4xvVURyyTlv3UuvbLDMYfs/IIjnE91YBv4BVp2Q9t4Jr3QKNBh3uzy3tJq7aMZfP7cP1xE/8P8MmjA+nUFzyLYUN31ruk6gKOT9iDHf/8O1CZsRnRAhNfLd6MLkz24vUAc+GcxbkN0UyX29jcn5HbUoZ5NJk1I/BOcxcEHgFT8PS+wlc/ByILIPYLwc/4v+IYvoYY4mGxxzDD8PcIzkXTunHjpqZ4PL8BxvILnWFiTqAAAAAASUVORK5CYII=",
      animation: 'DROP',
      position: this.location.latLng,
    })
    .then(marker => {
      this.marker = marker
      //console.log('marker added')
      this.hasAdded = false
       this.map.addCircle({
        'center': this.location.latLng,
        'radius': 3000,
        'strokeColor' : '#A0BAE7',
        'strokeWidth': 2,
        'visible': true,
        'fillColor' : '#a6cfff2c'
    }).then(circle=>{
      setTimeout(()=>{
        circle.setRadius(0)
        // this.startChecking()
          }, 1500)
    });
   })

  })
}





refreshForChangesRemove(){
//  this.car_notificationIds = []
  this.map.getMyLocation().then(location =>{
    this.AnimateToLoc(location)
   // alert('refreshed')
  })
}

                     
refreshForChanges(locations){
  this.map.clear().then(s=>{
    if (this.hasAdded){
      this.map.addMarker({
        title: '',
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMhSURBVGhD7ZbLaxNRFIejoH+BulJELba6UnRdFyalYlKtfWBSXTSPUnAjiAoFKVK1C0kmKW7cuBOfuKpJF1IfFcxMW3Xhzn+gFSw2leZOwLmek5xgmx6bSUydW5gffDT0nnPnm8m9N+Nx48ZN42NNnNljpQPPrYw/VyLwwnp56iANqx2S/y4zAbkSuIkFK92+m8rUDT75SvkycBPPqEzdWGn/EiePwA0sUpm62fw3ABuWk0dweVGZurEyHc24YdfI4yaeCDRRmdrBk0hm/E9xyci0/0fxSN0s8m6cju/C4C5vMDLiC0U/eoPRn0jpc2TkRHBgB5WpGV8o0gMsgbDkgJvJnQzGuqhcrXjPR3tB0qqUZrC8ocg5alMjpWUTzTGyLFC72N7dv5PanQ9I3aqUtMFNanc+8EQ/M4LrApv6E7U7n1qWTxnsoXbnwwnagdqdDydnB2p3PpycHajd+XBydqB258PJ2YHanQ++QsCxOM9JcpRqIz3Urkbw1xjkxitlGcaxltrUiq8v2skIrwZqqFy9+ELhVlZ6FeFWKlcvbcGBFl76D1hD5c5m+IvcntALxzXdjCUNM64Z4sno5JzBSa9kdHJex9piD/SmsoVjOBdNu7FJZcVhTRfXgSmgABJyJZqel219MVYcwTGsWduHc4l3yay4pn0Qh+hyjcmwlFsT06IbpSsvzHE6fJmVR3CM61mLeAt0SSm3kEZ9SU3nD4D4G/4iPGcvDbHyCI5xPX9FN18njPx+0qkt8dl8E8h/Yydeh94rd1h5BMe4nvVAB3QhLftJ6uI9N2E1Lt4YY+URHON6qqEZ5iRp2Q+cFHlusmr0337AyiM4xvVURyyTlv3UuvbLDMYfs/IIjnE91YBv4BVp2Q9t4Jr3QKNBh3uzy3tJq7aMZfP7cP1xE/8P8MmjA+nUFzyLYUN31ruk6gKOT9iDHf/8O1CZsRnRAhNfLd6MLkz24vUAc+GcxbkN0UyX29jcn5HbUoZ5NJk1I/BOcxcEHgFT8PS+wlc/ByILIPYLwc/4v+IYvoYY4mGxxzDD8PcIzkXTunHjpqZ4PL8BxvILnWFiTqAAAAAASUVORK5CYII=",
        animation: 'DROP',
        position: this.location.latLng,
      })
      .then(marker => {
        this.hasAdded = true
      })
  
    }
     
    })
}


hideMeme(){
  this.pool = false;
  this.smallcar = false;
  this.classic = false;
}


///Go through the databse and access the list of drivers available with thier informations.
showDriversOnMap()

 {
 
    console.log('showed Driver on map')
//  let allCars;
// this.myProf.getAllDrivers().on('value', driverSnapshot => {
//if (!this.hasRequested){
    this.hasAdded = true
     let id;
     let icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGPSURBVFhH7dfNKwVRHMbxK2HDXhQLSv4BLFjYs+APIHuJHRsihUiRjVjYUN5WUspGWdjYWJBY2XopC+W1+D41v9uY5rojd66J89Sn7pw5M/ObO9M5Z1IuLi5/KAc49pSrIQm5x7unSg1JSGxFFaMGrejGCKax6Nnw7GE/4BVW1CpmMY4+dKIJlShEpFRjC8+wE8dFxV9iEmUITQvuEHaCuF2gHp9ShCv4Oz7hxret33ocK1jCAuagOzXa9v/Lm54dHOIM1/A/YnOCAqSjd8d2PmII7Rj12uQUbRE8wI7p8dqCdG69q7qJN1j/BqQzANuhO7KD4yrK7wjWvxfpDMJ2aPCzA/JRlK5n/VVHOq6oAFeUuKK+krOi+mE7EjNO/daIPo+MI3rUuW8NmvuWEZz7prw2/9y3Dc19u/j23Kc04xbBzvlwjjqERitFraf0L4UdnEu2nppAKbKmBLXQu9aFYejx2MpzHZlWni+wC2upM4MxaOXZgUZUIPLKMxf5Xx8OP4kGw8R997m4uGRPKvUByOyoCF7iIiwAAAAASUVORK5CYII=';
     this.hideMeme();
  this.myProf.getAllDrivers().on('value', driverSnapshot => {
   // 
   this.car_notificationIds = [];
    this.started = true
    this.tricycleStance = 'none'
    this.executiveStance = 'none'
    this.standardStance = 'none'
    //if (this.hasShow){
      this.hideMeme();
      this.hasShow = false;
      console.log('meme hidden')
   // }
   
        
    driverSnapshot.forEach( element => {
      this.checkDistanceApart()
   let end;
   let begin = new google.maps.LatLng(element.val().driver_details[0], element.val().driver_details[1])
  
   if (!this.platform.is('cordova')){
    end = new google.maps.LatLng(5.488334, 7.5190356)
    }else{
    end = new google.maps.LatLng(this.lat, this.lng)
    }

    
    let distanceApart = google.maps.geometry.spherical.computeDistanceBetween(begin, end)
    console.log(distanceApart, this.settings.apart)

  if (distanceApart <= this.settings.apart) {
    this.isDriverAvailable = true;
    // this.canShowchoiceTab = true;
    // this.norideavailable = false;
    id = [element.val().driver_details[0], element.val().driver_details[1], element.val().driver_details[2], element.key, element.val().driver_details[3]];
      console.log(id)
    //let num = 1; let yum; let rum;
    
    if (element.val().driver_details[3] == 1){
      this.pool = true;
      console.log('Tricycle Car is available');
    
   
      icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKqSURBVFhH7dhLyA1hHMfxk9xzD6Uk5FIKRXYUYoWk5LqRW9RLIixYKIkNC4UVuZaVYoOkxALJwnXDRhS5y13C93ucp57GnPGec2be901+9emc+c+8c/7nzMwzz7ylfyHdMQrTsQArsQFbsQubsRbLMRcTMQSdkHvm4wl+VvENrxO1pGsYgVzSC59xBWswGxMwGL3RAXG6oi+Gw19qITbhKc4hl4yG33Rmean+HMCj328bT2hqRnmptnSrvJr9qLupYVgCf35Tb1Or8B3uzySbmoLF6FFeysggfIRN+OpyPU1NhQ2dRjsLJG5qKdynrlrIildZ2Fgu19qU27+FV5snfUjc1DHEnxMf5j+yCPHGLtfS1EA8xgP0sxAlbuoE4s/piapJ/lK1NOWOb+M5wnkUJ6upzF/K0fcLwsZxU1swLcNFZG13BmlN3bTwt4zHNvgH3kZCU3kITXkB+N5bUn8Lzc0teAXeQ9oH1OMrPMQ/sB01ZwD24DziHfsNL8Mdx/Wk97iAD1HNL3kS69AedSc+fM/gTME4Kwj1NN73jINkqIXD13Dipu5bqGQ1Qj2NA68ZilArpCkdxUa8iGpprsMT+UZUK6ypRvxvqrlarCkHwhXwNrQeWeNaizTlFMQ4NZ4Ep8eOP8eRtn3hTZ2C2Y0wkDpgzkIXvKrUYoU3NQ8jEzU9hDmM5LrCm/KJZk6iFnREuKnHCm/KkdoTPG2d900fx5L1wpo6Aq+yzvDJOF4XjMUYLMOdSk25NRXfu9SEEE/yeF3gTTjkLELd4SK3HIQ7dS7Ux0Il4+DUJsxWX+IQwkzC2OAbfIIz2VwTP5kk49jk4321uN6Tv8WyDzvgf1z2wpO/1eMhDeeMdqLVcwlxU861Wj2T8Q42dBfe/9pEfBB1XGroYaANp1T6BTcCoI1EzH45AAAAAElFTkSuQmCC'
    }

    if (element.val().driver_details[3] == 0){
      this.smallcar = true;
     
      console.log('Economy Car is available')
      //this.standardStance = yum++ + 'Car(s)';
     
      icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGPSURBVFhH7dfNKwVRHMbxK2HDXhQLSv4BLFjYs+APIHuJHRsihUiRjVjYUN5WUspGWdjYWJBY2XopC+W1+D41v9uY5rojd66J89Sn7pw5M/ObO9M5Z1IuLi5/KAc49pSrIQm5x7unSg1JSGxFFaMGrejGCKax6Nnw7GE/4BVW1CpmMY4+dKIJlShEpFRjC8+wE8dFxV9iEmUITQvuEHaCuF2gHp9ShCv4Oz7hxret33ocK1jCAuagOzXa9v/Lm54dHOIM1/A/YnOCAqSjd8d2PmII7Rj12uQUbRE8wI7p8dqCdG69q7qJN1j/BqQzANuhO7KD4yrK7wjWvxfpDMJ2aPCzA/JRlK5n/VVHOq6oAFeUuKK+krOi+mE7EjNO/daIPo+MI3rUuW8NmvuWEZz7prw2/9y3Dc19u/j23Kc04xbBzvlwjjqERitFraf0L4UdnEu2nppAKbKmBLXQu9aFYejx2MpzHZlWni+wC2upM4MxaOXZgUZUIPLKMxf5Xx8OP4kGw8R997m4uGRPKvUByOyoCF7iIiwAAAAASUVORK5CYII='     

    }

    if (element.val().driver_details[3] == 2){
      this.classic = true;
      
      //this.executiveStance = rum++ + 'Car(s)';
      console.log('Classic Car is available')
      icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALlSURBVFhHYxgFo2AUDFXw375eAYhdoNyBB//tGyv+OzT+h3IHHlDFQf+c69X+OTSc+mff+BdkGK3xP4fGx0C7pvy3aReEOgEV/LNv2INN40uL8v87VOOIxkc0U4CWNWCYgwsD7T3xP7SeDeoMCPhvPJMVKPEDqwag4Svkw/+nsZkRxHX8Tv9fWZRhmEEI/7NvioA6BQL+2TUZIis4q5v5/4pBDkID0FEblKL/94t64cRzpYP+f7WpgesB4TtGBf83K8egiGHDwOibB3UKBPxzbEpCVrBcLux/NocFiqNIxYc0kv9ncVj+bxN2wyqPjIEOOg51CgQAQ6AZWcFEMW9wFJDjqN92df8Xy4XAozGfyxqrOhRs3/AB6hQIAKafucgKaoFpAWZgl4g7qmYC+DYwmmB6YfgbWlRiw/886vmgzgGFUON6ZMkSblu4YdRw0AvzUqxqkfE/22ZZqHPAIbQFWRIUzDDDqOGgR6ZFWNUiY2DG0oU6BxxC+5ElkQ2jhoNAYtjUomD7ehuoc8AO2o4sCUrMMMOo4aC7xoVY1SLjf/b1JlDnYEZZAZWj7IlZCVa1yBgYZapQ54BDaBmyZCWvPdwwajjonVUlVrXI+J9rvRjUOSAHNfQjS3YACzOYYfNkglA0EsKgui+PywquP4Pd/P9fe/x1GzCG/vzzmMgOdQ7YQeXICmZJBYANAxWQv+zqUTQTg58DszmsLAOFNjY1yBjooDtQp0DAP7tGT2QFoFob3TFvLSv+XzPMxYmfoqWT7za1/6eI+/6fKuGLIo4NA5PMZqhTIOCfU6s4sgKQ5ciOeWZWilJYYsOgqDmokQTXA8KgSvmxKREJ2r6hEeoUBAAKPsGmmBjHIONVwKYKoTSDjIGNtJ/ALK8CdQYCwJqd9MTAEPwGDIhIqBMwASgtAeOzCei4Dspw0wGwpVjlGjuAdrQBG2UpwJCRgVpNWwC0dHD1OkBNUmAo7IZyR8EoGKmAgQEA5n1wdDK8G6EAAAAASUVORK5CYII='
    }

    

    // this.driverPrice = driverSnapshot.val().driver_details[4];
      this.car_notificationIds.push(id);
  
     console.log(this.car_notificationIds)

        this.canCheck = false;
     //   this.checkForDriversAroundUser();
        this.ready = true;

      
      
     // if (this.CARS.length > 5){
         //dont let the number of drivers to show exceed 5 to avoid map lag.
     
   //}
  
      }else{
        console.log(element.val())
        if (element.val() == null){
        console.log('no drivers around')
        }else{                     
          console.log('fuck it')                                                                    
        }
    //  this.canShowchoiceTab = false;
     // this.presentToast('No Drivers Close To You.')
     //this.isDriverAvailable = false;
      }
 
    return false;
    })


    this.myProf.getAllDrivers().on('child_added', driverSnapshot => {
      let end;
      let begin = new google.maps.LatLng(driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1])
     
      if (!this.platform.is('cordova')){
        end = new google.maps.LatLng(5.488334, 7.5190356)
        }else{
        end = new google.maps.LatLng(this.lat, this.lng)
        }
    
        
        let distanceApart = google.maps.geometry.spherical.computeDistanceBetween(begin, end)*2.8
        console.log(distanceApart, this.settings.apart)
    
      if (distanceApart <= this.settings.apart) {
      this.locations = [driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]];
      
      
      this.CARS = [
        {
          position: {lat: this.locations[0], lng: this.locations[1]},
          icon : icon
        },
      ];
     
     this.CARS.forEach((markerOptions) => {
        if (this.platform.is('cordova')){
        this.map.addMarker(markerOptions).then(marker => {
          this.carMarker.push(marker);
         
        });
      }
      });

    }

    })






  this.myProf.getAllDrivers().on('child_changed', driverSnapshot => {
       //  this.hideMeme();
         //dont let the number of drivers to show exceed 5 to avoid map lag.
         this.hasAdded = true;
         console.log(driverSnapshot.key)
        // this.checkForDriversAroundUser();
         //this.locations = [driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]];
         let latLng = new LatLng(driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1])
          console.log(latLng);
         for (let index = 0; index < this.carMarker.length; index++) {
          console.log(this.car_notificationIds[index][3], driverSnapshot.key);
          if (this.car_notificationIds[index][3] == driverSnapshot.key){
          this.car = this.carMarker[index];
          this.car.setPosition(latLng);
          console.log(this.carMarker[index])

          

        }
      }
          ////console.log(driverSnapshot.val().driver_details[2], this.location.length, driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1])
        })
      });


        this.myProf.getAllDrivers().on('child_removed', driverSnapshot => {
       //   this.hideMeme();
            this.hasAdded = true
          //  this.checkForDriversAroundUser();
           for (let index = 0; index < this.car_notificationIds.length; index++) {
            console.log(this.car_notificationIds[index][3], driverSnapshot.key);
            let total = this.car_notificationIds;
            let cars = this.carMarker;
            if (this.car_notificationIds[index][3] == driverSnapshot.key){
               console.log(total, this.car_notificationIds[index]);
               this.car_notificationIds.splice(index, 1);
               if (this.platform.is('cordova')) 
               this.carMarker[index].remove();
               console.log(this.car_notificationIds)
            }
          }
             
    
     })

 }

 presentToast(message) {
  let toast = this.toastCtrl.create({
    message: message,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}


checkDistanceApart(){
  let tem = true;
    
  //this.pop.presentLoader('');
 
for (let index = 0; index < this.car_notificationIds.length; index++) {
  const element = this.car_notificationIds[index];
   
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
  //this.pop.hideLoader()
  tem = false;
  }
  console.log(element[4]);

  if (element[4] == 0){
    
    console.log(distanceApart);
    if (distanceApart < 60){
      this.standardStance = 1 + ' min';
      
    }else if (distanceApart > 60){
      let v = distanceApart/60;
      distanceApart = v + 1;
      this.standardStance = Math.round(distanceApart) + ' mins';
     
    }
    continue
  }

  if (element[4] == 1){
    
    console.log(distanceApart);
    if (distanceApart < 60){
      this.tricycleStance = 1 + ' min';
      
    }else if (distanceApart > 60){
      let v = distanceApart/60;
      distanceApart = v + 1;
      this.executiveStance = Math.round(distanceApart) + ' mins';
      
    }
    continue
  }

  if (element[4] == 2){
    
    console.log(distanceApart);
    if (distanceApart < 60){
      this.executiveStance = 1 + ' min';
    
    }else if (distanceApart > 60){
      let v = distanceApart/60;
      distanceApart = v + 1;
      this.executiveStance = Math.round(distanceApart) + ' mins';
    }
   continue
  }
  break
}
 }
}



//Show distance between driver and User in the map
  setMarkers(uid)
  {

    let myIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKMSURBVFhH7ddNiE5RHMfxZyJvY+ElCyWlyWysNAt2lBopSkpSUsrClEiUKKXYoJnFkCiZmoUkskJ5L1Fq8ppCGgmFBVJe8jbz/d3u//a/x7mj7jNPV5lffeo5b8+cmXvOPWdqI/nfMg27MDspVZy9GMBTjFdFlZmHn9CEOlUxXJlc0lFoMprUorQuNAl/zSjswUfoCxvpHTajMPsQG9hIG/BHtOA+ITZA9GdfgbYC2kW+/xE8CerMNVxPP7/CaOQyF+Gg21jryhcQSzu+wvodQhOWujrzHGMwx9UtQS6r4Qd9hwYoPbD6g9ju7MZnWLtNxHIf1ianYbkL1R1OSi76Uj/oGCwT8RK+PaYXfiLKDvg+LzAOygGo7nFScjkOP2g+fG7At8d0IIzePWG/i9Cj3ZaWtR6bkeUMrPN7hL9h2cnorxrrG9ImyHIF1nBVFUHKTkZ5g1h/bzGy9MEaTqoiSD2TeYZYf28VsjyANWj3hKlnMo8Q6++tQZabsIazqghSz2S0g2L9veXIch7W8FAVQcpORhvBvxCLLESWE7AGbTWdrj5lJzMTYb/fuAO/TmchSzf8gPXwuQXfHrMRYVbC9/mFZVA0edXplpDLJvhBWnS6UigLYJemobxGK3z8USJ6hVi0a1V3OSm5aJ/7QbIVely2AHWqz4CPTvtLsDF+QlMQ3gS0NhUdCR+gOv2cXGLP9gt03Fs59hiUCbArgdiEulyd+QEt1nVpWY8tt14s9xAONnpMOnFPFfC7Ud6i6NFqAt/Sz+cQjQ61oS5Yw00XqxYUZjp2QhfrMvzj0udYH9E6mYqGZSz0wtRE+qETu7JsgSail5peB5VGV1ctzv1J6R9I5f/WjqTBqdUGAY1g4DFzQ5RkAAAAAElFTkSuQmCC'
    let driver;
    let client;

    let r = this.map.addMarker({
      title: '',
      icon:  myIcon,
      animation: 'DROP',
      position: {
        lat: this.D_lat,
        lng: this.D_lng
      }
    }).then((marker)=>{
      driver = marker
    })

    this.map.getMyLocation().then(location => {
      let f = this.map.addMarker({
        title: '',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/0lEQVR4Xu2aZ+i3UxjHP4+9iYx4ISSREdlblJHx4OnJ5gXZJUKRUBQhygjJlpGV7K3M7C3Ze2Uke/bRuet0+41zj9+5X/zuU/83v/91zvle33Nd17mu69wzmPIxY8r1pyegt4ApZ6B3gSk3gD4I9i7Qu8CUM9ClC6wDbAMsDnwG3AW8m/s8uiBgSeBKYIeSsn8DlwJHAb/lIiI3AYsCTwGrjlDwHmBHQEImPnITcCFwWIJWhwCXJMg1FslJwILAN8B8CahfA9ZIkGsskpOAjYEnKiBeBPixgnwt0ZwEGPEfqIByaeCrCvK1RHMSsALwXiLK78P1+E+ifG2xnAQI8llg3QS0FwOHJsg1FslNwCbAo8BcI5AbKA2AXzTWLmGB3AQcCJwFLDYC2/uA1+D9Cfgbi+QiYE7gCmDfRMT6/nHA2YnytcVyEXA6cEINlLsBt9WYlzwlBwFG/7eD33uyKXsWcp8CKwK/J2tUUTAFTMUl/yd+CnAy8AdwE7B3woJXA/sFuV2B2xPm1BLJQYDJj0nQfcBzwIkJSPcEzgGWDXHg2IQ5tURyEPACsDZwEfBdBQIsmjYDromsoZaSoyblIOAlYC3AStAML9UCvAq3AK4D9mld87BgT8CkmI3W7S2gd4EpjwFegeb+7wCzKgTBzwEbqB+GKnIi3pojCMbAT6tAwA0T0bi06KQJmCdcZVsB64VeQFwJfgR8DawGzB9h8/TtHTwZukjmEhMZkyLAR4/Dgd0BW+HDxpHABUBxUwyT0w2uBWyUfNImE20TYOFyLrBzCaQKPA5sCKwU/W8YAY8AdpElMm6eWBRdBpwEfNsGEW0SYLZmL3+BAEzzvjwUQG+G3+4Ftk0gwFrAGGBnePtQQPmSZF/BYbfIourhpiS0RcDBwTwLcKa7VnR/lgBWJSCeruWcGlWTVpd7ATc3IaENAjTTZ4KpqqCgLHoGjSYEFOtpCdcH6/gV2AB4pS4JbRBwB7BTePQw2nsyw0YbBLi2VaJxQpfQDbbuggDL26WC8l53Xlv6fTG8843u8fDhc7uEGLAHcGNp7szS3F2AZYKMbTMfU22le60mjyYW8AGw/IidDF6eeDy8yuKO0LBbwBMtB7gzgOPHaGb7TVzJowkBVwE+X2mORn4jfWwBBsLnS0g2D6Y7R/h9EAFvhOKpHECPAA6I1vOJ3X09+eLJbX/gy2TtExuU49bzo4aDgJcBHz5+GjNBU7ZL7Gk5z4aH7TLnqoikjEt2tgQeDDHgzuCG43AO/H8TCygWXC5EYT91eRqYDXxcC03apDjf+Dmk10WekbZCJNUGAS6nG9wNLBSetH3QOH/EdVgZKLApYIe5iPh+RmN1qQXUHm0RIAD7fkbuVQKaX8Kjxi3AQ8APA1AeHfzYgGfhEw+xrR4+lzEzjD+YMND5mxbXaLRJgEDmBY4BbGPHVd9fwOvAi8BbocY3WN0aiiVTaE9SdzLjU/H1gSVK2vnBxHnAmQmxJomYtgkoNtUV9FX/NgKKqJ8EqiTkK5E5hleo6fUgS6qz7n9zJkVADMiujlHblHVNYOVw0nMPQG0WaS/A7tGrIcU245vYU3kOAgadjvsuHKpFewZ+OmeO7+lO/KuQcqCpbT4tTCwyw8eClbSwZLUlurKAAqW5uwmQ97jJUfbRNQHZFS5v2BPQ+RF0DKC3gI4PoPPtewvo/Ag6BtBbQMcH0Pn2/wLJ+fdBzNOruQAAAABJRU5ErkJggg==',
        animation: 'DROP',
        position: {
          lat: location.latLng.lat,
          lng: location.latLng.lng
        }
      }).then((marker)=>{
        client = marker
      })
    })


    
        this.detectUserChange = interval(1500).subscribe(() => {
          if (this.stopMovingUsertoDriver){
          this.detectUserChange.unsubscribe()
          }else{
            this.map.getMyLocation().then(location =>{
            this.Measure(this.D_lat, this.D_lng, this.lat, this.lng)
            if (!this.hasCompleted)
            this.myProf.UpdateUserLocation(location.latLng.lat, location.latLng.lng, uid)
            if (client != null)
            client.setPosition(new LatLng(location.latLng.lat, location.latLng.lng))
            if (driver != null)
            driver.setPosition(new LatLng(this.D_lat, this.D_lng))
            })
          }
        })
  
    
  }




  //Show distance between driver and User in the map
  setMarkersDestination(lat, lng)
  {

    let myIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA9UlEQVR4Xu3ZQQrDMAwF0eb+h253bRKIMWQcKLyujaJ+rBmBt9f93/tUYrtf8rkKRbMCcAOOCRS36rEZKJo9j8BjzU9+aPgfBTCZ4uiYGxCEuLKEERiliwHB3cOAIMSVJTAAAwYJgGAwfCAYhLiyBAiCIAheJ8ACAX1YIAhxZQkWYAEWYIHLBGgwwK+nMU9jnsYOCRRcCSZzrkTRLAZgAAZgwD6BgitzBAtOFc2CIAiCIAiC4C6BAqwB3+dKFM2yAAuwAAuwAAv8EijMMuew4FTRLA3SIA3SIA3SIA1+EyjUGhh+rkTRrD3AHmAPsAfYA/51D/gA8LFAQcP3ZkMAAAAASUVORK5CYII='
    let client;

    let flag = this.map.addMarker({
      title: '',
      icon:  myIcon,
      animation: 'DROP',
      position: {
        lat: lat,
        lng: lng
      }
    })

   
    let f = this.map.addMarker({
      title: '',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/0lEQVR4Xu2aZ+i3UxjHP4+9iYx4ISSREdlblJHx4OnJ5gXZJUKRUBQhygjJlpGV7K3M7C3Ze2Uke/bRuet0+41zj9+5X/zuU/83v/91zvle33Nd17mu69wzmPIxY8r1pyegt4ApZ6B3gSk3gD4I9i7Qu8CUM9ClC6wDbAMsDnwG3AW8m/s8uiBgSeBKYIeSsn8DlwJHAb/lIiI3AYsCTwGrjlDwHmBHQEImPnITcCFwWIJWhwCXJMg1FslJwILAN8B8CahfA9ZIkGsskpOAjYEnKiBeBPixgnwt0ZwEGPEfqIByaeCrCvK1RHMSsALwXiLK78P1+E+ifG2xnAQI8llg3QS0FwOHJsg1FslNwCbAo8BcI5AbKA2AXzTWLmGB3AQcCJwFLDYC2/uA1+D9Cfgbi+QiYE7gCmDfRMT6/nHA2YnytcVyEXA6cEINlLsBt9WYlzwlBwFG/7eD33uyKXsWcp8CKwK/J2tUUTAFTMUl/yd+CnAy8AdwE7B3woJXA/sFuV2B2xPm1BLJQYDJj0nQfcBzwIkJSPcEzgGWDXHg2IQ5tURyEPACsDZwEfBdBQIsmjYDromsoZaSoyblIOAlYC3AStAML9UCvAq3AK4D9mld87BgT8CkmI3W7S2gd4EpjwFegeb+7wCzKgTBzwEbqB+GKnIi3pojCMbAT6tAwA0T0bi06KQJmCdcZVsB64VeQFwJfgR8DawGzB9h8/TtHTwZukjmEhMZkyLAR4/Dgd0BW+HDxpHABUBxUwyT0w2uBWyUfNImE20TYOFyLrBzCaQKPA5sCKwU/W8YAY8AdpElMm6eWBRdBpwEfNsGEW0SYLZmL3+BAEzzvjwUQG+G3+4Ftk0gwFrAGGBnePtQQPmSZF/BYbfIourhpiS0RcDBwTwLcKa7VnR/lgBWJSCeruWcGlWTVpd7ATc3IaENAjTTZ4KpqqCgLHoGjSYEFOtpCdcH6/gV2AB4pS4JbRBwB7BTePQw2nsyw0YbBLi2VaJxQpfQDbbuggDL26WC8l53Xlv6fTG8843u8fDhc7uEGLAHcGNp7szS3F2AZYKMbTMfU22le60mjyYW8AGw/IidDF6eeDy8yuKO0LBbwBMtB7gzgOPHaGb7TVzJowkBVwE+X2mORn4jfWwBBsLnS0g2D6Y7R/h9EAFvhOKpHECPAA6I1vOJ3X09+eLJbX/gy2TtExuU49bzo4aDgJcBHz5+GjNBU7ZL7Gk5z4aH7TLnqoikjEt2tgQeDDHgzuCG43AO/H8TCygWXC5EYT91eRqYDXxcC03apDjf+Dmk10WekbZCJNUGAS6nG9wNLBSetH3QOH/EdVgZKLApYIe5iPh+RmN1qQXUHm0RIAD7fkbuVQKaX8Kjxi3AQ8APA1AeHfzYgGfhEw+xrR4+lzEzjD+YMND5mxbXaLRJgEDmBY4BbGPHVd9fwOvAi8BbocY3WN0aiiVTaE9SdzLjU/H1gSVK2vnBxHnAmQmxJomYtgkoNtUV9FX/NgKKqJ8EqiTkK5E5hleo6fUgS6qz7n9zJkVADMiujlHblHVNYOVw0nMPQG0WaS/A7tGrIcU245vYU3kOAgadjvsuHKpFewZ+OmeO7+lO/KuQcqCpbT4tTCwyw8eClbSwZLUlurKAAqW5uwmQ97jJUfbRNQHZFS5v2BPQ+RF0DKC3gI4PoPPtewvo/Ag6BtBbQMcH0Pn2/wLJ+fdBzNOruQAAAABJRU5ErkJggg==',
      animation: 'DROP',
      position: {
        lat: this.lat,
        lng: this.lng
      }
    }).then((marker)=>{
      client = marker
    })
  


    this.detectCarChange = interval(1500).subscribe(() => {
      if (this.stopMovingUserDestination){
      this.detectCarChange.unsubscribe()
      }else{
        this.map.getMyLocation().then(location => {
        this.Measure(lat, lng, this.lat, this.lng)
        if (client != null)
        client.setPosition(new LatLng(location.latLng.lat, location.latLng.lng))
        // this.driver.setPosition(new LatLng(this.D_lat, this.D_lng))
        console.log('gfhuhufeiyfeihfeidw')
        })
      }
    })



    
  }


  Measure(lat, lng, lat2, lng2){
    if (this.canMess){
    let arrayOfLatLng = [ new LatLng(lat, lng), new LatLng(lat2, lng2)];

    let bounds = new LatLngBounds(arrayOfLatLng);

    let center = bounds.getCenter();

    var mapElement = document.getElementById('map');
    var mapDimensions = { 
        height: mapElement.offsetHeight,
        width: mapElement.offsetWidth
    };

   
    var zoom = this.getBoundsZoomLevel( bounds, mapDimensions );
      
    this.map.animateCamera({
            target: center,
            zoom: zoom,
            duration: 500
          }).then(()=>{
            
           this.isNavigate = true;
         
          })  

        }

  }



  getBoundsZoomLevel(bounds, mapDim) {
    
    var WORLD_DIM = { height: 256/2.05, width: 256/2.05 };
    var ZOOM_MAX = 14;

  
    
        var ne = bounds.northeast;
        var sw = bounds.southwest;
    
        var latFraction = (this.latRad(ne.lat) - this.latRad(sw.lat)) / Math.PI;
    
        var lngDiff = ne.lng - sw.lng;
        var lngFraction = ((lngDiff < 0) ? (lngDiff + 360*1.16) : lngDiff) / 360*1.16;
    
        var latZoom = this.zoom(mapDim.height, WORLD_DIM.height, latFraction);
        var lngZoom = this.zoom(mapDim.width, WORLD_DIM.width, lngFraction);
    
        return Math.min(latZoom, lngZoom, ZOOM_MAX);
    }
    
    
     latRad(lat) {
    
      var sin = Math.sin(lat * Math.PI / 180);
      var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
      return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    }
    
     zoom(mapPx, worldPx, fraction) {
      return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
    }

  
  
}





