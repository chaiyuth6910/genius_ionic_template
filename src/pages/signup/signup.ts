import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData : any;
  userData = {"username": "","password": "", "fullname": "","email": "","tel":"","user_type":"1"};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: AuthServiceProvider,
    private menu:MenuController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SignupPage');
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

 signup(){
  this.authService.postData(this.userData,'?action=signup').then((result)=>{
    this.responseData = result;
    if(this.responseData.userData){
      console.log(this.responseData);
      localStorage.setItem('userData',JSON.stringify(this.responseData));
      this.navCtrl.setRoot('TabsPage');
    }else{
      
      let alert = this.alertCtrl.create({
        title: "Invalid value",
        subTitle: 'Please fill value before',
        buttons: ['Dismiss']
      });
      alert.present();

      console.log(result);
    }
  }, (err) => {
    console.log(err);
  });
 }

  login(){
    this.navCtrl.push('LoginPage');
  }

  gotoDashboard(){
    this.navCtrl.setRoot('TabsPage');
  }

}
