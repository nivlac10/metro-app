import { Component } from '@angular/core';
import {
  Loading,
  Platform,
  LoadingController, 
  NavController,
  AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';
import { IonicPage } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
//import { Diagnostic } from '@ionic-native/diagnostic';
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  loading: Loading;
  public initState: boolean =  false;

  constructor(public navCtrl: NavController, public lp: LanguageProvider, public settings: SettingsProvider,  public platform: Platform, public menu: MenuController, public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, public authProvider: AuthProvider, public ph: ProfileProvider,
    public formBuilder: FormBuilder) {
      menu.swipeEnable(false, 'menu1');
      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });

      if (this.initState){
        this.platform.registerBackButtonAction(()=>this.platform.exitApp());
        }else{
        this.platform.registerBackButtonAction(()=>{
          this.initState = false;
        });
        }

  }

  ionViewDidLoad(){
  //this.checkForGPS()
  this.presentRouteLoader('')
 }

  loginUser(): void {
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then( authData => {
        this.loading.dismiss().then( () => {
          this.ph.getUserProfile().on('value', userProfileSnapshot => {
             let phone = userProfileSnapshot.val().phoneNumber;
             if (phone == null){
              this.navCtrl.setRoot('MoreInfoPage');
             }else{
              this.navCtrl.setRoot('HomePage');
             }

            })
            
        });
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: this.lp.translate()[0].i8,
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }


  goToSignup(): void {
    this.navCtrl.setRoot('SplashPage');
  }

  goToResetPassword(): void {
    this.navCtrl.setRoot('ResetPasswordPage');
  }


  showLogin(){
    this.initState = true
    this.presentRouteLoader('')
  }

  
presentRouteLoader(message) {
  let loading = this.loadingCtrl.create({
    content: message
  });

  loading.present();

  let myTimeout = setTimeout(() => {
    loading.dismiss();
    clearTimeout(myTimeout)
    
  }, 600);
}


}
