import { Component } from '@angular/core';
import { NavController, AlertController, ModalController, ActionSheetController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';
import { IonicPage } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { LanguageProvider } from '../../providers/language/language';
import firebase from 'firebase/app';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile:any;
  public birthDate:string;
  public phoneNumber: any;
  public work: any;
  public home: any;
  public name: any;
  public pic: any;
  public email: any;
  public captureDataUrl: any;
  constructor(public navCtrl: NavController, public lp: LanguageProvider, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController, private pop: PopUpProvider, private camera: Camera, public alertCtrl: AlertController, 
    public ph: ProfileProvider, public authProvider: AuthProvider) {
      ph.isHome = false;
    }

  ionViewDidEnter() {
   // this.pop.presentLoader('')
    this.ph.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.phoneNumber = userProfileSnapshot.val().phoneNumber;
      this.pic = userProfileSnapshot.val().picture;
      this.home = userProfileSnapshot.val().Home;
      this.name = userProfileSnapshot.val().name;
      this.work = userProfileSnapshot.val().Work;
      this.email = userProfileSnapshot.val().email;
   // this.pop.hideLoader()
    });
  }

  remove(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }



choosePic() {
  let actionSheet = this.actionSheetCtrl.create({
    title: this.lp.translate()[0].choosefrom,
    buttons: [
      {
        text: this.lp.translate()[0].camera,
        icon: 'ios-camera',
        handler: () => {
          this.changePic()
        }
      },{
        text: this.lp.translate()[0].file,
        icon: 'ios-folder',
        handler: () => {
         this.changePicFromFile()
        }
      },{
        text: this.lp.translate()[0].cancel,
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}


  changePic() {
   
    const cameraOptions: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
      
      this.processProfilePicture(this.captureDataUrl)
     
    })

  }




  changePicFromFile() {

    const cameraOptions: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 10,
      encodingType: this.camera.EncodingType.PNG,
    };
   
    this.camera.getPicture(cameraOptions).then((imageData) => {
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
      
      this.processProfilePicture(this.captureDataUrl)
     
    })
  }



  processProfilePicture(captureData) {
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);
  this.pop.presentLoader('Processing image..')
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`userPictures/${filename}.jpg`);
   
    imageRef.putString(captureData, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
      imageRef.getDownloadURL().then(url => {
        //console.log(url)
       this.ph.UpdatePhoto(url).then( success =>{
      //  console.log(url)
      this.pop.hideLoader();
          //console.log("done")
          //this.profileUploaded = true

          this.pop.presentToast(this.lp.translate()[0].pictureset)
      
    }).catch( error =>{ alert(error)});
      }).catch( error =>{ alert(error)});
    }).catch( error =>{ alert(error)});
  }


  updateNumber(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].phone,
      inputs: [
        {
         
          value: this.userProfile.phoneNumber
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].cancel,
        },
        {
          text: this.lp.translate()[0].accept,
          handler: data => {
            console.log(data)
            this.ph.UpdateNumbers(data);
          }
        }
      ]
    });
    alert.present();
  }


  updateName(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].name,
      inputs: [
        {
         
          value: this.userProfile.name
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].cancel,
        },
        {
          text: this.lp.translate()[0].accept,
          handler: data => {
            console.log(data)
            this.ph.updateName(data);
          }
        }
      ]
    });
    alert.present();
  }


  updateEmail(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].email,
      inputs: [
        {
         
          value: this.lp.translate()[0].email
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].cancel,
        },
        {
          text: this.lp.translate()[0].accept,
          handler: data => {
            console.log(data)
            this.ph.updateEmail(data);
          }
        }
      ]
    });
    alert.present();
  }




  updateHome(){
    let modal = this.modalCtrl.create('AutocompletePage');
    modal.onDidDismiss(data => {
    if (data != null){
      this.ph.UpdateHome(data);
      this.ph.home = true;
    }
  })

    modal.present()
    
  }


  updateWork(){
    let modal = this.modalCtrl.create('AutocompletePage');
    modal.onDidDismiss(data => {
    if (data != null){
      this.ph.UpdateWork(data);
      this.ph.work = true;
    }
  })
  modal.present()
  }




  logOut(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].error,
      buttons: [
        {
          text: this.lp.translate()[0].cancel,
        },
        {
          text: this.lp.translate()[0].accept,
          handler: data => {
           this.remove()
          }
        }
      ]
    });
    alert.present();
  }

}
