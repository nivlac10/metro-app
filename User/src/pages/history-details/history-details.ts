import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { IonicPage } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';
declare var google;
@IonicPage()

@Component({
  selector: 'page-history-details',
  templateUrl: 'history-details.html',
})
export class HistoryDetailsPage {
  public currentEvent: any = {};
  
  constructor(public navCtrl: NavController, public lp: LanguageProvider, public navParams: NavParams, public settings: SettingsProvider,
    public eventProvider: EventProvider) {}

  ionViewDidEnter(){
      console.log(this.navParams.get('eventId'))
    this.eventProvider.getEventDetail(this.navParams.get('eventId'))
    .on('value', eventSnapshot => {
      this.currentEvent = eventSnapshot.val();
      this.currentEvent.id = eventSnapshot.key;
      //this.LoadMap(this.currentEvent.location, this.currentEvent.destination);
      this.GetRoute(this.currentEvent.location, this.currentEvent.destination);
    });
  }




GetRoute(location, destination) {
  var source, destination;
  var directionsService = new google.maps.DirectionsService();
  let directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });
  var mumbai = new google.maps.LatLng(18.9750, 72.8258);
  var mapOptions = {
      zoom: 7,
      center: mumbai
  };
  let map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('dvPanel'));

  //*********DIRECTIONS AND ROUTE**********************//
  source = location;
  destination = destination;

  var request = {
      origin: source,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request,  (response, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
      }
  });

  //*********DISTANCE AND DURATION**********************//
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix({
      origins: [source],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
  },  (response, status) => {
      if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
          var distance = response.rows[0].elements[0].distance.text;
          var duration = response.rows[0].elements[0].duration.text;
          var dvDistance = document.getElementById("dvDistance");
           dvDistance.innerHTML = "";
          dvDistance.innerHTML += "Distance: " + distance + "<br />";
          dvDistance.innerHTML += "Duration:" + duration;

      } else {
          alert("Unable to find the distance via road.");
      }
  });
}

  
}
