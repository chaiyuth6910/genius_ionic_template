import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  userDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider,  public app: App) {
    
    const data = JSON.parse(localStorage.getItem('userData'));
    console.log(data);

    if(data == null){
      this.userDetails = {fullname:"Guest"};
    }else{
      this.userDetails = data.userData;
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  signin(){
    this.app.getRootNav().push('LoginPage');
  }

}
