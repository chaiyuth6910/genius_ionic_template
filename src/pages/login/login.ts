import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';
import { AlertController } from 'ionic-angular'
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData : any;
  userData = {"username": "","password": ""};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: AuthServiceProvider,
    private menu:MenuController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

   /* ปิดการแสดงเมนูด้านข้าง*/
   ionViewDidEnter(){
    this.menu.swipeEnable(false,'menu_left');
    this.menu.swipeEnable(false,'menu_right');
  }

  /* เปิดการแสดงเมนู */
  ionViewWillLeave() {
    this.menu.swipeEnable(true,'menu_left');
    this.menu.swipeEnable(true,'menu_right');
  }

  login() {
    // Api connections
    this.authService.postData(this.userData,'?action=login').then((result)=>{
      this.responseData = result;
      if (this.responseData.userData) {
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.navCtrl.setRoot('TabsPage');
      } else {
        let alert = this.alertCtrl.create({
          title: "Login fail",
          subTitle: 'Login fail please check again !!!',
          buttons: ['Dismiss']
        });
        alert.present();
        console.log(result);
      }
    }, (err) => {
      // Error log
    });
  }

  signup(){
    this.navCtrl.push('SignupPage');
  }

  gotoDashboard(){
    this.navCtrl.setRoot('TabsPage');
  }

}
